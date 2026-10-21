"use client";

import { useState } from "react";
import { ArrowRight, CalendarDays, CircleAlert, ExternalLink, GitBranch, ShieldCheck } from "lucide-react";
import { mercyReaderArcs, type MercyArcStep } from "@/lib/mercy-reader-arcs";

function stateLabel(value: string) {
  return value.replaceAll("_", " ");
}

function stepDate(step: MercyArcStep) {
  if (step.datePrecision === "year") return step.dateStart;
  if (step.datePrecision === "month") return step.dateStart.slice(0, 7);
  return step.dateStart;
}

function uncertaintyText(value: { detail?: string; kind?: string } | string) {
  return typeof value === "string" ? value : value.detail || value.kind || "Uncertainty retained";
}

export function MercyArcExplorer() {
  const [selectedArcId, setSelectedArcId] = useState(mercyReaderArcs[0]?.arcId ?? "");
  const arc = mercyReaderArcs.find((candidate) => candidate.arcId === selectedArcId) ?? mercyReaderArcs[0];
  const [selectedStepId, setSelectedStepId] = useState(arc?.steps[0]?.stepId ?? "");
  const selectedStep = arc?.steps.find((step) => step.stepId === selectedStepId) ?? arc?.steps[0];
  const sourcePointerCount = arc?.steps.reduce((total, step) => total + step.sourcePointers.length, 0) ?? 0;

  function chooseArc(nextArcId: string) {
    const nextArc = mercyReaderArcs.find((candidate) => candidate.arcId === nextArcId);
    setSelectedArcId(nextArcId);
    setSelectedStepId(nextArc?.steps[0]?.stepId ?? "");
  }

  if (!arc) return <section className="mercy-arc-explorer"><p className="mercy-muted">No cross-year arc has been admitted from the pinned graph.</p></section>;

  return (
    <section className="mercy-arc-explorer" aria-label="MERCY cross-year arc explorer">
      <div className="mercy-arc-picker" role="tablist" aria-label="Cross-year arcs">
        {mercyReaderArcs.map((candidate) => <button key={candidate.arcId} type="button" role="tab" aria-selected={candidate.arcId === arc.arcId} className={candidate.arcId === arc.arcId ? "selected" : ""} onClick={() => chooseArc(candidate.arcId)}>{candidate.title}</button>)}
      </div>
      <header className="mercy-arc-heading">
        <div><p className="eyebrow">CROSS-YEAR ARC EXPLORER</p><h2>Follow a relationship without inventing the missing years</h2><p>{arc.summary}</p></div>
        <span className="mercy-arc-status"><ShieldCheck size={14} /> {stateLabel(arc.state)}</span>
      </header>

      <div className="mercy-arc-proof-strip">
        <div><strong>{arc.years.length}</strong><span>years traversed</span></div>
        <div><strong>{arc.steps.length}</strong><span>source-backed steps</span></div>
        <div><strong>{sourcePointerCount}</strong><span>evidence pointers</span></div>
        <div><strong>{arc.gaps.length}</strong><span>explicit gaps</span></div>
      </div>

      <div className="mercy-arc-boundary"><ShieldCheck size={15} /><span>{arc.authorityBoundary} Each step preserves its own date role and precision; the sequence is not proof of an exact continuous relationship timeline.</span></div>

      <div className="mercy-arc-layout">
        <section className="mercy-arc-step-list" aria-label="Arc steps">
          <div className="mercy-block-heading"><h3>{arc.title}</h3><span>{arc.years.join(" · ")}</span></div>
          <div className="mercy-arc-steps">{arc.steps.map((step) => <button key={step.stepId} type="button" className={selectedStep?.stepId === step.stepId ? "selected" : ""} onClick={() => setSelectedStepId(step.stepId)}><span className="mercy-arc-step-year"><CalendarDays size={13} />{step.year}</span><span><strong>{step.label}</strong><small>{stepDate(step)} · {step.lane} · {stateLabel(step.state)}</small></span><ArrowRight size={14} /></button>)}</div>
        </section>

        <section className="mercy-arc-detail" aria-label="Selected arc step">
          {selectedStep ? <>
            <div className="mercy-detail-kicker"><GitBranch size={15} /> Selected arc step</div>
            <h3>{selectedStep.label}</h3>
            <div className="mercy-arc-date-row"><span>{selectedStep.year}</span><span>{selectedStep.lane}</span><span>{selectedStep.dateRole.replaceAll("_", " ")}</span><span>{selectedStep.datePrecision} precision</span></div>
            <p className="mercy-arc-assertion">{selectedStep.assertion}</p>
            <div className="mercy-arc-facts"><div><span>Date basis</span><strong>{selectedStep.dateBasis}</strong></div>{selectedStep.place ? <div><span>Place</span><strong>{selectedStep.place}</strong></div> : null}<div><span>Evidence</span><strong>{selectedStep.sourceCount} source {selectedStep.sourceCount === 1 ? "item" : "items"} · {Math.round(selectedStep.confidence * 100)}% confidence</strong></div></div>
            <div className="mercy-detail-block"><div className="mercy-block-heading"><h3>Source evidence</h3><span>{selectedStep.sourcePointers.length} pointers</span></div>{selectedStep.sourcePointers.length ? <div className="mercy-arc-source-list">{selectedStep.sourcePointers.map((pointer, index) => <article key={`${selectedStep.stepId}-${index}`}><strong>{pointer.authority || pointer.sourceType || "Retained source"}</strong><small>{pointer.sourceItemId}{pointer.locator ? ` · ${pointer.locator}` : ""}</small>{pointer.excerpt ? <p>{pointer.excerpt}</p> : null}{pointer.url ? <a href={pointer.url} target="_blank" rel="noreferrer">Open source pointer <ExternalLink size={12} /></a> : null}</article>)}</div> : <p className="mercy-muted">No source pointer was materialized for this step. That is a coverage boundary, not proof of absence.</p>}</div>
            {selectedStep.uncertainties.length ? <div className="mercy-arc-uncertainty"><CircleAlert size={14} /><div><strong>Uncertainty stays visible</strong>{selectedStep.uncertainties.map((uncertainty) => <span key={uncertaintyText(uncertainty)}>{uncertaintyText(uncertainty)}</span>)}</div></div> : null}
          </> : null}
        </section>
      </div>

      <section className="mercy-arc-gaps"><div className="mercy-detail-kicker"><CircleAlert size={15} /> Arc gaps and next action</div>{arc.gaps.map((gap) => <span key={gap}><CircleAlert size={13} />{gap}</span>)}<small>{arc.nextAction}</small></section>
    </section>
  );
}
