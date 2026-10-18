"use client";

import { useEffect, useMemo, useState, type ComponentType } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Check,
  ChevronRight,
  CircleDot,
  Clock3,
  HeartHandshake,
  Link2,
  LockKeyhole,
  MapPin,
  Network,
  Plus,
  Search,
  Sparkles,
  Trophy,
  Unlink,
  Users,
  X,
} from "lucide-react";

type Domain = "Person" | "Place" | "Thing" | "Relationship";
type DecisionType = "confirm_identity" | "separate_identity" | "connect" | "new_canonical";
type Scope = "this_case" | "matching_claims" | "source_family" | "precedent";
type EvidenceBasis = "curator_assertion" | "retained_source" | "combined";
type Icon = ComponentType<{ size?: number; className?: string }>;

type DecisionRecord = {
  id: string;
  decisionType: DecisionType;
  domain: Domain;
  subjectLabel: string;
  targetLabel: string;
  note: string;
  scope: Scope;
  evidenceBasis: EvidenceBasis;
  pointAward: number;
  promotionStatus: "recorded" | "ready_for_promotion" | "promoted" | "held";
  createdAt: string;
};

type Challenge = {
  id: string;
  domain: Domain;
  eyebrow: string;
  title: string;
  source: string;
  detail: string;
  suggestedTarget: string;
  scopeCount: number;
  points: number;
  relationship?: string;
  accent: "violet" | "gold" | "blue";
};

const challenges: Challenge[] = [
  {
    id: "alberto-tolot",
    domain: "Person",
    eyebrow: "SOURCE-SCOPED PERSON",
    title: "Alberto Tolot",
    source: "Relationship context · Express Yourself",
    detail: "A retained source says Alberto Tolot photographed Madonna and the Express Yourself work context. The source label is preserved; you decide whether to establish the canonical person connection and role.",
    suggestedTarget: "Create or connect canonical person: Alberto Tolot",
    scopeCount: 3,
    points: 32,
    relationship: "photographed",
    accent: "violet",
  },
  {
    id: "lourdes-identity",
    domain: "Person",
    eyebrow: "IDENTITY KNOT",
    title: "Lourdes / Lola",
    source: "Alias cluster · retained source references",
    detail: "Several records use a short name. A curator decision can keep every original wording while establishing the right identity and teaching the archive when that connection is safe.",
    suggestedTarget: "Lourdes Leon",
    scopeCount: 12,
    points: 48,
    accent: "gold",
  },
  {
    id: "studio-place",
    domain: "Place",
    eyebrow: "PLACE CONTEXT",
    title: "Recording-studio reference",
    source: "Event context · place label unresolved",
    detail: "Turn a raw place label into a place record with aliases and hierarchy, without turning a vague caption into an invented street address or exact date.",
    suggestedTarget: "Connect to a canonical place",
    scopeCount: 5,
    points: 28,
    accent: "blue",
  },
];

const decisionCopy: Record<DecisionType, { label: string; title: string; copy: string; icon: Icon }> = {
  confirm_identity: { label: "Same identity", title: "Confirm one identity", copy: "Link this source-specific record to the chosen canonical person, place, or thing. Raw source wording remains intact.", icon: BadgeCheck },
  separate_identity: { label: "Keep separate", title: "Prevent a false merge", copy: "Record that these records are not the same in this scope. The app will stop proposing the same unsafe connection.", icon: Unlink },
  connect: { label: "Connect in graph", title: "Create a contextual connection", copy: "Add a relationship and role for this moment, event, work, or source context. A role never becomes a global label by accident.", icon: Link2 },
  new_canonical: { label: "New canonical record", title: "Create a new archive identity", copy: "Create a proposed canonical entity when the right record does not yet exist. It receives its own promotion review and receipt.", icon: Plus },
};

const scopeCopy: Record<Scope, { label: string; copy: string; bonus: string }> = {
  this_case: { label: "Only this case", copy: "Resolve the visible card only.", bonus: "+0 impact" },
  matching_claims: { label: "Matching claims", copy: "Use this answer for the matching nearby claims shown in the impact preview.", bonus: "+5 impact" },
  source_family: { label: "This source family", copy: "Apply to the same labels in the named retained-source family only.", bonus: "+10 impact" },
  precedent: { label: "Reusable precedent", copy: "Save a bounded rule for future matching questions; exceptions will still come back to you.", bonus: "+15 impact" },
};

const tabItems: Array<{ label: string; icon: Icon }> = [
  { label: "Desk", icon: Sparkles },
  { label: "Graph", icon: Network },
  { label: "Impact", icon: Trophy },
  { label: "History", icon: BookOpen },
];

const statusCopy: Record<DecisionRecord["promotionStatus"], string> = {
  recorded: "Recorded",
  ready_for_promotion: "Ready for promotion",
  promoted: "Canonical receipt returned",
  held: "Held for context",
};

function formatDate(value: string) {
  try {
    return new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(new Date(value));
  } catch {
    return "Today";
  }
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("Desk");
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [decisionType, setDecisionType] = useState<DecisionType>("confirm_identity");
  const [scope, setScope] = useState<Scope>("matching_claims");
  const [basis, setBasis] = useState<EvidenceBasis>("curator_assertion");
  const [note, setNote] = useState("");
  const [target, setTarget] = useState("");
  const [decisions, setDecisions] = useState<DecisionRecord[]>([]);
  const [loadingDecisions, setLoadingDecisions] = useState(true);
  const [isSaving, setSaving] = useState(false);
  const [toast, setToast] = useState("");
  const [search, setSearch] = useState("");

  const challenge = challenges[challengeIndex];
  const currentPoints = decisions.reduce((total, decision) => total + decision.pointAward, 0);
  const pointPreview = decisionType === "connect" ? challenge.points + 10 : challenge.points;
  const visibleHistory = useMemo(() => decisions.filter((decision) => `${decision.subjectLabel} ${decision.targetLabel} ${decision.note}`.toLowerCase().includes(search.toLowerCase())), [decisions, search]);

  useEffect(() => {
    let mounted = true;
    fetch("/api/decisions", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("The private decision ledger is unavailable.");
        return (await response.json()) as { decisions: DecisionRecord[] };
      })
      .then((payload) => { if (mounted) setDecisions(payload.decisions); })
      .catch(() => { if (mounted) setToast("Sign in to connect your private decision ledger."); })
      .finally(() => { if (mounted) setLoadingDecisions(false); });
    return () => { mounted = false; };
  }, []);

  function openDecision(nextType: DecisionType) {
    setDecisionType(nextType);
    setTarget(nextType === "separate_identity" ? "Do not merge with this proposed match" : challenge.suggestedTarget);
    setNote("");
    setScope(nextType === "separate_identity" ? "this_case" : "matching_claims");
    setSheetOpen(true);
  }

  async function saveDecision() {
    const trimmedTarget = target.trim();
    const trimmedNote = note.trim();
    if (!trimmedTarget) { setToast("Choose the identity or relationship target first."); return; }
    if (scope === "precedent" && trimmedNote.length < 12) { setToast("Add a short note so this precedent has a clear boundary."); return; }
    setSaving(true);
    try {
      const response = await fetch("/api/decisions", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ decisionType, domain: challenge.domain, subjectLabel: challenge.title, targetLabel: trimmedTarget, note: trimmedNote, scope, evidenceBasis: basis, sourceContext: challenge.source, impactItems: scope === "this_case" ? 1 : challenge.scopeCount, relationship: challenge.relationship ?? null }),
      });
      const payload = (await response.json()) as { decision?: DecisionRecord; error?: string };
      if (!response.ok || !payload.decision) throw new Error(payload.error ?? "The decision could not be recorded.");
      setDecisions((current) => [payload.decision!, ...current]);
      setSheetOpen(false);
      setToast(`+${payload.decision.pointAward} Archive Impact · decision recorded`);
    } catch (error) {
      setToast(error instanceof Error ? error.message : "The decision could not be recorded.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand" aria-label="Madonna Archive Curator Desk"><span className="brand-mark">M<span>·</span></span><div><span className="eyebrow">PRIVATE CURATOR DESK</span><strong>Archive impact</strong></div></div>
        <button className="profile-button" aria-label="Private, protected workspace"><LockKeyhole size={16} /> Private</button>
      </header>

      <section className="score-card" aria-label="Archive Impact score"><div><p className="eyebrow">YOUR ARCHIVE IMPACT</p><div className="score-line"><strong>{currentPoints.toLocaleString()}</strong><span>points</span></div><p className="score-caption">Points bank when a curator decision is recorded. Canonical promotion is always receipted separately.</p></div><div className="score-seal"><Trophy size={24} /><span>{decisions.length}</span><small>decisions</small></div></section>

      <nav className="tabbar" aria-label="Curator Desk sections">{tabItems.map(({ label, icon: IconComponent }) => <button key={label} className={activeTab === label ? "active" : ""} onClick={() => setActiveTab(label)}><IconComponent size={17} /><span>{label}</span></button>)}</nav>

      {activeTab === "Desk" && <>
        <section className="welcome"><div><p className="eyebrow">TODAY’S HIGH-IMPACT DECISION</p><h1>Make the connection only <em>you</em> can make.</h1></div><button className="text-button" onClick={() => setChallengeIndex((challengeIndex + 1) % challenges.length)}>Next case <ChevronRight size={16} /></button></section>
        <article className={`decision-card ${challenge.accent}`}>
          <div className="card-topline"><span className="domain-chip">{challenge.domain === "Person" ? <Users size={14} /> : challenge.domain === "Place" ? <MapPin size={14} /> : <CircleDot size={14} />}{challenge.domain}</span><span className="impact-reward">+{challenge.points} impact</span></div>
          <p className="eyebrow">{challenge.eyebrow}</p><h2>{challenge.title}</h2><p className="source-line"><BadgeCheck size={15} /> {challenge.source}</p><p className="card-detail">{challenge.detail}</p>
          <div className="connection-preview"><Network size={17} /><span>{challenge.relationship ? `${challenge.title} → ${challenge.relationship} → Madonna / work context` : `${challenge.scopeCount} related references are ready for your context`}</span></div>
          <div className="decision-actions"><button className="primary-action" onClick={() => openDecision("confirm_identity")}><BadgeCheck size={17} /> Same identity</button><button className="secondary-action" onClick={() => openDecision("connect")}><Link2 size={17} /> Connect</button><button className="secondary-action" onClick={() => openDecision("separate_identity")}><Unlink size={17} /> Keep separate</button></div>
          <button className="quiet-action" onClick={() => openDecision("new_canonical")}><Plus size={15} /> It needs a new canonical record</button>
        </article>
        <section className="impact-strip"><div><HeartHandshake size={18} /><span><b>Because I said so</b> is a valid curator basis.</span></div><p>Capture your words and scope; the archive never pretends they came from somewhere else.</p></section>
        <section className="achievement-panel"><div className="section-heading"><div><p className="eyebrow">YOUR COLLECTION</p><h2>Knowledge you have made durable</h2></div><Award size={21} /></div><div className="achievement-row"><span className="achievement-icon"><Users size={18} /></span><div><b>Alias Detective</b><small>Resolve identity variants without erasing their source history.</small></div><em>{Math.min(decisions.filter((item) => item.decisionType === "confirm_identity").length, 12)}/12</em></div><div className="achievement-row"><span className="achievement-icon gold"><Link2 size={18} /></span><div><b>Connection Maker</b><small>Add meaningful, contextual connections to the graph.</small></div><em>{Math.min(decisions.filter((item) => item.decisionType === "connect").length, 10)}/10</em></div></section>
      </>}

      {activeTab === "Graph" && <section className="graph-view"><p className="eyebrow">CONNECTED, NOT COLLAPSED</p><h1>Your choices grow a provenance-visible graph.</h1><div className="graph-orbit"><div className="orbit-node madonna">Madonna</div><div className="orbit-node left">People</div><div className="orbit-node right">Places</div><div className="orbit-node bottom">Works & things</div><i className="link one" /><i className="link two" /><i className="link three" /></div><p>Every connection carries its own relationship, date/context, basis, and decision history. The app never turns a role into a global label or removes a source record during an identity decision.</p></section>}

      {activeTab === "Impact" && <section className="impact-view"><p className="eyebrow">HOW THE GAME STAYS HONEST</p><h1>Earn for useful knowledge—not fast taps.</h1><div className="impact-grid"><article><BadgeCheck size={21} /><b>Clarity</b><p>Names, aliases, dates, roles, and place hierarchy give decisions useful boundaries.</p></article><article><Network size={21} /><b>Connection</b><p>Graph edges earn more when they make people, places, events, works, and sources discoverable together.</p></article><article><HeartHandshake size={21} /><b>Leverage</b><p>Scoped precedents earn an impact bonus only when they safely resolve matching cases.</p></article><article><Unlink size={21} /><b>Care</b><p>Preventing a false merge is real preservation work and earns points too.</p></article></div></section>}

      {activeTab === "History" && <section className="history-view"><div className="section-heading"><div><p className="eyebrow">YOUR DECISION LEDGER</p><h1>Every call has a receipt trail.</h1></div><Clock3 size={21} /></div><label className="search-box"><Search size={16} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Find a person, place, thing, or note" /></label>{loadingDecisions ? <p className="empty-state">Opening your private decision ledger…</p> : visibleHistory.length ? <div className="history-list">{visibleHistory.map((decision) => <article key={decision.id} className="history-row"><div className="history-icon"><Check size={15} /></div><div><p><b>{decision.subjectLabel}</b> → {decision.targetLabel}</p><small>{decisionCopy[decision.decisionType].label} · {statusCopy[decision.promotionStatus]} · {formatDate(decision.createdAt)}</small>{decision.note ? <em>{decision.note}</em> : null}</div><strong>+{decision.pointAward}</strong></article>)}</div> : <p className="empty-state">Your first recorded decision will appear here with its scope, basis, note, and promotion state.</p>}</section>}

      <footer className="safety-note"><LockKeyhole size={15} /><span>Source evidence is preserved. A recorded decision becomes canonical only after a protected promotion receipt validates it.</span></footer>

      {isSheetOpen && <div className="sheet-backdrop" role="presentation" onMouseDown={() => !isSaving && setSheetOpen(false)}><section className="decision-sheet" role="dialog" aria-modal="true" aria-label="Record a curator decision" onMouseDown={(event) => event.stopPropagation()}><div className="sheet-handle" /><div className="sheet-header"><div><p className="eyebrow">CURATOR DECISION</p><h2>{decisionCopy[decisionType].title}</h2></div><button aria-label="Close decision sheet" onClick={() => setSheetOpen(false)}><X size={20} /></button></div><p className="sheet-description">{decisionCopy[decisionType].copy}</p>
        <fieldset className="choice-grid"><legend>What is your call?</legend>{(Object.keys(decisionCopy) as DecisionType[]).map((type) => { const ChoiceIcon = decisionCopy[type].icon; return <button key={type} className={decisionType === type ? "selected" : ""} onClick={() => { setDecisionType(type); if (type === "separate_identity") setScope("this_case"); }}><ChoiceIcon size={16} />{decisionCopy[type].label}</button>; })}</fieldset>
        <label className="field-label">Canonical target or relationship<input value={target} onChange={(event) => setTarget(event.target.value)} placeholder="Choose or describe the canonical target" /></label>
        <fieldset className="basis-row"><legend>Why is this right?</legend>{([ ["curator_assertion", "My curator knowledge"], ["retained_source", "Retained source"], ["combined", "Both"] ] as const).map(([value, label]) => <button key={value} className={basis === value ? "selected" : ""} onClick={() => setBasis(value)}>{label}</button>)}</fieldset>
        <label className="field-label">Your note <span>optional for one case; required for a reusable rule</span><textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="For example: “I know this is the same person because…”" rows={4} /></label>
        <fieldset className="scope-list"><legend>How far should this answer reach?</legend>{(Object.keys(scopeCopy) as Scope[]).map((value) => <button key={value} className={scope === value ? "selected" : ""} onClick={() => setScope(value)}><span><b>{scopeCopy[value].label}</b><small>{scopeCopy[value].copy}</small></span><em>{scopeCopy[value].bonus}</em></button>)}</fieldset>
        <div className="receipt-preview"><div><Sparkles size={17} /><span><b>Impact preview</b><small>{scope === "this_case" ? "1 visible record" : `${challenge.scopeCount} matching records`} · source text and original records remain untouched</small></span></div><strong>+{pointPreview} points</strong></div><button className="record-button" disabled={isSaving} onClick={saveDecision}>{isSaving ? "Recording your decision…" : <>Record decision <ArrowRight size={18} /></>}</button><p className="sheet-footnote">This creates an auditable curator decision. It is not presented as canonical until the private promotion service returns a validation receipt.</p>
      </section></div>}
      {toast && <div className="toast" role="status"><Check size={16} />{toast}<button onClick={() => setToast("")} aria-label="Dismiss"><X size={15} /></button></div>}
    </main>
  );
}
