"use client";

import { useEffect, useMemo, useState, type ComponentType } from "react";
import {
  ArrowRight, Award, BadgeCheck, BookOpen, Check, ChevronRight, CircleDot,
  Clock3, Eye, HeartHandshake, ImageIcon, Images, Link2, LockKeyhole, MapPin,
  Maximize2, Network, Plus, Search, Sparkles, Trophy, Unlink, Users, X,
} from "lucide-react";

type Domain = "Person" | "Place" | "Thing" | "Relationship";
type DecisionType = "confirm_identity" | "separate_identity" | "connect" | "new_canonical";
type Scope = "this_case" | "matching_claims" | "source_family" | "precedent";
type EvidenceBasis = "curator_assertion" | "retained_source" | "combined";
type Icon = ComponentType<{ size?: number; className?: string }>;

type DecisionRecord = { id: string; decisionType: DecisionType; domain: Domain; subjectLabel: string; targetLabel: string; note: string; scope: Scope; evidenceBasis: EvidenceBasis; pointAward: number; promotionStatus: "recorded" | "ready_for_promotion" | "promoted" | "held"; createdAt: string; };
type MediaPreview = { id: string; src: string; title: string; sourceLabel: string; caption: string; caution: string; };
type Challenge = { id: string; domain: Domain; eyebrow: string; title: string; source: string; detail: string; suggestedTarget: string; points: number; relationship?: string; mediaId: string; accent: "violet" | "gold" | "blue"; };

const mediaPreviews: MediaPreview[] = [
  { id: "peter-anderson", src: "/archive-previews/peter-anderson-1984.jpg", title: "Portrait from the Peter Anderson photo folder", sourceLabel: "Archive folder label · 1984", caption: "A visual item selected from your archive for this private desk.", caution: "The folder label is a clue. It does not automatically prove who took the photo, who is pictured, or an exact event date." },
  { id: "kienitz", src: "/archive-previews/kienitz-1984.jpg", title: "Portrait in a photo collection labelled Kienitz", sourceLabel: "Archive folder label · 1984", caption: "You can inspect the image before deciding what the collection label should mean in the archive.", caution: "Keep the folder wording, even if you make a better connection around it. The label is not proof on its own." },
  { id: "saturday-show", src: "/archive-previews/saturday-show-press-photo.jpg", title: "Press photo showing Madonna and Tommy Boyd", sourceLabel: "Printed wire-photo credit line · date shown on image", caption: "The image carries its own printed source wording, including a credit and date claim.", caution: "The printed words are evidence to preserve. They still need your call before the archive treats a date, person, or show link as settled." },
];

const challenges: Challenge[] = [
  { id: "peter-anderson", domain: "Person", eyebrow: "LOOK AT THE PHOTO FIRST", title: "Peter Anderson", source: "A photo collection is labelled “Peter Anderson.”", detail: "Does that name tell us who took this photo, who is in it, or neither? Look closely, then say exactly what you know.", suggestedTarget: "Peter Anderson", points: 24, relationship: "may have photographed", mediaId: "peter-anderson", accent: "violet" },
  { id: "kienitz-collection", domain: "Thing", eyebrow: "WHAT DOES THIS LABEL MEAN?", title: "Kienitz photo collection", source: "A photo collection is labelled “Kienitz.”", detail: "You do not have to guess. Tell the archive whether this is a person, a photographer credit, a collection name, or something that should stay open for now.", suggestedTarget: "Kienitz", points: 26, relationship: "is connected to", mediaId: "kienitz", accent: "gold" },
  { id: "tommy-boyd", domain: "Relationship", eyebrow: "THE PHOTO HAS WORDS ON IT", title: "Madonna and Tommy Boyd", source: "A press photo has a printed credit line and date claim.", detail: "The people shown and the printed words may help answer several questions. You decide which link is safe to make—and which details should remain only source wording.", suggestedTarget: "Tommy Boyd", points: 30, relationship: "appears with", mediaId: "saturday-show", accent: "blue" },
];

const decisionCopy: Record<DecisionType, { label: string; title: string; copy: string; icon: Icon }> = {
  confirm_identity: { label: "Yes — same one", title: "Tell the archive these are the same", copy: "Keep every original name and label, but remember that they point to the same person, place, or thing.", icon: BadgeCheck },
  separate_identity: { label: "No — keep apart", title: "Tell the archive these are different", copy: "Save a clear ‘do not merge’ call so this unsafe suggestion does not keep coming back.", icon: Unlink },
  connect: { label: "Link them", title: "Save a link between them", copy: "Add a connection for this photo, event, work, or source. It stays tied to this context instead of becoming a blanket label.", icon: Link2 },
  new_canonical: { label: "Make a new record", title: "Start a new archive record", copy: "Use this when the right person, place, or thing simply does not have its own record yet.", icon: Plus },
};

const scopeCopy: Record<Scope, { label: string; copy: string; bonus: string }> = {
  this_case: { label: "Just this one", copy: "Save the answer for the item in front of you.", bonus: "+0 points" },
  matching_claims: { label: "Other exact matches", copy: "Keep this answer handy for clearly identical matches when you review them later.", bonus: "+5 points" },
  source_family: { label: "This source group", copy: "Use it as a guide for the same source group; each match can still be checked.", bonus: "+10 points" },
  precedent: { label: "A careful rule for later", copy: "Give future matching questions a bounded rule. Add a note so its limits are clear.", bonus: "+15 points" },
};

const tabItems: Array<{ label: string; icon: Icon }> = [
  { label: "Desk", icon: Sparkles }, { label: "Media", icon: Images }, { label: "Connections", icon: Network }, { label: "Progress", icon: Trophy }, { label: "My calls", icon: BookOpen },
];

const statusCopy: Record<DecisionRecord["promotionStatus"], string> = { recorded: "Saved", ready_for_promotion: "Saved · waiting for the protected check", promoted: "Promotion receipt returned", held: "Needs more context" };

function formatDate(value: string) {
  try { return new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(new Date(value)); } catch { return "Today"; }
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("Desk");
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [activeMediaId, setActiveMediaId] = useState<string | null>(null);
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [decisionType, setDecisionType] = useState<DecisionType>("confirm_identity");
  const [scope, setScope] = useState<Scope>("this_case");
  const [basis, setBasis] = useState<EvidenceBasis>("curator_assertion");
  const [note, setNote] = useState("");
  const [target, setTarget] = useState("");
  const [decisions, setDecisions] = useState<DecisionRecord[]>([]);
  const [loadingDecisions, setLoadingDecisions] = useState(true);
  const [isSaving, setSaving] = useState(false);
  const [toast, setToast] = useState("");
  const [search, setSearch] = useState("");

  const challenge = challenges[challengeIndex];
  const challengeMedia = mediaPreviews.find((item) => item.id === challenge.mediaId) ?? mediaPreviews[0];
  const activeMedia = mediaPreviews.find((item) => item.id === activeMediaId);
  const currentPoints = decisions.reduce((total, decision) => total + decision.pointAward, 0);
  const pointPreview = decisionType === "connect" ? challenge.points + 10 : challenge.points;
  const visibleHistory = useMemo(() => decisions.filter((decision) => `${decision.subjectLabel} ${decision.targetLabel} ${decision.note}`.toLowerCase().includes(search.toLowerCase())), [decisions, search]);
  const DomainIcon = challenge.domain === "Person" ? Users : challenge.domain === "Place" ? MapPin : CircleDot;

  useEffect(() => {
    let mounted = true;
    fetch("/api/decisions", { cache: "no-store" })
      .then(async (response) => { if (!response.ok) throw new Error("The private decision list is unavailable."); return (await response.json()) as { decisions: DecisionRecord[] }; })
      .then((payload) => { if (mounted) setDecisions(payload.decisions); })
      .catch(() => { if (mounted) setToast("Sign in to see and save your private calls."); })
      .finally(() => { if (mounted) setLoadingDecisions(false); });
    return () => { mounted = false; };
  }, []);

  function openDecision(nextType: DecisionType) {
    setDecisionType(nextType);
    setTarget(nextType === "separate_identity" ? "Keep separate from this suggested match" : challenge.suggestedTarget);
    setNote("");
    setScope(nextType === "separate_identity" ? "this_case" : "matching_claims");
    setSheetOpen(true);
  }

  async function saveDecision() {
    const trimmedTarget = target.trim();
    const trimmedNote = note.trim();
    if (!trimmedTarget) { setToast("Say who or what this should be linked to first."); return; }
    if (scope === "precedent" && trimmedNote.length < 12) { setToast("Add a short note so you will remember where this rule should stop."); return; }
    setSaving(true);
    try {
      const response = await fetch("/api/decisions", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ decisionType, domain: challenge.domain, subjectLabel: challenge.title, targetLabel: trimmedTarget, note: trimmedNote, scope, evidenceBasis: basis, sourceContext: challenge.source, impactItems: 1, relationship: challenge.relationship ?? null }) });
      const payload = (await response.json()) as { decision?: DecisionRecord; error?: string };
      if (!response.ok || !payload.decision) throw new Error(payload.error ?? "Your call could not be saved.");
      setDecisions((current) => [payload.decision!, ...current]);
      setSheetOpen(false);
      setToast(`+${payload.decision.pointAward} points · your call is saved`);
    } catch (error) {
      setToast(error instanceof Error ? error.message : "Your call could not be saved.");
    } finally { setSaving(false); }
  }

  return (
    <main className="app-shell">
      <header className="topbar"><div className="brand" aria-label="Madonna Archive Curator Desk"><span className="brand-mark">M<span>·</span></span><div><span className="eyebrow">PRIVATE DECISION DESK</span><strong>Your calls, your archive</strong></div></div><span className="profile-button"><LockKeyhole size={16} /> Private</span></header>
      <section className="score-card" aria-label="Archive progress"><div><p className="eyebrow">YOUR PROGRESS</p><div className="score-line"><strong>{currentPoints.toLocaleString()}</strong><span>points</span></div><p className="score-caption">You earn points when you save a useful call. The archive still checks it before it becomes an approved historical record.</p></div><div className="score-seal"><Trophy size={24} /><span>{decisions.length}</span><small>calls saved</small></div></section>
      <nav className="tabbar" aria-label="Curator Desk sections">{tabItems.map(({ label, icon: IconComponent }) => <button key={label} type="button" className={activeTab === label ? "active" : ""} onClick={() => setActiveTab(label)}><IconComponent size={17} /><span>{label}</span></button>)}</nav>

      {activeTab === "Desk" && <>
        <section className="welcome"><div><p className="eyebrow">START HERE</p><h1>Look at the item. Then tell the archive what it <em>means</em>.</h1></div><button className="text-button" type="button" onClick={() => setChallengeIndex((challengeIndex + 1) % challenges.length)}>Show another <ChevronRight size={16} /></button></section>
        <article className={`decision-card ${challenge.accent}`}><div className="card-topline"><span className="domain-chip"><DomainIcon size={14} /> {challenge.domain}</span><span className="impact-reward">+{challenge.points} points</span></div><p className="eyebrow">{challenge.eyebrow}</p><h2>{challenge.title}</h2><p className="source-line"><BadgeCheck size={15} /> What the archive says: {challenge.source}</p><button className="case-media" type="button" onClick={() => setActiveMediaId(challengeMedia.id)} aria-label={`Open ${challengeMedia.title}`}><img src={challengeMedia.src} alt={challengeMedia.title} /><span><Eye size={15} /> Tap to look closely</span></button><p className="card-detail">{challenge.detail}</p><div className="connection-preview"><Network size={17} /><span><b>If you link it:</b> the saved connection stays attached to this source and this context. It will not quietly rewrite every other record.</span></div><div className="decision-actions"><button className="primary-action" type="button" onClick={() => openDecision("confirm_identity")}><BadgeCheck size={17} /> Yes — same one</button><button className="secondary-action" type="button" onClick={() => openDecision("connect")}><Link2 size={17} /> Link them</button><button className="secondary-action" type="button" onClick={() => openDecision("separate_identity")}><Unlink size={17} /> No — keep apart</button></div><button className="quiet-action" type="button" onClick={() => openDecision("new_canonical")}><Plus size={15} /> This needs its own archive record</button></article>
        <section className="impact-strip"><div><HeartHandshake size={18} /><span><b>“Because I said so” counts.</b></span></div><p>Choose “I know this,” write what you want to remember, and the app will label it honestly as your call—not as a made-up source.</p></section>
        <section className="achievement-panel"><div className="section-heading"><div><p className="eyebrow">YOUR COLLECTION</p><h2>Knowledge you have made reusable</h2></div><Award size={21} /></div><div className="achievement-row"><span className="achievement-icon"><Users size={18} /></span><div><b>Alias Detective</b><small>Save identity calls without throwing away the source’s original words.</small></div><em>{Math.min(decisions.filter((item) => item.decisionType === "confirm_identity").length, 12)}/12</em></div><div className="achievement-row"><span className="achievement-icon gold"><Link2 size={18} /></span><div><b>Connection Maker</b><small>Link people, places, works, and pictures in a way you can explain later.</small></div><em>{Math.min(decisions.filter((item) => item.decisionType === "connect").length, 10)}/10</em></div></section>
      </>}

      {activeTab === "Media" && <section className="media-view"><p className="eyebrow">PRIVATE VISUAL SHELF</p><h1>See the evidence before you make the call.</h1><p className="media-intro">These are three small preview copies from your archive. They are here to help you decide; they do not change the original files or turn a folder name into a fact.</p><div className="media-grid">{mediaPreviews.map((media) => <button className="media-card" key={media.id} type="button" onClick={() => setActiveMediaId(media.id)}><span className="media-card-image"><img src={media.src} alt={media.title} /><i><Maximize2 size={16} /></i></span><span><b>{media.title}</b><small>{media.sourceLabel}</small><em>Open and inspect</em></span></button>)}</div><div className="media-rule"><ImageIcon size={18} /><p><b>What you see is evidence.</b> The picture, its printed words, and its folder label can each support a different claim. You choose what to connect.</p></div></section>}
      {activeTab === "Connections" && <section className="graph-view"><p className="eyebrow">CONNECTED, NOT MUSHED TOGETHER</p><h1>Your calls create clear links instead of vague guesses.</h1><div className="graph-orbit"><div className="orbit-node madonna">Madonna</div><div className="orbit-node left">People</div><div className="orbit-node right">Places</div><div className="orbit-node bottom">Works & pictures</div><i className="link one" /><i className="link two" /><i className="link three" /></div><p>When you connect something, the archive remembers the exact relationship, where the idea came from, and the moment it applies to. A photographer credit on one image does not become someone’s permanent label everywhere.</p></section>}
      {activeTab === "Progress" && <section className="impact-view"><p className="eyebrow">HOW THE POINTS STAY FAIR</p><h1>Earn for useful knowledge—not quick taps.</h1><div className="impact-grid"><article><BadgeCheck size={21} /><b>Make it clear</b><p>A name, alias, date, role, or place detail gives your call useful edges.</p></article><article><Network size={21} /><b>Make a good link</b><p>Connections matter when they help you discover a person, event, work, and picture together.</p></article><article><HeartHandshake size={21} /><b>Help future you</b><p>A careful rule can speed up later questions—but only when you explain where it applies.</p></article><article><Unlink size={21} /><b>Stop a bad merge</b><p>Saying “these are different” protects the archive and earns points too.</p></article></div></section>}
      {activeTab === "My calls" && <section className="history-view"><div className="section-heading"><div><p className="eyebrow">YOUR PRIVATE MEMORY</p><h1>Every call is easy to find again.</h1></div><Clock3 size={21} /></div><label className="search-box"><Search size={16} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Find a person, place, photo, or note" /></label>{loadingDecisions ? <p className="empty-state">Opening your private saved calls…</p> : visibleHistory.length ? <div className="history-list">{visibleHistory.map((decision) => <article key={decision.id} className="history-row"><div className="history-icon"><Check size={15} /></div><div><p><b>{decision.subjectLabel}</b> → {decision.targetLabel}</p><small>{decisionCopy[decision.decisionType].label} · {statusCopy[decision.promotionStatus]} · {formatDate(decision.createdAt)}</small>{decision.note ? <em>{decision.note}</em> : null}</div><strong>+{decision.pointAward}</strong></article>)}</div> : <p className="empty-state">Your first saved call will appear here with your words, where it applies, and what happens next.</p>}</section>}
      <footer className="safety-note"><LockKeyhole size={15} /><span>The original source and picture stay in the archive. Your saved call is checked before it becomes an approved historical record.</span></footer>
      {isSheetOpen && <div className="sheet-backdrop" role="presentation" onMouseDown={() => !isSaving && setSheetOpen(false)}><section className="decision-sheet" role="dialog" aria-modal="true" aria-label="Save a curator decision" onMouseDown={(event) => event.stopPropagation()}><div className="sheet-handle" /><div className="sheet-header"><div><p className="eyebrow">YOUR CALL</p><h2>{decisionCopy[decisionType].title}</h2></div><button type="button" aria-label="Close" onClick={() => setSheetOpen(false)}><X size={20} /></button></div><p className="sheet-description">{decisionCopy[decisionType].copy}</p><fieldset className="choice-grid"><legend>What do you want to say?</legend>{(Object.keys(decisionCopy) as DecisionType[]).map((type) => { const ChoiceIcon = decisionCopy[type].icon; return <button type="button" key={type} className={decisionType === type ? "selected" : ""} onClick={() => { setDecisionType(type); if (type === "separate_identity") setScope("this_case"); }}><ChoiceIcon size={16} />{decisionCopy[type].label}</button>; })}</fieldset><label className="field-label">Who or what should this be linked to?<input value={target} onChange={(event) => setTarget(event.target.value)} placeholder="Type a person, place, work, or relationship" /></label><fieldset className="basis-row"><legend>How do you know?</legend>{([ ["curator_assertion", "I know this"], ["retained_source", "Saved source"], ["combined", "Both"] ] as const).map(([value, label]) => <button type="button" key={value} className={basis === value ? "selected" : ""} onClick={() => setBasis(value)}>{label}</button>)}</fieldset><label className="field-label">Anything you want to remember? <span>Optional for one item; needed for a careful rule.</span><textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="For example: “I remember this because…”" rows={4} /></label><fieldset className="scope-list"><legend>Where should this answer help?</legend>{(Object.keys(scopeCopy) as Scope[]).map((value) => <button type="button" key={value} className={scope === value ? "selected" : ""} onClick={() => setScope(value)}><span><b>{scopeCopy[value].label}</b><small>{scopeCopy[value].copy}</small></span><em>{scopeCopy[value].bonus}</em></button>)}</fieldset><div className="receipt-preview"><div><Sparkles size={17} /><span><b>What happens next</b><small>Your call is saved with your note and source basis. The original picture and wording stay untouched.</small></span></div><strong>+{pointPreview} points</strong></div><button className="record-button" type="button" disabled={isSaving} onClick={saveDecision}>{isSaving ? "Saving your call…" : <>Save my call <ArrowRight size={18} /></>}</button><p className="sheet-footnote">Saving a call does not silently rewrite history. The protected archive check returns a receipt before any approved historical change.</p></section></div>}
      {activeMedia && <div className="media-lightbox" role="presentation" onMouseDown={() => setActiveMediaId(null)}><section role="dialog" aria-modal="true" aria-label={activeMedia.title} onMouseDown={(event) => event.stopPropagation()}><div className="media-lightbox-head"><div><p className="eyebrow">ARCHIVE PREVIEW</p><h2>{activeMedia.title}</h2></div><button type="button" onClick={() => setActiveMediaId(null)} aria-label="Close image"><X size={20} /></button></div><img src={activeMedia.src} alt={activeMedia.title} /><div className="media-lightbox-note"><p><b>What this is:</b> {activeMedia.caption}</p><p><b>Source:</b> {activeMedia.sourceLabel}</p><p><b>Remember:</b> {activeMedia.caution}</p></div></section></div>}
      {toast && <div className="toast" role="status"><Check size={16} />{toast}<button type="button" onClick={() => setToast("")} aria-label="Dismiss"><X size={15} /></button></div>}
    </main>
  );
}
