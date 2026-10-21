"use client";

import { useState } from "react";
import { CircleAlert, ExternalLink, FileSearch, FlaskConical, Link2, ShieldCheck } from "lucide-react";
import {
  mercyResearchContradictionLedger,
  mercyResearchMeta,
  mercyResearchProposals,
  mercyResearchQuestions,
  mercyResearchRepresentationLedger,
  type MercyResearchProposal,
} from "@/lib/mercy-reader-research";

function stateLabel(value: string) {
  return value.replaceAll("_", " ");
}

function proposalLabel(proposal: MercyResearchProposal) {
  if (proposal.predicate === "records_marriage_of") return "Marriage relationship";
  if (proposal.predicate === "source_contextual_link_through_film") return "Film-context connection";
  if (proposal.predicate === "possible_first_meeting_context") return "Possible first-meeting context";
  return proposal.predicate;
}

export function MercyResearchDesk() {
  const [selectedProposalId, setSelectedProposalId] = useState(mercyResearchProposals[0]?.proposalId ?? "");
  const selectedProposal = mercyResearchProposals.find((proposal) => proposal.proposalId === selectedProposalId) ?? mercyResearchProposals[0];
  const question = mercyResearchQuestions[0];

  return (
    <section className="mercy-research-desk" aria-label="MERCY bounded autonomous research">
      <header className="mercy-research-heading">
        <div><p className="eyebrow">BOUNDED AUTONOMOUS RESEARCH</p><h2>Connection worker, with the uncertainty intact</h2><p>The completed Sean Penn → Madonna → Material Girl lookup is now a navigable private research packet. MERCY searched retained evidence and the QA-passed graph, then stopped at the evidence boundary.</p></div>
        <span className="mercy-research-status"><ShieldCheck size={14} /> {stateLabel(mercyResearchMeta.status)}</span>
      </header>

      <div className="mercy-research-proof-strip">
        <div><strong>{mercyResearchMeta.proposalCount}</strong><span>proposals</span></div>
        <div><strong>{mercyResearchMeta.sourceRecordCount.toLocaleString()}</strong><span>retained records searched</span></div>
        <div><strong>{mercyResearchMeta.directFirstMeetingHitCount}</strong><span>direct first-meeting hits</span></div>
        <div><strong>{mercyResearchMeta.publicNetwork}</strong><span>public-network calls</span></div>
      </div>

      <div className="mercy-research-boundary"><ShieldCheck size={15} /><span>{mercyResearchMeta.authorityBoundary} This desk only reads the completed derived bundle; it does not promote a proposal or change archive originals.</span></div>

      <div className="mercy-research-layout">
        <section className="mercy-research-list" aria-label="Research proposals">
          <div className="mercy-block-heading"><h3>Worker proposals</h3><span>{mercyResearchProposals.length} source-labelled</span></div>
          <div className="mercy-research-proposal-list">
            {mercyResearchProposals.map((proposal) => <button key={proposal.proposalId} type="button" className={proposal.proposalId === selectedProposal?.proposalId ? "selected" : ""} onClick={() => setSelectedProposalId(proposal.proposalId)}><span><strong>{proposalLabel(proposal)}</strong><small>{stateLabel(proposal.state)} · {proposal.dateClaim?.value ?? "date not asserted"}</small></span><Link2 size={14} /></button>)}
          </div>
          <div className="mercy-research-ledger-summary"><span><FileSearch size={14} /> {mercyResearchRepresentationLedger.length} representation ledger entry</span><span><CircleAlert size={14} /> {mercyResearchContradictionLedger.length} temporal review note</span></div>
        </section>

        <section className="mercy-research-detail" aria-label="Selected research proposal">
          {selectedProposal ? <>
            <div className="mercy-detail-kicker"><FlaskConical size={15} /> Selected worker proposal</div>
            <h3>{proposalLabel(selectedProposal)}</h3>
            <div className="mercy-research-state-row"><span>{stateLabel(selectedProposal.state)}</span><span>{selectedProposal.confidence.replaceAll("_", " ")}</span></div>
            <p className="mercy-research-identifiers"><b>{selectedProposal.subjectId}</b> → {selectedProposal.objectId}</p>
            {selectedProposal.dateClaim ? <div className="mercy-research-date"><span>Date role</span><strong>{selectedProposal.dateClaim.value}</strong><small>{selectedProposal.dateClaim.role} · {selectedProposal.dateClaim.precision} precision</small></div> : null}
            <div className="mercy-detail-block"><div className="mercy-block-heading"><h3>Evidence pointers</h3><span>{selectedProposal.evidencePointers.length} pointers</span></div><div className="mercy-research-evidence-list">{selectedProposal.evidencePointers.map((pointer, index) => <article key={`${selectedProposal.proposalId}-${index}`}><strong>{pointer.graphFactTitle ?? pointer.family ?? "Source observation"}</strong>{pointer.sourceClusters.length ? <small>retained cluster {pointer.sourceClusters.join(", ")}</small> : null}{pointer.sourceLocator ? <a href={pointer.sourceLocator} target="_blank" rel="noreferrer">Open retained source <ExternalLink size={12} /></a> : null}</article>)}</div></div>
            <div className="mercy-research-nonclaims"><strong>What this does not claim</strong>{selectedProposal.nonclaims.map((nonclaim) => <span key={nonclaim}><CircleAlert size={13} />{nonclaim}</span>)}</div>
          </> : <p className="mercy-muted">No completed research proposal is admitted.</p>}
        </section>
      </div>

      {question ? <section className="mercy-research-question"><div className="mercy-detail-kicker"><CircleAlert size={15} /> High-leverage curator question</div><h3>{question.question}</h3><p>{question.answerEffect}</p><div className="mercy-research-impact"><span><b>{question.impact.candidate_connections}</b> candidate connection</span><span><b>{question.impact.cross_year_arc}</b> cross-year arc</span><span><b>{question.impact.potential_representation_links}</b> representation link</span></div><small>State: {stateLabel(question.state)} · priority: {question.priority} · no answer has been invented or recorded.</small></section> : null}

      <div className="mercy-research-next"><strong>Next bounded batch</strong><span>{mercyResearchMeta.nextBoundedBatch}</span><small>Search receipt: {mercyResearchMeta.sourceSearch.state} · {mercyResearchMeta.sourceSearch.queryFamilies.sean_penn_first_meeting ?? 0} direct-meeting records · no public-network research.</small></div>
    </section>
  );
}
