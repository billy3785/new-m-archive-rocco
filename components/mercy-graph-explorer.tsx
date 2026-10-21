"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, ArrowRight, ExternalLink, FileText, GitBranch, Search, ShieldCheck } from "lucide-react";

type GraphEndpoint = {
  id: string;
  type?: string;
  label?: string;
  visibility_state?: string;
  year?: number | null;
  date_start?: string | null;
  date_precision?: string | null;
};

type GraphSearchResult = {
  id: string;
  result_kind: "fact" | "entity";
  year?: number | null;
  type?: string;
  label?: string;
  assertion?: string | null;
  date_start?: string | null;
  date_end?: string | null;
  date_precision?: string | null;
  confidence?: number | string | null;
  visibility_state?: string;
};

type EvidenceFact = {
  fact_id: string;
  year: number;
  fact_type: string;
  title: string;
  assertion: string;
  date_start?: string | null;
  date_precision?: string | null;
  confidence?: number | string | null;
  visibility_state: string;
};

type EvidenceSource = {
  factId: string;
  sourceItemId: string;
  authority?: string | null;
  sourceType?: string | null;
  locator?: string | null;
  url?: string | null;
  excerpt?: string | null;
};

type GraphEvidence = { facts: EvidenceFact[]; sources: EvidenceSource[] };

type GraphCoverage = {
  state: string;
  issues: string[];
  sourceFactsPresent: boolean;
  sourceSupportPresent: boolean;
  nonclaimsPresent: boolean;
  sourceBoundaryOverlayPresent?: boolean;
  sourceBoundaryOverlayState?: string | null;
};

type GraphConnection = {
  connectionId: string;
  subject: GraphEndpoint;
  predicate: string;
  object: GraphEndpoint;
  state: string;
  confidence?: number | string | null;
  sourceSupport: unknown;
  sourceFactIds: string[];
  nonclaims: string[];
  sourceBoundaries?: string[];
  sourceBoundaryEvidence?: Array<{ fact_id?: string; ordinal?: number; source_item_id?: string; source_authority?: string; source_type?: string }>;
  coverage?: GraphCoverage;
  evidence: GraphEvidence;
};

type Admission = {
  qaStatus: string;
  qaId: string;
  databaseFingerprint: string;
  qaReceiptPath: string;
};

type SearchPayload = {
  results: GraphSearchResult[];
  resultCount: number;
  admission: Admission;
  authorityBoundary: string;
};

type EntityPayload = {
  entity: GraphEndpoint;
  connections: GraphConnection[];
  connectionCount: number;
  admission: Admission;
  authorityBoundary: string;
};

function confidenceLabel(value: GraphConnection["confidence"] | GraphSearchResult["confidence"]) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? `${Math.round(numeric * 100)}% confidence` : "confidence not stated";
}

function stateLabel(value: string | undefined) {
  return (value || "state not stated").replaceAll("_", " ");
}

function resultDate(result: GraphSearchResult) {
  if (!result.date_start) return result.year ? String(result.year) : "undated";
  return result.date_end && result.date_end !== result.date_start ? `${result.date_start} → ${result.date_end}` : result.date_start;
}

function endpointText(endpoint: GraphEndpoint) {
  return endpoint.label || endpoint.id;
}

export function MercyGraphExplorer() {
  const [query, setQuery] = useState("Sean Penn");
  const [results, setResults] = useState<GraphSearchResult[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [detail, setDetail] = useState<EntityPayload | null>(null);
  const [admission, setAdmission] = useState<Admission | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchGraph(event?: FormEvent) {
    event?.preventDefault();
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setError("Search for at least two letters so the private graph can find a bounded result set.");
      return;
    }
    setLoading(true);
    setError("");
    setDetail(null);
    setSelectedId("");
    try {
      const response = await fetch(`/api/mercy-graph?query=${encodeURIComponent(trimmed)}&limit=18`, { cache: "no-store" });
      const payload = (await response.json()) as SearchPayload & { error?: string };
      if (!response.ok) throw new Error(payload.error || "The private graph search is unavailable.");
      setResults(payload.results);
      setAdmission(payload.admission);
      if (!payload.results.length) setError("No retained graph result matched that search. That is a coverage boundary, not proof of absence.");
    } catch (caught) {
      setResults([]);
      setError(caught instanceof Error ? caught.message : "The private graph search is unavailable.");
    } finally {
      setLoading(false);
    }
  }

  async function selectResult(result: GraphSearchResult) {
    setSelectedId(result.id);
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/mercy-graph?entity_id=${encodeURIComponent(result.id)}&connection_limit=40`, { cache: "no-store" });
      const payload = (await response.json()) as EntityPayload & { error?: string };
      if (!response.ok) throw new Error(payload.error || "The selected graph result could not be opened.");
      setDetail(payload);
      setAdmission(payload.admission);
    } catch (caught) {
      setDetail(null);
      setError(caught instanceof Error ? caught.message : "The selected graph result could not be opened.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mercy-graph-explorer" aria-label="MERCY whole-archive graph explorer">
      <header className="mercy-graph-heading">
        <div>
          <p className="eyebrow">WHOLE-ARCHIVE GRAPH EXPLORER</p>
          <h2>Search, then follow the evidence.</h2>
          <p>Search the repaired 1958–2026 graph and open any returned fact or entity. Every link keeps its predicate, state, confidence, source facts, source bundles, nonclaims, and unresolved boundaries visible.</p>
        </div>
        <span className="mercy-graph-status"><ShieldCheck size={14} /> read-only · QA admitted</span>
      </header>

      <form className="mercy-graph-search" onSubmit={searchGraph}>
        <label htmlFor="mercy-graph-query"><Search size={16} /><span className="sr-only">Search the whole archive graph</span><input id="mercy-graph-query" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a person, work, event, place, or source wording" /></label>
        <button type="submit" disabled={loading}>{loading ? "Opening…" : "Search graph"}<ArrowRight size={15} /></button>
      </form>

      <div className="mercy-graph-boundary"><ShieldCheck size={15} /><span>This is a private derived read path. It does not write canonical authority, inventory, archive media, the filesystem, or the public network. A missing result or missing edge remains unresolved rather than becoming a negative claim.</span></div>

      {error ? <div className="mercy-graph-error" role="status"><AlertCircle size={15} />{error}</div> : null}

      <div className="mercy-graph-layout">
        <section className="mercy-graph-results" aria-label="Graph search results">
          <div className="mercy-block-heading"><h3>Search results</h3><span>{results.length ? `${results.length} shown` : "bounded whole-span search"}</span></div>
          {results.length ? <div className="mercy-graph-result-list">{results.map((result) => <button key={`${result.result_kind}-${result.id}`} type="button" className={selectedId === result.id ? "selected" : ""} onClick={() => selectResult(result)}><span className="mercy-graph-result-top"><em>{result.result_kind}</em><small>{resultDate(result)}</small></span><strong>{result.label || result.id}</strong><small>{result.type || "untyped"} · {stateLabel(result.visibility_state)}</small>{result.assertion ? <p>{result.assertion}</p> : null}</button>)}</div> : <p className="mercy-muted">Search a name or phrase to open the first bounded whole-archive traversal.</p>}
        </section>

        <section className="mercy-graph-detail" aria-label="Selected graph result">
          {detail ? <>
            <div className="mercy-graph-entity-heading"><div><p className="eyebrow">SELECTED NODE</p><h3>{endpointText(detail.entity)}</h3></div><span className="mercy-graph-type">{detail.entity.type || "unresolved"}</span></div>
            <p className="mercy-graph-identifiers">{detail.entity.id} · {stateLabel(detail.entity.visibility_state)}{detail.entity.year ? ` · ${detail.entity.year}` : ""}{detail.entity.date_start ? ` · ${detail.entity.date_start}` : ""}</p>
            <div className="mercy-detail-block"><div className="mercy-block-heading"><h3>Typed relationships</h3><span>{detail.connectionCount} shown · bounded at 40</span></div>{detail.connections.length ? <div className="mercy-connection-list">{detail.connections.map((connection) => <article className="mercy-graph-connection" key={connection.connectionId}><div className="mercy-connection-top"><span className="mercy-predicate"><GitBranch size={12} />{stateLabel(connection.predicate)}</span><span>{stateLabel(connection.state)} · {confidenceLabel(connection.confidence)}</span></div><strong>{endpointText(connection.subject)} <ArrowRight size={13} /> {endpointText(connection.object)}</strong><small className="mercy-graph-connection-id">{connection.connectionId}</small>{connection.coverage ? <div className={`mercy-graph-coverage ${connection.coverage.state === "evidence_bound" ? "bound" : "held"}`}><b>Evidence coverage</b><span>{stateLabel(connection.coverage.state)}{connection.coverage.issues.length ? ` · ${connection.coverage.issues.map(stateLabel).join(", ")}` : " · source facts, support, and nonclaims bound"}</span></div> : null}{connection.sourceBoundaries?.length ? <div className="mercy-graph-source-boundaries"><b>Source boundaries from retained bundles</b>{connection.sourceBoundaries.slice(0, 6).map((boundary) => <span key={boundary}><ShieldCheck size={12} />{boundary}</span>)}</div> : null}{connection.evidence.facts.length ? <div className="mercy-graph-evidence"><b>Source facts</b>{connection.evidence.facts.slice(0, 4).map((fact) => <span key={fact.fact_id}><FileText size={12} />{fact.title} · {fact.year} · {confidenceLabel(fact.confidence)}</span>)}</div> : null}{connection.evidence.sources.length ? <div className="mercy-graph-sources"><b>Retained source support</b>{connection.evidence.sources.slice(0, 4).map((source, index) => <div key={`${connection.connectionId}-${source.sourceItemId}-${index}`}><span>{source.authority || source.sourceType || "retained source"} · {source.sourceItemId}</span>{source.excerpt ? <p>{source.excerpt}</p> : null}{source.url ? <a href={source.url} target="_blank" rel="noreferrer">Open retained pointer <ExternalLink size={11} /></a> : null}</div>)}</div> : null}{connection.nonclaims.length ? <div className="mercy-graph-nonclaims"><b>What this link does not claim</b>{connection.nonclaims.slice(0, 4).map((nonclaim) => <span key={nonclaim}><AlertCircle size={12} />{nonclaim}</span>)}</div> : null}</article>)}</div> : <p className="mercy-muted">No relationship rows were materialized for this node. That is an explicit unresolved boundary, not proof that no relationship exists.</p>}</div>
          </> : <div className="mercy-graph-empty"><GitBranch size={26} /><h3>Open a result to traverse it</h3><p>The left side searches the entire admitted graph. Selecting a result brings the local relationship neighborhood and its evidence into view.</p></div>}
        </section>
      </div>

      {admission ? <footer className="mercy-graph-receipt"><ShieldCheck size={14} /><span>Admission: {admission.qaStatus} · QA {admission.qaId} · graph {admission.databaseFingerprint}</span></footer> : null}
    </section>
  );
}
