"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  CircleAlert,
  ExternalLink,
  FileSearch,
  Link2,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  mercyConnections,
  mercyReaderMeta,
  mercyRepresentations,
  mercyTimeline,
  type MercyConnection,
  type MercyTimelineEvent,
} from "@/lib/mercy-reader-data";
import {
  mercyReaderYearHighlights,
  mercyReaderYearRepresentations,
  mercyReaderYears,
  type MercyYearHighlight,
} from "@/lib/mercy-reader-years";
import { MercyCandidateQueue } from "@/components/mercy-candidate-queue";
import { MercyResearchDesk } from "@/components/mercy-research-desk";

type CorrectionType = "connect" | "separate_identity" | "hold_relationship";
type SearchScope = "year" | "all";

const correctionOptions: Array<{ value: CorrectionType; label: string; detail: string }> = [
  { value: "connect", label: "Keep this link", detail: "The relationship is useful in this context." },
  { value: "separate_identity", label: "Keep them apart", detail: "This suggestion should not be treated as the same thing." },
  { value: "hold_relationship", label: "Hold for research", detail: "Keep the evidence visible, but do not settle the connection yet." },
];

function dateLabel(event: MercyTimelineEvent) {
  if (event.datePrecision === "year") return event.dateStart;
  if (event.datePrecision === "month") return new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(new Date(`${event.dateStart}T12:00:00`));
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(`${event.dateStart}T12:00:00`));
}

function confidenceLabel(value: number) {
  return `${Math.round(value * 100)}% confidence`;
}

function stateLabel(value: string) {
  if (value === "visible_working_canon_high_confidence") return "Working canon · high confidence";
  if (value === "visible_source_support") return "Source support";
  return value.replaceAll("_", " ");
}

function sourceLabel(event: MercyTimelineEvent) {
  return `${event.sourceCount} retained source ${event.sourceCount === 1 ? "item" : "items"} · cluster${event.sourceClusters.length === 1 ? "" : "s"} ${event.sourceClusters.join(", ")}`;
}

function highlightDateLabel(highlight: MercyYearHighlight) {
  if (!highlight.dateStart) return "Undated claim";
  if (highlight.datePrecision === "year") return highlight.dateStart;
  const parsed = new Date(`${highlight.dateStart}T12:00:00`);
  if (!Number.isNaN(parsed.getTime()) && highlight.datePrecision === "month") return new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(parsed);
  if (!Number.isNaN(parsed.getTime()) && highlight.datePrecision === "day") return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(parsed);
  return `${highlight.dateStart}${highlight.dateEnd && highlight.dateEnd !== highlight.dateStart ? ` → ${highlight.dateEnd}` : ""} · ${highlight.datePrecision}`;
}

export function MercyReader() {
  const [query, setQuery] = useState("");
  const [eventType, setEventType] = useState("all");
  const [searchScope, setSearchScope] = useState<SearchScope>("year");
  const [readerMode, setReaderMode] = useState<"calendar" | "candidates" | "research">("calendar");
  const [selectedYear, setSelectedYear] = useState(mercyReaderMeta.year);
  const [selectedFactId, setSelectedFactId] = useState(mercyTimeline[0].factId);
  const [selectedHighlightId, setSelectedHighlightId] = useState("");
  const [correction, setCorrection] = useState<MercyConnection | null>(null);
  const [correctionType, setCorrectionType] = useState<CorrectionType>("connect");
  const [correctionNote, setCorrectionNote] = useState("");
  const [correctionStatus, setCorrectionStatus] = useState("");
  const [savingCorrection, setSavingCorrection] = useState(false);

  const eventTypes = useMemo(() => ["all", ...Array.from(new Set(mercyTimeline.map((event) => event.eventType)))], []);
  const selectedYearSummary = mercyReaderYears.find((summary) => summary.year === selectedYear) ?? mercyReaderYears[0];
  const selectedYearHighlights = useMemo(() => mercyReaderYearHighlights.filter((highlight) => highlight.year === selectedYear), [selectedYear]);
  const normalizedQuery = query.trim().toLowerCase();
  const allYearHighlights = useMemo(() => {
    if (searchScope !== "all" || normalizedQuery.length < 2) return [];
    return mercyReaderYearHighlights.filter((highlight) => [highlight.year, highlight.title, highlight.factType, highlight.assertion, highlight.dateStart, highlight.dateEnd, ...highlight.sourceLanes].join(" ").toLowerCase().includes(normalizedQuery));
  }, [normalizedQuery, searchScope]);
  const visibleEvents = useMemo(() => {
    if (selectedYear !== mercyReaderMeta.year || searchScope !== "year") return [];
    return mercyTimeline.filter((event) => {
      const matchesType = eventType === "all" || event.eventType === eventType;
      const searchable = [event.title, event.place, event.eventType, event.assertion, event.sourceExcerpt, ...event.sourceClusters].join(" ").toLowerCase();
      return matchesType && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [eventType, normalizedQuery, searchScope, selectedYear]);
  const visibleHighlights = useMemo(() => {
    if (searchScope === "all") return allYearHighlights;
    return selectedYearHighlights.filter((highlight) => !normalizedQuery || [highlight.title, highlight.assertion, highlight.dateStart, ...highlight.sourceLanes].join(" ").toLowerCase().includes(normalizedQuery));
  }, [allYearHighlights, normalizedQuery, searchScope, selectedYearHighlights]);

  const selectedEvent = mercyTimeline.find((event) => event.factId === selectedFactId) ?? visibleEvents[0] ?? mercyTimeline[0];
  const selectedHighlight = visibleHighlights.find((highlight) => highlight.factId === selectedHighlightId) ?? visibleHighlights[0];
  const selectedHighlightYearSummary = mercyReaderYears.find((summary) => summary.year === selectedHighlight?.year) ?? selectedYearSummary;
  const selectedContextYear = selectedHighlight?.year ?? selectedYear;
  const selectedYearRepresentations = useMemo(() => mercyReaderYearRepresentations.filter((representation) => representation.year === selectedContextYear), [selectedContextYear]);
  const selectedConnections = mercyConnections.filter((connection) => connection.factId === selectedEvent.factId);
  const selectedRepresentationIds = new Set(selectedConnections.flatMap((connection) => connection.representationIds ?? []));
  const selectedRepresentations = mercyRepresentations.filter((representation) => selectedRepresentationIds.has(representation.representationId));

  function chooseEvent(event: MercyTimelineEvent) {
    setSelectedFactId(event.factId);
    setCorrection(null);
    setCorrectionStatus("");
  }

  function chooseYear(year: number) {
    setSelectedYear(year);
    setSearchScope("year");
    setQuery("");
    setEventType("all");
    setSelectedHighlightId(mercyReaderYearHighlights.find((highlight) => highlight.year === year)?.factId ?? "");
    setCorrection(null);
    setCorrectionStatus("");
  }

  function chooseHighlight(highlight: MercyYearHighlight) {
    setSelectedYear(highlight.year);
    setSelectedHighlightId(highlight.factId);
    setCorrection(null);
    setCorrectionStatus("");
  }

  function openCorrection(connection: MercyConnection) {
    setCorrection(connection);
    setCorrectionType("connect");
    setCorrectionNote("");
    setCorrectionStatus("");
  }

  async function saveCorrection() {
    if (!correction) return;
    setSavingCorrection(true);
    setCorrectionStatus("");
    try {
      const response = await fetch("/api/decisions", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          decisionType: correctionType,
          domain: "Relationship",
          subjectLabel: selectedEvent.title,
          targetLabel: correction.target,
          note: correctionNote.trim() || `Reader correction for ${correction.predicate} on ${selectedEvent.factId}.`,
          scope: "this_case",
          evidenceBasis: "combined",
          sourceContext: `MERCY working-canon reader · ${selectedEvent.factId} · source clusters ${selectedEvent.sourceClusters.join(", ")}`,
          impactItems: 1,
          relationship: correction.predicate,
        }),
      });
      const payload = (await response.json()) as { decision?: { pointAward: number }; error?: string };
      if (!response.ok || !payload.decision) throw new Error(payload.error ?? "The private correction could not be saved.");
      setCorrectionStatus(`Saved to your private curator ledger · +${payload.decision.pointAward} points.`);
      setCorrection(null);
      setCorrectionNote("");
    } catch (error) {
      setCorrectionStatus(error instanceof Error ? error.message : "The private correction could not be saved.");
    } finally {
      setSavingCorrection(false);
    }
  }

  return (
    <section className="mercy-reader" aria-label="MERCY connected reader">
      <header className="mercy-reader-hero">
        <div>
          <p className="eyebrow">MERCY READER · PRIVATE DERIVED VIEW</p>
          <h1>{selectedYear === mercyReaderMeta.year ? "1985, connected without flattening the evidence." : `${selectedYear}, visible without flattening the evidence.`}</h1>
          <p className="mercy-reader-intro">A full-span calendar spine from the aggregate working graph, with a connected 1985 research room: timeline, event context, retained sources, local representations, and a safe place to correct a relationship.</p>
        </div>
        <div className="mercy-qa-badge"><ShieldCheck size={15} /> Graph QA passed · cohort QA passed</div>
      </header>

      <div className="mercy-proof-strip">
        <div><strong>{mercyReaderMeta.fullSpanMetrics.years}</strong><span>years in the spine</span></div>
        <div><strong>{mercyReaderMeta.fullSpanMetrics.visibleFacts.toLocaleString()}</strong><span>visible facts</span></div>
        <div><strong>{mercyReaderMeta.fullSpanMetrics.typedConnections.toLocaleString()}</strong><span>typed connections</span></div>
        <div><strong>{mercyReaderMeta.fullSpanMetrics.representations.toLocaleString()}</strong><span>representations observed</span></div>
      </div>

      <div className="mercy-reader-note"><ShieldCheck size={17} /><span>{mercyReaderMeta.authorityBoundary} This reader writes only a private curator decision when you explicitly submit a correction. The index is admitted from the independently QA-passed resumed graph; the upstream aggregate JSON&apos;s failed duplicate-ID check remains visible as an audit hold and is not read directly.</span></div>

      <div className="mercy-reader-mode-tabs" role="tablist" aria-label="Reader surfaces">
        <button type="button" role="tab" aria-selected={readerMode === "calendar"} className={readerMode === "calendar" ? "selected" : ""} onClick={() => setReaderMode("calendar")}><CalendarDays size={14} /> Calendar and timeline</button>
        <button type="button" role="tab" aria-selected={readerMode === "candidates"} className={readerMode === "candidates" ? "selected" : ""} onClick={() => setReaderMode("candidates")}><Network size={14} /> Review candidates <span>21</span></button>
        <button type="button" role="tab" aria-selected={readerMode === "research"} className={readerMode === "research" ? "selected" : ""} onClick={() => setReaderMode("research")}><Sparkles size={14} /> Research worker <span>3</span></button>
      </div>

      {readerMode === "research" ? <MercyResearchDesk /> : readerMode === "candidates" ? <MercyCandidateQueue /> : <>
      <div className="mercy-year-overview">
        <div className="mercy-year-picker">
          <div><p className="eyebrow">CALENDAR SPINE</p><h2>Choose a year to explore</h2><p>Every year is visible as a bounded working-canon surface. 1985 has the first connected event room; other years open their date-bearing highlights and graph counts.</p></div>
          <label><span className="sr-only">Choose year</span><select value={selectedYear} onChange={(event) => chooseYear(Number(event.target.value))}>{mercyReaderYears.map((summary) => <option key={summary.year} value={summary.year}>{summary.year}</option>)}</select></label>
        </div>
        <div className="mercy-year-metrics">
          <div><strong>{selectedYearSummary.factCount.toLocaleString()}</strong><span>facts</span></div>
          <div><strong>{selectedYearSummary.dateClaimCount.toLocaleString()}</strong><span>date claims</span></div>
          <div><strong>{selectedYearSummary.connectionCount.toLocaleString()}</strong><span>typed links</span></div>
          <div><strong>{selectedYearSummary.representationCount.toLocaleString()}</strong><span>representations</span></div>
        </div>
        <div className="mercy-search-scope" role="group" aria-label="Historical search scope">
          <span>Search scope</span>
          <button type="button" className={searchScope === "year" ? "selected" : ""} onClick={() => setSearchScope("year")}>This year</button>
          <button type="button" className={searchScope === "all" ? "selected" : ""} onClick={() => setSearchScope("all")}>All years <small>1958–2026</small></button>
        </div>
      </div>

      <div className="mercy-reader-layout">
        <section className="mercy-timeline-panel" aria-label={searchScope === "all" ? "Historical knowledge search" : `${selectedYear} timeline`}>
          <div className="mercy-section-heading">
            <div><p className="eyebrow">{searchScope === "all" ? "HISTORICAL SEARCH" : "TIMELINE"}</p><h2>{searchScope === "all" ? "Search across the archive spine" : selectedYear === mercyReaderMeta.year ? "One year, many connected moments" : `${selectedYear} date-bearing highlights`}</h2></div>
            <span>{searchScope === "all" ? `${visibleHighlights.length} matches` : `${selectedYear === mercyReaderMeta.year ? visibleEvents.length : visibleHighlights.length} shown`}</span>
          </div>
          <div className="mercy-search-row">
            <label className="mercy-search-box"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={searchScope === "all" ? "Search people, works, places, or sources" : `Search ${selectedYear}`} aria-label={searchScope === "all" ? "Search all historical knowledge" : `Search the ${selectedYear} working canon`} /></label>
            <label className="mercy-filter"><span className="sr-only">Filter event type</span><select value={eventType} disabled={selectedYear !== mercyReaderMeta.year || searchScope === "all"} onChange={(event) => setEventType(event.target.value)} aria-label="Filter event type">{eventTypes.map((value) => <option key={value} value={value}>{value === "all" ? "All types" : value}</option>)}</select></label>
          </div>
          <div className="mercy-timeline-list">
            {searchScope === "all" && query.trim().length < 2 ? <p className="mercy-empty-state">Type at least two characters to search the 113 indexed date-bearing highlights across 1958–2026. Results remain compact, source-labelled research leads.</p> : searchScope === "all" && visibleHighlights.length ? visibleHighlights.map((highlight) => (
              <button key={highlight.factId} type="button" className={`mercy-event-row mercy-highlight-row ${selectedHighlight?.factId === highlight.factId ? "selected" : ""}`} onClick={() => chooseHighlight(highlight)}>
                <span className="mercy-event-date"><CalendarDays size={14} />{highlightDateLabel(highlight)}</span>
                <span className="mercy-event-copy"><strong>{highlight.title}</strong><small>{highlight.year} · {highlight.datePrecision} precision · {highlight.sourceLanes.join(", ")}</small><em>{highlight.assertion}</em></span>
                <ArrowUpRight size={16} />
              </button>
            )) : searchScope === "year" && selectedYear === mercyReaderMeta.year && visibleEvents.length ? visibleEvents.map((event) => (
              <button key={event.factId} type="button" className={`mercy-event-row ${selectedEvent.factId === event.factId ? "selected" : ""}`} onClick={() => chooseEvent(event)}>
                <span className="mercy-event-date"><CalendarDays size={14} />{dateLabel(event)}</span>
                <span className="mercy-event-copy"><strong>{event.title}</strong><small>{event.place} · {event.eventType}</small><em>{sourceLabel(event)}</em></span>
                <ArrowUpRight size={16} />
              </button>
            )) : searchScope === "year" && selectedYear !== mercyReaderMeta.year && visibleHighlights.length ? visibleHighlights.map((highlight) => (
              <button key={highlight.factId} type="button" className={`mercy-event-row mercy-highlight-row ${selectedHighlight?.factId === highlight.factId ? "selected" : ""}`} onClick={() => chooseHighlight(highlight)}>
                <span className="mercy-event-date"><CalendarDays size={14} />{highlightDateLabel(highlight)}</span>
                <span className="mercy-event-copy"><strong>{highlight.title}</strong><small>{highlight.datePrecision} precision · {highlight.sourceLanes.join(", ")}</small><em>{highlight.assertion}</em></span>
                <ArrowUpRight size={16} />
              </button>
            )) : <p className="mercy-empty-state">{searchScope === "all" ? "No historical highlight matches that search. An empty result is a search boundary, not proof that nothing happened." : `No ${selectedYear} event matches that search. An empty result is a search boundary, not proof that nothing happened.`}</p>}
          </div>
          <p className="mercy-cohort-footnote">{searchScope === "all" ? <>Search index source: <span className="mono">{mercyReaderMeta.aggregateContract.sourcePath}</span></> : selectedYear === mercyReaderMeta.year ? <>Connected room source bundle: <span className="mono">{mercyReaderMeta.sourceReceipt}</span></> : <>Compact index source: <span className="mono">{mercyReaderMeta.aggregateContract.sourcePath}</span></>}</p>
        </section>

        <section className="mercy-detail-panel" aria-label="Selected event detail">
          {searchScope === "year" && selectedYear === mercyReaderMeta.year ? <>
          <div className="mercy-detail-kicker"><Sparkles size={15} /> Selected historical moment</div>
          <h2>{selectedEvent.title}</h2>
          <p className="mercy-detail-assertion">{selectedEvent.assertion}</p>
          <div className="mercy-fact-grid">
            <div><span>Date claim</span><strong>{dateLabel(selectedEvent)}</strong><small>{selectedEvent.datePrecision} precision</small></div>
            <div><span>Place claim</span><strong>{selectedEvent.place}</strong><small>retained as a separate claim</small></div>
            <div><span>Evidence</span><strong>{confidenceLabel(selectedEvent.confidence)}</strong><small>{sourceLabel(selectedEvent)}</small></div>
          </div>

          <div className="mercy-detail-block"><div className="mercy-block-heading"><h3>Why MERCY connects it</h3><span>typed relationships</span></div>
            {selectedConnections.length ? <div className="mercy-connection-list">{selectedConnections.map((connection) => <article key={connection.connectionId} className="mercy-connection-card"><div className="mercy-connection-top"><span className="mercy-predicate"><Link2 size={13} /> {connection.predicate}</span><span>{confidenceLabel(connection.confidence)}</span></div><strong>{connection.target}</strong><p>{connection.why}</p><small>{stateLabel(connection.state)} · source cluster {connection.sourceClusters.join(", ")}</small><button type="button" className="mercy-inline-button" onClick={() => openCorrection(connection)}>Correct this relationship</button></article>)}</div> : <p className="mercy-muted">This selected fact has no separately materialized connection in the bounded reader packet. That is an unresolved state, not a failed historical claim.</p>}
          </div>

          <div className="mercy-detail-block"><div className="mercy-block-heading"><h3>Evidence to inspect</h3><span>{selectedEvent.sourceCount} retained source items</span></div><blockquote>{selectedEvent.sourceExcerpt}</blockquote><div className="mercy-source-row"><span>WEBO retained local corpus · clusters {selectedEvent.sourceClusters.join(", ")}</span><a href={selectedEvent.sourceUrl} target="_blank" rel="noreferrer">Open source pointer <ExternalLink size={13} /></a></div></div>

          {selectedRepresentations.length ? <div className="mercy-detail-block"><div className="mercy-block-heading"><h3>Archive representations</h3><span>observations, not proof</span></div><div className="mercy-representation-list">{selectedRepresentations.map((representation) => <article key={representation.representationId}><FileSearch size={15} /><div><strong>{representation.label}</strong><small>{representation.relativePath}</small><p>{representation.caution}</p></div></article>)}</div></div> : null}

          {selectedEvent.uncertainties.length ? <div className="mercy-uncertainty"><CircleAlert size={15} /><div><strong>Uncertainty stays visible</strong>{selectedEvent.uncertainties.map((uncertainty) => <span key={uncertainty}>{uncertainty}</span>)}</div></div> : null}

          {correctionStatus ? <div className="mercy-correction-status"><Check size={15} /> {correctionStatus}</div> : null}
          {correction ? <div className="mercy-correction-box"><div className="mercy-block-heading"><div><h3>Private curator correction</h3><span>{correction.predicate} → {correction.target}</span></div><button type="button" className="mercy-close-button" onClick={() => setCorrection(null)} aria-label="Close correction form">×</button></div><p className="mercy-muted">This records your bounded decision in the private ledger. It does not rewrite the working canon, canonical SQLite, NAS inventory, or archive media.</p><div className="mercy-choice-list">{correctionOptions.map((option) => <button key={option.value} type="button" className={correctionType === option.value ? "selected" : ""} onClick={() => setCorrectionType(option.value)}><span><strong>{option.label}</strong><small>{option.detail}</small></span>{correctionType === option.value ? <Check size={15} /> : null}</button>)}</div><textarea value={correctionNote} onChange={(event) => setCorrectionNote(event.target.value)} placeholder="Optional: say what you know and where this decision should stop." aria-label="Correction note" /><button type="button" className="mercy-save-button" onClick={saveCorrection} disabled={savingCorrection}>{savingCorrection ? "Saving private correction…" : "Save private correction"}</button></div> : null}
          </> : <>
            <div className="mercy-detail-kicker"><CalendarDays size={15} /> {searchScope === "all" ? "Historical search result" : "Aggregate year surface"}</div>
            <h2>{searchScope === "all" ? selectedHighlight ? `${selectedHighlight.year} · ${selectedHighlight.title}` : "Search the historical index" : `${selectedYear} working-canon highlights`}</h2>
            <p className="mercy-detail-assertion">{searchScope === "all" ? "This is a source-labelled result from the QA-passed full-span index. It is a research lead with date precision and provenance, not an automatic canonical claim." : "This year is visible through the independently QA-passed resumed graph snapshot. The compact index keeps date-bearing leads discoverable while the upstream aggregate JSON's duplicate-ID hold remains explicit; no working-graph row becomes a canonical claim."}</p>
            <div className="mercy-fact-grid">
              <div><span>Visible facts</span><strong>{selectedHighlightYearSummary.factCount.toLocaleString()}</strong><small>derived year projection</small></div>
              <div><span>Date claims</span><strong>{selectedHighlightYearSummary.dateClaimCount.toLocaleString()}</strong><small>date roles remain separate</small></div>
              <div><span>Connections</span><strong>{selectedHighlightYearSummary.connectionCount.toLocaleString()}</strong><small>typed, not identity merges</small></div>
            </div>
            <div className="mercy-detail-block"><div className="mercy-block-heading"><h3>{searchScope === "all" ? "Selected search result" : "Selected date-bearing lead"}</h3><span>source-labelled</span></div>
              {selectedHighlight ? <article className="mercy-year-highlight-detail"><strong>{selectedHighlight.title}</strong><span>{highlightDateLabel(selectedHighlight)} · {selectedHighlight.datePrecision} precision · {Math.round(selectedHighlight.confidence * 100)}% confidence</span><p>{selectedHighlight.assertion}</p><small>{selectedHighlight.factId} · {selectedHighlight.sourceLanes.join(", ")}</small></article> : <p className="mercy-muted">{searchScope === "all" ? "Enter a search term to inspect a source-labelled result across the historical index." : "No date-bearing historical-event highlight is materialized for this year in the compact index. That is a coverage boundary, not proof that nothing happened."}</p>}
            </div>
            {selectedHighlight?.sourceEvidence ? <div className="mercy-detail-block"><div className="mercy-block-heading"><h3>Retained source evidence</h3><span>{selectedHighlight.sourceItemCount} source {selectedHighlight.sourceItemCount === 1 ? "item" : "items"}</span></div><blockquote>{selectedHighlight.sourceEvidence.excerpt}</blockquote><div className="mercy-source-row"><span>{selectedHighlight.sourceEvidence.authority} · {selectedHighlight.sourceEvidence.sourceType} · {selectedHighlight.sourceEvidence.sourceItemId}</span>{selectedHighlight.sourceEvidence.url ? <a href={selectedHighlight.sourceEvidence.url} target="_blank" rel="noreferrer">Open retained source <ExternalLink size={13} /></a> : null}</div></div> : null}
            <div className="mercy-detail-block"><div className="mercy-block-heading"><h3>Representation observations</h3><span>{selectedHighlightYearSummary.representationCount.toLocaleString()} in year · {selectedYearRepresentations.length} shown</span></div><p className="mercy-muted">These are real archive observations from the selected year. They remain separate from the historical lead unless a typed, evidence-backed relationship exists.</p>{selectedYearRepresentations.length ? <div className="mercy-representation-list">{selectedYearRepresentations.map((representation) => <article key={representation.representationId}><FileSearch size={15} /><div><strong>{representation.label}</strong><small>{representation.relativePath}</small><small>{representation.observationState} · {representation.provenanceState || "provenance not stated"} · {representation.sourceSenses.join(", ") || "source lane not stated"}</small><p>{representation.caution}</p></div></article>)}</div> : <p className="mercy-muted">No representative observation is materialized for this year. That is a coverage boundary, not proof that no archive representation exists.</p>}</div>
            <div className="mercy-uncertainty"><CircleAlert size={15} /><div><strong>Scope boundary stays visible</strong><span>{searchScope === "all" ? "Search finds source-labelled date-bearing leads across the full span; it does not merge identities or replace the connected event room." : "Full event, source-bundle, and representation detail is next for this year; the aggregate row remains a derived research lead."}</span></div></div>
          </>}
        </section>
      </div>
      </>}
    </section>
  );
}
