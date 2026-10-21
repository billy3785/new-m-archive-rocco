"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, CircleAlert, FileSearch, Filter, Network, Search, ShieldCheck } from "lucide-react";
import { mercyCandidateQueueMeta, mercyReaderCandidates, type MercyCandidate } from "@/lib/mercy-reader-candidates";

function candidateDateLabel(candidate: MercyCandidate) {
  if (!candidate.dateClaim) return "No date claim";
  return `${candidate.dateClaim.value} · ${candidate.dateClaim.precision} · ${candidate.dateClaim.scope}`;
}

export function MercyCandidateQueue() {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState("all");
  const [source, setSource] = useState("all");
  const [dateScope, setDateScope] = useState("all");
  const [selectedId, setSelectedId] = useState(mercyReaderCandidates[0]?.candidateId ?? "");

  const domains = useMemo(() => ["all", ...Array.from(new Set(mercyReaderCandidates.map((candidate) => candidate.domainLabel)))], []);
  const sources = useMemo(() => ["all", ...Array.from(new Set(mercyReaderCandidates.map((candidate) => candidate.adapterSourceId)))], []);
  const dateScopes = useMemo(() => ["all", ...Array.from(new Set(mercyReaderCandidates.map((candidate) => candidate.dateScope)))], []);
  const visibleCandidates = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return mercyReaderCandidates.filter((candidate) => {
      const matchesDomain = domain === "all" || candidate.domainLabel === domain;
      const matchesSource = source === "all" || candidate.adapterSourceId === source;
      const matchesDateScope = dateScope === "all" || candidate.dateScope === dateScope;
      const searchable = [candidate.domainLabel, candidate.adapterSourceId, candidate.sourceEvidenceId, candidate.subject, candidate.target, candidate.evidenceText, candidate.dateClaim?.value ?? ""].join(" ").toLowerCase();
      return matchesDomain && matchesSource && matchesDateScope && (!normalized || searchable.includes(normalized));
    });
  }, [dateScope, domain, query, source]);
  const selectedCandidate = visibleCandidates.find((candidate) => candidate.candidateId === selectedId) ?? visibleCandidates[0];

  return (
    <section className="mercy-candidate-queue" aria-label="MERCY candidate relationship review queue">
      <header className="mercy-queue-heading">
        <div><p className="eyebrow">CONNECTION REVIEW QUEUE · DERIVED ONLY</p><h2>21 candidate relationships to inspect</h2><p>These are source-scoped discovery leads from the QA-bound 2026 adapter wave. They are held outside the partition year and must not become canonical edges without curator disposition.</p></div>
        <div className="mercy-queue-qa"><ShieldCheck size={15} /> {mercyCandidateQueueMeta.qaChecksPassed}/12 QA checks passed</div>
      </header>

      <div className="mercy-queue-proof-strip">
        <div><strong>{mercyCandidateQueueMeta.candidateCount}</strong><span>candidate links</span></div>
        <div><strong>{mercyCandidateQueueMeta.heldAdapterObservationCount}</strong><span>held adapter observations</span></div>
        <div><strong>{mercyCandidateQueueMeta.representationObservationCount}</strong><span>representation observations</span></div>
        <div><strong>0</strong><span>authority writes</span></div>
      </div>

      <div className="mercy-queue-note"><AlertTriangle size={16} /><span>Every candidate retains its evidence text, date scope, source lane, and nonclaims. PostgreSQL timeout and online-research holds remain visible; neither is treated as absence.</span></div>

      <div className="mercy-queue-filters">
        <label className="mercy-search-box"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search candidate evidence" aria-label="Search candidate evidence" /></label>
        <label><span className="sr-only">Filter by domain</span><select value={domain} onChange={(event) => setDomain(event.target.value)} aria-label="Filter candidates by domain"><option value="all">All domains</option>{domains.slice(1).map((value) => <option key={value} value={value}>{value}</option>)}</select></label>
        <label><span className="sr-only">Filter by source</span><select value={source} onChange={(event) => setSource(event.target.value)} aria-label="Filter candidates by source"><option value="all">All source lanes</option>{sources.slice(1).map((value) => <option key={value} value={value}>{value}</option>)}</select></label>
        <label><span className="sr-only">Filter by date scope</span><select value={dateScope} onChange={(event) => setDateScope(event.target.value)} aria-label="Filter candidates by date scope"><option value="all">All date scopes</option>{dateScopes.slice(1).map((value) => <option key={value} value={value}>{value}</option>)}</select></label>
      </div>

      <div className="mercy-queue-layout">
        <section className="mercy-queue-list" aria-label="Candidate relationships">
          <div className="mercy-section-heading"><div><p className="eyebrow">SOURCE-SCOPED LEADS</p><h3>{visibleCandidates.length} shown</h3></div><Filter size={16} /></div>
          <div className="mercy-timeline-list">
            {visibleCandidates.length ? visibleCandidates.map((candidate) => (
              <button key={candidate.candidateId} type="button" className={`mercy-candidate-row ${selectedCandidate?.candidateId === candidate.candidateId ? "selected" : ""}`} onClick={() => setSelectedId(candidate.candidateId)}>
                <span className="mercy-candidate-row-top"><span>{candidate.domainLabel}</span><em>{Math.round(candidate.confidence * 100)}%</em></span>
                <strong>{candidate.evidenceText}</strong>
                <small>{candidate.dateClaim?.value ?? "No date"} · {candidate.adapterSourceId} · {candidate.state}</small>
              </button>
            )) : <p className="mercy-empty-state">No candidate matches those filters. An empty queue is a filter result, not proof that no relationships exist.</p>}
          </div>
        </section>

        <section className="mercy-candidate-detail" aria-label="Selected candidate detail">
          {selectedCandidate ? <>
            <div className="mercy-detail-kicker"><Network size={15} /> Candidate relationship · not canonical</div>
            <h3>{selectedCandidate.subject}</h3>
            <p className="mercy-candidate-target"><strong>{selectedCandidate.predicate}</strong> → {selectedCandidate.target}</p>
            <div className="mercy-fact-grid">
              <div><span>Candidate state</span><strong>{selectedCandidate.state.replaceAll("_", " ")}</strong><small>{selectedCandidate.dateScope.replaceAll("_", " ")}</small></div>
              <div><span>Date claim</span><strong>{candidateDateLabel(selectedCandidate)}</strong><small>date role remains source-scoped</small></div>
              <div><span>Confidence</span><strong>{Math.round(selectedCandidate.confidence * 100)}%</strong><small>{selectedCandidate.adapterSourceId}</small></div>
            </div>

            <div className="mercy-detail-block"><div className="mercy-block-heading"><h3>Evidence to inspect</h3><span>{selectedCandidate.sourceEvidenceId}</span></div><blockquote>{selectedCandidate.evidenceText}</blockquote><div className="mercy-source-row"><span>Partition: {selectedCandidate.partitionId} · {selectedCandidate.partitionObservedRows} observed rows</span><span>{selectedCandidate.partitionRepresentationObservations} representation observations</span></div></div>

            <div className="mercy-detail-block"><div className="mercy-block-heading"><h3>Why this remains held</h3><span>nonclaims</span></div><div className="mercy-candidate-nonclaims">{selectedCandidate.nonclaims.map((nonclaim) => <span key={nonclaim}><CircleAlert size={12} />{nonclaim}</span>)}</div></div>

            <div className="mercy-detail-block"><div className="mercy-block-heading"><h3>Source and representation context</h3><span>read-only observations</span></div><div className="mercy-candidate-context"><span><FileSearch size={13} /> Source lanes: {selectedCandidate.sourceLanes.join(", ")}</span><span><AlertTriangle size={13} /> Held sources: {selectedCandidate.heldSources.join(", ")}</span></div></div>

            <div className="mercy-candidate-boundary"><ShieldCheck size={15} /><p><strong>No case or authority write happens here.</strong> Use the evidence packet to decide whether a future curator action should keep, separate, or hold this relationship. The normalized candidate remains source-scoped until that explicit disposition.</p></div>
          </> : <p className="mercy-muted">No candidate is currently selected.</p>}
        </section>
      </div>
    </section>
  );
}
