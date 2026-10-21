// Generated from the read-only aggregate MERCY working graph. Do not hand-edit.
// Source status remains derived/qa_pending; this index never promotes canonical or inventory claims.
// Source DB: MERCY working-graph source (external to this checkout)
// Source DB fingerprint: sha256:5fdd7b4e671dd46337afa72293ff85ba28e131a666a629f5560e04b9b3f0b828

export type MercyYearSummary = {
  year: number;
  factCount: number;
  dateClaimCount: number;
  connectionCount: number;
  representationCount: number;
  sourceBundleCount: number;
  status: string;
};

export type MercyYearHighlight = {
  year: number;
  factId: string;
  factType: string;
  title: string;
  dateStart: string;
  dateEnd: string;
  datePrecision: string;
  confidence: number;
  assertion: string;
  sourceLanes: string[];
};

export const mercyReaderYears: MercyYearSummary[] = 
[
  {
    "year": 1958,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 309,
    "representationCount": 27,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1959,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 204,
    "representationCount": 27,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1960,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 196,
    "representationCount": 24,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1961,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 184,
    "representationCount": 22,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1962,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 199,
    "representationCount": 26,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1963,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 203,
    "representationCount": 27,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1964,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 199,
    "representationCount": 26,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1965,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 202,
    "representationCount": 27,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1966,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 203,
    "representationCount": 27,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1967,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 202,
    "representationCount": 27,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1968,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 201,
    "representationCount": 27,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1969,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 192,
    "representationCount": 24,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1970,
    "factCount": 7,
    "dateClaimCount": 14,
    "connectionCount": 243,
    "representationCount": 27,
    "sourceBundleCount": 17,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1971,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 200,
    "representationCount": 26,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1972,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 204,
    "representationCount": 27,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1973,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 201,
    "representationCount": 27,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1974,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 202,
    "representationCount": 27,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1975,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 202,
    "representationCount": 27,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1976,
    "factCount": 1,
    "dateClaimCount": 2,
    "connectionCount": 223,
    "representationCount": 36,
    "sourceBundleCount": 1,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1977,
    "factCount": 5,
    "dateClaimCount": 10,
    "connectionCount": 224,
    "representationCount": 27,
    "sourceBundleCount": 5,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1978,
    "factCount": 8,
    "dateClaimCount": 16,
    "connectionCount": 235,
    "representationCount": 27,
    "sourceBundleCount": 8,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1979,
    "factCount": 16,
    "dateClaimCount": 32,
    "connectionCount": 272,
    "representationCount": 27,
    "sourceBundleCount": 16,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1980,
    "factCount": 3441,
    "dateClaimCount": 2824,
    "connectionCount": 37495,
    "representationCount": 27,
    "sourceBundleCount": 17816,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1981,
    "factCount": 30,
    "dateClaimCount": 60,
    "connectionCount": 353,
    "representationCount": 27,
    "sourceBundleCount": 34,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1982,
    "factCount": 3802,
    "dateClaimCount": 3520,
    "connectionCount": 42831,
    "representationCount": 27,
    "sourceBundleCount": 18186,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1983,
    "factCount": 4805,
    "dateClaimCount": 5268,
    "connectionCount": 59337,
    "representationCount": 25,
    "sourceBundleCount": 20128,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1984,
    "factCount": 6057,
    "dateClaimCount": 7558,
    "connectionCount": 64499,
    "representationCount": 27,
    "sourceBundleCount": 22011,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1985,
    "factCount": 4419,
    "dateClaimCount": 4544,
    "connectionCount": 54000,
    "representationCount": 34,
    "sourceBundleCount": 19193,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1986,
    "factCount": 3838,
    "dateClaimCount": 3590,
    "connectionCount": 43816,
    "representationCount": 27,
    "sourceBundleCount": 18379,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1987,
    "factCount": 3901,
    "dateClaimCount": 3717,
    "connectionCount": 44840,
    "representationCount": 27,
    "sourceBundleCount": 18430,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1988,
    "factCount": 3851,
    "dateClaimCount": 3618,
    "connectionCount": 44907,
    "representationCount": 27,
    "sourceBundleCount": 18315,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1989,
    "factCount": 3967,
    "dateClaimCount": 3850,
    "connectionCount": 48808,
    "representationCount": 27,
    "sourceBundleCount": 18631,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1990,
    "factCount": 4595,
    "dateClaimCount": 5090,
    "connectionCount": 58388,
    "representationCount": 27,
    "sourceBundleCount": 19692,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1991,
    "factCount": 4252,
    "dateClaimCount": 4406,
    "connectionCount": 55699,
    "representationCount": 27,
    "sourceBundleCount": 19221,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1992,
    "factCount": 4393,
    "dateClaimCount": 4683,
    "connectionCount": 56616,
    "representationCount": 27,
    "sourceBundleCount": 19441,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1993,
    "factCount": 4527,
    "dateClaimCount": 4939,
    "connectionCount": 57727,
    "representationCount": 27,
    "sourceBundleCount": 19585,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1994,
    "factCount": 4437,
    "dateClaimCount": 4770,
    "connectionCount": 57636,
    "representationCount": 27,
    "sourceBundleCount": 19464,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1995,
    "factCount": 4329,
    "dateClaimCount": 4574,
    "connectionCount": 57322,
    "representationCount": 27,
    "sourceBundleCount": 19411,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1996,
    "factCount": 4191,
    "dateClaimCount": 4270,
    "connectionCount": 52252,
    "representationCount": 27,
    "sourceBundleCount": 18862,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1997,
    "factCount": 4056,
    "dateClaimCount": 4026,
    "connectionCount": 50084,
    "representationCount": 27,
    "sourceBundleCount": 18820,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1998,
    "factCount": 4271,
    "dateClaimCount": 4440,
    "connectionCount": 53147,
    "representationCount": 27,
    "sourceBundleCount": 19347,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 1999,
    "factCount": 3926,
    "dateClaimCount": 3762,
    "connectionCount": 48051,
    "representationCount": 27,
    "sourceBundleCount": 18722,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2000,
    "factCount": 3748,
    "dateClaimCount": 3412,
    "connectionCount": 41794,
    "representationCount": 27,
    "sourceBundleCount": 18143,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2001,
    "factCount": 3835,
    "dateClaimCount": 3582,
    "connectionCount": 42644,
    "representationCount": 27,
    "sourceBundleCount": 18266,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2002,
    "factCount": 3594,
    "dateClaimCount": 3100,
    "connectionCount": 39644,
    "representationCount": 27,
    "sourceBundleCount": 17990,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2003,
    "factCount": 3809,
    "dateClaimCount": 3534,
    "connectionCount": 42884,
    "representationCount": 27,
    "sourceBundleCount": 18216,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2004,
    "factCount": 3606,
    "dateClaimCount": 3140,
    "connectionCount": 39137,
    "representationCount": 27,
    "sourceBundleCount": 18022,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2005,
    "factCount": 3845,
    "dateClaimCount": 3604,
    "connectionCount": 42967,
    "representationCount": 27,
    "sourceBundleCount": 18278,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2006,
    "factCount": 3910,
    "dateClaimCount": 3736,
    "connectionCount": 43219,
    "representationCount": 27,
    "sourceBundleCount": 18407,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2007,
    "factCount": 3745,
    "dateClaimCount": 3406,
    "connectionCount": 41433,
    "representationCount": 27,
    "sourceBundleCount": 18183,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2008,
    "factCount": 3964,
    "dateClaimCount": 3844,
    "connectionCount": 42945,
    "representationCount": 27,
    "sourceBundleCount": 18553,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2009,
    "factCount": 3924,
    "dateClaimCount": 3764,
    "connectionCount": 43280,
    "representationCount": 27,
    "sourceBundleCount": 18471,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2010,
    "factCount": 3834,
    "dateClaimCount": 3584,
    "connectionCount": 42876,
    "representationCount": 27,
    "sourceBundleCount": 18271,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2011,
    "factCount": 3542,
    "dateClaimCount": 3010,
    "connectionCount": 38931,
    "representationCount": 27,
    "sourceBundleCount": 17950,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2012,
    "factCount": 3892,
    "dateClaimCount": 3699,
    "connectionCount": 42539,
    "representationCount": 27,
    "sourceBundleCount": 18417,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2013,
    "factCount": 3794,
    "dateClaimCount": 3502,
    "connectionCount": 42682,
    "representationCount": 27,
    "sourceBundleCount": 18189,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2014,
    "factCount": 3693,
    "dateClaimCount": 3302,
    "connectionCount": 41064,
    "representationCount": 27,
    "sourceBundleCount": 18089,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2015,
    "factCount": 3740,
    "dateClaimCount": 3396,
    "connectionCount": 41436,
    "representationCount": 27,
    "sourceBundleCount": 18167,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2016,
    "factCount": 3772,
    "dateClaimCount": 3460,
    "connectionCount": 41947,
    "representationCount": 27,
    "sourceBundleCount": 18172,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2017,
    "factCount": 3777,
    "dateClaimCount": 3467,
    "connectionCount": 42598,
    "representationCount": 27,
    "sourceBundleCount": 18152,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2018,
    "factCount": 3783,
    "dateClaimCount": 3482,
    "connectionCount": 42692,
    "representationCount": 27,
    "sourceBundleCount": 18158,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2019,
    "factCount": 3805,
    "dateClaimCount": 3526,
    "connectionCount": 42060,
    "representationCount": 27,
    "sourceBundleCount": 18205,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2020,
    "factCount": 3751,
    "dateClaimCount": 3418,
    "connectionCount": 41810,
    "representationCount": 27,
    "sourceBundleCount": 18153,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2021,
    "factCount": 3703,
    "dateClaimCount": 3322,
    "connectionCount": 41393,
    "representationCount": 27,
    "sourceBundleCount": 18078,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2022,
    "factCount": 3783,
    "dateClaimCount": 3479,
    "connectionCount": 42444,
    "representationCount": 27,
    "sourceBundleCount": 18158,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2023,
    "factCount": 3855,
    "dateClaimCount": 3626,
    "connectionCount": 43008,
    "representationCount": 27,
    "sourceBundleCount": 18255,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2024,
    "factCount": 3859,
    "dateClaimCount": 3634,
    "connectionCount": 43009,
    "representationCount": 27,
    "sourceBundleCount": 18277,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2025,
    "factCount": 3779,
    "dateClaimCount": 3471,
    "connectionCount": 42669,
    "representationCount": 27,
    "sourceBundleCount": 18154,
    "status": "completed_visible_working_canon"
  },
  {
    "year": 2026,
    "factCount": 3860,
    "dateClaimCount": 3632,
    "connectionCount": 42970,
    "representationCount": 27,
    "sourceBundleCount": 18235,
    "status": "completed_visible_working_canon"
  }
]
;

export const mercyReaderYearHighlights: MercyYearHighlight[] = 
[
  {
    "year": 1982,
    "factId": "mercy.fact.91676dd9971267e4cd08",
    "factType": "historical_event",
    "title": "Meeting artists",
    "dateStart": "1982-09-01",
    "dateEnd": "1983-04-13",
    "datePrecision": "range",
    "confidence": 0.8,
    "assertion": "WEBO cluster 4778",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1982,
    "factId": "mercy.fact.9fd96ed292fe42690ca6",
    "factType": "historical_event",
    "title": "Creation of Untitled (Crown)",
    "dateStart": "1982-09-01",
    "dateEnd": "1983-03-31",
    "datePrecision": "month",
    "confidence": 0.7,
    "assertion": "The artwork, created between September 1982 and March 1983",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1982,
    "factId": "mercy.fact.f60ebf3883b4ce163bd8",
    "factType": "historical_event",
    "title": "Photo session with Laura Levine",
    "dateStart": "1982-10-01",
    "dateEnd": "1982-11-30",
    "datePrecision": "month",
    "confidence": 0.95,
    "assertion": "WEBO cluster 4607 document text",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1982,
    "factId": "mercy.fact.1a10a048b5591444f077",
    "factType": "historical_event",
    "title": "Recording session for Physical Attraction",
    "dateStart": "1982-11-01",
    "dateEnd": "1982-11-30",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "WEBO cluster 4536: November 1982 Sigma Sound Studios",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1982,
    "factId": "mercy.fact.7ee32722503645c35a36",
    "factType": "historical_event",
    "title": "Photo-booth session",
    "dateStart": "1982-11-01",
    "dateEnd": "1982-11-30",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "November 1982 Photo-Booth Times Square New York NY",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1982,
    "factId": "mercy.fact.8c0688a5712bc5e5c325",
    "factType": "historical_event",
    "title": "Creation of single artwork",
    "dateStart": "1982-11-01",
    "dateEnd": "1982-11-30",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "The twenty front cover images were shot in a photo booth in Times Square during November ‘82.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1983,
    "factId": "mercy.fact.786c2356bf429acc34bb",
    "factType": "historical_event",
    "title": "Sire Records UK Press Release",
    "dateStart": "1983-01-01",
    "dateEnd": "1983-01-31",
    "datePrecision": "month",
    "confidence": 0.85,
    "assertion": "Everybody UK press release January 1983",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1983,
    "factId": "mercy.fact.070d26d90346d2a991af",
    "factType": "historical_event",
    "title": "Mudd Club Photograph",
    "dateStart": "1983-01-01",
    "dateEnd": "1983-01-31",
    "datePrecision": "month",
    "confidence": 0.7,
    "assertion": "January 1983 The Mudd Club... Madonna and Jean-Michel Basquiat are captured by an unknown photographer.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1983,
    "factId": "mercy.fact.1a02de60f1ba9bee102e",
    "factType": "historical_event",
    "title": "Design of single sleeve",
    "dateStart": "1983-01-01",
    "dateEnd": "1983-02-28",
    "datePrecision": "month",
    "confidence": 0.7,
    "assertion": "it is likely that Martin would of worked on them in the apartment he was sharing with Madonna",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1983,
    "factId": "mercy.fact.140f0bc3a350a009e021",
    "factType": "historical_event",
    "title": "Futura 2000 Exhibition Opening",
    "dateStart": "1983-01-06",
    "dateEnd": "1983-01-06",
    "datePrecision": "day",
    "confidence": 0.9,
    "assertion": "Thursday 6th January 1983 Fun Gallery... Madonna and Jean-Michel Basquiat attend the opening night of graffitii artist Futura 2000’s exhibition",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1983,
    "factId": "mercy.fact.28c731bcf953457e1f07",
    "factType": "historical_event",
    "title": "Performance at Casanova's",
    "dateStart": "1983-01-07",
    "dateEnd": "1983-01-07",
    "datePrecision": "day",
    "confidence": 0.9,
    "assertion": "Friday 7th January 1983 Casanova’s... Madonna reportedly performed ‘Everybody’ and the newly recorded track ‘Physical Attraction’",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1983,
    "factId": "mercy.fact.25afa71cb354f61ec0b7",
    "factType": "historical_event",
    "title": "Billboard Dance/Disco Top 80 chart entry",
    "dateStart": "1983-01-08",
    "dateEnd": "1983-01-08",
    "datePrecision": "day",
    "confidence": 0.95,
    "assertion": "Everybody enters its tenth week on the Billboard Dance / Disco Top 80 rising from number four the previous week to number 3.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1984,
    "factId": "mercy.fact.2000ce0e1a28d5631f15",
    "factType": "historical_event",
    "title": "Chartbeat magazine feature",
    "dateStart": "1984-01-01",
    "dateEnd": "1984-01-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "Madonna is featured in fortnightly UK music magazine Chartbeat",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1984,
    "factId": "mercy.fact.5ef84c506b40b447da77",
    "factType": "historical_event",
    "title": "Word of Mouth magazine feature",
    "dateStart": "1984-01-01",
    "dateEnd": "1984-01-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "January 1984 Word of Mouth magazine",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1984,
    "factId": "mercy.fact.2636e96c2c4156381d69",
    "factType": "historical_event",
    "title": "Photo session with Eric Watson",
    "dateStart": "1984-01-01",
    "dateEnd": "1984-01-31",
    "datePrecision": "month",
    "confidence": 0.8,
    "assertion": "Madonna 1984 Eric Watson - shot in London during her January 84 promotional tour",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1984,
    "factId": "mercy.fact.36e63dafad2432c5197b",
    "factType": "historical_event",
    "title": "Mademoiselle photo feature",
    "dateStart": "1984-01-01",
    "dateEnd": "1984-01-31",
    "datePrecision": "month",
    "confidence": 0.8,
    "assertion": "Photographer Steven Meisel shot Madonna for Madmoiselle Magazine in January 1984",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1984,
    "factId": "mercy.fact.37a06acc5e247998c7f4",
    "factType": "historical_event",
    "title": "Photo session with Brian Aris",
    "dateStart": "1984-01-01",
    "dateEnd": "1984-01-31",
    "datePrecision": "month",
    "confidence": 0.8,
    "assertion": "Madonna 1984 Brain Aris - shot in London during her January 84 promotional tour",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1984,
    "factId": "mercy.fact.8628c1bd4962352d2f43",
    "factType": "historical_event",
    "title": "Photo session with Kees Tabak",
    "dateStart": "1984-01-01",
    "dateEnd": "1984-01-31",
    "datePrecision": "month",
    "confidence": 0.8,
    "assertion": "Shot in Amsterdam... by Dutch photographer Kees Tabak 1984",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1985,
    "factId": "mercy.fact.a5444582c6a28143c4db",
    "factType": "historical_event",
    "title": "Publicity photo session",
    "dateStart": "1985",
    "dateEnd": "1985",
    "datePrecision": "year",
    "confidence": 0.9,
    "assertion": "a young photographer named Herb Ritts had been hired to take some publicity shots of Rosanna and Madonna",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1985,
    "factId": "mercy.fact.8f3950c17c6995f20a35",
    "factType": "historical_event",
    "title": "Interview with Mark Bego",
    "dateStart": "1985-01-01",
    "dateEnd": "1985-01-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "WEBO cluster 6415 document text",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1985,
    "factId": "mercy.fact.e456589c10e129b3e5c2",
    "factType": "historical_event",
    "title": "Spin magazine photo session",
    "dateStart": "1985-01-01",
    "dateEnd": "1985-01-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "Word on ‘Spin’ magazine including a shot of the premier issue cover of Madonna by Herb Ritts in Hawaii (Jan ‘85).",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1985,
    "factId": "mercy.fact.55dc664658027d96b36e",
    "factType": "historical_event",
    "title": "Photo session",
    "dateStart": "1985-01-01",
    "dateEnd": "1985-04-30",
    "datePrecision": "month",
    "confidence": 0.5,
    "assertion": "WEBO cluster 6960 document text",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1985,
    "factId": "mercy.fact.2cd15d531a96600c7d42",
    "factType": "historical_event",
    "title": "Mariv lanoar cover feature",
    "dateStart": "1985-01-08",
    "dateEnd": "1985-01-08",
    "datePrecision": "day",
    "confidence": 0.95,
    "assertion": "Tuesday 8th January 1985 Israel ————————- Madonna receives her very first cover in Israel, from teen style magazine ‘Mariv lanoar’.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1985,
    "factId": "mercy.fact.4255dfc12f97e575d939",
    "factType": "historical_event",
    "title": "Material Girl video shoot",
    "dateStart": "1985-01-10",
    "dateEnd": "1985-01-10",
    "datePrecision": "day",
    "confidence": 0.95,
    "assertion": "Thursday 10th January 1985 Ren-Mar Studios... shooting began on Thursday 10th January.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1986,
    "factId": "mercy.fact.0e6b9634ca52d35dc168",
    "factType": "historical_event",
    "title": "Shanghai Surprise promotional photoshoot",
    "dateStart": "1986-02-01",
    "dateEnd": "1986-02-28",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "Herb Ritts took promotional photos for 'Shanghai Surprise' in London, February 1986.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1986,
    "factId": "mercy.fact.6236b5b4ebe0fdc76244",
    "factType": "historical_event",
    "title": "Shanghai Surprise filming",
    "dateStart": "1986-02-01",
    "dateEnd": "1986-02-28",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "Madonna was filming 'Shanghai Surprise' in London",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1986,
    "factId": "mercy.fact.677fca92f5e3b0648931",
    "factType": "historical_event",
    "title": "Shanghai Surprise promotional shoot",
    "dateStart": "1986-02-01",
    "dateEnd": "1986-02-28",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "Promotional stills from the film 'Shanghai Surprise' featuring Madonna and Sean Penn were taken in London.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1986,
    "factId": "mercy.fact.6edbfa0890384e32729b",
    "factType": "historical_event",
    "title": "Shanghai Surprise filming",
    "dateStart": "1986-02-01",
    "dateEnd": "1986-02-28",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "Madonnas brother Christopher was also on set!",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1986,
    "factId": "mercy.fact.00ae0766d97862bd44c1",
    "factType": "historical_event",
    "title": "Shanghai Surprise filming",
    "dateStart": "1986-02-01",
    "dateEnd": "1986-02-28",
    "datePrecision": "month",
    "confidence": 0.8,
    "assertion": "Rare on-set photos from 'Shanghai Surprise' filming were shared by WEBO in February 1986.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1986,
    "factId": "mercy.fact.003e21482e7725de8004",
    "factType": "historical_event",
    "title": "Tatler magazine photoshoot",
    "dateStart": "1986-03-01",
    "dateEnd": "1986-03-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "Herb Ritts photographed Madonna in March 1986 for UK Tatler magazine.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1987,
    "factId": "mercy.fact.8a9511efb848453c007e",
    "factType": "historical_event",
    "title": "Harper's Bazaar photo session",
    "dateStart": "1987-01-01",
    "dateEnd": "1987-01-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "WEBO cluster 298 document text",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1987,
    "factId": "mercy.fact.ecda7a1354974aaad974",
    "factType": "historical_event",
    "title": "Vogue/Harper's Bazaar photo session",
    "dateStart": "1987-01-01",
    "dateEnd": "1987-01-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "WEBO cluster 299 document text",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1987,
    "factId": "mercy.fact.fab4b36bbef84eecda96",
    "factType": "historical_event",
    "title": "American Music Awards",
    "dateStart": "1987-01-26",
    "dateEnd": "1987-01-26",
    "datePrecision": "day",
    "confidence": 1,
    "assertion": "WEBO cluster 311 document text",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1987,
    "factId": "mercy.fact.4f5a042395d5089d2684",
    "factType": "historical_event",
    "title": "Francesco Scavullo photo session for Cosmopolitan Magazine",
    "dateStart": "1987-02-01",
    "dateEnd": "1987-03-31",
    "datePrecision": "month",
    "confidence": 0.95,
    "assertion": "WEBO cluster 475: March 1987 | Francesco Scavullo | Madonna",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1987,
    "factId": "mercy.fact.637a8be8ccad1b95032e",
    "factType": "historical_event",
    "title": "Cosmopolitan photo session",
    "dateStart": "1987-03-01",
    "dateEnd": "1987-03-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "WEBO cluster 474 document text",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1987,
    "factId": "mercy.fact.a987c1c8f46c964f1f4a",
    "factType": "historical_event",
    "title": "La Isla Bonita video shoot",
    "dateStart": "1987-03-01",
    "dateEnd": "1987-03-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "WEBO cluster 351 document text",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1988,
    "factId": "mercy.fact.85b9f18009ecbe59255d",
    "factType": "historical_event",
    "title": "Rehearsals for Speed-The-Plow",
    "dateStart": "1988-02-23",
    "dateEnd": "1988-02-23",
    "datePrecision": "day",
    "confidence": 1,
    "assertion": "On February 23rd 1988, Madonna began rehearsals for her second theatre role as Karen in David Mamet's production of Speed-The-Plow.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1988,
    "factId": "mercy.fact.d874f6c43943a71f3760",
    "factType": "historical_event",
    "title": "Rehearsals for Speed-The-Plow",
    "dateStart": "1988-02-23",
    "dateEnd": "1988-02-23",
    "datePrecision": "day",
    "confidence": 1,
    "assertion": "On February 23rd 1988, Madonna began rehearsals for her second theatre role as Karen in David Mamet's production of Speed-The-Plow.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1988,
    "factId": "mercy.fact.2c02ae03a3b59191229f",
    "factType": "historical_event",
    "title": "Publication of interview in New York magazine",
    "dateStart": "1988-03-28",
    "dateEnd": "1988-03-28",
    "datePrecision": "day",
    "confidence": 0.95,
    "assertion": "Interesting excerpt from an interview with Jellybean in New York magazine dated March 28th 1988.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1988,
    "factId": "mercy.fact.46cedb23e024cbdb7cec",
    "factType": "historical_event",
    "title": "Publication of interview in New York magazine",
    "dateStart": "1988-03-28",
    "dateEnd": "1988-03-28",
    "datePrecision": "day",
    "confidence": 0.95,
    "assertion": "Interesting excerpt from an interview with Jellybean in New York magazine dated March 28th 1988.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1988,
    "factId": "mercy.fact.729aec78f3723b919708",
    "factType": "historical_event",
    "title": "Opening night press conference",
    "dateStart": "1988-05-03",
    "dateEnd": "1988-05-03",
    "datePrecision": "day",
    "confidence": 1,
    "assertion": "Madonna and her co-stars later held a press-conference at the play's after-party that evening at Tavern-On-The-Green.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1988,
    "factId": "mercy.fact.b1a0ed7b0ef18a1f8098",
    "factType": "historical_event",
    "title": "Opening night of Speed-The-Plow",
    "dateStart": "1988-05-03",
    "dateEnd": "1988-05-03",
    "datePrecision": "day",
    "confidence": 1,
    "assertion": "May 3rd 1988. Opening night of Speed-The-Plow.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1989,
    "factId": "mercy.fact.489f78373f128f85decd",
    "factType": "historical_event",
    "title": "Dick Tracy Filming",
    "dateStart": "1989",
    "dateEnd": "1989",
    "datePrecision": "year",
    "confidence": 0.9,
    "assertion": "WEBO cluster 583: On set shot from the filming of Dick Tracey with co star Charlie Korsmo 'Kid'. Although filmed in 1989...",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1989,
    "factId": "mercy.fact.4cea86ad3d37cbd04dde",
    "factType": "historical_event",
    "title": "Filming of Like a Prayer music video",
    "dateStart": "1989-01-01",
    "dateEnd": "1989-01-31",
    "datePrecision": "month",
    "confidence": 0.95,
    "assertion": "The Like A Prayer video was shot in January 1989.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1989,
    "factId": "mercy.fact.fa91df7275758cb4b3b5",
    "factType": "historical_event",
    "title": "Photo session on set of Like a Prayer",
    "dateStart": "1989-01-01",
    "dateEnd": "1989-01-31",
    "datePrecision": "month",
    "confidence": 0.95,
    "assertion": "Shot on set of Like A Prayer video by Alberto Tolot. January 1989.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1989,
    "factId": "mercy.fact.5ef599a8f0f1d9df0e0b",
    "factType": "historical_event",
    "title": "Like A Prayer promotional photo session",
    "dateStart": "1989-01-01",
    "dateEnd": "1989-01-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "Herb Ritts photographed Madonna for the promotion of her 'Like A Prayer' album in January 1989.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1989,
    "factId": "mercy.fact.6103b9555588fa42cbc6",
    "factType": "historical_event",
    "title": "Like A Prayer photo session",
    "dateStart": "1989-01-01",
    "dateEnd": "1989-01-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "Herb Ritts photographed Madonna for the 'Like A Prayer' session in London, January 1989.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1989,
    "factId": "mercy.fact.6d12712d3fbac746d3fa",
    "factType": "historical_event",
    "title": "Studio session for Like a Prayer",
    "dateStart": "1989-01-01",
    "dateEnd": "1989-01-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "In studio still from Like A Prayer during shooting January 1989 Raleigh Studios Beverley Hills.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1990,
    "factId": "mercy.fact.63016e0ca87ff368c3d2",
    "factType": "historical_event",
    "title": "Omnibus interview",
    "dateStart": "1990-01-01",
    "dateEnd": "1990-12-31",
    "datePrecision": "year",
    "confidence": 0.9,
    "assertion": "WEBO cluster 613: April 1989 | Express Yourself",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1990,
    "factId": "mercy.fact.a7d567f31e346f633dd0",
    "factType": "historical_event",
    "title": "Interview mention of Bahamas trip",
    "dateStart": "1990-01-01",
    "dateEnd": "1990-12-31",
    "datePrecision": "year",
    "confidence": 0.9,
    "assertion": "Interview magazine",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1990,
    "factId": "mercy.fact.ada1c39376a1e6d531e4",
    "factType": "historical_event",
    "title": "Tour auditions",
    "dateStart": "1990-01-01",
    "dateEnd": "1990-01-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "Attending auditions in Los Angeles, January 9th,10th,11th 1990",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1990,
    "factId": "mercy.fact.afeb5fe63b2baa8094a8",
    "factType": "historical_event",
    "title": "Visit to Palette nightclub",
    "dateStart": "1990-01-01",
    "dateEnd": "1990-01-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "Visiting Palette a lesbian night club in West Hollywood in January 1990.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1990,
    "factId": "mercy.fact.d41010fa1df1cf0293ab",
    "factType": "historical_event",
    "title": "Tour auditions in Los Angeles",
    "dateStart": "1990-01-01",
    "dateEnd": "1990-01-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "Madonna begins her auditions for her next tour in L.A.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1990,
    "factId": "mercy.fact.fd5363358706685e915a",
    "factType": "historical_event",
    "title": "Tour auditions in Los Angeles",
    "dateStart": "1990-01-01",
    "dateEnd": "1990-01-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "Madonna begins her auditions for her next tour in L.A.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1991,
    "factId": "mercy.fact.2dd60f7634b5e602c0ce",
    "factType": "historical_event",
    "title": "Photo session for Truth or Dare",
    "dateStart": "1991-01-01",
    "dateEnd": "1991-03-31",
    "datePrecision": "month",
    "confidence": 0.95,
    "assertion": "Madonna and Alek shot by Albert Sanchez while editing Truth or Dare.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1991,
    "factId": "mercy.fact.6531646a3cf3fcf84096",
    "factType": "historical_event",
    "title": "Filming of Shadows and Fog",
    "dateStart": "1991-01-01",
    "dateEnd": "1991-01-31",
    "datePrecision": "month",
    "confidence": 0.95,
    "assertion": "Madonna (playing Marie a tightrope artist in a circus) would of filmed her slot in January 1991",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1991,
    "factId": "mercy.fact.76a550934df30ddf2c35",
    "factType": "historical_event",
    "title": "Photo session on set of Shadows and Fog",
    "dateStart": "1991-01-01",
    "dateEnd": "1991-01-31",
    "datePrecision": "month",
    "confidence": 0.95,
    "assertion": "On set shot by Brian Hamill during the filming of Shadows and Fog",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1991,
    "factId": "mercy.fact.c4b5ba78e442afaa6c14",
    "factType": "historical_event",
    "title": "Photography session on set of Shadows and Fog",
    "dateStart": "1991-01-01",
    "dateEnd": "1991-01-31",
    "datePrecision": "month",
    "confidence": 0.95,
    "assertion": "WEBO cluster 1245: January 1991 | Madonna",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1991,
    "factId": "mercy.fact.dde6d7c92300c186a942",
    "factType": "historical_event",
    "title": "Photo session on set of Shadows and Fog",
    "dateStart": "1991-01-01",
    "dateEnd": "1991-01-31",
    "datePrecision": "month",
    "confidence": 0.95,
    "assertion": "On set shot (with director Woody Allen) by Brian Hamill",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1991,
    "factId": "mercy.fact.132c2e5864c52ac990ea",
    "factType": "historical_event",
    "title": "Filming of Shadows and Fog",
    "dateStart": "1991-01-01",
    "dateEnd": "1991-01-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "WEBO cluster 1246: January 1991 | Madonna",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1992,
    "factId": "mercy.fact.5694c9e346d9d8bc2dea",
    "factType": "historical_event",
    "title": "Photo session at The Chelsea Hotel",
    "dateStart": "1992-01-01",
    "dateEnd": "1992-01-31",
    "datePrecision": "month",
    "confidence": 0.95,
    "assertion": "WEBO cluster 1547: January 1992 | Madonna | NME",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1992,
    "factId": "mercy.fact.5d1845d509f9f72855b7",
    "factType": "historical_event",
    "title": "Photo session at The Chelsea Hotel",
    "dateStart": "1992-01-01",
    "dateEnd": "1992-01-31",
    "datePrecision": "month",
    "confidence": 0.95,
    "assertion": "WEBO cluster 1546: January 1992 | Madonna | NME",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1992,
    "factId": "mercy.fact.653aeeeb8b8caaa75e72",
    "factType": "historical_event",
    "title": "SEX book photoshoot",
    "dateStart": "1992-01-01",
    "dateEnd": "1992-01-31",
    "datePrecision": "month",
    "confidence": 0.95,
    "assertion": "WEBO cluster 1525: Madonna underwent a photo session at Steven Meisel's studio on Wooster Street",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1992,
    "factId": "mercy.fact.96a195f888026964669d",
    "factType": "historical_event",
    "title": "Photo session at The Gaiety Theatre",
    "dateStart": "1992-01-01",
    "dateEnd": "1992-01-31",
    "datePrecision": "month",
    "confidence": 0.95,
    "assertion": "WEBO cluster 1550: March 17, 2005 | Madonna",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1992,
    "factId": "mercy.fact.a441c345693e135aaa64",
    "factType": "historical_event",
    "title": "Photo session for SEX book",
    "dateStart": "1992-01-01",
    "dateEnd": "1992-01-31",
    "datePrecision": "month",
    "confidence": 0.95,
    "assertion": "Shooting for Madonna's forthcoming SEX book began in January in New York.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1992,
    "factId": "mercy.fact.a71a1717ef94d06fa6ef",
    "factType": "historical_event",
    "title": "Photo session at The Chelsea Hotel",
    "dateStart": "1992-01-01",
    "dateEnd": "1992-01-31",
    "datePrecision": "month",
    "confidence": 0.95,
    "assertion": "WEBO cluster 1548: January 1992 | Madonna | NME",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1993,
    "factId": "mercy.fact.08fd2814061a61e12024",
    "factType": "historical_event",
    "title": "Press interviews for Body of Evidence",
    "dateStart": "1993-01-09",
    "dateEnd": "1993-01-09",
    "datePrecision": "day",
    "confidence": 0.95,
    "assertion": "WEBO cluster 1938",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1993,
    "factId": "mercy.fact.36def7e002c74eb1571d",
    "factType": "historical_event",
    "title": "Press interviews",
    "dateStart": "1993-01-09",
    "dateEnd": "1993-01-09",
    "datePrecision": "day",
    "confidence": 0.95,
    "assertion": "WEBO cluster 1947: Saturday January 9th 1993 | Madonna | MTV",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1993,
    "factId": "mercy.fact.46b6eaeeb2120728a482",
    "factType": "historical_event",
    "title": "Press interviews for Body of Evidence",
    "dateStart": "1993-01-09",
    "dateEnd": "1993-01-09",
    "datePrecision": "day",
    "confidence": 0.95,
    "assertion": "WEBO cluster 1946: Saturday January 9th 1993 | Madonna | MTV",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1993,
    "factId": "mercy.fact.49e92a3118d512353ea3",
    "factType": "historical_event",
    "title": "Press interviews for Body of Evidence",
    "dateStart": "1993-01-09",
    "dateEnd": "1993-01-09",
    "datePrecision": "day",
    "confidence": 0.95,
    "assertion": "WEBO cluster 1939",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1993,
    "factId": "mercy.fact.71c33b51b0dfc75abd82",
    "factType": "historical_event",
    "title": "Press interviews for Body of Evidence",
    "dateStart": "1993-01-09",
    "dateEnd": "1993-01-09",
    "datePrecision": "day",
    "confidence": 0.95,
    "assertion": "WEBO cluster 1941",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1993,
    "factId": "mercy.fact.953b221c74da1cf1d566",
    "factType": "historical_event",
    "title": "Press interviews for Body of Evidence",
    "dateStart": "1993-01-09",
    "dateEnd": "1993-01-09",
    "datePrecision": "day",
    "confidence": 0.95,
    "assertion": "WEBO cluster 1943",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1994,
    "factId": "mercy.fact.29f1668cf746a9bf9d1c",
    "factType": "historical_event",
    "title": "Jogging in Miami",
    "dateStart": "1994-01-01",
    "dateEnd": "1994-01-31",
    "datePrecision": "month",
    "confidence": 0.85,
    "assertion": "WEBO cluster 2380",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1994,
    "factId": "mercy.fact.4683839d255c711fca7f",
    "factType": "historical_event",
    "title": "Fan club communication",
    "dateStart": "1994-02-01",
    "dateEnd": "1994-02-28",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "WEBO cluster 2413",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1994,
    "factId": "mercy.fact.4d3a5893aca1c9633434",
    "factType": "historical_event",
    "title": "Public appearance in New York",
    "dateStart": "1994-02-01",
    "dateEnd": "1994-02-28",
    "datePrecision": "month",
    "confidence": 0.85,
    "assertion": "WEBO cluster 2405",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1994,
    "factId": "mercy.fact.a00b03172f61e1fdc078",
    "factType": "historical_event",
    "title": "Photographed in New York",
    "dateStart": "1994-02-01",
    "dateEnd": "1994-02-28",
    "datePrecision": "month",
    "confidence": 0.85,
    "assertion": "WEBO cluster 2406",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1994,
    "factId": "mercy.fact.d2f09b3cafe835d08b9b",
    "factType": "historical_event",
    "title": "NBA basketball game attendance",
    "dateStart": "1994-02-01",
    "dateEnd": "1994-02-28",
    "datePrecision": "month",
    "confidence": 0.85,
    "assertion": "WEBO cluster 2412",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1994,
    "factId": "mercy.fact.12a0dee68e20211c852a",
    "factType": "historical_event",
    "title": "Return to New York",
    "dateStart": "1994-02-01",
    "dateEnd": "1994-02-28",
    "datePrecision": "month",
    "confidence": 0.8,
    "assertion": "WEBO cluster 2404",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1995,
    "factId": "mercy.fact.53e46b50defd18b51a3c",
    "factType": "historical_event",
    "title": "Leaving Warsaw Ballroom",
    "dateStart": "1995-01-01",
    "dateEnd": "1995-01-01",
    "datePrecision": "day",
    "confidence": 0.85,
    "assertion": "WEBO cluster 2812",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1995,
    "factId": "mercy.fact.02bc5801963fd2eac1d5",
    "factType": "historical_event",
    "title": "Basketball match attendance",
    "dateStart": "1995-01-01",
    "dateEnd": "1995-01-31",
    "datePrecision": "month",
    "confidence": 0.7,
    "assertion": "WEBO cluster 2813",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1995,
    "factId": "mercy.fact.870090aa24de432a1d18",
    "factType": "historical_event",
    "title": "Public sighting",
    "dateStart": "1995-01-13",
    "dateEnd": "1995-01-13",
    "datePrecision": "day",
    "confidence": 0.8,
    "assertion": "WEBO cluster 2922",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1995,
    "factId": "mercy.fact.9bfcbfc8970678ed688e",
    "factType": "historical_event",
    "title": "Attendance at 'HIM' play",
    "dateStart": "1995-01-25",
    "dateEnd": "1995-01-25",
    "datePrecision": "day",
    "confidence": 0.9,
    "assertion": "WEBO cluster 2814",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1995,
    "factId": "mercy.fact.a1c0b21199507b305276",
    "factType": "historical_event",
    "title": "Attendance at 'HIM' play",
    "dateStart": "1995-01-25",
    "dateEnd": "1995-01-25",
    "datePrecision": "day",
    "confidence": 0.9,
    "assertion": "WEBO cluster 2815",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1995,
    "factId": "mercy.fact.1573423fa685897eb945",
    "factType": "historical_event",
    "title": "Rehearsal for American Music Awards",
    "dateStart": "1995-01-29",
    "dateEnd": "1995-01-29",
    "datePrecision": "day",
    "confidence": 0.9,
    "assertion": "WEBO cluster 2816",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1996,
    "factId": "mercy.fact.062f2def1314f1c07237",
    "factType": "historical_event",
    "title": "Madonna's stay in Buenos Aires",
    "dateStart": "1996-01-01",
    "dateEnd": "1996-03-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "WEBO cluster 3241: March 1996 | Madonna",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1996,
    "factId": "mercy.fact.4d4fa7a9b31bbff83f7b",
    "factType": "historical_event",
    "title": "Madonna's visit to Buenos Aires",
    "dateStart": "1996-01-01",
    "dateEnd": "1996-03-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "WEBO cluster 3242: March 1996 | Madonna",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1996,
    "factId": "mercy.fact.690ae11024552dbec23d",
    "factType": "historical_event",
    "title": "Filming of Evita in Buenos Aires",
    "dateStart": "1996-01-01",
    "dateEnd": "1996-03-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "WEBO cluster 3244",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1996,
    "factId": "mercy.fact.8c02b83909eff566d324",
    "factType": "historical_event",
    "title": "Filming of Evita in Buenos Aires",
    "dateStart": "1996-01-01",
    "dateEnd": "1996-03-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "WEBO cluster 3245",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1996,
    "factId": "mercy.fact.aa1c008868c922e0719d",
    "factType": "historical_event",
    "title": "Filming of Evita",
    "dateStart": "1996-01-01",
    "dateEnd": "1996-03-31",
    "datePrecision": "range",
    "confidence": 0.9,
    "assertion": "WEBO cluster 3256",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1996,
    "factId": "mercy.fact.b90f18c1f9beb72cf4f0",
    "factType": "historical_event",
    "title": "Visit to Buenos Aires",
    "dateStart": "1996-01-01",
    "dateEnd": "1996-03-31",
    "datePrecision": "range",
    "confidence": 0.9,
    "assertion": "WEBO cluster 3243",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1997,
    "factId": "mercy.fact.1c245410e4fcff76c2a4",
    "factType": "historical_event",
    "title": "Shopping trip",
    "dateStart": "1997-01-01",
    "dateEnd": "1997-01-10",
    "datePrecision": "month",
    "confidence": 0.85,
    "assertion": "WEBO cluster 3689",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1997,
    "factId": "mercy.fact.3f5c895b8a169924b79e",
    "factType": "historical_event",
    "title": "Shopping at Saks Fifth Avenue",
    "dateStart": "1997-01-01",
    "dateEnd": "1997-01-10",
    "datePrecision": "month",
    "confidence": 0.85,
    "assertion": "WEBO cluster 3544",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1997,
    "factId": "mercy.fact.ec07927a2436ebb45d41",
    "factType": "historical_event",
    "title": "Presence in Los Angeles",
    "dateStart": "1997-01-01",
    "dateEnd": "1997-01-31",
    "datePrecision": "month",
    "confidence": 0.7,
    "assertion": "WEBO cluster 3536",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1997,
    "factId": "mercy.fact.5ce020d20c57828b8f3e",
    "factType": "historical_event",
    "title": "Baptism of Lourdes",
    "dateStart": "1997-01-03",
    "dateEnd": "1997-01-03",
    "datePrecision": "day",
    "confidence": 0.95,
    "assertion": "WEBO cluster 3501",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1997,
    "factId": "mercy.fact.9cf2e72d1283b2d3fc89",
    "factType": "historical_event",
    "title": "Baptism of Lourdes Maria Leon Ciccone",
    "dateStart": "1997-01-03",
    "dateEnd": "1997-01-03",
    "datePrecision": "day",
    "confidence": 0.95,
    "assertion": "Madonna baptized her first child, Lourdes Maria Leon Ciccone, at St. Jude Melkite Catholic Church in Miami, Florida.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1997,
    "factId": "mercy.fact.a047c9c8234259e46f60",
    "factType": "historical_event",
    "title": "Baptism of Lourdes",
    "dateStart": "1997-01-03",
    "dateEnd": "1997-01-03",
    "datePrecision": "day",
    "confidence": 0.95,
    "assertion": "WEBO cluster 3502",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1998,
    "factId": "mercy.fact.291f0360ac5233ac0f31",
    "factType": "historical_event",
    "title": "Spin magazine photo session",
    "dateStart": "1998-01-01",
    "dateEnd": "1998-01-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "Photographic duo Lamsweerde and Matadin shoot 'Madonna Choses Dare' a portfolio for Spin magazine in Los Angeles.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1998,
    "factId": "mercy.fact.56851bee2b0efae9834b",
    "factType": "historical_event",
    "title": "Spin magazine photo session",
    "dateStart": "1998-01-01",
    "dateEnd": "1998-01-31",
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "Madonna posed for a photo session with Inez van Lamsweerde and Vinoodh Matadin at Smash Box Studios in Los Angeles, California.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1998,
    "factId": "mercy.fact.102ffa489baee22a36bb",
    "factType": "historical_event",
    "title": "Ray of Light press hearing",
    "dateStart": "1998-01-01",
    "dateEnd": "1998-01-31",
    "datePrecision": "month",
    "confidence": 0.85,
    "assertion": "Madonna with William Orbit during a press hearing for the album 'Ray of Light'.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1998,
    "factId": "mercy.fact.bd1c86e4e3e43612993b",
    "factType": "historical_event",
    "title": "Styling session for Frozen",
    "dateStart": "1998-01-01",
    "dateEnd": "1998-01-31",
    "datePrecision": "month",
    "confidence": 0.85,
    "assertion": "Madonna participated in a styling session for the upcoming video 'Frozen'.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1998,
    "factId": "mercy.fact.9464ee5f3a6fc428bac9",
    "factType": "historical_event",
    "title": "Filming of Frozen music video",
    "dateStart": "1998-01-07",
    "dateEnd": "1998-01-11",
    "datePrecision": "range",
    "confidence": 0.95,
    "assertion": "Directed by British artist Chris Cunningham, the music video for 'Frozen' was filmed at Cuddeback Lake in the Mojave Desert in California between January 7–11, 1998.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1998,
    "factId": "mercy.fact.1a8ec82b798435754984",
    "factType": "historical_event",
    "title": "Filming of Frozen music video",
    "dateStart": "1998-01-07",
    "dateEnd": "1998-01-10",
    "datePrecision": "day",
    "confidence": 0.9,
    "assertion": "Filming of Frozen music video on or within 1998-01-07 at Cuddeback Dry Lake, California.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1999,
    "factId": "mercy.fact.83858fdc7bceda989d16",
    "factType": "historical_event",
    "title": "Photo shoot in Miami",
    "dateStart": "1999-01-01",
    "dateEnd": "1999-01-31",
    "datePrecision": "month",
    "confidence": 0.8,
    "assertion": "Photo shoot in Miami on or within 1999-01-01 at Miami.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1999,
    "factId": "mercy.fact.a32a5374b51314effda7",
    "factType": "historical_event",
    "title": "Madonna holiday in Miami",
    "dateStart": "1999-01-05",
    "dateEnd": "1999-01-05",
    "datePrecision": "day",
    "confidence": 0.9,
    "assertion": "WEBO cluster 3968",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1999,
    "factId": "mercy.fact.2192f61468781eb540f5",
    "factType": "historical_event",
    "title": "Attendance at The Blue Room",
    "dateStart": "1999-01-06",
    "dateEnd": "1999-01-06",
    "datePrecision": "day",
    "confidence": 0.9,
    "assertion": "WEBO cluster 3970",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1999,
    "factId": "mercy.fact.a1576bdcd5c5ba7a01fb",
    "factType": "historical_event",
    "title": "Madonna and Ingrid Casares in Greenwich Village",
    "dateStart": "1999-01-07",
    "dateEnd": "1999-01-07",
    "datePrecision": "day",
    "confidence": 0.9,
    "assertion": "WEBO cluster 3971",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1999,
    "factId": "mercy.fact.2e61fb73bbac2157b88c",
    "factType": "historical_event",
    "title": "Nothing Really Matters video shoot",
    "dateStart": "1999-01-09",
    "dateEnd": "1999-01-10",
    "datePrecision": "day",
    "confidence": 0.95,
    "assertion": "Nothing Really Matters video shoot on or within 1999-01-09 at New York.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 1999,
    "factId": "mercy.fact.135d004f376e09e76499",
    "factType": "historical_event",
    "title": "Appearance on Larry King Live",
    "dateStart": "1999-01-18",
    "dateEnd": "1999-01-18",
    "datePrecision": "day",
    "confidence": 0.95,
    "assertion": "WEBO cluster 3978",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 2012,
    "factId": "mercy.fact.7a9137c524ea8bb643fa",
    "factType": "historical_event",
    "title": "Interview with George Holz",
    "dateStart": "2012",
    "dateEnd": null,
    "datePrecision": "year",
    "confidence": 0.8,
    "assertion": "WEBO cluster 5232: Monday 12th December 1983 | Nice | Maripol | Vogue / Interview Magazine / Time",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 2013,
    "factId": "mercy.fact.c819c5b259b99dc4bb84",
    "factType": "historical_event",
    "title": "Seymour Stein interview",
    "dateStart": "2013",
    "dateEnd": "2013",
    "datePrecision": "year",
    "confidence": 0.8,
    "assertion": "WEBO cluster 5582: Seymour Stein, in interview from 2013 reminisces about his absolute belief in the track 'Borderline'.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 2017,
    "factId": "mercy.fact.87253537a30ef09398c7",
    "factType": "historical_event",
    "title": "Inclusion of interview clip in Rags to Riches",
    "dateStart": "2017-01-01",
    "dateEnd": null,
    "datePrecision": "year",
    "confidence": 0.9,
    "assertion": "A short clip of Madonna’s interview was also included in the 2017 Basquiat documentary: “Rags to Riches” Directed by, David Shulman",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 2022,
    "factId": "mercy.fact.589818d0afc7e7efee41",
    "factType": "historical_event",
    "title": "BBC documentary discussion of Madonna's performance",
    "dateStart": "2022",
    "dateEnd": null,
    "datePrecision": "year",
    "confidence": 0.9,
    "assertion": "WEBO cluster 5433: Friday 27th January 1984 | Holiday | BBC",
    "sourceLanes": [
      "WEBO_retained"
    ]
  },
  {
    "year": 2025,
    "factId": "mercy.fact.5dff43fe4118c5b1fc51",
    "factType": "historical_event",
    "title": "Desperately Seeking Susan 40th Anniversary Q&A",
    "dateStart": "2025-07",
    "dateEnd": null,
    "datePrecision": "month",
    "confidence": 0.9,
    "assertion": "Susan Seidelman discusses the Danceteria sequence during a Q&A in Cardiff that took place in July 2025.",
    "sourceLanes": [
      "WEBO_retained"
    ]
  }
]
;
