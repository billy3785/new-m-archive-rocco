// Generated from the completed, receipt-backed MERCY connection worker. Do not hand-edit.
// Derived research only: no canonical, inventory, media, filesystem, or public-network writes.

export type MercyResearchPointer = {
  family: string | null;
  packetId: string | null;
  graphFactId: string | null;
  graphFactTitle: string | null;
  sourceClusters: string[];
  sourceLocator: string | null;
};

export type MercyResearchProposal = {
  proposalId: string;
  subjectId: string;
  objectId: string;
  predicate: string;
  state: string;
  confidence: string;
  dateClaim: { role: string; value: string; precision: string } | null;
  evidencePointers: MercyResearchPointer[];
  nonclaims: string[];
};

export type MercyResearchQuestion = {
  questionId: string;
  question: string;
  state: string;
  priority: string;
  answerEffect: string;
  impact: { candidate_connections: number; cross_year_arc: number; potential_representation_links: number };
  evidencePointers: Array<{ graph_fact_id: string }>;
  suppressedCounts: Record<string, number>;
};

export const mercyResearchMeta = 
{
  "jobId": "mercy-connection-worker-2026-10-21-v2-repaired-graph",
  "status": "completed_connection_discovery_worker",
  "implementationVersion": "mercy-connection-worker/0.1.0",
  "years": [
    1985,
    1986,
    1987,
    1988,
    1989
  ],
  "sourceRecordCount": 12886,
  "proposalCount": 3,
  "directFirstMeetingHitCount": 0,
  "aliasProposalCount": 1,
  "contradictionLedgerCount": 1,
  "representationLedgerCount": 1,
  "searchedLanes": [
    "retained_webo_snapshot",
    "qa_passed_working_graph",
    "retained_mad_eyes_html",
    "local_master_case_projections"
  ],
  "inputFingerprints": {
    "graph_database": "sha256:375543de27929855f1f04511a18a8f4f6efe68163ecc662c8dc90d20beb43a8d",
    "graph_receipt": "sha256:7821e264d0bebcc4d012525da6575cebe2053c3d6e6e1825f55e0fbe12807224",
    "qa_receipt": "sha256:80edea4fa393d7004d85d09dec2b3432622a6ec97b39efe3dafd44f487e36233",
    "retained_snapshot": "sha256:cf1f1c40f52bf0c43f378c20a31e27a4e8b02d79cf2531c0dde925ccd5e84558"
  },
  "sourceSearch": {
    "state": "unresolved",
    "reason": "No retained source record in the pinned snapshot explicitly states that Sean Penn first met Madonna on the Material Girl set.",
    "queryFamilies": {
      "material_girl_shoot": 48,
      "sean_penn_first_meeting": 0,
      "sean_penn_live_to_tell": 30,
      "sean_penn_marriage": 39,
      "sean_penn_material_girl": 1,
      "sean_penn_set_context": 81
    }
  },
  "nextBoundedBatch": "Hold the source-scoped candidate and route the one high-leverage curator question; do not repeat the completed auxiliary search unless source fingerprints change.",
  "auxiliarySourceLaneAudit": {
    "status": "completed_read_only_auxiliary_audit_revalidated",
    "qaStatus": "qa_pass_auxiliary_revalidation",
    "directFirstMeetingHit": false,
    "madEyesFileCount": 5,
    "masterCaseFileCount": 472,
    "masterCaseMatchingFileCount": 5,
    "sourceAuditPath": "lmstudio_operating_model/receipts/mercy-connection-worker-2026-10-21-v2-repaired-graph/auxiliary-source-lane-audit.json",
    "qaReceiptPath": "lmstudio_operating_model/receipts/mercy-connection-worker-2026-10-21-v2-repaired-graph/auxiliary-source-lane-audit-qa-receipt.json"
  },
  "authorityBoundary": "Derived source-labelled proposals and ledgers only; canonical SQLite, NAS PostgreSQL, archive media, archive filesystem, and public network remain untouched.",
  "writes": {
    "archive_filesystem": 0,
    "archive_media": 0,
    "canonical_authority": 0,
    "derived_artifacts": 1,
    "inventory_authority": 0,
    "public_network": 0
  },
  "publicNetwork": 0,
  "workerReceiptPath": "lmstudio_operating_model/receipts/mercy-connection-worker-2026-10-21-v2-repaired-graph/worker-receipt.json",
  "sourceSearchReceiptPath": "lmstudio_operating_model/receipts/mercy-connection-worker-2026-10-21-v2-repaired-graph/source-search-receipt.json"
} as const;

export const mercyResearchProposals: MercyResearchProposal[] = 
[
  {
    "proposalId": "mercy.connection-proposal.fdbd24dd5bf2dc3a2ee8",
    "subjectId": "mercy.fact.4c1d21bfa7cbd55361bc",
    "objectId": "mercy.core.fact.9ceca259ef9a89b95413",
    "predicate": "records_marriage_of",
    "state": "archive_visible_supported",
    "confidence": "source_supported",
    "dateClaim": {
      "precision": "day",
      "role": "marriage",
      "value": "1985-08-16"
    },
    "evidencePointers": [
      {
        "family": "sean_penn_marriage",
        "packetId": "webo:source-item:source_item_49e4031db0be2896df1e91bee78bf8bffd639877335d1cd7986c0545f27fefca",
        "graphFactId": null,
        "graphFactTitle": null,
        "sourceClusters": [
          "160"
        ],
        "sourceLocator": "https://www.instagram.com/p/BFBbbSIDYZxROa3qaYxZYsvRLMKCJ4uwHSep0E0/"
      },
      {
        "family": "sean_penn_marriage",
        "packetId": "webo:source-item:source_item_41c366e4d65b3f2c462c113c9ce69990c952b58c0df769a29b1f6f0616bdb8e2",
        "graphFactId": null,
        "graphFactTitle": null,
        "sourceClusters": [
          "160"
        ],
        "sourceLocator": "https://www.instagram.com/p/BFBbfNgDYZ6VSm-03vTv1u-RZz2p6oXhS5n4Sc0/"
      },
      {
        "family": "sean_penn_marriage",
        "packetId": "webo:source-item:source_item_059ba25b5ce15a011a28736b8285377b616e12dff50068b81d06c9e0701a4765",
        "graphFactId": null,
        "graphFactTitle": null,
        "sourceClusters": [
          "160"
        ],
        "sourceLocator": "https://www.instagram.com/p/BFBbmPFjYaH2IWM2Q_lN1B9yJJZ7A97llBPSI00/"
      },
      {
        "family": "sean_penn_marriage",
        "packetId": "webo:source-item:source_item_046c09b40cd967561927463f990287e6fdb9d9cacb9ddf7b8da475d803a46dd9",
        "graphFactId": null,
        "graphFactTitle": null,
        "sourceClusters": [
          "223"
        ],
        "sourceLocator": "https://www.instagram.com/p/BFhRuBqDYTPm8WQlVNf8991HWt7ZCsviLSFAFo0/"
      },
      {
        "family": "sean_penn_marriage",
        "packetId": "webo:source-item:source_item_98c9cfa8e1059b907581654aa93479914bfd53904a5101585de86ecb68778d5f",
        "graphFactId": null,
        "graphFactTitle": null,
        "sourceClusters": [
          "223"
        ],
        "sourceLocator": "https://www.instagram.com/p/BFhR4A-DYTqFj3Cn7psCi-KylFsQT654ZWvta80/"
      },
      {
        "family": "sean_penn_marriage",
        "packetId": "webo:source-item:source_item_f9deb251f5d49b4a8561fa0087fee34bce1d706c1a3ed6027864d5559106a682",
        "graphFactId": null,
        "graphFactTitle": null,
        "sourceClusters": [
          "223"
        ],
        "sourceLocator": "https://www.instagram.com/p/BFhR-twjYT-JlKTedJPU6t5NDUKBnw7cCtbAW00/"
      },
      {
        "family": "sean_penn_marriage",
        "packetId": "webo:source-item:source_item_4ecaf808c50d7d019a89b68b647644c0ee5a7942db58443d1a358bb41ba2fdfb",
        "graphFactId": null,
        "graphFactTitle": null,
        "sourceClusters": [
          "223"
        ],
        "sourceLocator": "https://www.instagram.com/p/BFhSJ5LjYUYOpBTZjLHkdZXl4RygqdJ6TnFp9c0/"
      },
      {
        "family": "sean_penn_marriage",
        "packetId": "webo:source-item:source_item_87713b75568ea25003fbc68e6722120e2a015edaaf6e83b71734a24cbba76bfa",
        "graphFactId": null,
        "graphFactTitle": null,
        "sourceClusters": [
          "223"
        ],
        "sourceLocator": "https://www.instagram.com/p/BFhSmTrDYVZJbTRRmEbI-5_Oet9U0isw3PmjBc0/"
      },
      {
        "family": null,
        "packetId": null,
        "graphFactId": "mercy.fact.4c1d21bfa7cbd55361bc",
        "graphFactTitle": "Wedding of Madonna and Sean Penn",
        "sourceClusters": [],
        "sourceLocator": null
      }
    ],
    "nonclaims": [
      "This proposal does not assert an exact relationship end date.",
      "The retained source remains separately labelled evidence."
    ]
  },
  {
    "proposalId": "mercy.connection-proposal.fb3e655af6d74d3c1a8e",
    "subjectId": "mercy.core.fact.0abb4588909b729687f0",
    "objectId": "mercy.core.fact.9ceca259ef9a89b95413",
    "predicate": "source_contextual_link_through_film",
    "state": "archive_visible_supported",
    "confidence": "source_supported",
    "dateClaim": {
      "precision": "month",
      "role": "video_production",
      "value": "1985-12"
    },
    "evidencePointers": [
      {
        "family": "sean_penn_live_to_tell",
        "packetId": "webo:source-item:source_item_d788bc7fc24bc92cbe23ddb67381fbc2c5be8bfee15fae2a2818ba196be95e30",
        "graphFactId": null,
        "graphFactTitle": null,
        "sourceClusters": [
          "215"
        ],
        "sourceLocator": "https://www.instagram.com/p/BFaxye5jYapNIkEU68KneD494UJgx6x-0jWgGM0/"
      },
      {
        "family": "sean_penn_live_to_tell",
        "packetId": "webo:source-item:source_item_22adca5f913c21fd89bf49f21df4cad7042657d51467f4315d0bfd913b266d8b",
        "graphFactId": null,
        "graphFactTitle": null,
        "sourceClusters": [
          "215"
        ],
        "sourceLocator": "https://www.instagram.com/p/BFax5VRDYa8MayFcQMNotCCuWZrUv9wBg22fFM0/"
      },
      {
        "family": "sean_penn_live_to_tell",
        "packetId": "webo:source-item:source_item_585adf6aa89b07320f0bed98c0954c8f7f709585b9f242ee0a6bf4861e338a25",
        "graphFactId": null,
        "graphFactTitle": null,
        "sourceClusters": [
          "215"
        ],
        "sourceLocator": "https://www.instagram.com/p/BFax-VkDYbIlqRSI-iLtwCPJ0FS6nzXERWxsGk0/"
      },
      {
        "family": "sean_penn_live_to_tell",
        "packetId": "webo:source-item:source_item_eb051746df99f786443611b5e7abd97c1d58357e00db72b9d79092b2a37de1cd",
        "graphFactId": null,
        "graphFactTitle": null,
        "sourceClusters": [
          "215"
        ],
        "sourceLocator": "https://www.instagram.com/p/BFayQjRjYbrYIy9Hcq-I6VDNo-VU5vKyDrbOow0/"
      },
      {
        "family": "sean_penn_live_to_tell",
        "packetId": "webo:source-item:source_item_11ba49ecb0fde281c933bab3988c347e6fdb4eb5573be8f92433302554cb7419",
        "graphFactId": null,
        "graphFactTitle": null,
        "sourceClusters": [
          "215"
        ],
        "sourceLocator": "https://www.instagram.com/p/BFayYNtDYb7lx2H94ILhGFkKMdxiMb7Hct-UIE0/"
      },
      {
        "family": "sean_penn_live_to_tell",
        "packetId": "webo:source-item:source_item_16e80fe4edcfe8832fd667b0d658e70d6e3e067c2364bb9d51fde0cf8ff8d941",
        "graphFactId": null,
        "graphFactTitle": null,
        "sourceClusters": [
          "215"
        ],
        "sourceLocator": "https://www.instagram.com/p/BFayeM3DYcQwWwv5sT0eN-BzRqNWMnR6wVNGgE0/"
      },
      {
        "family": "sean_penn_live_to_tell",
        "packetId": "webo:source-item:source_item_f3dd215881aec0b83c3d5943f47444bd4a555e8be51d2b5d706b2649c03f7a67",
        "graphFactId": null,
        "graphFactTitle": null,
        "sourceClusters": [
          "215"
        ],
        "sourceLocator": "https://www.instagram.com/p/BFayi5_DYcY3nosXqB25d3wqWQVKwEYYiBdxoU0/"
      },
      {
        "family": "sean_penn_live_to_tell",
        "packetId": "webo:source-item:source_item_78d07d2e27f1d9c80184d3e77ad3f83ca934274551b38b7295459fd6dfeea0d0",
        "graphFactId": null,
        "graphFactTitle": null,
        "sourceClusters": [
          "215"
        ],
        "sourceLocator": "https://www.instagram.com/p/BFaytNoDYc4BGM894-8s4F44rSFpOLb3-U2Sjc0/"
      },
      {
        "family": null,
        "packetId": null,
        "graphFactId": "mercy.core.fact.0abb4588909b729687f0",
        "graphFactTitle": "Live to Tell",
        "sourceClusters": [],
        "sourceLocator": null
      }
    ],
    "nonclaims": [
      "The source connects the song to Sean Penn's film context; it does not place Sean Penn at the Live to Tell video shoot.",
      "This is not a canonical recording-identity merge."
    ]
  },
  {
    "proposalId": "mercy.connection-proposal.77e22d185d954efbade7",
    "subjectId": "mercy.core.fact.9ceca259ef9a89b95413",
    "objectId": "mercy.core.fact.68138748874c401b5817",
    "predicate": "possible_first_meeting_context",
    "state": "source_scoped_candidate_connection",
    "confidence": "needs_source",
    "dateClaim": {
      "precision": "day",
      "role": "source_context",
      "value": "1985-01-10"
    },
    "evidencePointers": [
      {
        "family": null,
        "packetId": null,
        "graphFactId": "mercy.core.fact.9ceca259ef9a89b95413",
        "graphFactTitle": "Sean Penn",
        "sourceClusters": [],
        "sourceLocator": null
      },
      {
        "family": null,
        "packetId": null,
        "graphFactId": "mercy.core.fact.68138748874c401b5817",
        "graphFactTitle": "Material Girl video shoot",
        "sourceClusters": [],
        "sourceLocator": null
      },
      {
        "family": "sean_penn_material_girl",
        "packetId": "webo:source-item:source_item_dce58e833dac3a16986592e6c84a4abe0f1839e033f34cfbf9b803beae8f2ad3",
        "graphFactId": null,
        "graphFactTitle": null,
        "sourceClusters": [
          "377"
        ],
        "sourceLocator": "https://www.instagram.com/p/BG3qe-pjYYDdCiVjhfsxwfpp43YUENw4OMh5DA0/"
      }
    ],
    "nonclaims": [
      "No retained source in this batch explicitly states that Sean Penn first met Madonna on the Material Girl set.",
      "The graph candidate is not promoted to a historical fact or exact meeting date.",
      "The one joint hit is an unrelated 1987 interview mention of Material Girl."
    ]
  }
]
;

export const mercyResearchQuestions: MercyResearchQuestion[] = 
[
  {
    "questionId": "mercy.connection-proposal.2c8c634a1cf8af678a07",
    "question": "Is there a retained article, caption, interview, or curator testimony that records Sean Penn meeting Madonna on the Material Girl video set?",
    "state": "awaiting_curator",
    "priority": "high",
    "answerEffect": "A supported answer would replace the current source-scoped candidate with a source-backed relationship and may connect the relevant local representations without changing originals.",
    "impact": {
      "candidate_connections": 1,
      "cross_year_arc": 1,
      "potential_representation_links": 1
    },
    "evidencePointers": [
      {
        "graph_fact_id": "mercy.core.fact.9ceca259ef9a89b95413"
      },
      {
        "graph_fact_id": "mercy.core.fact.68138748874c401b5817"
      }
    ],
    "suppressedCounts": {
      "consequence_free": 0,
      "duplicated": 0,
      "resolved": 0,
      "weakly_evidenced": 0
    }
  }
]
;

export const mercyResearchRepresentationLedger = 
[
  {
    "ledger_id": "mercy.connection-proposal.1ae000f9cfc20b7980c3",
    "matched_representation_count": 0,
    "nonclaims": [
      "No archive media was inspected or modified."
    ],
    "schema": "mercy-representation-match/v1",
    "scope": "1985-1989 Sean Penn / Material Girl / Live to Tell lookup",
    "state": "archive_visible_evidence_gap",
    "unresolved_reason": "No local representation label in the selected graph years directly matched the three lookup terms; absence is not negative proof."
  }
] as const;

export const mercyResearchContradictionLedger = 
[
  {
    "ledger_id": "mercy.connection-proposal.dd6e247a4743936ad053",
    "nonclaims": [
      "This audit row is not a new historical contradiction claim."
    ],
    "observation": "The retained wedding claim and later relationship-end claims are temporally compatible and must remain distinct date claims.",
    "repair_action": "Keep marriage start and later end evidence as separate claims; do not infer an exact end date from the wedding source.",
    "schema": "mercy-contradiction-ledger/v1",
    "source_lanes": [
      "retained_webo",
      "working_graph"
    ],
    "state": "compatible_temporal_claims",
    "subject_ids": [
      "mercy.fact.4c1d21bfa7cbd55361bc"
    ]
  }
] as const;
