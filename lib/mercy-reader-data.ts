export type MercyDatePrecision = "day" | "month" | "year";

export type MercyTimelineEvent = {
  factId: string;
  title: string;
  dateStart: string;
  dateEnd: string;
  datePrecision: MercyDatePrecision;
  eventType: string;
  place: string;
  confidence: number;
  sourceCount: number;
  sourceClusters: string[];
  assertion: string;
  sourceExcerpt: string;
  sourceUrl: string;
  uncertainties: string[];
};

export type MercyRepresentation = {
  representationId: string;
  label: string;
  relativePath: string;
  dateToken: string;
  observationState: string;
  provenanceState: string;
  logicalRepresentationId: string;
  caution: string;
};

export type MercyConnection = {
  connectionId: string;
  factId: string;
  predicate: string;
  target: string;
  confidence: number;
  state: string;
  why: string;
  sourceClusters: string[];
  representationIds?: string[];
};

export const mercyReaderMeta = {
  cohort: "1985 connected working canon",
  year: 1985,
  schema: "mercy-working-canon/v1",
  qaState: "qa_pending",
  generatedAt: "2026-10-21",
  sourceReceipt: "mercy-full-span-connected-working-canon-1958-2026-v1.1985/worker-receipt.json",
  snapshotContract: {
    sourcePath: "lmstudio_operating_model/knowledge/mercy-working-canon/mercy-full-span-connected-working-canon-1958-2026-v1.1985/working-canon.json",
    sourceSha256: "sha256:de33369ab4d58986ec0131f62989fe1b6399523b6d7321f31220f7bc74b696b9",
    masterCaseFingerprint: "sha256:cc690ad87f72c60655e6e6da1ed3c9b07faee12b689081548833e3ce60590764",
    yearContextFingerprint: "sha256:3b032920a2a5791c341b085ce863904d45607669aebb1000da0ae30fa487e807",
    databaseFingerprint: "sha256:ca698530958990b273f20c2be0e6ed7be945710f765fbbe10e9c9036d68f1b14",
    readMode: "sqlite_read_only_query_only",
  },
  aggregateContract: {
    sourcePath: "lmstudio_operating_model/knowledge/mercy-working-canon/mercy-full-span-connected-working-canon-1958-2026-v1.aggregate-v1/mercy-working-graph-1958-2026-v1.rebuild-20261021-indexed.sqlite",
    sourceDbSha256: "sha256:5fdd7b4e671dd46337afa72293ff85ba28e131a666a629f5560e04b9b3f0b828",
    projectionSha256: "sha256:c673bbf98efc23de4634000b15f9ce240fb3ed373d8505cdc2aeaadfb8766c77",
    inputManifestSha256: "sha256:c40cc3f87bccd3f639c09eb09dd13046d5fe60210915276b1fa8dfb46708ea0d",
    readMode: "sqlite_read_only_query_only",
    qaState: "qa_pending",
  },
  fullSpanMetrics: {
    years: 69,
    visibleFacts: 183344,
    dateClaims: 177749,
    typedConnections: 2128583,
    representations: 1863,
    sourceBundleItems: 855361,
    learningQuestions: 17,
  },
  nextAction: "Run independent working-canon QA, then expand the same pinned cohort contract to the remaining years.",
  authorityBoundary: "Visible first-draft working canon with source-labelled evidence. No canonical, inventory, archive-media, or filesystem mutation.",
  metrics: {
    visibleFacts: 256,
    typedConnections: 1352,
    representations: 12,
    historicallyMatchedRepresentations: 4,
    uncertaintyCount: 70,
  },
} as const;

export const mercyTimeline: MercyTimelineEvent[] = [
  {
    factId: "mercy.fact.a5444582c6a28143c4db",
    title: "Publicity photo session",
    dateStart: "1985",
    dateEnd: "1985",
    datePrecision: "year",
    eventType: "photo session",
    place: "United States",
    confidence: 0.9,
    sourceCount: 1,
    sourceClusters: ["7059"],
    assertion: "A retained source says photographer Herb Ritts was hired for publicity shots of Rosanna and Madonna.",
    sourceExcerpt: "Retained WEBO caption: a young photographer named Herb Ritts had been hired to take publicity shots of Rosanna and Madonna.",
    sourceUrl: "https://www.instagram.com/p/DZMb7DAIJNr/",
    uncertainties: ["Retained evidence supports year precision; no day was invented."],
  },
  {
    factId: "mercy.fact.8f3950c17c6995f20a35",
    title: "Interview with Mark Bego",
    dateStart: "1985-01-01",
    dateEnd: "1985-01-31",
    datePrecision: "month",
    eventType: "interview",
    place: "Danceteria, New York",
    confidence: 0.9,
    sourceCount: 1,
    sourceClusters: ["6415"],
    assertion: "The retained source places the Mark Kamins / Mark Bego interview in January 1985.",
    sourceExcerpt: "The caption says the interview was conducted in January ’85 and discusses Into the Groove’s early context.",
    sourceUrl: "https://www.instagram.com/p/DKfUgx5IyzN/",
    uncertainties: ["Retained evidence supports month precision; no day was invented."],
  },
  {
    factId: "mercy.fact.e456589c10e129b3e5c2",
    title: "Spin magazine photo session",
    dateStart: "1985-01-01",
    dateEnd: "1985-01-31",
    datePrecision: "month",
    eventType: "photo session",
    place: "Hawaii",
    confidence: 0.9,
    sourceCount: 1,
    sourceClusters: ["7024"],
    assertion: "A retained source links the premier Spin cover image to a Herb Ritts session in Hawaii in January 1985.",
    sourceExcerpt: "The retained caption identifies the premier issue cover of Madonna by Herb Ritts in Hawaii (Jan ’85).",
    sourceUrl: "https://www.instagram.com/p/DY5Rwq4kV4u/",
    uncertainties: ["Retained evidence supports month precision; no day was invented."],
  },
  {
    factId: "mercy.fact.4255dfc12f97e575d939",
    title: "Material Girl video shoot",
    dateStart: "1985-01-10",
    dateEnd: "1985-01-10",
    datePrecision: "day",
    eventType: "filming",
    place: "Ren-Mar Studios, Los Angeles",
    confidence: 0.95,
    sourceCount: 2,
    sourceClusters: ["6765"],
    assertion: "The retained sources place the start of Material Girl filming at Ren-Mar Studios on January 10, 1985.",
    sourceExcerpt: "Two retained captions identify Ren-Mar Studios and say shooting began Thursday, January 10; rehearsal timing remains separately qualified.",
    sourceUrl: "https://www.instagram.com/p/DT8pkTuCKTH/",
    uncertainties: [],
  },
  {
    factId: "mercy.fact.59304a07d1a7da34d9ae",
    title: "Like A Virgin promotional tour photo session",
    dateStart: "1985-01-19",
    dateEnd: "1985-01-19",
    datePrecision: "day",
    eventType: "photo session",
    place: "Japan",
    confidence: 0.9,
    sourceCount: 1,
    sourceClusters: ["165"],
    assertion: "A retained source places Hiro Itoh’s promotional-tour photography in Japan during the week of January 19, 1985.",
    sourceExcerpt: "The caption says Hiro Itoh photographed Madonna around the studios during the Like A Virgin promotional visit.",
    sourceUrl: "https://www.instagram.com/p/BFDp1AjjYQWdKQo1p6byg_BnTmYWykthxo7rfU0/",
    uncertainties: [],
  },
  {
    factId: "mercy.fact.5245d683a9bd24c30bd5",
    title: "Japan promotional visit",
    dateStart: "1985-02-08",
    dateEnd: "1985-02-08",
    datePrecision: "day",
    eventType: "promotional visit",
    place: "Japan",
    confidence: 0.95,
    sourceCount: 1,
    sourceClusters: ["171"],
    assertion: "The retained source records Madonna in Japan for Like A Virgin / Virgin Tour promotion on February 8, 1985.",
    sourceExcerpt: "A Focus magazine source is dated February 8, 1985 and describes a candid Japan visit.",
    sourceUrl: "https://www.instagram.com/p/BFD_O0rDYUekH5NVKa4TjYIV7dnKcDYWo1HfR40/",
    uncertainties: [],
  },
  {
    factId: "mercy.fact.ac453d56297cdd5ea0b1",
    title: "Material Girl video premiere on Countdown",
    dateStart: "1985-02-24",
    dateEnd: "1985-02-24",
    datePrecision: "day",
    eventType: "broadcast",
    place: "Melbourne, Australia",
    confidence: 0.9,
    sourceCount: 1,
    sourceClusters: ["6850"],
    assertion: "The retained source records the Material Girl video’s Australian premiere on Countdown on February 24, 1985.",
    sourceExcerpt: "The caption identifies Countdown in Melbourne and notes that the Material Girl video received its Australian premiere.",
    sourceUrl: "https://www.instagram.com/p/DXZiSt8CF_J/",
    uncertainties: [],
  },
  {
    factId: "mercy.fact.fc26ec41914c25a0cf5d",
    title: "Screening of Desperately Seeking Susan",
    dateStart: "1985-03-19",
    dateEnd: "1985-03-19",
    datePrecision: "day",
    eventType: "film screening",
    place: "86th Street Cinema, New York, NY",
    confidence: 0.95,
    sourceCount: 1,
    sourceClusters: ["7065"],
    assertion: "An Andy Warhol Diaries entry records a March 19, 1985 screening of Desperately Seeking Susan.",
    sourceExcerpt: "The retained source transcribes the diary entry: Paige had tickets for Desperately Seeking Susan screening on 86th Street.",
    sourceUrl: "https://www.instagram.com/p/DZVf7yhIecN/",
    uncertainties: [],
  },
  {
    factId: "mercy.fact.1f02bdc0653a14521620",
    title: "Desperately Seeking Susan premiere",
    dateStart: "1985-03-29",
    dateEnd: "1985-03-29",
    datePrecision: "day",
    eventType: "film premiere",
    place: "Century City Plaza, Los Angeles",
    confidence: 1,
    sourceCount: 5,
    sourceClusters: ["190"],
    assertion: "Five retained source items place the Desperately Seeking Susan premiere at Century City Plaza on March 29, 1985.",
    sourceExcerpt: "Multiple retained captions agree on March 29, 1985 at Century City Plaza in Los Angeles; the clothing detail is kept as source context, not identity proof.",
    sourceUrl: "https://www.instagram.com/p/BFNuJ0ajYfZG7Cd5aeGqe9V9LsxMbGEdur4My80/",
    uncertainties: [],
  },
  {
    factId: "mercy.fact.02cb7a58d582a22515b9",
    title: "Virgin Tour opening",
    dateStart: "1985-04-10",
    dateEnd: "1985-04-10",
    datePrecision: "day",
    eventType: "performance",
    place: "Seattle",
    confidence: 0.95,
    sourceCount: 15,
    sourceClusters: ["140"],
    assertion: "Fifteen retained source items place the Virgin Tour opening in Seattle on April 10, 1985.",
    sourceExcerpt: "The retained series says the Virgin Tour began in Seattle on April 10 for three nights and continued through June 11.",
    sourceUrl: "https://www.instagram.com/p/BE5OScgDYTmBdY6MAXrKGp9xRF8PdVIAhWkr7M0/",
    uncertainties: [],
  },
  {
    factId: "mercy.fact.e382c3a11e2b2a35859f",
    title: "Virgin Tour costume photo session",
    dateStart: "1985-05-30",
    dateEnd: "1985-05-30",
    datePrecision: "day",
    eventType: "photo session",
    place: "Hampton Coliseum",
    confidence: 0.95,
    sourceCount: 3,
    sourceClusters: ["141"],
    assertion: "Three retained source items place Virgin Tour costume photography at Hampton Coliseum on May 30, 1985.",
    sourceExcerpt: "The retained caption identifies May 30 at Hampton Coliseum, Virginia, and attributes the costume context to Maripol.",
    sourceUrl: "https://www.instagram.com/p/BE5R18RjYZFEPIAjR5PYVOkOnzew950svCgH4g0/",
    uncertainties: [],
  },
  {
    factId: "mercy.fact.5bdeb26344772b8398bc",
    title: "Live Aid performance",
    dateStart: "1985-07-13",
    dateEnd: "1985-07-13",
    datePrecision: "day",
    eventType: "performance",
    place: "London",
    confidence: 0.95,
    sourceCount: 1,
    sourceClusters: ["175"],
    assertion: "The retained source records Madonna’s Live Aid performance in London on July 13, 1985.",
    sourceExcerpt: "A retained source dates the Live Aid performance to July 13, 1985 and identifies Ken Regan as the official photographer for the day.",
    sourceUrl: "https://www.instagram.com/p/BFEgKlujYenU0t-whoAWSqOZ6742PMoHZWaDAg0/",
    uncertainties: [],
  },
];

export const mercyRepresentations: MercyRepresentation[] = [
  {
    representationId: "representation.inventory.asset:12720",
    label: "Madonna The Virgin Tour opens in Seattle USA 1985 TV news report.mp4",
    relativePath: "UNFILED/2011-2023/@eaDir/Madonna The Virgin Tour opens in Seattle USA 1985 TV news report.mp4",
    dateToken: "1985",
    observationState: "technical_sidecar",
    provenanceState: "source_observed",
    logicalRepresentationId: "representation.inventory.asset:10690",
    caution: "A NAS observation with a 1985 path token. It is context for discovery, not proof that the file is the opening-night recording.",
  },
  {
    representationId: "representation.inventory.asset:12189",
    label: "Madonna first ever Dutch TV Interview with Adam Curry in 1985 Countdown special.mp4",
    relativePath: "UNFILED/2011-2023/@eaDir/Madonna first ever Dutch TV Interview with Adam Curry in 1985 Countdown special.mp4",
    dateToken: "1985",
    observationState: "technical_sidecar",
    provenanceState: "source_observed",
    logicalRepresentationId: "representation.inventory.asset:10227",
    caution: "The filename supplies a searchable clue. It does not independently establish an event identity or broadcast date.",
  },
  {
    representationId: "representation.inventory.asset:10820",
    label: "Madonna ET News 1985 (Madonna Mania).mp4",
    relativePath: "UNFILED/2011-2023/Madonna  ET News 1985 (Madonna Mania).mp4",
    dateToken: "1985",
    observationState: "logical_archive_file",
    provenanceState: "source_observed",
    logicalRepresentationId: "representation.inventory.asset:10820",
    caution: "No retained event reached the bounded filename-match threshold. The unresolved state is preserved.",
  },
];

export const mercyConnections: MercyConnection[] = [
  {
    connectionId: "mercy.connection.reader.1985.material-girl-place",
    factId: "mercy.fact.4255dfc12f97e575d939",
    predicate: "occurred_at",
    target: "Ren-Mar Studios, Los Angeles",
    confidence: 0.95,
    state: "visible_working_canon_high_confidence",
    why: "Two retained WEBO captions share the same source cluster and identify Ren-Mar Studios while separately qualifying rehearsal timing.",
    sourceClusters: ["6765"],
  },
  {
    connectionId: "mercy.connection.reader.1985.susan-place",
    factId: "mercy.fact.1f02bdc0653a14521620",
    predicate: "occurred_at",
    target: "Century City Plaza, Los Angeles",
    confidence: 1,
    state: "visible_working_canon_high_confidence",
    why: "Five retained source items share the same date and place claim; the evidence bundle remains visible rather than being collapsed into one source.",
    sourceClusters: ["190"],
  },
  {
    connectionId: "mercy.connection.reader.1985.virgin-tour-place",
    factId: "mercy.fact.02cb7a58d582a22515b9",
    predicate: "occurred_at",
    target: "Seattle",
    confidence: 0.95,
    state: "visible_working_canon_high_confidence",
    why: "Fifteen retained source items agree on the opening date and Seattle as the first stop, while later performance dates remain distinct.",
    sourceClusters: ["140"],
    representationIds: ["representation.inventory.asset:12720"],
  },
  {
    connectionId: "mercy.connection.reader.1985.susan-source",
    factId: "mercy.fact.1f02bdc0653a14521620",
    predicate: "supported_by",
    target: "5 retained WEBO source items",
    confidence: 1,
    state: "visible_source_support",
    why: "The same fact retains five source items, each with its own source pointer; agreement increases support but does not erase source lineage.",
    sourceClusters: ["190"],
  },
  {
    connectionId: "mercy.connection.reader.1985.live-aid-source",
    factId: "mercy.fact.5bdeb26344772b8398bc",
    predicate: "supported_by",
    target: "WEBO retained local corpus",
    confidence: 0.95,
    state: "visible_source_support",
    why: "The retained source names the date and London performance context; the reader keeps the performance claim separate from photography and broadcast claims.",
    sourceClusters: ["175"],
  },
];
