// Generated from the QA-bound normalized Mercy adapter projection. Do not hand-edit.
// Candidate relationships remain source-scoped and non-canonical until curator disposition.
// Source: lmstudio_operating_model/receipts/mercy-adapter-connection-normalizations/mercy-adapter-connection-wave-2026-v2/run/adapter-connection-normalizer-result.json
// Source fingerprint: sha256:ae71058bc34c7ee802f4886659e5cb79ead86d244126e5ca97f95fc5808bbbb8
// QA receipt: lmstudio_operating_model/receipts/mercy-adapter-connection-qa/mercy-adapter-connection-wave-2026-v2/run/qa-receipt.json
// QA fingerprint: sha256:a9eadcc1c5566d5b998ad56eb03fc1e444fa5a086e91637b5b151eab66e8a741

export type MercyCandidateDateClaim = {
  claim_year: string;
  precision: string;
  scope: string;
  value: string;
};

export type MercyCandidate = {
  candidateId: string;
  partitionId: string;
  year: number;
  domain: string;
  domainLabel: string;
  state: string;
  dateScope: string;
  adapterSourceId: string;
  sourceEvidenceId: string;
  subject: string;
  target: string;
  predicate: string;
  confidence: number;
  dateClaim: MercyCandidateDateClaim | null;
  evidenceText: string;
  nonclaims: string[];
  sourceLanes: string[];
  partitionObservedRows: number;
  partitionRepresentationObservations: number;
  heldSources: string[];
};

export const mercyCandidateQueueMeta = {
  qaState: "qa_pass_derived_only",
  qaChecksPassed: 12,
  candidateCount: 21,
  heldAdapterObservationCount: 14,
  representationObservationCount: 21,
  authorityBoundary: "Derived source-scoped candidates only; no canonical promotion, inventory mutation, media mutation, filesystem mutation, or public-network acquisition.",
} as const;

export const mercyReaderCandidates: MercyCandidate[] = 
[
  {
    "candidateId": "mercy.conn.b62e24ab8dc11a4361093f3b",
    "partitionId": "coverage-2026-music_and_releases",
    "year": 2026,
    "domain": "music_and_releases",
    "domainLabel": "Music, works, recordings, and releases",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:f892a8864109d91a1a26",
    "subject": "event:webo:f892a8864109d91a1a26",
    "target": "Music, works, recordings, and releases",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.9,
    "dateClaim": {
      "claim_year": "1984",
      "precision": "day",
      "scope": "outside_partition_year",
      "value": "1984-02-12"
    },
    "evidenceText": "Madonna works on — Filming of Borderline music video and interview production 1984-02-12",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.canonical.sqlite",
      "archive.nas.postgresql",
      "archive.retained_sources"
    ],
    "partitionObservedRows": 85,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.a4da71ac086628867b0dd22c",
    "partitionId": "coverage-2026-music_and_releases",
    "year": 2026,
    "domain": "music_and_releases",
    "domainLabel": "Music, works, recordings, and releases",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:34ac895d3cab373d2414",
    "subject": "event:webo:34ac895d3cab373d2414",
    "target": "Music, works, recordings, and releases",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.9,
    "dateClaim": {
      "claim_year": "1984",
      "precision": "day",
      "scope": "outside_partition_year",
      "value": "1984-04-21"
    },
    "evidenceText": "Madonna — Lucky Star and M A D ⭕️ N N A chart on Music Week Disco and Dance charts historical_context 1984-04-21",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.canonical.sqlite",
      "archive.nas.postgresql",
      "archive.retained_sources"
    ],
    "partitionObservedRows": 85,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.7e996013d3dda094e53d9fcd",
    "partitionId": "coverage-2026-music_and_releases",
    "year": 2026,
    "domain": "music_and_releases",
    "domainLabel": "Music, works, recordings, and releases",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:0963fb05f72f495508b9",
    "subject": "event:webo:0963fb05f72f495508b9",
    "target": "Music, works, recordings, and releases",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.9,
    "dateClaim": {
      "claim_year": "1983",
      "precision": "day",
      "scope": "outside_partition_year",
      "value": "1983-12-17"
    },
    "evidenceText": "Madonna — Music Week chart and column coverage historical_context 1983-12-17",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.canonical.sqlite",
      "archive.nas.postgresql",
      "archive.retained_sources"
    ],
    "partitionObservedRows": 85,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.846f61fb1bc5675d71139ea6",
    "partitionId": "coverage-2026-people_places_roles",
    "year": 2026,
    "domain": "people_places_roles",
    "domainLabel": "People, places, and roles",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:d2ef5ca880874cca218b",
    "subject": "event:webo:d2ef5ca880874cca218b",
    "target": "People, places, and roles",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.9,
    "dateClaim": {
      "claim_year": "1985",
      "precision": "day",
      "scope": "outside_partition_year",
      "value": "1985-02-22"
    },
    "evidenceText": "Madonna is photographed — People Magazine Interview and Photo Session photoshoot 1985-02-22",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.canonical.sqlite",
      "archive.retained_sources",
      "archive.nas.postgresql"
    ],
    "partitionObservedRows": 0,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.c7c1896b8fbb2255af4df276",
    "partitionId": "coverage-2026-people_places_roles",
    "year": 2026,
    "domain": "people_places_roles",
    "domainLabel": "People, places, and roles",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:34ac895d3cab373d2414",
    "subject": "event:webo:34ac895d3cab373d2414",
    "target": "People, places, and roles",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.9,
    "dateClaim": {
      "claim_year": "1984",
      "precision": "day",
      "scope": "outside_partition_year",
      "value": "1984-04-21"
    },
    "evidenceText": "Madonna — Lucky Star and M A D ⭕️ N N A chart on Music Week Disco and Dance charts historical_context 1984-04-21",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.canonical.sqlite",
      "archive.retained_sources",
      "archive.nas.postgresql"
    ],
    "partitionObservedRows": 0,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.dab9e7c23077afd9f9855a37",
    "partitionId": "coverage-2026-people_places_roles",
    "year": 2026,
    "domain": "people_places_roles",
    "domainLabel": "People, places, and roles",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:38a695d482c246926aca",
    "subject": "event:webo:38a695d482c246926aca",
    "target": "People, places, and roles",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.6,
    "dateClaim": {
      "claim_year": "1983",
      "precision": "month",
      "scope": "outside_partition_year",
      "value": "1983-10-01"
    },
    "evidenceText": "Madonna is photographed with Madonna and Jellybean photoshoot 1983-10-01",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.canonical.sqlite",
      "archive.retained_sources",
      "archive.nas.postgresql"
    ],
    "partitionObservedRows": 0,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.d8f3d9a70faf33d46250285c",
    "partitionId": "coverage-2026-performance_and_tours",
    "year": 2026,
    "domain": "performance_and_tours",
    "domainLabel": "Performances, rehearsals, tours, and live events",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:6854537dddb30bfa3591",
    "subject": "event:webo:6854537dddb30bfa3591",
    "target": "Performances, rehearsals, tours, and live events",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.9,
    "dateClaim": {
      "claim_year": "1984",
      "precision": "day",
      "scope": "outside_partition_year",
      "value": "1984-04-21"
    },
    "evidenceText": "Madonna performs — Music Week reports chart performances for Holiday and Lucky Star performance 1984-04-21",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.canonical.sqlite",
      "archive.nas.postgresql",
      "archive.retained_sources"
    ],
    "partitionObservedRows": 10,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.834b9f21451156b875cb4c1c",
    "partitionId": "coverage-2026-performance_and_tours",
    "year": 2026,
    "domain": "performance_and_tours",
    "domainLabel": "Performances, rehearsals, tours, and live events",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:38a695d482c246926aca",
    "subject": "event:webo:38a695d482c246926aca",
    "target": "Performances, rehearsals, tours, and live events",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.6,
    "dateClaim": {
      "claim_year": "1983",
      "precision": "month",
      "scope": "outside_partition_year",
      "value": "1983-10-01"
    },
    "evidenceText": "Madonna is photographed with Madonna and Jellybean photoshoot 1983-10-01",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.canonical.sqlite",
      "archive.nas.postgresql",
      "archive.retained_sources"
    ],
    "partitionObservedRows": 10,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.aa18bb890b8cf3af819bce82",
    "partitionId": "coverage-2026-performance_and_tours",
    "year": 2026,
    "domain": "performance_and_tours",
    "domainLabel": "Performances, rehearsals, tours, and live events",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:34ac895d3cab373d2414",
    "subject": "event:webo:34ac895d3cab373d2414",
    "target": "Performances, rehearsals, tours, and live events",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.9,
    "dateClaim": {
      "claim_year": "1984",
      "precision": "day",
      "scope": "outside_partition_year",
      "value": "1984-04-21"
    },
    "evidenceText": "Madonna — Lucky Star and M A D ⭕️ N N A chart on Music Week Disco and Dance charts historical_context 1984-04-21",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.canonical.sqlite",
      "archive.nas.postgresql",
      "archive.retained_sources"
    ],
    "partitionObservedRows": 10,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.7dc7c3f1e45d2b861245096f",
    "partitionId": "coverage-2026-projects_and_career",
    "year": 2026,
    "domain": "projects_and_career",
    "domainLabel": "Projects, career transitions, and public life",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:38a695d482c246926aca",
    "subject": "event:webo:38a695d482c246926aca",
    "target": "Projects, career transitions, and public life",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.6,
    "dateClaim": {
      "claim_year": "1983",
      "precision": "month",
      "scope": "outside_partition_year",
      "value": "1983-10-01"
    },
    "evidenceText": "Madonna is photographed with Madonna and Jellybean photoshoot 1983-10-01",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.canonical.sqlite",
      "archive.retained_sources",
      "archive.nas.postgresql"
    ],
    "partitionObservedRows": 1,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.6fb637e5b20dfc69e3dd1cfa",
    "partitionId": "coverage-2026-projects_and_career",
    "year": 2026,
    "domain": "projects_and_career",
    "domainLabel": "Projects, career transitions, and public life",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:34ac895d3cab373d2414",
    "subject": "event:webo:34ac895d3cab373d2414",
    "target": "Projects, career transitions, and public life",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.9,
    "dateClaim": {
      "claim_year": "1984",
      "precision": "day",
      "scope": "outside_partition_year",
      "value": "1984-04-21"
    },
    "evidenceText": "Madonna — Lucky Star and M A D ⭕️ N N A chart on Music Week Disco and Dance charts historical_context 1984-04-21",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.canonical.sqlite",
      "archive.retained_sources",
      "archive.nas.postgresql"
    ],
    "partitionObservedRows": 1,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.cc4920fb034a3a7357c48837",
    "partitionId": "coverage-2026-projects_and_career",
    "year": 2026,
    "domain": "projects_and_career",
    "domainLabel": "Projects, career transitions, and public life",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:d90dc2920efecd596edb",
    "subject": "event:webo:d90dc2920efecd596edb",
    "target": "Projects, career transitions, and public life",
    "predicate": "source_candidate_matches_partition",
    "confidence": 1,
    "dateClaim": {
      "claim_year": "1985",
      "precision": "day",
      "scope": "outside_partition_year",
      "value": "1985-08-16"
    },
    "evidenceText": "Madonna — Wedding of Madonna and Sean Penn historical_context 1985-08-16",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.canonical.sqlite",
      "archive.retained_sources",
      "archive.nas.postgresql"
    ],
    "partitionObservedRows": 1,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.f147c3604a019e9d0b7f24f7",
    "partitionId": "coverage-2026-representations_and_provenance",
    "year": 2026,
    "domain": "representations_and_provenance",
    "domainLabel": "Representations, files, and provenance",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:38a695d482c246926aca",
    "subject": "event:webo:38a695d482c246926aca",
    "target": "Representations, files, and provenance",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.6,
    "dateClaim": {
      "claim_year": "1983",
      "precision": "month",
      "scope": "outside_partition_year",
      "value": "1983-10-01"
    },
    "evidenceText": "Madonna is photographed with Madonna and Jellybean photoshoot 1983-10-01",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.files_and_representations",
      "archive.nas.postgresql",
      "archive.canonical.sqlite",
      "archive.retained_sources"
    ],
    "partitionObservedRows": 0,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.663971a1484bdd26f4c6c960",
    "partitionId": "coverage-2026-representations_and_provenance",
    "year": 2026,
    "domain": "representations_and_provenance",
    "domainLabel": "Representations, files, and provenance",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:34ac895d3cab373d2414",
    "subject": "event:webo:34ac895d3cab373d2414",
    "target": "Representations, files, and provenance",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.9,
    "dateClaim": {
      "claim_year": "1984",
      "precision": "day",
      "scope": "outside_partition_year",
      "value": "1984-04-21"
    },
    "evidenceText": "Madonna — Lucky Star and M A D ⭕️ N N A chart on Music Week Disco and Dance charts historical_context 1984-04-21",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.files_and_representations",
      "archive.nas.postgresql",
      "archive.canonical.sqlite",
      "archive.retained_sources"
    ],
    "partitionObservedRows": 0,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.2bb239017ed4d7b11b68d6ff",
    "partitionId": "coverage-2026-representations_and_provenance",
    "year": 2026,
    "domain": "representations_and_provenance",
    "domainLabel": "Representations, files, and provenance",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:d90dc2920efecd596edb",
    "subject": "event:webo:d90dc2920efecd596edb",
    "target": "Representations, files, and provenance",
    "predicate": "source_candidate_matches_partition",
    "confidence": 1,
    "dateClaim": {
      "claim_year": "1985",
      "precision": "day",
      "scope": "outside_partition_year",
      "value": "1985-08-16"
    },
    "evidenceText": "Madonna — Wedding of Madonna and Sean Penn historical_context 1985-08-16",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.files_and_representations",
      "archive.nas.postgresql",
      "archive.canonical.sqlite",
      "archive.retained_sources"
    ],
    "partitionObservedRows": 0,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.468d22415ee2f9a770d9eec7",
    "partitionId": "coverage-2026-sources_and_research",
    "year": 2026,
    "domain": "sources_and_research",
    "domainLabel": "Sources, research, and evidence",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:38a695d482c246926aca",
    "subject": "event:webo:38a695d482c246926aca",
    "target": "Sources, research, and evidence",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.6,
    "dateClaim": {
      "claim_year": "1983",
      "precision": "month",
      "scope": "outside_partition_year",
      "value": "1983-10-01"
    },
    "evidenceText": "Madonna is photographed with Madonna and Jellybean photoshoot 1983-10-01",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.retained_sources",
      "archive.canonical.sqlite"
    ],
    "partitionObservedRows": 0,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.86b2fd7c5bd6c0bc92d1c18b",
    "partitionId": "coverage-2026-sources_and_research",
    "year": 2026,
    "domain": "sources_and_research",
    "domainLabel": "Sources, research, and evidence",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:34ac895d3cab373d2414",
    "subject": "event:webo:34ac895d3cab373d2414",
    "target": "Sources, research, and evidence",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.9,
    "dateClaim": {
      "claim_year": "1984",
      "precision": "day",
      "scope": "outside_partition_year",
      "value": "1984-04-21"
    },
    "evidenceText": "Madonna — Lucky Star and M A D ⭕️ N N A chart on Music Week Disco and Dance charts historical_context 1984-04-21",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.retained_sources",
      "archive.canonical.sqlite"
    ],
    "partitionObservedRows": 0,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.8ffed74e602a2f5a05f905ab",
    "partitionId": "coverage-2026-sources_and_research",
    "year": 2026,
    "domain": "sources_and_research",
    "domainLabel": "Sources, research, and evidence",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:d90dc2920efecd596edb",
    "subject": "event:webo:d90dc2920efecd596edb",
    "target": "Sources, research, and evidence",
    "predicate": "source_candidate_matches_partition",
    "confidence": 1,
    "dateClaim": {
      "claim_year": "1985",
      "precision": "day",
      "scope": "outside_partition_year",
      "value": "1985-08-16"
    },
    "evidenceText": "Madonna — Wedding of Madonna and Sean Penn historical_context 1985-08-16",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.retained_sources",
      "archive.canonical.sqlite"
    ],
    "partitionObservedRows": 0,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.74d4494b95a52ca5ff01877e",
    "partitionId": "coverage-2026-visual_and_media",
    "year": 2026,
    "domain": "visual_and_media",
    "domainLabel": "Photography, film, television, press, and visual media",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:7a939339708ddc020a6c",
    "subject": "event:webo:7a939339708ddc020a6c",
    "target": "Photography, film, television, press, and visual media",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.9,
    "dateClaim": {
      "claim_year": "1984",
      "precision": "day",
      "scope": "outside_partition_year",
      "value": "1984-01-23"
    },
    "evidenceText": "Madonna appears — UK press interviews and photo shoots broadcast_appearance 1984-01-23",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.canonical.sqlite",
      "archive.nas.postgresql",
      "archive.files_and_representations",
      "archive.retained_sources"
    ],
    "partitionObservedRows": 14,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.2d2d59a861f369b3c01c18cb",
    "partitionId": "coverage-2026-visual_and_media",
    "year": 2026,
    "domain": "visual_and_media",
    "domainLabel": "Photography, film, television, press, and visual media",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:38a695d482c246926aca",
    "subject": "event:webo:38a695d482c246926aca",
    "target": "Photography, film, television, press, and visual media",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.6,
    "dateClaim": {
      "claim_year": "1983",
      "precision": "month",
      "scope": "outside_partition_year",
      "value": "1983-10-01"
    },
    "evidenceText": "Madonna is photographed with Madonna and Jellybean photoshoot 1983-10-01",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.canonical.sqlite",
      "archive.nas.postgresql",
      "archive.files_and_representations",
      "archive.retained_sources"
    ],
    "partitionObservedRows": 14,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  },
  {
    "candidateId": "mercy.conn.c665b607b767c121814477d0",
    "partitionId": "coverage-2026-visual_and_media",
    "year": 2026,
    "domain": "visual_and_media",
    "domainLabel": "Photography, film, television, press, and visual media",
    "state": "held_outside_partition_year",
    "dateScope": "outside_partition_year",
    "adapterSourceId": "archive.qdrant",
    "sourceEvidenceId": "event:webo:34ac895d3cab373d2414",
    "subject": "event:webo:34ac895d3cab373d2414",
    "target": "Photography, film, television, press, and visual media",
    "predicate": "source_candidate_matches_partition",
    "confidence": 0.9,
    "dateClaim": {
      "claim_year": "1984",
      "precision": "day",
      "scope": "outside_partition_year",
      "value": "1984-04-21"
    },
    "evidenceText": "Madonna — Lucky Star and M A D ⭕️ N N A chart on Music Week Disco and Dance charts historical_context 1984-04-21",
    "nonclaims": [
      "source-scoped discovery candidate only",
      "vector score and text overlap do not prove entity identity",
      "the query does not prove that this source record belongs to the partition",
      "a date outside the partition year is held for review rather than treated as a match"
    ],
    "sourceLanes": [
      "archive.canonical.sqlite",
      "archive.nas.postgresql",
      "archive.files_and_representations",
      "archive.retained_sources"
    ],
    "partitionObservedRows": 14,
    "partitionRepresentationObservations": 3,
    "heldSources": [
      "archive.nas.postgresql",
      "archive.online_research"
    ]
  }
]
;
