// Generated from the read-only aggregate MERCY working graph. Do not hand-edit.
// Source graph status is qa_pass_working_graph; this index never promotes canonical or inventory claims.
// Source DB: lmstudio_operating_model/knowledge/mercy-working-canon/mercy-full-span-connected-working-canon-1958-2026-v1.aggregate-v1/mercy-working-graph-1958-2026-v1.rebuild-20261021-resumed.sqlite
// Source DB fingerprint: sha256:a58a64bd595ff091637ccd7795fdea601176e1ee9a9b57a0a0ce69adab589b99

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
  sourceItemCount: number;
  sourceEvidence: MercyYearSourceEvidence | null;
};

export type MercyYearSourceEvidence = {
  sourceItemId: string;
  authority: string;
  sourceType: string;
  locator: string;
  url: string;
  excerpt: string;
};

export type MercyYearRepresentation = {
  year: number;
  representationId: string;
  label: string;
  relativePath: string;
  dateToken: string;
  observationState: string;
  provenanceState: string;
  logicalRepresentationId: string;
  unresolvedReason: string;
  sourceSenses: string[];
  caution: string;
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_107bb17b706a5b8b9f02603c7b9e14cbeff9bea4982c2207a6f23cd665ed7cfe",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CuRZCO7OjFz/",
      "excerpt": "Fall 1982 - Spring 1983 Meeting Keith Haring New York NY ————————- In Keith Haring: The Authorized Biography, Keith mentions that he met Madonna around the same time he met Andy Warhol. He and Andy met at his Fun Gallery opening in October 1982 and they were close friends by the spring of 1983. Keith and Jean-Michel Basquiat had been friends since his early SAMO days in 1979. Keith met Madonna in the fall of 1982 (Sept /Oct) when she began dating Jean-Michel, but it doesn’t seem like they became close friends until later in 1983 when she was dating Jellybean. Madonna speaking about their relationship with Rolling Stone magazine in October 2009:- “Keith Haring and Jean-Michel Basquiat, were the defining artists of their generation. How did you meet them? Madonna: “I was introduced to Keith by a roommate, but I had already seen his work on the streets, subways and buildings. Then we started hanging out at [legendary New York nightclubs] Danceteria and Mudd Club and the Roxy. The Rock Steady crew was there. We’d dance, we’d watch break - dancing crews there and on the street. Did you do graffiti? Walls, subways, sidewalks ... What was your tag? Boy Toy. No shit! Who came up with Boy T…"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_994724b50faff9d8285325e55d8f1aeafbecf0da83904a93bc1c4974761da313",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CpKQT3Xq1mv/",
      "excerpt": "Late 1982 Jean-Michel Basquiat Untitled, 1982 (Crown) Acrylic, ink and paper collage ———————— It is unclear if this was created in Venice, CA or Crosby St, NYC. The date, inclusion of Madonna’s name and reference to “the present” suggests it was during their relationship between Sept ‘82 and March ‘83. I’ve been unable to trace when / where this piece was first exhibited. Untitled, 1982 (Crown) by Basquiat is an acrylic, ink and paper collage on paper artwork that is today housed in the Brooklyn Museum. Jean-Michel included the three-pointed crown in countless artworks. A simple design, the crown made a bold statement since it portrayed his ambition to be considered among the greatest artists. It also challenged westerners and their histories by depicting black men as kings and saints. A closer look into the work has vague writings embroidered into the painting together with other drawings. Through his use of the crown motif, he recognizes other artists and influencers. He writes Madonna’s name with arrows pointing to \"the present\" and \"my love\". Text edited from Basquiat.org © The Estate of Jean-Michel Basquiat #madonna #1982 #newyork @madonna @basquiatkingpleasure @lisanebasquiat…"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_847da0cc3ab8bac83202b76470b9f7b15c89ea383baa304b93fb599075944081",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CqND5O9Knx7/",
      "excerpt": "February 1983 Interview magazine New York NY —————————- Photographer: Laura Levine on a Nikon camera Hair, make up and styling : Madonna Interview : Glenn O’Brien —————————- Madonna was shot by freelance photographer Laura Levine for Andy Warhol’s Interview magazine during October / November ‘82 in Laura’s Chinatown apartment. The ‘Interview’ magazine feature was a short review of ‘Everybody’ by Glenn O’Brien in his ‘Beat’ column accompanied by a single image from the Levine shoot. It didn’t run until February ‘83. Laura has explained these stories on various occasions :- “I was assigned by Interview magazine to shoot Madonna in 1982, right before her first single (“Everybody”) was released. No one really knew what she looked like. Like most of my subjects back then, she came to my Chinatown apartment alone, without any kind of entourage. She was incredibly professional and cooperative and took direction very well. Even when I asked her to do seemingly ridiculous things like wrap herself in the backdrop and pretend to scream, she was game. There’s really not much more to the story than that, I’m afraid! It was a very professional and pleasant encounter”. “I knew nothing about her a…"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_f06c8e616ca15e42b4244a5582ec53815c1fc07530b0fcc094969824072fe1f1",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CovNJxbq8mp/",
      "excerpt": "November 1982 Sigma Sound Studios M A D O N N A sessions Sigma Sound Studios Ed Sullivan Theatre 1697–1699 Broadway between 53rd and 54th Streets New York NY —————————— Documentation confirming the origins of ‘Physical Attraction’ ——————————- Image one : Handwritten lyric sheets for ‘Physical Attraction’ - this image was originally shared by MadonnaTribe.com in 2004. It is not Madonna’s handwriting however if you zoom in you can see a Sigma Master tape sheet with Madonna written at the bottom and 11-22-82 at the top, therefore rendering it legit. Possibly Reggie Lucas’ handwriting? Image two and three are screen grabs from the United States Copyright Office - Madonna is mentioned but the types of works are unfound. One states that words and music are by Madonna however they both state that the copyright claimant is W B Music Corp. One document was registered on 22nd February 1983 the other registered 25th April 1983. Image three is a screen grab from the United States Copyright Office - Reggie Lucas is mentioned as sole writer. The date of publication is dated the 1st February 1983. Madonna is mentioned as the performer. And the copyright claimant and Authorship on Application: wor…"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_525ccfc4222702a8d49505277ff2a77803b0906c598403c69491236f19ed22c9",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CoUUGtoqQye/",
      "excerpt": "November 1982 Photo-Booth Times Square New York NY ———————— The group of 13 original photographs are the image source for the 20 original drawings in the portfolio book of Martin Burgoyne’s artwork. The 20 “photo-booth” vignette drawings are all included on the cover of the 1983 12” record “Burning Up” by Madonna that Martin designed both the back and front cover of. It is possible that these photographs, from Madonna’s early career, are the only surviving examples. Each small photograph measures 2 1/2” high x 2”wide. Dry mounted and framed under glass with foam core. ————————— Madonna and friend Martin Burgoyne take themselves to Times Square for a Photo -Booth session. From this shoot only thirteen original black and white portrait images still exist of Madonna in various poses with card style cut outs creating abstract visuals. Designer Burgoyne would later on use these images plus many more to create the sleeve for Madonna’s second US single release ‘Burning Up’. released in March ‘83 the artwork would of been finalised a month or two before hand. It is not known if this shoot was created with the intention of becoming the sleeve art work or if it was just creative fun. Either …"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_440395afbc6494716ffcdd9ec947c2ac1c105e709277c75129c8ffba236325f6",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/Cq7SVeRKaeQ/",
      "excerpt": "Wednesday 9th March 1983 Fast side : ‘Burning Up’ Written by Madonna Produced by Reggie Lucas Engineered by Butch Jones WB Music Corp. Blue Disque Music Co., Inc/ Madonna Publishing Designee ASCAP Slow side : ‘Physical Attraction’ Written by Reggie Lucas Sire Records 0-2971 Produced by Reggie Lucas Engineered by Butch Jones Remix by John Benitez Likasa Music BMI Art Design: Martin Burgoyne ℗ 1983 Sire Records Company ————————— MADONNA REMINISCES ABOUT ‘BURNING UP’ FOR MADAME X RADIO ON SIRIUS FM RADIO IN 2019. ————————— Madonna’s second 12” is released. ‘Burning Up/Physical Attraction’ is released as a double A-side and in accordance to her contract only on 12” vinyl. ———————- In a complete about turn following ‘Everybody’ with no Madonna image on its cover this sleeve featured not one but twenty one images of Madonna’s face. The twenty front cover images were shot in a photo booth in Times Square during November ‘82. They were then graphically drawn by artist and close friend Martin Burgoyne and then assembled in a grid like fashion and recoloured. In 2014, Martin Burgoyne’s estate sold a selection of twelve of the original photo booth images (hand-mounted and dated by Martin) and…"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_dc60c49d33dcbace407a4870c3f8997b6ea1ae36b808cbefc824efe1e8e89f28",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CplPeFvKk70/",
      "excerpt": "Early January 1983 'Everybody' Written by Madonna Sire Records W 9899 Produced by Mark Kamins Engineered by Butch Jones Remixed at Trident Studios Reduction Suite by Rusty Egan and Steve Short Warner Bros. Music Ltd. ℗ 1982 Sire Records Co. —————————- Everybody UK press release January 1983 ————————- Madonna New Sire signing Madonna has already earned herself a reputation on America’s East Coast. There,dance fans have quickly responded to her debut Sire single, \"Everybody”, which is scheduled for a UK release in early 1983. Madonna was born into a huge Italian Catholic family in Detrolt. She grew up in a household in which music played an important part - but it was dance that provided the first outlet for her talents. Madonna began training as a dancer before reaching high school and then enrolled at the University of Michigan to study ballet, modern and jazz dancing and perform with the college’ famed dance company. She moved to New York in the late 70’s where for two years she performed with both the Pearl Lange and Alvin Ailey Dance Troupes. Turning to acting, she went on to star in an underground movie called \"Certain Sacrifice” and secured several other feature film roles. Ma…"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_a5df34ca0f2ac61b1eca69428fd7c2476ca4b8c30a07180f53b0e3e65dcd666f",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CqEPyviKIuE/",
      "excerpt": "January 1983 The Mudd Club 77 White Street New York NY ————————— Madonna and Jean-Michel Basquiat are captured by an unknown photographer. Reports suggest that this was taken at The Mudd Club. This photo was displayed as part of an exhibition \"Night Fever: Designing Club Culture\" at the V&A Dundee museum in Scotland in 2022. The photo was on loan from Stephen Maas who was the owner of the Mudd Club. It was credited to have been taken at the Mudd Club in the summer of 1982 this is incorrect it’s very early ‘83. By February ‘83 the club had begun to wind down and close its doors. In an interview with Mateus Lages for U+MAG in 2013, Diego Cortez, co-founder of the Mudd Club and curator of New York/New Wave at MoMA PS1, recalled the time he declined an offer to become Madonna's manager. Mateus Lages: I read that you turned down an offer to manage Madonna Diego Cortez: Yes. I had worked as a manager for some punk bands, also as an agent to Jean-Michel Basquiat. In 1982 he brought his then-girlfriend, Madonna, to my tiny apartment at Henry Geldzahlers building in the West Village. Jean said “I want you to make Madonna as famous as you made me”. I was amused and skeptical. She played her …"
    }
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
    ],
    "sourceItemCount": 4,
    "sourceEvidence": {
      "sourceItemId": "source_item_26bf87c42d90e666f7fe222e0898a7eb0bb2417bfe67012bd63ef645680a53f3",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/Cq7bB8ZK2vN/",
      "excerpt": "Created early 1983 Fourth Floor 234-6 East 4th St. East Village New York NY ———————— On 9th February 2014 these images from Martin Burgoyne’s sketch book were put up for auction along with a number of other photographs and sketches by Burgoyne eventually selling for an undisclosed amount. Created in early ‘83 from photographs taken in November ‘82, it is likely that Martin would of worked on them in the apartment he was sharing with Madonna on the fourth floor at 234-6 East 4th St. East Village, New York. The final twenty images used for the sleeve design would of been submitted to Sire/Warner for ‘sign off’ anytime between January and February 1983 ready for the March 9th single release. #madonna #1983 #newyork @madonna #martinburgoyne @sirerecords @m_rosenblatt #reggielucas @djjellybeanbenitez"
    }
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
    ],
    "sourceItemCount": 4,
    "sourceEvidence": {
      "sourceItemId": "source_item_75e3f88ed6b9706c5d89895b36d1c4ea5e324655dad1514fd5c821c66d83de0d",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CpW_6wSqqnb/",
      "excerpt": "Thursday 6th January 1983 Fun Gallery 254 East 10th St New York NY ————————- Photographer: Martha Cooper ————————- Madonna and Jean-Michel Basquiat attend the opening night of graffitii artist Futura 2000’s exhibition at the Fun Gallery on East 10th St. Here Madonna is captured with Basquiat, graffiti artist TOXIC, Easy Gee and KANO. Photographer Martha Cooper who took this shot also worked closely with Futura 2000, capturing images of his work on subway cars. Having previously worked for New York Post, Cooper is best known for her work capturing the New York City graffiti scene of the 1970s and 1980s. In 1984 she co-published the graffiti bible “Subway-Art” with Henry Chalfant. This image of Madonna and Basquiat was first published in a book focusing on outtakes from Cooper’s lens, titled “Spray Nation” it was published in Sept 2022. To create “Spray Nation”, Cooper and editor Roger Gastman pored through hundreds of thousands of 35mm Kodachrome slides, painstakingly selecting and digitizing them. The photos range from obscure tags to intimate portraits, action shots, walls, and subway cars painted inside and out. #madonna #1983 #newyork @madonna @futuradosmil @toxs6ix @basquiatkin…"
    }
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
    ],
    "sourceItemCount": 2,
    "sourceEvidence": {
      "sourceItemId": "source_item_6272b3f2a16ff808f46fb5948848b035c05cf2df4c19c2364d3209c82bd467f2",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CpaHWxaq3-T/",
      "excerpt": "Friday 7th January 1983 Casanova’s 740 East Ninth St. Hialeah Florida 1:30 am ————————— Local newspaper listing for Madonna’s first gig in Miami:- Casanova's: Village People: midnight and 3 a.m.tonight and Saturday, with vocalist Madonna 1:30 a.m. tonight only, tickets $10 at the door ————————— Madonna flies to Miami. She was accompanied by Bobby Shaw the head of Sire / Warner’s promotional dance dept. And dancers Erika Belle, Bags Rylez and another, most likely Martin Burgoyne or David Svitzer. Madonna reportedly performed ‘Everybody’ and the newly recorded track ‘Physical Attraction’ alongside the Village People at popular Hialeah nightclub Casanova’s. The Village People were on stage at Midnight and again at 3:00 am Madonna performed in between their time slots at 1:30 am. She returned to the venue a second and third time for Memorial Day weekend on Saturday 28th and Sunday 29th May 1983. #madonna #1983 #florida @madonna @dances.in.yohji @bagonrylez67 @bobbyshawpromotions #martinburgoyne #icon #madonnastyle #queen #musicicon #BoyToy #madonnamusic #iconic #madonnaqueen #bitchimmadonna #madonnaphotos #themadonnastory"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_6344c1eac7a77955575187c05e1a7afb5ab45643e2086b1bb9ad8dc703604c28",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CpcLQZ1qTOv/",
      "excerpt": "Week ending Saturday 8th January 1983 Billboard magazine New York NY ——————————- ‘Everybody’ enters its tenth week on the Billboard Dance / Disco Top 80 rising from number four the previous week to number 3. This would prove to be the tracks highest position. The 12” also receives a second mention in the “Bubbling Under” section where it holds its position on The Billboard Chart at number 109 bubbling just under the hot 100. #madonna #1982 #newyork @madonna #markkamins @billboard @billboardcharts #icon #madonnastyle #queen #musicicon #BoyToy #musicroyalty #madonnamusic #iconic #madonnaqueen #bitchimmadonna #allhailthequeen #madonnaphotos #themadonnastory"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_2c3d1ce4aed57e9e98c9f174255b0a87330970558a1f7067ac71520ec9b44496",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/C4bRSbPs984/",
      "excerpt": "January 1984 Chartbeat magazine London UK ————————- Madonna is featured in fortnightly UK music magazine Chartbeat. Reportedly from an issue in January, ‘84. The exact date remains unconfirmed at this stage: MADONNA “From the lower East side of New York comes Madonna. A dance floor ingenue and a red hot disco prospect for ‘84. She’s here to instigate the downfull of the old disco norms in Britain having played an important part in its distinction on the streets of New York. Born in Detroit, ‘the car city’ during the early sixties Madonna was brought up in a typically strict Catholic Italian family. Her mother died when she was quite young leaving her and her father to look after eight brothers and sisters. She left for New York when she was 17 and proceeded to get a few jobs with some established dance troops. Her big break, or at least that’s what she thought, came when she auditioned for Patrick Hernandez, better known tor his awful, ‘Born To Be Alive’ hit. His management realised her talents and sent her off to Paris for vocal training and ultimate super stardom. Their plan, though valiant, failed. Madonna’s career in Paris never took off the ground and eventually tired and frus…"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_7bdf79302733d9d65f061dcaec17fb4984094861baf6e0972293ea772daca673",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/C4YpE9HMzwP/",
      "excerpt": "January 1984 Word of Mouth magazine A monthly publication from Warner Bros. Records USA ————————- Madonna receives a mention in a news article featured in the January ‘84 issue of the Warner Bros. produced magazine ‘Word of Mouth’. Alongside a shot by George Holz (captured December 12th ‘83) the article confirms that she has finished working on three new tracks for the Warner Bros. film ‘Vision Quest” all co-produced by Phil Ramone and John “Jellybean” Benitez: NEWS TURNING POINT FOR MADONNA “OUR OWN “HOLIDAY” PRINCESS, MADONNA, has just completed three new songs, co-produced by Phil Ramone and John “Jellybean” Benitez, for the upcoming WB film “visionQuest,” which will feature the Detroit-born singer/dancer in a cameo appearance”. The three tracks featured in the film ‘Crazy for You’ ‘Gambler’ and ‘Warning Signs’ were famously edited down to two prior to the films release. ‘Warning Signs’ still remains unreleased. NOTE: THIS IS THE FIRST TIME A SHOT WAS USED FROM THE GEORGE HOLZ SESSION #madonna #newyork #1984 #wordofmouth @madonna @warnerbrosentertainment @warnerrecords @warnermusic @djjellybeanbenitez #philramone @georgeholzofficial HUGE THANKS @madmusic_1 #icon #madonnastyle #q…"
    }
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
    ],
    "sourceItemCount": 11,
    "sourceEvidence": {
      "sourceItemId": "source_item_b07e252c3a35fa41f463c332c6224b566f5e942508006bfd3a869c16d121183b",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BCRBQmhjYVpxaPvanEIlxtd4tyUjusMVs4jE6o0/",
      "excerpt": "Madonna 1984 Eric Watson - shot in London during her January 84 promotional tour for Holiday #madonna #ericwatson #1984 #westwood #witchescollection #smashits #pop #queen #godess #newyork #diva #holiday #luckystar #borderline"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_ebde71bb5383fd406109257bbd85695100534eeb05a4fee19e50ef4d9f13760e",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/C4Z6aBvMWvq/",
      "excerpt": "January 1984 (unconfirmed and possibly earlier date TBC) Madmoiselle magazine New York NY USA —————————— The exact details of this M A D ⭕️ N N A album review remain unknown. It has been reported that it’s from Madmoiselle magazine early in ‘84 - this remains unconfirmed. On looking back at Tom Tom Club’s album ‘Close to the Bone’ which also was released in July ‘83 and the fact that the Steven Meisel shoot happened in August ‘83, it could therefore help date this as early as September ‘83. MADONNA Madonna •Hedonism is the order of the day on Tom Tom Club's Close to the Bone (Sire) and on the debut album by a young woman who calls herself Madonna (Sire). Madonna, who used to dance with Manhattan's Alvin Ailey Company, is a blonde with the voice of a black city teenager—it wouldn't be difficult to mistake her for Michael Jackson— and her songs use a stripped-down, strutting New York City groove that she rides with easy insouciance. Her message is pure body talk—she urges you to dance and sing and make the most of \"Physical Attraction\"-and the album is likely to be as popular in aerobics classes as on dance floors. NOTE: THIS PARTICULAR MEISEL SHOT WAS ALSO USED IN THE DECEMBER ‘83 (…"
    }
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
    ],
    "sourceItemCount": 9,
    "sourceEvidence": {
      "sourceItemId": "source_item_fce1f75fdd4fc16cb7c668dd924279fdfa1e6cc1c4648a80c51f3174398f40f8",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BCSCvBbjYfzRozXQlu79k5j6laeZj8xGLkWIaM0/",
      "excerpt": "Madonna 1984 Brain Aris - shot in London during her January 84 promotional tour. #madonna #brianaris #1984 #viviennewestwood #witchescollection #smashits #pop #queen #godess #newyork #london #diva #holiday #luckystar #borderline"
    }
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
    ],
    "sourceItemCount": 2,
    "sourceEvidence": {
      "sourceItemId": "source_item_1cdef3a20151c78deb977b98cbfc3a005e319449d93c842ddad97e31627c104e",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BCvgy0nDYcopl0Kd80U_S8VEWMpPvouVCDs7ic0/",
      "excerpt": "Shot in Amsterdam, (probably in January during her European promotional tour) by Dutch photographer Kees Tabak 1984. Featuring fantastic dancer Erika Belle and brother Christopher. Not much known about this shoot any info is good!!!! #madonna #keestabak #Amsterdam @madonna @subject_eye @cgciccone"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_983c388aa1066d7f196219319085ae63b443a62028f4883e1fe66d14be84d00e",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/DZMb7DAIJNr/",
      "excerpt": "Friday 29th March 1985 United States of America —————————————— ‘Desperately Seeking Susan’ goes on general release across North America. Following four months in the editing room the Orion Pictures release finally makes its way into cinemas across the country. Susan Seidelman the films director has confirmed that the poster as we know it almost never happened: The folks in Orion’s marketing department (mostly middle-aged guys who didn’t totally get the film and were at a loss about how to market it, suggested to Midge and Sarah that we change the movie’s title to something more generic. They proposed the title “The Personals”, afraid that younger audiences (Madonna fans) would not understand what “Desperately Seeking Susan” meant. They were also afraid that the title would sound like a lesbian love story. Orion had designed some poster mock-ups. One featured Rosanna’s face reflected on the side of a shiny metal toaster with Madonna popping out of it like a piece of toast. Thankfully the producers fought against these silly ideas. As it happened, a young photographer named Herb Ritts had been hired to take some publicity shots of Rosanna and Madonna, They featured both women dressed…"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_6a979bbaeb64e2b06d4f34530987006ccdbaea378f3a2b8d7f451b6eda8c0a13",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/DKfUgx5IyzN/",
      "excerpt": "‘Into the Groove’ Unravelling its history…………. ———————————- Mark Kamins in interview with Madonna’s first biographer Mark Bego. Here Kamins confirms that ‘Into the Groove’ was still being considered as a second single for Shane [sic. Cheyne], this interview was conducted in January ‘85. NOTE: Cheyne’s first single ‘Call Me, Mr. Telephone’ was not only produced by Kamins. In fact the video filmed at Danceteria used the exact same team that produced Madonna’s ‘Everybody’ video:…… Quote from Billboard, 22nd June ‘85: “Ed Steinberg produced and directed the clip,, he notes “the exact same production team we used on the first Madonna single and video.\" That team consists of record producers Mark Kamins and Stephen Gerbier, A&R rep Michael Rosenblatt, art directors Howie Montaug and Martin Burgoyne and director of photography Peter Blank.” The audio used here is the original version of “Call Me, Mr. Telephone” by Answering Service. #madonna #1984 #newyork @madonna #intothegroove @the_edsteinberg @m_rosenblatt #cheyne #markkamins #martinburgoyne #icon #madonnastyle #queen #musicicon #BoyToy #musicroyalty #madonnamusic #iconic #madonnaqueen #bitchimmadonna #allhailthequeen #madonnaphotos #…"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_3967bb2e0fa7832868da14751101930325113c25edc8290b3caa6957e44ae8e3",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/DY5Rwq4kV4u/",
      "excerpt": "Monday 25th March 1985 ——————————————- News stories of the day from across North America: • Tour date announcements / advert for Tuesday, April 30 8:00 p.m. at the ASU ACTIVITY CENTER. Tickets On Sale This Saturday. • Madonna fashion - Lowly industrial product becomes latest funky fashion favorite - article relating to Madonna’s rubber O ring bracelets. • Hair influences and headband accessories. • Reprint of the Janet Maslin ‘Desperately Seeking Susan’ related article from the NY Times (March 22nd). • Word on ‘Spin’ magazine including a shot of the premier issue cover of Madonna by Herb Ritts in Hawaii (Jan ‘85). • ‘Desperately Seeking Susan’ reviews. • Madonna’s influence on younger market grows. • Third party tickets sales."
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_970a230fe2bc69ede54b316ca83d1d00aca28ec1c61c86fc5c72a9fc8bdfe2c1",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/DYUjLaKIu7K/",
      "excerpt": "January - April 1985 Unconfirmed date and location USA ——————————- Rare shot taken during the early part of ‘85. Likely to be in either New York or Los Angeles If anyone can add any information, we are all ears!"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_e9af7c182f8665249860cedaef31653e62ec2492af986247bf892e2fd9446b7f",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/DTXOePiiKj7/",
      "excerpt": "Tuesday 8th January 1985 Israel ————————- Madonna receives her very first cover in Israel, from teen style magazine ‘Mariv lanoar’. Using a photograph from the Helmut Werb session (LA, Feb ‘ 84). The article inside leaned heavily on her pre fame / chiilldhood and how she’s different to Cyndi Lauper. Huge thanks to @theveronicafiles and @avihi from the Madonna Israel fan club for sharing these with us. Xx"
    }
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
    ],
    "sourceItemCount": 2,
    "sourceEvidence": {
      "sourceItemId": "source_item_a21f6911d0a6bb9402ceddf7313d6b9e8b50ca046b3bde536e8b24e2a74ad8ae",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/DT8pkTuCKTH/",
      "excerpt": "Thursday 10th January 1985 Ren-Mar Studios 846 N. Cahuenga Boulevard Los Angeles CA —————————— Just discovered rare shot of Madonna taken while filming ‘Material Girl’. Photographer: Peter Szipal @peterszipal - if you can share any stories regarding this on set session, we’d love the hear about it! —————————— With rehearsals aside shooting began on Thursday 10th January. It’s is believed the “dance sequence” took up most of the first days schedule this does however remain unconfirmed. #madonna #1985 #losangeles #materialgirl @madonna @mmlamber @mjs2250 @peterszipal"
    }
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
    ],
    "sourceItemCount": 5,
    "sourceEvidence": {
      "sourceItemId": "source_item_deb75a7b42ad36830fdbe4b9eb6e5c883907a73899ad684116370db556c98530",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BFezLs4jYYFIbp0wV1TNiNiNUAtNqYAu0a6tKM0/",
      "excerpt": "Promotional shot by Herb Ritts for Shanghai Surprise. The film was shot between January - February 1986 in Hong Kong, London, Macau and Portugal. Herb Ritts joined Madonna and Sean on set to take photographs throughout filming. #Madonna #seanpenn #shanghaisurprise #1986 #herbritts"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_bbcd0314bed55b0b9783e4ab494664ba790d18badfda93a07fe87fbd9768e3f0",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BFe0F0VDYamXdql_E3ONTU1MIyeFLf-2_eJ-9A0/",
      "excerpt": "Candid shot with Herb Ritts whilst filming Shanghai Surprise. The film was shot between January - February 1986 in Hong Kong, London, Macau and Portugal. Herb Ritts joined Madonna and Sean on set to take photographs throughout filming. #Madonna #seanpenn #shanghaisurprise #1986 #herbritts"
    }
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
    ],
    "sourceItemCount": 15,
    "sourceEvidence": {
      "sourceItemId": "source_item_de38569f5e8a3f44d3b59925e84caa3ad7746576ad74415c6611faf8f2442c68",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BFe1MYGDYeSBQugdxU691SHN3tGbv-IBqz3yvE0/",
      "excerpt": "Promotional still from Shanghai Surprise. The film was shot between January - February 1986 in Hong Kong, London, Macau and Portugal. #Madonna #seanpenn #shanghaisurprise #1986"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_97ab2b7ac77778f6d5a6143554f35216d0112a5fcd2c0b661553e38ae93689f0",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BFfy5ptDYX2uMOQGJalk8T3PeRuYa4O_EHc3Bc0/",
      "excerpt": "Rare on set shot from Shanghai Surprise. The film was shot between January - February 1986 in Hong Kong, London, Macau and Portugal. Madonnas brother Christopher was also on set! #Madonna #seanpenn #christopherciccone #1986"
    }
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
    ],
    "sourceItemCount": 2,
    "sourceEvidence": {
      "sourceItemId": "source_item_5df26ad68189a620480d839d01274834246ba5719e08eb6af44ded7e8579bf67",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BFfuDJZDYQiEIiaMpNTCIB1QOtBvM4QycogSu00/",
      "excerpt": "Rare on set shot from Shanghai Surprise. The film was shot between January - February 1986 in Hong Kong, London, Macau and Portugal. #Madonna #seanpenn #shanghaisurprise #1986"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_eb10a36c5b0ddd2d3895827b09a803906bf30b4f3e58357920fa43df159bea1d",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BFnjxyIDYUx4VRJP_l5Nh7yNIYpdZgZ-G0gVyw0/",
      "excerpt": "Shot by Herb Ritts. Uncropped. Spring 1986. This photo is one of a kind no variations have ever leaked. It graced the front of UK Tatler magazine in March 1986, and can sell for up to £259 today #madonna #herbritts #tatler #march #1986"
    }
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
    ],
    "sourceItemCount": 26,
    "sourceEvidence": {
      "sourceItemId": "source_item_d0ac5b7f9b7c93cfe12d5f5b99d24d87f27d1e23545537fbd8b5dbf6dc7bd63b",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BGU8JXujYeX6rRUj34_g_6jI68NvbHiUYp34dU0/",
      "excerpt": "Shot by Alberto Tolot, late 1986. This shoot was first used in German Harper's Bazaar January 1987. Tolot shot Madonna many times through the late '80s including the cover photographs for The Look of Love and Vogue. #Madonna #albertotolot"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_ca03ee4ab1e7b101e09fd433b3b651d0f9f66f477e9b8e72ad2a3dc33b939b81",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BGV8ve7jYTNj5HHBTYzWGHeu7Soq4hxJSnFyWk0/",
      "excerpt": "Shot by Alberto Tolot, late 1986. This shoot was first used in German Harper's Bazaar January 1987. Tolot shot Madonna many times through the late '80s including the cover photographs for The Look of Love and Vogue. This image was also used for the You Can Dance/Holiday promo 12\" issued in Autumn 1987. #Madonna #albertotolot"
    }
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
    ],
    "sourceItemCount": 3,
    "sourceEvidence": {
      "sourceItemId": "source_item_cb723ff73a89b6d6473b85ae399494c1d92bb7aca6cedfef021fbcd45eb62b54",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BGgRzotjYYBdTSieORNGqjYz2nVHAGaqXB2kV80/",
      "excerpt": "January 26th 1987. Madonna wins the \"Favourite Pop/Rock Female Video Artist\" award for 'Papa Don't Preach' at the American Music Awards. Held at the Scottish Rite Auditorium, Los Angeles, CA. Looking very much like her Nikki Finn character, work was just wrapping up on the Whos That Girl film. #Madonna #americanmusicawards #losangles #january #1987 #papadontpreach @madonna"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_66fe848beb0bbbb48d4ceca2662d4ba8311b05272df40c35b34118ebf0857f31",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BHY_OiMhS8zoI5-BIMPQL2bHritc-XO74N0KW40/",
      "excerpt": "Off set shot with Victor Alfaro from the Francesco Scavullo session for Cosmopolitan Magazine. Feb/March 1987. Alfaro an chose the Aläia dress she wore for the cover! #Madonna #francescoscavullo #cosmopolitan #1987 THANKS @xkir5tenx FOR THE UPDATE! 😘"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_763a56940a96a7c57c8a67ad2a65b00370f711b11d3047d3f3cbf56c1ca16c04",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BHY_BO_BEM880ZqqoIEWksexDsbfl1eSk5BwVY0/",
      "excerpt": "1987. Shot by Francesco Scavullo for July '87 Cosmopolitan magazine. A one off shot was released for the cover and no variations have ever surfaced! Madonna wears an Azzedine Alaïa dress and canary yellow diamond earrings. Judging by the hair it was photographed around the time of the La Isla Bonita /Who's That Girl videos - Feb/March 1987. #Madonna #cosmopolitan #francescoscavullo #azzedinealaïa @madonna @azzedinealaiaofficial"
    }
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
    ],
    "sourceItemCount": 3,
    "sourceEvidence": {
      "sourceItemId": "source_item_62ea49c3dda79507b44db4b01dca394b6ccc87474f36421e1130e01d4f705034",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BGs_85QjYbMg2cfEumz6ZD3Y83A6DDIN4WwjpQ0/",
      "excerpt": "March 1987. During the shooting of La Isla Bonita video in Los Angeles. Madonna is filmed accepting her Favourite Female Vocal Artist Award from 'Big Ballot'. This would eventually be known as the Nickelodeon Awards. #Madonna #bigballot #awards #laislabonita #nickelodeon #losangeles #1987"
    }
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
    ],
    "sourceItemCount": 3,
    "sourceEvidence": {
      "sourceItemId": "source_item_94d03f8ba91dc7a1da83aed3026308e576ee1714bb5edec491b484f7d8314020",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BHNhC6WhtcwbKWe5LzGn-PAfw8WnGZRXgkDzzw0/",
      "excerpt": "On February 23rd 1988, Madonna began rehearsals for her second theatre role as Karen in David Mamet's production of Speed-The-Plow. The play is a satirical dissection of the American movie business, a theme Mamet would revisit in his later films Wag the Dog (1997) and State and Main(2000). Madonna had heard of the role from friends over dinner and fought very hard to obtain it. #Madonna #davidmamet #1988 #speedtheplow"
    }
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
    ],
    "sourceItemCount": 3,
    "sourceEvidence": {
      "sourceItemId": "source_item_95c32560eab823b9e3e27a03427ea85837a5cc71deccd20b6477fa6f1ff4b4ba",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BHNeInHhABvFn3CRPHiQSkcysPN32W_G7u63X80/",
      "excerpt": "Shot during rehearsals. On February 23rd 1988, Madonna began rehearsals for her second theatre role as Karen in David Mamet's production of Speed-The-Plow. The play is a satirical dissection of the American movie business, a theme Mamet would revisit in his later films Wag the Dog (1997) and State and Main(2000). Madonna had heard of the role from friends over dinner and fought very hard to obtain it. #Madonna #davidmamet #1988 #speedtheplow"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_e01229df6e28591e7df282ca2879770a06408ba7ce2b6bb2215993012c1542e6",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CsW7zIMKuf6/",
      "excerpt": "April - May 1983 The Funhouse 526 West 26th Street New York NY ————————— Interesting excerpt from an interview with Jellybean in New York magazine dated March 28th 1988. Just five ears after the events in '83 Jellybean reminisces on the various events during April and May '83 that led him to meet Madonna, remix three album tracks and then produce 'Holiday'. The Warner executive he mentions would of been Bobby Shaw (see earlier posts). #madonna #1983 #newyork @madonna @djellybeanbenitez @m_rosenblatt @bobbyshawpromotions #thefunhousenyc"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_d47d0965678c6f73894d2c78117489b683cc4b870138d0fbeacb5aa9e1277336",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/Crpt_aKq9xf/",
      "excerpt": "April - May 1983 The Funhouse 526 West 26th Street New York NY ————————- Interesting excerpt from an interview with Jellybean in New York magazine dated March 28th 1988. Just five years after the events in ‘83 Jellybean reminisces on the various events during April and May ‘83 that led him to meet Madonna, remix three album tracks and then produce ‘Holiday’. The Warner executive he mentions would of been Bobby Shaw (see earlier posts). #madonna #1983 #newyork @madonna @djjellybeanbenitez @m_rosenblatt @bobbyshawpromotions #thefunhousenyc"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_1b9431131cd36bc4f3116a010f39e9d9ab103876c71d5dee26586239d0418c00",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BHNj0AwhAsB2U0fDH9pt5X883bTqHBYiMY9X9c0/",
      "excerpt": "May 3rd 1988. Opening night of Speed-The-Plow. Opening night saw media from all over the world descend on Broadway to interview stars arriving for the play. Madonna and her co-stars later held a press-conference at the play's after-party that evening at Tavern-On-The-Green. Overall, reviews of the play were excellent but Madonna's performance received a mixed reaction (to put it politely). Less than a week after its official opening, the Tony Award Nominations were announced and \"Speed-The-Plow\" gained nods for \"Best Play\", \"Best Actor\" (Ron Silver - who went on to win) and \"Best Director\" (Gregory Mosher). Madonna is wearing Jean Paul Gaultier. #madonna #lincolncentretheatre #manhattan #broadway #newyork #1988 #speedtheplow #davidmamet @madonna"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_6a17eeb34dc72d9c70c682a69ff3f3548c318e686a3f30cab772a1d529e37294",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BHNjAmBBajJ96Ts-vhjehX8rbVFw59dKbnYssY0/",
      "excerpt": "May 3rd 1988. Opening night of Speed-The-Plow. Opening night saw media from all over the world descend on Broadway to interview stars arriving for the play. Madonna and her co-stars later held a press-conference at the play's after-party that evening. Overall, reviews of the play were excellent but Madonna's performance received a mixed reaction (to put it politely). Less than a week after its official opening, the Tony Award Nominations were announced and \"Speed-The-Plow\" gained nods for \"Best Play\", \"Best Actor\" (Ron Silver - who went on to win) and \"Best Director\" (Gregory Mosher). #madonna #lincolncentretheatre #manhattan #broadway #newyork #1988 #speedtheplow #davidmamet"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_e6322de6d3000f0b14a07b6bfd27a654ea4893dcb6ba11719bbab7704bafb574",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BIaULmAhVWmn0cCJv4xlrU5CM7JV4kRMNJtVQ40/",
      "excerpt": "On set shot from the filming of Dick Tracey with co star Charlie Korsmo 'Kid'. Although filmed in 1989 the film had a huge amount of post production and costs ran and ran over the original $25 million it was first awarded by Disney. The final release date was June 14th 1990. #Madonna #dicktracy #1989 #milenacanonero #breathlessmahoney #kid #charliekorsmo"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_d9864a06261eda7deb4fe7f112e5e2a716de53eb41a1384b9c010eb93350d193",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BIDf9IZjKa6yiXpvjPC822u1PX3-D5oVl09J1I0/",
      "excerpt": "The Like A Prayer video was shot in January 1989. Directed again by Mary Lambert and shot at Raleigh Studios in Hollywood, California and at San Pedro Hills in San Pedro, California. Madonna wanted the video to be more provocative than anything she had done before. Actor Leon Robinson was hired to play the role of a saint, which was inspired by Martin de Porres. The video was shot over four days, with an extra day allotted for re-shooting some of the scenes. Originally Lambert had casts taken of Leon's face, hand and feet to create the statue of the saint which would be used as a decoration. The actor only enacted the live scenes. However, after post-production started, Lambert found that the statue did not look like Leon, who was asked to re-shoot the respective scenes. Leon had to act as the statue and required special make-up; he had to stand motionless during extended periods of shooting and retakes. The actor recalled that standing like a statue was difficult since \"first of all, I didn't realize how hard it is on the back to stand absolutely tall and straight and not move. Secondly, as a performer you have this nervous energy—and my requirements here were total antithesis of …"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_2f5f51271d11145c4ff9c57bcd66fb5cc489316d2b9615365dea978589c8aaad",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BILKjC1hXsmyurp-P4eO653dmh7NG8KlGt9L940/",
      "excerpt": "Shot on set of Like A Prayer video by Alberto Tolot. January 1989. San Pedro Hills California #madonna #sanpedro #california #1989 #likeaprayer @madonna"
    }
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
    ],
    "sourceItemCount": 9,
    "sourceEvidence": {
      "sourceItemId": "source_item_cf47fc4070eb73bf34534d2a085824f615b72fc7ad6dabee8d1d40a90f9eec8b",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BH5YQKCh9d9fnCo9mvKUqKFFI2eTjfyC2-aKBM0/",
      "excerpt": "Shot by Herb Ritts. January 1989. This huge session created for the promotion of the Like A Prayer album consisted of many different looks - leaning heavily on the feel of the albums influence of Catholicism and sexuality. Styled by Sarahjane Hoare. Hair by Serena Radealli, Make up by Francesca Tolot. #Madonna #herbritts #likeaprayer #1989"
    }
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
    ],
    "sourceItemCount": 2,
    "sourceEvidence": {
      "sourceItemId": "source_item_7d53b68badb7333c4a942ec4c893bd2834640582a48ab9a268d4a6e7fc1eb69e",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BH7ZbqkB31lrK45qIvnlNU8L9eDrSEkFlvlOUI0/",
      "excerpt": "CLOSE UP. Herb Ritts. January 1989. Part of the 'Like A Prayer' session shot in LA. Styled by Sarahjane Hoare. Hair by Serena Radealli Make Up by Francesca Tolot, Wardrobe by RAP, Neal Street London. This session was featured first on the cover of March 23rd edition of Rolling Stone magazine, alongside an interview by Bill Zehme. #Madonna #herbritts #likeaprayer #1989 #expressyourself #rollingstonemagazine"
    }
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
    ],
    "sourceItemCount": 2,
    "sourceEvidence": {
      "sourceItemId": "source_item_dc3bc6d31f27cea29112c05bc675b56381bfd606c6ddb1c52018b000dfca008e",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BILK-omh08kgiJHMlNe3c2UHGae7WOoifMI-Ds0/",
      "excerpt": "In studio still from Like A Prayer during shooting January 1989 Raleigh Studios Beverley Hills. #Madonna #likeaprayer #1989 #california @madonna"
    }
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
    ],
    "sourceItemCount": 3,
    "sourceEvidence": {
      "sourceItemId": "source_item_48b695d8a8e8440cbb473f94dcd05cb708c5e218591b787b5811e29dd8fded75",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BIwXHg-h_VDxxS7oCYLov1mmq5Jz4_EnUbZn2Y0/",
      "excerpt": "\"Pussy Rules The World!\" explained Madonna in a UK 'Omnibus' interview in 1990 when discussing this section of the video of her crawling on hand and knee to a saucer of milk! Express Yourself video on set shot by Alberto Tolot. Culver City Studios, California. April 1989. Although heavily influenced by Fritz Langs 'Metropolis' the video also drew inspiration from the paintings of Tamara De Lempicka and the juxtaposition of the male and female roles in today's society. #Madonna #expressyourself #davidfincher #albertotot #fritzlang #metropolis #1989 @madonna @albertotolot"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_f118535fbe54b9568db827ecbd8a72b307c0f5cfdccc54e8aefe4c1d30376e21",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CvCPO7NMZta/",
      "excerpt": "July / August 1983 Bahamas Nassau New Providence ———————- During either July or August ‘83, Madonna and Jellybean took a break to the Bahamas. Nothing is known about this trip other than Madonna mentioning it once in 1990 to Glenn O’Brien in Interview magazine. The timing seems some what incorrect as Madonna confuses the first time he met her during Thanksgiving ‘82 with Jean-Michel Basquiat and this other time where she states she had her second tan following a trip to the Bahamas with Jellybean :- “GLENN O’BRIEN: The first time we met, you had…a tan. MADONNA: I had a tan! How unusual. MADONNA: Oh, I think I had been to the Bahamas with Jellybean [Benitez]. That was the second tan in my whole life………….” #madonna #1983 #bahamas @madonna @djjellybeanbenitez #icon #madonnastyle #queen #musicicon #BoyToy #musicroyalty #madonnamusic #iconic #madonnaqueen #bitchimmadonna #allhailthequeen #madonnaphotos #themadonnastory"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_c28e0539366981be09c210b0a670412e68f7b2dd5ac65092bf6d4dd4db78650d",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BJidgeYjHVj4Xmo18tTSs3FMYhCYU2lWvckueU0/",
      "excerpt": "Attending auditions in Los Angeles, January 9th,10th,11th 1990 Dancer Luis Camacho \"Me and the other members of the House of Xtravaganza were sort of picked before the other auditions. We did a private audition (in New York). Madonna was looking for voguers. We auditioned and were doing well when Madonna stopped the audition and asked if we were trained dancers. She didn’t know that we were trained dancers. She thought we were just street dancers\". Dancer - Salim “Slam” Gauwloos: \"I felt that we landed the tour because we were definitely the best and the cutest\". #madonna #losangeles #1990 #january #newyork #auditions @madonna @salim.gauwloos @1luisxtrava"
    }
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
    ],
    "sourceItemCount": 2,
    "sourceEvidence": {
      "sourceItemId": "source_item_c63ff4673322e43c65dca5f33c1710ca453db8e5e8f6c27188567a6ec86386f7",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BJbHz-ahFPdFmjw8lWb4qGtR_g2jHBB3TrwCKg0/",
      "excerpt": "Visiting Palette a lesbian night club in West Hollywood in January 1990. #madonna #palette #January #1990 #westhollywood @madonna"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_96951a0a8257c951f52becccd8c91682ab53fdfc2c6a0954a6b7e1629d439fb3",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BJhW-WnjQMulxz4i2XuJtrmcKWiCC2_Uuo7qCk0/",
      "excerpt": "9th,10th,11th January 1990. Los Angeles. Madonna begins her auditions for her next tour in L.A. Dancer Kevin Stea stated in interview \"We auditioned in groups of 40 and she took one or two from each group for the callbacks. There were about 150 guys at the callbacks. I auditioned right in front, dead center to get seen for the callback. I had to pull out every style imaginable in the freestyle to get the gig.\" #madonna #kevinstea #losangeles #1990 #january #auditions @madonna @kevinstea"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_61db3bec562da335055bf5e2555c0c00bc8451bfd9caf4f0ebfec70057e9dc88",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BJhTSiNjZgjTIc6uV5wBMC9VBz-y42U94I2tqg0/",
      "excerpt": "9th,10th,11th January 1990. Los Angeles. Madonna begins her auditions for her next tour in L.A. Dancer Carlton Wilborn stated in 2006 \" I remember everybody wanted to be there. It was all over the news and more that 400 men showed up. It was a men only call. They were from different cities and different countries. I think we had three or four combinations to learn, all in that one audition time. We learned a couple of combinations. She did the cut. We learned the other combinations and she did another cut. That sort of thing. And that was it.\" Contd....... #madonna #losangeles #1990 #january @madonna @carltonwilbornrising"
    }
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
    ],
    "sourceItemCount": 6,
    "sourceEvidence": {
      "sourceItemId": "source_item_39b68178297f778acc9b1584dcfc1a9dcca28914938b9403ead3e7f70bd2c29a",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BPrXi__jcDaCk7ZGf7NEgVmaCxxsV4lN9mSdRk0/",
      "excerpt": "Jan - March 1991 Los Angeles Madonna and Alek shot by Albert Sanchez while editing Truth or Dare. #madonna #losangeles #1991 #alekkeshishian @madonna @alekkeshishian"
    }
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
    ],
    "sourceItemCount": 5,
    "sourceEvidence": {
      "sourceItemId": "source_item_4b43fbf51ff7c6d18f6f7e20eb971290a2fd60fe91afdd448f523b535968b168",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BP-4w78jMt6JrT0kZR-u5a-XvFAhvVK0Vq6FJU0/",
      "excerpt": "Jan - March 1991. Kaufman Astoria Studios - 3412 36th Street, Astoria, Queens, New York City, New York, USA. Woody Allens 'Shadows and Fog' was filmed on a sound stage in New York. Madonna (playing Marie a tightrope artist in a circus) would of filmed her slot in January 1991, before leaving for Los Angeles. Cut to just over three minutes this part is very often over looked. Shadows and Fog is a 1991 American black-and-white comedy film directed by Woody Allen and based on his one-act play Death. It stars Allen, Mia Farrow, John Malkovich, John Cusack, Madonna, and Kenneth Mars. It was filmed on a 26,000-square-foot (2,400 m2) set at Kaufman Astoria Studios, which holds the distinction of being the biggest set ever built in New York. It was also his (Woody's) last film for Orion Pictures. Shadows and Fog is an homage to German Expressionist filmmakers Fritz Lang, G. W. Pabst and F. W. Murnau in its visual presentation, and to the writer Franz Kafka in theme. Critical reception of the work was lukewarm. #madonna #woodyallen #shadowsandfog #johnmalkovich @madonna @jgmalkovich"
    }
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
    ],
    "sourceItemCount": 5,
    "sourceEvidence": {
      "sourceItemId": "source_item_dd64eb787a27c0db6b3fe7ad8a52db5479bea80699acbb7f9ba7266fff7a59b7",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BP-8ycdjlytQJv0mJA7IzoJKGt2gOg_Avm96y40/",
      "excerpt": "January 1991 Madonna as Marie. On set shot by Brian Hamill during the filming of Shadows and Fog at Kaufman Astoria Studios in New York. Brian Hamill (who has over 50 years of photography experience) photographed many of Woody Allen's films including Annie Hall. And also shot many celebrities and sports personalities including Mohammed Ali #madonna #shadowsandfog #1991 #woodyallen #brianhamill @madonna"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_328327f358576c2562392f09caae70c6171a9ae9d5de38ed6165e8b245205fc8",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BP--uH1Dv6FE6YQPDDYAbLyoRMNQfXdwBx9s000/",
      "excerpt": "January 1991 Madonna as Marie. On set shot (with director Woody Allen and costars Mia Farrow and John Malkovich) by Brian Hamill during the filming of Shadows and Fog at Kaufman Astoria Studios in New York. Brian Hamill (who has over 50 years of photography experience) photographed many of Woody Allen's films including Annie Hall. And also shot many celebrities and sports personalities including Mohammed Ali #madonna #shadowsandfog #1991 #woodyallen #brianhamill @madonna @johnmalkovich.1024 @realmiafarrow"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_97056f377f88afae3a4e7b21ccc379e173d1a92134816d3cf53ca961432c74b6",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BP--djeD8ZhV0SQUyvesYIbZEQTFhwx4P5cu0w0/",
      "excerpt": "January 1991 Madonna as Marie. On set shot (with director Woody Allen) by Brian Hamill during the filming of Shadows and Fog at Kaufman Astoria Studios in New York. Brian Hamill (who has over 50 years of photography experience) photographed many of Woody Allen's films including Annie Hall. And also shot many celebrities and sports personalities including Mohammed Ali #madonna #shadowsandfog #1991 #woodyallen #brianhamill @madonna"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_df17b96b4273229908ceb07bcef2723e0d7ab0ede565fbb6e8d21155af7833cb",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BP-_GvlDV2aWIimOghTquPx-R83a83Ipk-sODM0/",
      "excerpt": "January 1991 Madonna as Marie, with co star ( Strongman/husband - Dennis Vestunis) On set shot by Brian Hamill during the filming of Shadows and Fog at Kaufman Astoria Studios in New York. Brian Hamill (who has over 50 years of photography experience) photographed many of Woody Allen's films including Annie Hall. And also shot many celebrities and sports personalities including Mohammed Ali #madonna #shadowsandfog #1991 #woodyallen #brianhamill @madonna"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_3bc167e66e9f9bff727cf1004effdd9f2edee27fb4a01025b1e5d396a1311e7f",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BT4MyLGj78NgmUyZ8677qntujOPu4leayHQvdU0/",
      "excerpt": "NOT SURE WHY INSTAGRAM FELT THE NEED TO REMOVE THIS POST - BUT HEY! HERE'S A CENSORED VERSION INSTEAD!!!! January 1992 The Chelsea Hotel Room 822 222 West 23rd Street New York Model : David Boals Hair : Garren Make Up : Francois Nars #madonna #newyork #stevenmeiselphotography #stevenmeisel #SEX #chelseahotel @madonna @stevenmeisel @garrennewyork @francoisnars @davidboals"
    }
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
    ],
    "sourceItemCount": 12,
    "sourceEvidence": {
      "sourceItemId": "source_item_ce8db8804393ff7e4f214684e11bba14761a115d58dd4a76d8694d4e02e45f69",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BT3Gbd9j7z0I8dPDFvl1R_JSASSMXcPlh1RwXE0/",
      "excerpt": "January 1992 The Chelsea Hotel Room 822 222 West 23rd Street New York Model : Madonna Hair : Garren Make Up : Francois Nars Styling : Paul Cavaco #madonna #newyork #stevenmeiselphotography #stevenmeisel #SEX #chelseahotel @madonna @stevenmeisel @paulcavaco"
    }
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
    ],
    "sourceItemCount": 3,
    "sourceEvidence": {
      "sourceItemId": "source_item_855f804fd9cdf7338de75f7424a4f0c6f0df233a42376dee92c2fa97784af815",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BTvXSrvjD0nZrG_7Yz4WuLblVaWtAOGqLuSQn00/",
      "excerpt": "January 1992. Steven Meisel's studio Wooster Street Manhattan. Hair by Garren Model: actor Karl Geary (M found him in a bar in NYC - he went onto appear in Sex and The City and many other films) thanks @aaltociccone Shooting for Madonna's forthcoming SEX book began in January in New York. A variety of locations were used throughout the city from Meisel's studio to the Gaiety nightclub in Times Square, The Chelsea Hotel and The Vault....the external locations then moved onto Miami during February '92.... #madonna #SEX #stevenmeisel #stevenmeiselphotography #newyork #karlgeary #1992 @madonna @stevenmeisel @garrennewyork"
    }
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
    ],
    "sourceItemCount": 23,
    "sourceEvidence": {
      "sourceItemId": "source_item_6544923102931a67cd16cb0d6f98a7cb8344379337b5f0ce586c05adcfa2ebfd",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BT5vsxnDLxpamY48StperAFZTkQdEONpFvZH580/",
      "excerpt": "January 1992 The Gaiety Theatre 2nd Floor 201 West 46th Street New York The Gaiety Theatre was a gay male burlesque theater in Times Square, New York City, for almost 30 years until it closed on March 17, 2005. The name on the awning over the entrance was Gaiety Theatre, but it was also called the Gaiety Male Burlesque or the Gaiety Male Theatre in advertisements. It was located at 201 W 46th Street, New York, NY 10036, on the second floor of the building that also housed what was the last Howard Johnson's restaurant in New York City. The Gaiety opened in late 1975 and closed in 2005 and was owned by Denise Rozis, run by both her and her younger sister, Evridiki Rozis. The theater DJ from 1979 until 1986 was the late Terence Foster (d. June 4, 1990, AIDS), who was one of the original dancers. Models : Madonna, Udo Kier, Daniel De La Falaise and the Gaiety Dancers including Joey Stefano. Hair : Garren Make Up : Francois Nars Styling : Paul Cavaco, (NOTE: Madonna is wearing her famous Bob Mackie gown from the '91 Oscar ceremony and used again in 2015 for the Iconic video for the Rebel Heart Tour.) #madonna #newyork #stevenmeiselphotography #stevenmeisel #joeystefano #SEX #garrennewyo…"
    }
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
    ],
    "sourceItemCount": 17,
    "sourceEvidence": {
      "sourceItemId": "source_item_22403da9c595a48d35b864c4826f245c26157d1d9a075463d4c02c9db4187a06",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BTpR3_yDbuWn9qG0kupuOoMymtlnpC5SDVZ44A0/",
      "excerpt": "January 1992. Steven Meisel's studio Wooster Street Manhattan. Shooting for Madonna's forthcoming SEX book began in January in New York. A variety of locations were used throughout the city from Meisel's studio to the Gaiety nightclub in Times Square, The Chelsea Hotel and The Vault....the external locations then moved onto Miami during February '92.... #madonna #SEX #stevenmeisel #stevenmeiselphotography #newyork #1992 @madonna @stevenmeisel"
    }
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
    ],
    "sourceItemCount": 2,
    "sourceEvidence": {
      "sourceItemId": "source_item_ced69adca3e67f6499c28523098c8e938da63650e75607990c1440afbe827604",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BT4jB8Cja16QPRzT8QZKblKTj_6wGAqZJsCFrQ0/",
      "excerpt": "January 1992 The Chelsea Hotel Room 822 222 West 23rd Street New York Model : Madonna & Unknown Hair : Garren Make Up : Francois Nars Styling : Paul Cavaco #madonna #newyork #stevenmeiselphotography #stevenmeisel #SEX #chelseahotel @madonna @stevenmeisel @paulcavaco"
    }
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
    ],
    "sourceItemCount": 8,
    "sourceEvidence": {
      "sourceItemId": "source_item_fe19e464b8e4983aff6cadc2733c6a8d9505739dd30541d355befb0a3909dc14",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BaNASxrDfTf3HKFumGqZY-ygxdeE2gj07D3JFY0/",
      "excerpt": "Saturday January 9th 1993, Rihga Royal Hotel (now called The London NYC) 151 West 54th Street New York Madonna (wearing Anna Sui) attended a series press interviews with US, Australian and Japanese News networks including MTV to discuss the release of her forthcoming film Body Of Evidence - released nationwide January 15th 1993. #madonna #bodyofevidence #1993 @madonna @annasui"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_a2837f273b48b9be77d6591797ba203c93e19b2b3b69025b17648a9affde3e1f",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/Bajjk56DwPG-oSVPWEtJa8BDup9QRKbRQeMUWM0/",
      "excerpt": "Saturday January 9th 1993, Rihga Royal Hotel (now called The London NYC) 151 West 54th Street New York Madonna (wearing Anna Sui) attends a series press interviews with US, Japanese and Australian News networks (this one for a Movie Preview Show on GR-TV ) including MTV to discuss the release of her forthcoming film Body Of Evidence - released nationwide January 15th 1993. #madonna #bodyofevidence #1993 @madonna @annasui"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_5aefa6cab51edc3a511b8d62fd7704e1364161252803a9e1a1f5c0b463df2682",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/Baf_JRxD3oHSHN05SZVgZqCXet479tXQ9zuXj80/",
      "excerpt": "Saturday January 9th 1993, Rihga Royal Hotel (now called The London NYC) 151 West 54th Street New York Madonna (wearing Anna Sui) attended a series press interviews with US, Japanese and Australian News networks (this one with journalist and all round Madonna lover - Liz Smith of Good Morning America) including MTV to discuss the release of her forthcoming film Body Of Evidence - released nationwide January 15th 1993. #madonna #bodyofevidence #1993 @madonna @annasui REPOST FROM @madonnatv #unapologeticbitch"
    }
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
    ],
    "sourceItemCount": 3,
    "sourceEvidence": {
      "sourceItemId": "source_item_29f7a9d36e90be44440a4363679eb0b3deb6a96f34f37d0af8fd1a49646ace5f",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BacWOvbjd0m5xxhfkd35BOF2SClIzEH3QAErfk0/",
      "excerpt": "Saturday January 9th 1993, Rihga Royal Hotel (now called The London NYC) 151 West 54th Street New York Madonna is wearing : Anna Sui Madonna attended a series press interviews with US, Japanese and Australian News networks (this one for Entertainment Tonight aired January 15th 1993) including MTV to discuss the release of her forthcoming film Body Of Evidence - released nationwide January 15th 1993. #madonna #bodyofevidence #1993 @madonna @annasui"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_f3777a7e32830f12b1fdb98a319aae06a6b60939fd7615ca30deeb5fda8c4c2a",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BadY5YMjNk1D433fL3tj4fPII03C0HT0cTisa40/",
      "excerpt": "Saturday January 9th 1993, The Pierre Hotel Rotunda Room 2 East 61 Street New York Madonna is wearing : Anna Sui Madonna attended a series press interviews with US, Japanese and Australian News networks (this one for NCB News with Bryant Gumbel ) including MTV to discuss the release of her forthcoming film Body Of Evidence - released nationwide January 15th 1993. #madonna #bodyofevidence #1993 @madonna @annasui"
    }
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
    ],
    "sourceItemCount": 2,
    "sourceEvidence": {
      "sourceItemId": "source_item_a1d413d5cbb7e85c4b00973f978568f760a988705fab74faf350f5a788997721",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BadZgdVjvFmOVZnwMiaxFRoyL0QM67dS8fNod80/",
      "excerpt": "Saturday January 9th 1993, Rihga Royal Hotel (now called The London NYC) 151 West 54th Street New York Madonna is wearing : Anna Sui Madonna attended a series press interviews with US, Japanese and Australian News networks (this one for NCB News with Bryant Gumbel ) including MTV to discuss the release of her forthcoming film Body Of Evidence - released nationwide January 15th 1993. #madonna #bodyofevidence #1993 @madonna @annasui"
    }
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
    ],
    "sourceItemCount": 3,
    "sourceEvidence": {
      "sourceItemId": "source_item_a1513bf6d3c6779dc74f45fbad8f47bd66a14bf121354b76d26d3df94f99a369",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BmXvA7xHk0pWXZ5zADaEgb6NKiw1Di-44pIU1U0/",
      "excerpt": "January 1994 Miami Jogging with Ingrid #madonna #miami #newyear #vacation #ingridcasares @madonna @ingridmiami Thanks @giulioangelmaz for the photo"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_b77bc084225f9ef8c3bac4fb39d21f361fe9244e5358886afd31479d74990e0e",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BnZj8hrn6UTdeAjStvwZhDxNpU1fBY2ge8WeE40/",
      "excerpt": "February 1994 Valentines letter from Madonna to ICON fanclub #madonna #valentines #1994 @madonna THANKS TO @giulioangelmaz FOR THIS"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_6f1d244d4d6832e4a9b80bd1c8939e4af30fc5d5329350e4774bb7de6d406752",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BnX76Xen-RQWyTE9YscnG1BIdv2HvBf7HBUevA0/",
      "excerpt": "New York City February 1994 M with Guy out and about in New York City #madonna #newyork #1994 @madonna @guyoseary"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_4a131164b5fc34218f807fb133b727d0e3db22e250ef8d46fa65156feac12682",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BnX8_isHZFw4VDrPnpupnb2ivPIgsGxztDP4ok0/",
      "excerpt": "February 1994 Out in New York City Interesting photo as M’s hair looks very much like it did in the “I’ll Remember” video.... #madonna #newyork #1994 #illremember @madonna"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_914ab7b2b06222c473377faff85b1cbfb382d99efbcfbb55e38f12ab5c75aff6",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BnZjJs9nFHgf9guA9TrMt_-syjXgmQbfh2kRsw0/",
      "excerpt": "February 1994 At a NBA Basketball game with Guy Oseary #madonna #guyoseary #newyork #basketball #1994 @madonna @guyoseary"
    }
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
    ],
    "sourceItemCount": 3,
    "sourceEvidence": {
      "sourceItemId": "source_item_a85d2df834d0ea398a117930427ad31e834f73030f5b2a3f67a03168b6e7ed3c",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BnX7LPOnEeU--x-VxilvwgFafrSYt0En90ve8s0/",
      "excerpt": "Februrary 1994 New York Back in New York with her very short fringe following a vacation in Miami and photoshoot for Harper’s Bazaar in Los Angeles. Madonna with her NYC driver Joe. #madonna #newyork #1994 @madonna"
    }
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
    ],
    "sourceItemCount": 2,
    "sourceEvidence": {
      "sourceItemId": "source_item_5475be418e1bd2a56437f040894e8201264b88f5fd491bc1e7d729720c6918c7",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BywsSn2AM2w4mv1EYH4ULXt00R8PeqFGUVKNnE0/",
      "excerpt": "January 1st 1995 Leaving the Warsaw Ballroom Collins Avenue and Espanola Way South Beach Miami Florida Madonna, Ingrid Casares and Carlos Leon attend the Gianni Versace New Years Eve Party thrown at Miami nightclub “Warsaw Ballroom”. Five decades after its debut as a cafeteria, the 1939 Art Deco venue turned into Warsaw — In 1989 Andrew Delaplaine took over the lease on what had been the China Club and renamed the club the \"Warsaw Ballroom\". It went into become one of the most talked about gay clubs in South Beach. #madonna #1994 #miami @madonna @ingridmiami @carlitoleon"
    }
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
    ],
    "sourceItemCount": 2,
    "sourceEvidence": {
      "sourceItemId": "source_item_159af9618845c61678ea3bcd330367d347dd55f0a997f1b88aa202e0020521a2",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/BywsYH9AnEgld6eeydi2_rSYKNvZ6-DGgmAKGQ0/",
      "excerpt": "Late December ‘94/Early January 1995 Miami Madonna attends a basketball match with Carlos Leon and Ingrid Casares. #madonna #miami #1995 @madonna @carlitoleon @ingridmiami"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_e5a22896ddce76ac6eeeb5b953ea92a3481f787ee04ececb020b4c648dfac0a9",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/B05FZmCg--gCAmpMiO2Q4zCjhGzN0AO3445XD00/",
      "excerpt": "January 13th 1995 Out and about in New York #madonna #1995 #newyork @madonna"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_d92c74e82c8d023f1af10e4ec70840744676e4bc78e5ed3b56b1f9a50cd497e2",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/ByzLFVOgqtezjumdDVO6uKYHN-75jqBc_ChTdw0/",
      "excerpt": "Wednesday January 25th 1995 Joseph Papp Public Theatre 425 Lafayette Street East Village New York Madonna attends a performance of Christopher Walken’s play “HIM”. The play, (Walken’s first written effort) revolved around the afterlife of Elvis Presley. Side note - Walken played Madonna’s guardian angel in Bad Girl - Jan ‘93. #madonna #newyork #1995 #him @madonna"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_00c25f081453dafa3baf0cc4e9ca7f81f346764f486f6992e81e6743e4935095",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/ByzLdqtgu86EpyrVs8jzmhKuaKPioVHShTCt0Y0/",
      "excerpt": "Wednesday January 25th 1995 Joseph Papp Public Theatre 425 Lafayette Street East Village New York Madonna attends a performance of Christopher Walken’s play “HIM” with Carlos Leon. The play, (Walken’s first written effort) revolved around the afterlife of Elvis Presley. Side note - Walken played Madonna’s guardian angel in Bad Girl - Jan ‘93. #madonna #newyork #1995 #him @madonna @carlitoleon"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_303087c38cbf7dd91ff6509aaefea35563109b6f6d8da47e829302586376045e",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/By1wBOzgCEQIJx4Ic8zgphekoDe4jnSL8i0TVo0/",
      "excerpt": "‪January 29th 1995‬ ‪Shrine Auditorium ‬ ‪Los Angeles ‬ ‪CA‬ ‪Madonna, Babyface and Dick Clark at rehearsals a day ahead of the 22nd annual American Music Awards. ‬ ‪Madonna and Babyface would perform “Take a Bow” for the event the following evening. The track then stayed unperformed (live) until the 2016 leg of the Rebel Heart Tour. #madonna ‬#takeabow #americanmusicawards #1995 ‬@madonna @babyface #dickclark"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_efeb33ca1a84fb43e596618e48c59cad50428031c65c55501f850fd8bd14b932",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CAuJ3INpVzXqiDRIl23pQVyKW1heiemztiKsvs0/",
      "excerpt": "Mansión Alzaga Unzué Hotel Mozart Suite Buenos Aires Paparazzi shots from Madonnas stay in Buenos Aires during Jan - March 1996 whilst filming “Evita”. #madonna #evita #buenosaires #argentina #1996 @madonna SOME IMAGES SUPPLIED BY @ernansinh"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_8625d5a28c968e7dbcde1de6fb09a0d7fd14207d8dcd95b8c22df86090706144",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CAvr4BpJmVEDQiz70gC4GRdbH1YdjPyQ_kwlyM0/",
      "excerpt": "Buenos Aires Paparazzi shots and Argentinian magazine articles from Madonnas visit to Buenos Aires during Jan - March 1996 whilst filming “Evita”. #madonna #evita #buenosaires #argentina #1996 @madonna"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_5368364dfdfb2a56135fea2017f4c80a77fec16e2d5702a914bd9783295e01bf",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CAvtmVLpYpJHcchZnMwInzkU59_s2xMSvNiiZ80/",
      "excerpt": "Buenos Aires Paparazzi shots and magazine articles from Madonnas visit to Buenos Aires during Jan - March 1996 whilst filming “Evita”. #madonna #evita #buenosaires #argentina #1996 @madonna THANKS FRAN"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_45760bc14baa6c9da439d3b2ef7971d3d2e78bbe9b8529ea722269234d40ba1a",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CAvvO11paD6_QD3YQRCa7eYyy2LTCr_vd_Jnik0/",
      "excerpt": "Buenos Aires Paparazzi shots and magazine articles from Madonnas visit to Buenos Aires during Jan - March 1996 whilst filming “Evita”. #madonna #evita #buenosaires #argentina #1996 @madonna IMAGES SUPPLIED BY @ernansinh"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_a4f16c83091cd50b5f3f5786438f154e4261ac35ebda2069fba5a482605ad99d",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CBOd_ECpjrFFtIEEos6kGiuqL3JHayj4YfTJsg0/",
      "excerpt": "Argentine press cuttings and paparazzi shots taken from early 1996 - Jan to March - whilst in Buenos Aires filming Evita. Supplied with thanks from @ernansinh #madonna #evita #buenosaires #argentina #1996 @madonna"
    }
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
    ],
    "sourceItemCount": 3,
    "sourceEvidence": {
      "sourceItemId": "source_item_a9fd628c320666dcc57c3a321086e1c3ddaf12744746055a89b0aa6c70160cbe",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CAvsrAGJ-i3GtJJk3MeFx1sLQiS2BuXO8pcyAA0/",
      "excerpt": "Buenos Aires Paparazzi shots and magazine articles from Madonnas visit to Buenos Aires during Jan - March 1996 whilst filming “Evita”. #madonna #evita #buenosaires #argentina #1996 @madonna"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_b208a31ee72251fafc324b2872483ebbc0b86adae4d50d853ad6b89282fa3351",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CNZRjBgjABQRpons5vIgvaez_dKPaoqsw3sb9E0/",
      "excerpt": "Early January 1997 Saks Fifth Avenue Bal Harbour Mall 9700 Collins Ave Bal Harbour, FL Shopping with Ingrid Casares and Caresse Henry in Miami. During the New Year vacation and Lourdes’ christening #madonna #1997 #miami @madonna @ingridmiami @saks"
    }
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
    ],
    "sourceItemCount": 2,
    "sourceEvidence": {
      "sourceItemId": "source_item_7e1d9c2e66ba523608e68727d450e35b8a0eabd9a14e8be3090e48b1f634957a",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CKV2JuGjUVYBNNMcGpgLC9YB6tTFoYp1lP6IUc0/",
      "excerpt": "Early January 1997 Saks Fifth Avenue Bal Harbour Mall 9700 Collins Ave Bal Harbour, FL Shopping with Ingrid Casares in Miami. During the New Year vacation and Lourdes’ christening #madonna #1997 #miami @madonna @ingridmiami @saks"
    }
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
    ],
    "sourceItemCount": 2,
    "sourceEvidence": {
      "sourceItemId": "source_item_73a00ca27a592f4d44db9d420545ede56c5bd9197f7454a57b37e530e0cebdc8",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CKBGCjdjX9XDgqc78UcmVerSobrvIYGdibbXt00/",
      "excerpt": "January 1997 Los Angeles California Out and about in LA early 97. #madonna #losangeles @madonna"
    }
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
    ],
    "sourceItemCount": 6,
    "sourceEvidence": {
      "sourceItemId": "source_item_82224c399c8ded5a592a07ec7ca03fa3701166ba84287400bbbad584b25ff429",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CJakxTqjskNYLraPLL_rDKyk3PupxyliZhuc_00/",
      "excerpt": "Friday 3rd January 1997 St. Jude Melkite Catholic Church, 126th SE, 15th Road Miami, Florida Lourdes Maria Leon Ciccone, Madonnas first child is baptized at St. Jude Melkite Catholic Church, Miami, Florida. Photographer Herb Ritts shot Madonna and child throughout the occasion both at her home (seen here) and at the church. #madonna #1997 @herbritts"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_797f742daac864d9a6f02da045f1b5313ce3b742fda1b2ba3cb1b6a3007a7df0",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CJalzf-jZFjyWw74mCS2yPwiZTbSl_TxFb_1s00/",
      "excerpt": "Friday 3rd January 1997 St. Jude Melkite Catholic Church, 126th SE, 15th Road Miami, Florida PAPARAZZI SHOT Lourdes Maria Leon Ciccone, Madonnas first child is baptized at St. Jude Melkite Catholic Church, Miami, Florida. Seen here with Madonna is her sister Melanie and friend Alek Keshisian. #madonna #1997"
    }
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
    ],
    "sourceItemCount": 2,
    "sourceEvidence": {
      "sourceItemId": "source_item_a1d5eab73666b6aba76150903917469bca80b9c81280ff97093c54edc96403c9",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CJaluQljMYh1CjhwXvsEzGU0kCSVYkVP_hZ8l40/",
      "excerpt": "Friday 3rd January 1997 St. Jude Melkite Catholic Church, 126th SE, 15th Road Miami, Florida PAPARAZZI SHOT Lourdes Maria Leon Ciccone, Madonnas first child is baptized at St. Jude Melkite Catholic Church, Miami, Florida. #madonna #1997"
    }
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
    ],
    "sourceItemCount": 8,
    "sourceEvidence": {
      "sourceItemId": "source_item_c1dd54f063fcc3607dd1830de3177ff3679d97a69f2a0318ef0c65f022c400b8",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/COLq8znjG3CJf44tYTwcX0tHzumzZfMSiqIdeU0/",
      "excerpt": "Mid January 1998 Smash Box Studios 8549 Higuera St Culver City CA ——————————————————- Photographers : Inez van Lamsweerde and Vinoodh Matadin Styling: Lori Goldstein On-set styling: Arianne Phillips Assistant stylist : Diana Oberlander Hair: Luigi Murenu Make-up: James Kaliardos Neck Corset : Olivier Theyskens ——————————————————- Photographic duo Lamsweerde and Matadin shoot “Madonna Choses Dare” a portfolio for Spin magazine in Los Angeles. They recalled this about the shoot :- “Madonna showed all of her clothes to Lourdes and asked her if she liked the dress she was wearing. Lourdes would say “No” but Madonna says she’s just at an age where she says no to everything”. #madonna #spin #1998 #rayoflight @madonna @inezandvinoodh @loribgoldstein @ariannephillips @luigimurenu @jameskaliardos @oliviertheyskens"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_840d7fbcb62519b09fe496bd5ebdedb209f83804c5cd80c46eee70b6b4f7a3dc",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/COM_AMbj6gHwkQ1xj9GuXwbLzmqXFGsreVHCfw0/",
      "excerpt": "Mid January 1998 Smash Box Studios 8549 Higuera St Culver City CA ——————————————————- Photographers : Inez van Lamsweerde and Vinoodh Matadin Styling: Lori Goldstein On-set styling: Arianne Phillips Assistant stylist : Diana Oberlander Hair: Luigi Murenu Make-up: James Kaliardos Dress : Fendi Horsetail boa : Rick Owens ——————————————————- Photographic duo Lamsweerde and Matadin shoot “Madonna Choses Dare” a portfolio for Spin magazine in Los Angeles. They recalled this about the shoot :- “Madonna showed all of her clothes to Lourdes and asked her if she liked the dress she was wearing. Lourdes would say “No” but Madonna says she’s just at an age where she says no to everything”. #madonna #spin #1998 #rayoflight @madonna @inezandvinoodh @loribgoldstein @ariannephillips @luigimurenu @jameskaliardos @fendi @rickowensonline FURTHER NOTE : THIS IMAGE WAS LATER USED FOR THE COVER OF THE SINGLE “POWER OF GOODBYE”"
    }
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
    ],
    "sourceItemCount": 3,
    "sourceEvidence": {
      "sourceItemId": "source_item_c67a41e648b9445abd45ae8e0183d94f93c34ae587fb5ad7fd1d2144e2bfeede",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/COpBpEHDZvLYRBYgg3kXlwA_XL9TDIfy84e6cs0/",
      "excerpt": "January 1998 Los Angeles ———————————————————- Madonna with William Orbit during a press hearing for the album “Ray of Light”. Various members of the press were invited to hear the album ahead of its release in order to create reviews that coincided with the interviews Madonna and William had also started to give. Exact dates for this listening party are sketchy but apparently SPIN magazine listened to the album on January 19th ‘98. #madonna #rayoflight #losangeles #1998 @madonna @williamorbit"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_d09c6f2045c40b29c63987c2de059eed79ceffc3c80b2b691a97241557b77574",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CNt8qBPjNq2J7TSdo9bzAYFC4rMCq45JZFs1W00/",
      "excerpt": "Early January 1998 California ————————————————- Polaroid taken during the wig fittings and styling session for upcoming video “Frozen”. Director if the video Chris Cunningham later had this to say about this afternoon :- “Jean Paul Gaultier had made a beautiful collection of gothic dresses that year and Madonna asked if I was ok with incorporating them into the video. I was more than happy to. We spent an afternoon with Madonna, trying on all these different dresses and I picked 2 or 3. The look I wanted was a kind of gothic John W. Waterhouse hybrid.” #madonna #1998 #frozen @madonna @peter.savic @ariannephillips @chriscunningham8 THANKS @madonnaoutfits"
    }
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
    ],
    "sourceItemCount": 16,
    "sourceEvidence": {
      "sourceItemId": "source_item_bb4747638b7ee19996bd568f46af91814cf07cfb51942f8a8700c5d3c3c79e8e",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CNwYu8QDEIkpEQRGMvCeaBrGSh159vg8NJZWv00/",
      "excerpt": "Wednesday 7th January - Saturday 10th January 1998 Cuddeback Dry Lake Indian Wells Valley Mojave Desert San Bernardino County California ———————————————————- Director : Chris Cunningham Stylist : Arianne Phillips Hair: Peter Savic Make-up: Joanne Gair Hair & Make up assistant: April Lipsky Wardrobe : Jean Paul Gaultier SS98 Production Company : Black Dog Films Henna Mehndi Tattoos : Sumita Batra ———————————————————— Directed by British artist Chris Cunningham, the music video for \"Frozen\" was filmed at Cuddeback Lake in the Mojave Desert in California between January 7–11, 1998. In an interview with Kurt Loder on the set of the video on January 8th, Madonna described herself as a “mystical creature in the desert”. It was inspired by the film The English Patient and the work of Martha Graham. The video premiered on February 16, 1998 on MTV at 4 p.m. Madonna had became interested in working with Cunningham him after seeing his Aphex Twin-directed music video, \"Come to Daddy\" (released October 1997). Discussing the shoot, Madonna later told MTV Asia , \"the original idea was to go someplace where it's really cold and where there's snow, and we were thinking of shooting it in Iceland. B…"
    }
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
    ],
    "sourceItemCount": 3,
    "sourceEvidence": {
      "sourceItemId": "source_item_b3becb124b0767ad50619c9ee4e01a822a87e2fbb0279b9568845c287176a53e",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CN0n7eUDRXAmMujr98BA2ttWA2TrM-3LqbVFoM0/",
      "excerpt": "Wednesday 7th January - Saturday 10th January 1998 Cuddeback Dry Lake Indian Wells Valley Mojave Desert San Bernardino County California ———————————————————- Director : Chris Cunningham Stylist : Arianne Phillips Hair: Peter Savic Make-up: Joanne Gair Hair & Make up assistant: April Lipsky Wardrobe : Jean Paul Gaultier Henna Mehndi Tattoos : Sumita Batra ———————————————————— The wonderful make up artist Joanne Gair recently had this to say about the shoot on her Instagram account :- “Filming Frozen was made through extreme weather challenges, where we had set up and were well into filming on the desert floor of a dried up Cuddeback Lake bed in the Mojave desert, California when it started to rain. The desert lake bed began to activate into a lake in moments when it wouldn’t stop raining. All of a sudden we were sinking! Your every footstep was a challenge casting your step first to your knee and more in moments of thick soggy mud. Our heavy camera trucks, motor homes and all vehicles were sinking. We had to evacuate on the spot to resume later in the week to finish. I remember having to redraw talented henna artist Sumita Batra’s hand tattoos back on Madonna with my sharpie while w…"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_c541ebaf3df7cf222057ea1f4a00774434f782c2280a3b0c6ed5dcdf3547cb65",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CZMCnetsir6NSjSZNfcXdJpARXKnLVS5M0P6Co0/",
      "excerpt": "January 1999 Miami ———————— Holiday in Miami at the start of 1999 #madonna #miami #1999 #babypumpkin @madonna @ingridmiami THANKS TO GM."
    }
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
    ],
    "sourceItemCount": 2,
    "sourceEvidence": {
      "sourceItemId": "source_item_ebe55dcbfd64e90f6a9bb281f028d783205e398033d1f47fba8da6ce822790bd",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CZMDOzsMxP6G5C9ZvJvrD-9tOHNQwQhGt4TGwQ0/",
      "excerpt": "1st-5th January 1999 Miami ———————— Holiday in Miami at the start of 1999 #madonna #miami #1999 #lourdesleon @madonna @ingridmiami"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_31365670aa9ffd6f8d1a3bc3cb41924245b87e8cd2d10e80ed4c8ca9b3fc68af",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CZOdX9GM5hMrs8EMZOhYzhfAg-KXOQZWebsXoc0/",
      "excerpt": "Wednesday 6th January 1999 Cort Theatre 138 West 48th Street, between Seventh Avenue and Sixth Avenue Broadway New York City ————————- Madonna with Ingrid Casares leaving the Cort Theatre after watching Nicole Kidman and Iain Glen in the Sam Mendes / David Hare production of the Blue Room. #madonna #newyork #1999 @madonna @ingridmiami"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_72121c4478e027dac56f268e6ba8bf93a878f4396424b13a9f84885ebae19787",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CZPlQvzsMCvCV8H-gW-PfUuxNHmMO34P9zPFgI0/",
      "excerpt": "Thursday 7th January 1999 Greenwich Village New York City ————————- Madonna (wearing the Versace Evita premier coat) with Ingrid Casares leaving a restaurant in Greenwich village. #madonna #newyork #1999 @madonna @ingridmiami @versace"
    }
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
    ],
    "sourceItemCount": 12,
    "sourceEvidence": {
      "sourceItemId": "source_item_efe732092d4eff656c9ba00e53bed9d8474198bc4021a63de67808f00dc8bda5",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CZTyoguM4VrYx2VcMBd_zVQYLK754K-sQCyJ5I0/",
      "excerpt": "Saturday 9th & Sunday 10th January 1999 Silvercup Studios 34-02 Starr Avenue Long Island City Queens New York ———————— Director: Johan Renck On set photography: Frank Micelotta Styling: Arianne Phillips Hair: Luigi Murenu Make-up: Laura Mercier Kimono: special commission by Jean Paul Gaultier Red platform boots: Sky Shoes Wrist cuffs: Stormie Art ————————- Madonna shoots the video for “Nothing Really Matters”, the fifth and final video from “Ray of Light”. Directed by Swedish director Johan Renck, (who had been introduced by Jonas Åkerlund) it was released on February 13th 1999. As with the Harpers Bazaar photo shoot from December ‘98 the video was inspired by Arthur Golden's 1997 novel Memoirs of a Geisha. It portrays Madonna (wearing two kimono’s designed by Jean Paul Gaultier) as a geisha, dancing in enclosed spaces. The “red” kimono was also later worn by Madonna during her performance of the song at the 41st Annual Grammy Awards. During the shoot Madonna told Entertainment Tonight \"The whole idea of a geisha is a straight metaphor for being an entertainer because, on one hand you're privileged to be a geisha, but on the other hand you're a prisoner [...]\" Madonna choreographed…"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_a3b0f627c354b787748578f5c1d85577697d1ee274aa90987b7ab62b7cb195fa",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CZbVJ0ONGd_xr9rZkC6-ztn-z6W_D7sOFAMFfU0/",
      "excerpt": "Monday 18th January 1999 Larry King Live Pt.4. Internet version CNN studios (located near. Madison Sq Gdn Manhattan New York NY ———————— Styling by @ariannephillips Hair by @luigimurenu ————————- Madonna (wearing Gucci) guests on CNN-TV's Larry King Live. Filmed at the CNN studios. The live recording lasted an hour (with ad breaks). Madonna spoke candidly with King discussing her life, career, music, acting and motherhood. #madonna #newyork #1999 @madonna @cnn @gucci Pt.4. Internet version"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_cb37f2579e9c11a47180fa6076b6b63ed3d423b63c82200ba0756a42f8b3c8be",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/C3KWvY1MV2K/",
      "excerpt": "Monday 12th December 1983 West Hollywood CA ————————- PHOTOGRAPHER GEORGE HOLZ DISCUSSES WORKING WITH MADONNA IN INTERVIEW MAGAZINE DURING 2012. Interesting note that George states he was meant to work with her again, it has been reported as onset photographer during the “Like A Virgin” video shoot in Venice. However on reading this quote it doesn’t seem confirmed: “I was supposed to work with her again, years later(?), but I was living in Italy at the time, and I couldn’t do it because I burst off with Italian Vogue. I had a shoot, and sometimes fashion is like that”. #madonna #1983 #westhollywood #borderline @madonna @interviewmag @maripolarama @maripolitan #georgeholz @interviewmag @cloutierremix @yohjiyamamotoofficial @jeri_heiden #icon #madonnastyle #queen #musicicon #BoyToy #musicroyalty #madonnamusic #iconic #madonnaqueen #bitchimmadonna #allhailthequeen #madonnaphotos #themadonnastory"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_fef9f200fd0d0c84e234cb56c96187906d765873a6bf72fc5e767190d64868b2",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/C85OHJqM01X/",
      "excerpt": "Wednesday 15th February 1984 —————————— ‘Borderline’ is released as the fourth single from ‘M A D ⭕️ N N A’ in the USA. Here, Seymour Stein, in interview from 2013 reminisces about his absolute belief in the track and how it changed everything…."
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_18a72ac391f33ea9ae1480f7cd702be4949cb24ab61ffbf4cf70f1c270f34ea7",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/CxBKLIpKQeR/",
      "excerpt": "Late September - early October 1983 Maripol’s studio 640 Broadway SoHo New York NY —————————- From film director Franck Lazard’s archives: Madonna’s full unedited interview recorded at Maripol’s studio loft some time between Michael Stewart’s tragic death on September 28th and the benefit gig held in his honour at Danceteria on October 3rd 1983. ————————— A short clip of Madonna’s interview was also included in the 2017 Basquiat documentary: “Rags to Riches” Directed by, David Shulman 1hr 30min. The section relating to Michael Stewart also featured original news footage and interviews with Kenny Scharf, Maripol and Suzanne Mallouk. #madonna #newyork #1983 @madonna #michaelstewart @kennyscharf @suzannemallouk @maripolarama #icon #madonnastyle #queen #musicicon #BoyToy #musicroyalty #madonnamusic #iconic #madonnaqueen #bitchimmadonna #allhailthequeen #madonnaphotos #themadonnastory"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_800ec34cd51a964f30f85af54184fff7eec741d466305ffabd101666ea898cf6",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/C6xwnhnOfTF/",
      "excerpt": "Friday 27th January 1984 LIVE : The Tube at The Haçienda FAC 104 Whitworth Street West Manchester UK ————————- The Haçienda • The Club That Shook Britain A BBC documentary from 2022, focused on the story of the Hacienda nightclub in Manchester, featuring contributions from the likes of Peter Hook, Stephen Morris, Ang Matthews, Peter Saville, Mike Pickering and others. Here they discuss the night of The Tube’s Live show and Madonna’s performance. #madonna #1984 #holiday #Manchester #FAC15 @thehaciendafac51 @madonna @warnerrecords @dances.in.yohji @cgciccone @jools.holland.official #icon #madonnastyle #queen #musicicon #BoyToy #musicroyalty #madonnamusic #iconic #madonnaqueen #bitchimmadonna #allhailthequeen #madonnaphotos #themadonnastory"
    }
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
    ],
    "sourceItemCount": 1,
    "sourceEvidence": {
      "sourceItemId": "source_item_4a0d38875407250c43aa243e62dc50e7e80fa8c1fd3c69f39075ae62b36f078c",
      "authority": "WEBO retained local corpus",
      "sourceType": "retained_webo_caption",
      "locator": "",
      "url": "https://www.instagram.com/p/DODM3HtiCte/",
      "excerpt": "Monday 15th to Friday 19th October 1984 3rd Floor Danceteria 30 West 21st Street New York NY ————————— Susan Seidelman discusses the Danceteria sequence during a Q&A in Cardiff that took place in July 2025. The Q&A was held to celebrate the films 40th anniversary and brand new 4K release. @madonna @desperately_seeking @maestrobray #markblum #danceteria #newyork #1984 #intothegroove #desperatelyseekingsusan"
    }
  }
]
;

export const mercyReaderYearRepresentations: MercyYearRepresentation[] =
[
  {
    "year": 1958,
    "representationId": "representation.inventory.asset:20444",
    "label": "webo1958",
    "relativePath": "Instagram/webo1958",
    "dateToken": "1958",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1958,
    "representationId": "representation.inventory.asset:20445",
    "label": "webo_1958",
    "relativePath": "Instagram/webo_1958",
    "dateToken": "1958",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1958,
    "representationId": "representation.inventory.asset:20551",
    "label": "webo1958",
    "relativePath": "Instagram/_Legacy SSD Imports/instaloader-ssd/webo1958",
    "dateToken": "1958",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1958,
    "representationId": "representation.inventory.asset:20552",
    "label": "webo_1958",
    "relativePath": "Instagram/_Legacy SSD Imports/instaloader-ssd/webo_1958",
    "dateToken": "1958",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1958,
    "representationId": "representation.inventory.asset:26842",
    "label": "webo1958@SynoEAStream",
    "relativePath": "Instagram/_Legacy SSD Imports/instaloader-ssd/@eaDir/webo1958@SynoEAStream",
    "dateToken": "1958",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:20551",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1959,
    "representationId": "representation.inventory.asset:1936041",
    "label": "IMG_1959.jpg",
    "relativePath": "Pictures/Kristin's Madonna Pictures/2008/2008 - Hard Candy/Promo Tours/Roseland 043008/Roseland Fan Pix/IMG_1959.jpg",
    "dateToken": "1959",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1959,
    "representationId": "representation.inventory.asset:3330109",
    "label": "IMG_1959.jpg",
    "relativePath": "Archives and Backups and Dupes Oh My/Pics from Google Drive/2008/2008 - Hard Candy/Promo Tours/Roseland 043008/Roseland Fan Pix/IMG_1959.jpg",
    "dateToken": "1959",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1959,
    "representationId": "representation.inventory.asset:1936970",
    "label": "IMG_1959.jpg@SynoResource",
    "relativePath": "Pictures/Kristin's Madonna Pictures/2008/2008 - Hard Candy/Promo Tours/Roseland 043008/Roseland Fan Pix/@eaDir/IMG_1959.jpg@SynoResource",
    "dateToken": "1959",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:3330109",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1959,
    "representationId": "representation.inventory.asset:1936971",
    "label": "IMG_1959.jpg@SynoEAStream",
    "relativePath": "Pictures/Kristin's Madonna Pictures/2008/2008 - Hard Candy/Promo Tours/Roseland 043008/Roseland Fan Pix/@eaDir/IMG_1959.jpg@SynoEAStream",
    "dateToken": "1959",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:3330109",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1959,
    "representationId": "representation.inventory.asset:1936972",
    "label": "IMG_1959.jpg",
    "relativePath": "Pictures/Kristin's Madonna Pictures/2008/2008 - Hard Candy/Promo Tours/Roseland 043008/Roseland Fan Pix/@eaDir/IMG_1959.jpg",
    "dateToken": "1959",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:3330109",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1960,
    "representationId": "representation.inventory.asset:2846205",
    "label": "b3e1960c4bb1e8f68f8c817d237d81c1808850",
    "relativePath": "Archives and Backups and Dupes Oh My/Instagram/.git/objects/5f/b3e1960c4bb1e8f68f8c817d237d81c1808850",
    "dateToken": "1960",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1960,
    "representationId": "representation.inventory.asset:656551",
    "label": "b3e1960c4bb1e8f68f8c817d237d81c1808850",
    "relativePath": "Instagram/.git/objects/5f/b3e1960c4bb1e8f68f8c817d237d81c1808850",
    "dateToken": "1960",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1962,
    "representationId": "representation.inventory.asset:2839596",
    "label": "c5942fa2be6def864d1bb3f83b3c1962f70db3",
    "relativePath": "Archives and Backups and Dupes Oh My/Instagram/.git/objects/b0/c5942fa2be6def864d1bb3f83b3c1962f70db3",
    "dateToken": "1962",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1962,
    "representationId": "representation.inventory.asset:2844834",
    "label": "29dd5f6ffa75cea1962c6a4fc3f91c97c2c786",
    "relativePath": "Archives and Backups and Dupes Oh My/Instagram/.git/objects/6f/29dd5f6ffa75cea1962c6a4fc3f91c97c2c786",
    "dateToken": "1962",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1962,
    "representationId": "representation.inventory.asset:649942",
    "label": "c5942fa2be6def864d1bb3f83b3c1962f70db3",
    "relativePath": "Instagram/.git/objects/b0/c5942fa2be6def864d1bb3f83b3c1962f70db3",
    "dateToken": "1962",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1962,
    "representationId": "representation.inventory.asset:655180",
    "label": "29dd5f6ffa75cea1962c6a4fc3f91c97c2c786",
    "relativePath": "Instagram/.git/objects/6f/29dd5f6ffa75cea1962c6a4fc3f91c97c2c786",
    "dateToken": "1962",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1963,
    "representationId": "representation.inventory.asset:1628223",
    "label": "IMG_1963.MOV",
    "relativePath": "Tours/2015 - The Rebel Heart Tour/2015.10.03 - Atlantic City/Billy Unapologetic Bitch/Billy Madonna/IMG_1963.MOV",
    "dateToken": "1963",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1963,
    "representationId": "representation.inventory.asset:655010",
    "label": "1963ceaa3dd838c99f9125ba638c02736f56f5",
    "relativePath": "Instagram/.git/objects/71/1963ceaa3dd838c99f9125ba638c02736f56f5",
    "dateToken": "1963",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1963,
    "representationId": "representation.inventory.asset:1628254",
    "label": "IMG_1963.MOV@SynoResource",
    "relativePath": "Tours/2015 - The Rebel Heart Tour/2015.10.03 - Atlantic City/Billy Unapologetic Bitch/Billy Madonna/@eaDir/IMG_1963.MOV@SynoResource",
    "dateToken": "1963",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:1628223",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1963,
    "representationId": "representation.inventory.asset:1628255",
    "label": "IMG_1963.MOV@SynoEAStream",
    "relativePath": "Tours/2015 - The Rebel Heart Tour/2015.10.03 - Atlantic City/Billy Unapologetic Bitch/Billy Madonna/@eaDir/IMG_1963.MOV@SynoEAStream",
    "dateToken": "1963",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:1628223",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1963,
    "representationId": "representation.inventory.asset:1628256",
    "label": "IMG_1963.MOV",
    "relativePath": "Tours/2015 - The Rebel Heart Tour/2015.10.03 - Atlantic City/Billy Unapologetic Bitch/Billy Madonna/@eaDir/IMG_1963.MOV",
    "dateToken": "1963",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:1628223",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1964,
    "representationId": "representation.inventory.asset:2845017",
    "label": "84658b70297f4e81bb7e75881edc2e3b1964fa",
    "relativePath": "Archives and Backups and Dupes Oh My/Instagram/.git/objects/6d/84658b70297f4e81bb7e75881edc2e3b1964fa",
    "dateToken": "1964",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1964,
    "representationId": "representation.inventory.asset:2846511",
    "label": "85bb73237d98a847b1964cfb887245db96fa33",
    "relativePath": "Archives and Backups and Dupes Oh My/Instagram/.git/objects/5b/85bb73237d98a847b1964cfb887245db96fa33",
    "dateToken": "1964",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1964,
    "representationId": "representation.inventory.asset:655363",
    "label": "84658b70297f4e81bb7e75881edc2e3b1964fa",
    "relativePath": "Instagram/.git/objects/6d/84658b70297f4e81bb7e75881edc2e3b1964fa",
    "dateToken": "1964",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1964,
    "representationId": "representation.inventory.asset:656857",
    "label": "85bb73237d98a847b1964cfb887245db96fa33",
    "relativePath": "Instagram/.git/objects/5b/85bb73237d98a847b1964cfb887245db96fa33",
    "dateToken": "1964",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1965,
    "representationId": "representation.inventory.asset:2126420",
    "label": "tim1965.livejournal.com",
    "relativePath": "Miscellaneous/boyculturemadonna/tim1965.livejournal.com",
    "dateToken": "1965",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1965,
    "representationId": "representation.inventory.asset:2843558",
    "label": "42c7067b842a6e9c40dc60f47e1965f56481a2",
    "relativePath": "Archives and Backups and Dupes Oh My/Instagram/.git/objects/7f/42c7067b842a6e9c40dc60f47e1965f56481a2",
    "dateToken": "1965",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1965,
    "representationId": "representation.inventory.asset:653904",
    "label": "42c7067b842a6e9c40dc60f47e1965f56481a2",
    "relativePath": "Instagram/.git/objects/7f/42c7067b842a6e9c40dc60f47e1965f56481a2",
    "dateToken": "1965",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1965,
    "representationId": "representation.inventory.asset:655374",
    "label": "b1965f8424c6cc0be8154ff55694dee5f27f4e",
    "relativePath": "Instagram/.git/objects/6d/b1965f8424c6cc0be8154ff55694dee5f27f4e",
    "dateToken": "1965",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1965,
    "representationId": "representation.inventory.asset:2127830",
    "label": "tim1965.livejournal.com@SynoEAStream",
    "relativePath": "Miscellaneous/boyculturemadonna/@eaDir/tim1965.livejournal.com@SynoEAStream",
    "dateToken": "1965",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:2126420",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1966,
    "representationId": "representation.inventory.asset:2851904",
    "label": "2bddfba361691c1e2c83bf2eea1966b52f2de5",
    "relativePath": "Archives and Backups and Dupes Oh My/Instagram/.git/objects/18/2bddfba361691c1e2c83bf2eea1966b52f2de5",
    "dateToken": "1966",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1966,
    "representationId": "representation.inventory.asset:2893766",
    "label": "2853118901_db1966efdd_b.jpg",
    "relativePath": "Archives and Backups and Dupes Oh My/MADONNA CHRONOLOGY/2008 - The Sticky and Sweet Tour/2008.09.11 - Wembley/2853118901_db1966efdd_b.jpg",
    "dateToken": "1966",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1966,
    "representationId": "representation.inventory.asset:662250",
    "label": "2bddfba361691c1e2c83bf2eea1966b52f2de5",
    "relativePath": "Instagram/.git/objects/18/2bddfba361691c1e2c83bf2eea1966b52f2de5",
    "dateToken": "1966",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1966,
    "representationId": "representation.inventory.asset:2894176",
    "label": "2853118901_db1966efdd_b.jpg@SynoResource",
    "relativePath": "Archives and Backups and Dupes Oh My/MADONNA CHRONOLOGY/2008 - The Sticky and Sweet Tour/2008.09.11 - Wembley/@eaDir/2853118901_db1966efdd_b.jpg@SynoResource",
    "dateToken": "1966",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:2893766",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1966,
    "representationId": "representation.inventory.asset:2894177",
    "label": "2853118901_db1966efdd_b.jpg@SynoEAStream",
    "relativePath": "Archives and Backups and Dupes Oh My/MADONNA CHRONOLOGY/2008 - The Sticky and Sweet Tour/2008.09.11 - Wembley/@eaDir/2853118901_db1966efdd_b.jpg@SynoEAStream",
    "dateToken": "1966",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:2893766",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1967,
    "representationId": "representation.inventory.asset:2140589",
    "label": "cg1967.php.html",
    "relativePath": "Miscellaneous/Siterip- Madeyes.net/www.robertchristgau.com/xg/rock/cg1967.php.html",
    "dateToken": "1967",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1967,
    "representationId": "representation.inventory.asset:2838532",
    "label": "c5091ff3c6fd09184c39b6a69f184064cd1967",
    "relativePath": "Archives and Backups and Dupes Oh My/Instagram/.git/objects/bd/c5091ff3c6fd09184c39b6a69f184064cd1967",
    "dateToken": "1967",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1967,
    "representationId": "representation.inventory.asset:2847912",
    "label": "773857d4c1bc380ed06c3458fae441326d1967",
    "relativePath": "Archives and Backups and Dupes Oh My/Instagram/.git/objects/4a/773857d4c1bc380ed06c3458fae441326d1967",
    "dateToken": "1967",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1967,
    "representationId": "representation.inventory.asset:648878",
    "label": "c5091ff3c6fd09184c39b6a69f184064cd1967",
    "relativePath": "Instagram/.git/objects/bd/c5091ff3c6fd09184c39b6a69f184064cd1967",
    "dateToken": "1967",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1967,
    "representationId": "representation.inventory.asset:658258",
    "label": "773857d4c1bc380ed06c3458fae441326d1967",
    "relativePath": "Instagram/.git/objects/4a/773857d4c1bc380ed06c3458fae441326d1967",
    "dateToken": "1967",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1968,
    "representationId": "representation.inventory.asset:1938562",
    "label": "img_1968.jpg",
    "relativePath": "Pictures/Kristin's Madonna Pictures/2008/2008 - NYC/0208 NYC/Gucci Raising Malawi and UNICEF Benefit/img_1968.jpg",
    "dateToken": "1968",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1968,
    "representationId": "representation.inventory.asset:644385",
    "label": "cc6f942ed32df01d089b1968b282810069f968",
    "relativePath": "Instagram/.git/objects/f4/cc6f942ed32df01d089b1968b282810069f968",
    "dateToken": "1968",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1968,
    "representationId": "representation.inventory.asset:650702",
    "label": "6aebd2e6080d8ce22294c80ac1968ae93c516d",
    "relativePath": "Instagram/.git/objects/a6/6aebd2e6080d8ce22294c80ac1968ae93c516d",
    "dateToken": "1968",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1968,
    "representationId": "representation.inventory.asset:661923",
    "label": "6c25667b89470352c07c8866f1968d15257879",
    "relativePath": "Instagram/.git/objects/1c/6c25667b89470352c07c8866f1968d15257879",
    "dateToken": "1968",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1968,
    "representationId": "representation.inventory.asset:1938587",
    "label": "img_1968.jpg@SynoResource",
    "relativePath": "Pictures/Kristin's Madonna Pictures/2008/2008 - NYC/0208 NYC/Gucci Raising Malawi and UNICEF Benefit/@eaDir/img_1968.jpg@SynoResource",
    "dateToken": "1968",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:1938562",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1969,
    "representationId": "representation.inventory.asset:2840871",
    "label": "c1c51a1969aff6297227c5230ef7cba9946abd",
    "relativePath": "Archives and Backups and Dupes Oh My/Instagram/.git/objects/a0/c1c51a1969aff6297227c5230ef7cba9946abd",
    "dateToken": "1969",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1969,
    "representationId": "representation.inventory.asset:651217",
    "label": "c1c51a1969aff6297227c5230ef7cba9946abd",
    "relativePath": "Instagram/.git/objects/a0/c1c51a1969aff6297227c5230ef7cba9946abd",
    "dateToken": "1969",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1970,
    "representationId": "representation.inventory.asset:1",
    "label": "1970",
    "relativePath": ".",
    "dateToken": "1970",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1970,
    "representationId": "representation.inventory.asset:1714662",
    "label": "1970",
    "relativePath": "Pictures/by year/1970",
    "dateToken": "1970",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1970,
    "representationId": "representation.inventory.asset:664063",
    "label": "1970bf0c719c175daa37fc56ba5a13e3e50f12",
    "relativePath": "Instagram/.git/objects/02/1970bf0c719c175daa37fc56ba5a13e3e50f12",
    "dateToken": "1970",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1970,
    "representationId": "representation.inventory.asset:664725",
    "label": "1970s",
    "relativePath": "Videos/year/1970s",
    "dateToken": "1970",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1970,
    "representationId": "representation.inventory.asset:692176",
    "label": "1970s@SynoResource",
    "relativePath": "Videos/year/@eaDir/1970s@SynoResource",
    "dateToken": "1970",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:664725",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1971,
    "representationId": "representation.inventory.asset:1938571",
    "label": "img_1971.jpg",
    "relativePath": "Pictures/Kristin's Madonna Pictures/2008/2008 - NYC/0208 NYC/Gucci Raising Malawi and UNICEF Benefit/img_1971.jpg",
    "dateToken": "1971",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1971,
    "representationId": "representation.inventory.asset:3338213",
    "label": "img_1971.jpg",
    "relativePath": "Archives and Backups and Dupes Oh My/Pics from Google Drive/2008/2008 - NYC/0208 NYC/Gucci Raising Malawi and UNICEF Benefit/img_1971.jpg",
    "dateToken": "1971",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1971,
    "representationId": "representation.inventory.asset:3338246",
    "label": "img_1971.jpg@SynoResource",
    "relativePath": "Archives and Backups and Dupes Oh My/Pics from Google Drive/2008/2008 - NYC/0208 NYC/Gucci Raising Malawi and UNICEF Benefit/@eaDir/img_1971.jpg@SynoResource",
    "dateToken": "1971",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:3338213",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1971,
    "representationId": "representation.inventory.asset:3338247",
    "label": "img_1971.jpg",
    "relativePath": "Archives and Backups and Dupes Oh My/Pics from Google Drive/2008/2008 - NYC/0208 NYC/Gucci Raising Malawi and UNICEF Benefit/@eaDir/img_1971.jpg",
    "dateToken": "1971",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:3338213",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1972,
    "representationId": "representation.inventory.asset:11",
    "label": "1972 - Michael Ochs Archives",
    "relativePath": "1972 - Michael Ochs Archives",
    "dateToken": "1972",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1972,
    "representationId": "representation.inventory.asset:1847193",
    "label": "1972 - Michael Ochs Archives",
    "relativePath": "Pictures/by year/1970/1972 - Michael Ochs Archives",
    "dateToken": "1972",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1972,
    "representationId": "representation.inventory.asset:2885330",
    "label": "1972 - Michael Ochs Archives",
    "relativePath": "Archives and Backups and Dupes Oh My/MADONNA CHRONOLOGY/1972 - Michael Ochs Archives",
    "dateToken": "1972",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1972,
    "representationId": "representation.inventory.asset:3217113",
    "label": "1972 - Michael Ochs Archives@SynoResource",
    "relativePath": "Archives and Backups and Dupes Oh My/MADONNA CHRONOLOGY/@eaDir/1972 - Michael Ochs Archives@SynoResource",
    "dateToken": "1972",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:2885330",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1972,
    "representationId": "representation.inventory.asset:3217114",
    "label": "1972 - Michael Ochs Archives@SynoEAStream",
    "relativePath": "Archives and Backups and Dupes Oh My/MADONNA CHRONOLOGY/@eaDir/1972 - Michael Ochs Archives@SynoEAStream",
    "dateToken": "1972",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:2885330",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1973,
    "representationId": "representation.inventory.asset:2839622",
    "label": "3021161b0e1973a38e2797cb5191a94eaac925",
    "relativePath": "Archives and Backups and Dupes Oh My/Instagram/.git/objects/af/3021161b0e1973a38e2797cb5191a94eaac925",
    "dateToken": "1973",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1973,
    "representationId": "representation.inventory.asset:649968",
    "label": "3021161b0e1973a38e2797cb5191a94eaac925",
    "relativePath": "Instagram/.git/objects/af/3021161b0e1973a38e2797cb5191a94eaac925",
    "dateToken": "1973",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1973,
    "representationId": "representation.inventory.asset:655526",
    "label": "a7df80d31db1973e18d5a3c7912dbb30dffc48",
    "relativePath": "Instagram/.git/objects/6b/a7df80d31db1973e18d5a3c7912dbb30dffc48",
    "dateToken": "1973",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1973,
    "representationId": "representation.inventory.asset:659010",
    "label": "3f6e1973b72717c7474eae8b8feb5243edfa2e",
    "relativePath": "Instagram/.git/objects/41/3f6e1973b72717c7474eae8b8feb5243edfa2e",
    "dateToken": "1973",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1973,
    "representationId": "representation.inventory.asset:663215",
    "label": "1973f291cd5aea0db982620cffa9e74c3dc90b",
    "relativePath": "Instagram/.git/objects/0c/1973f291cd5aea0db982620cffa9e74c3dc90b",
    "dateToken": "1973",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1974,
    "representationId": "representation.inventory.asset:184791",
    "label": "._1974 + B4",
    "relativePath": "Instagram/webo_1958/._1974 + B4",
    "dateToken": "1974",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1974,
    "representationId": "representation.inventory.asset:184820",
    "label": "1974 + B4",
    "relativePath": "Instagram/webo_1958/1974 + B4",
    "dateToken": "1974",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1974,
    "representationId": "representation.inventory.asset:692181",
    "label": "1974 - The Egg.asf",
    "relativePath": "Videos/year/1970s/1974 - The Egg.asf",
    "dateToken": "1974",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1974,
    "representationId": "representation.inventory.asset:238349",
    "label": "._1974 + B4@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/._1974 + B4@SynoEAStream",
    "dateToken": "1974",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184791",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1974,
    "representationId": "representation.inventory.asset:238373",
    "label": "1974 + B4@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/1974 + B4@SynoEAStream",
    "dateToken": "1974",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184820",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1975,
    "representationId": "representation.inventory.asset:184792",
    "label": "._1975",
    "relativePath": "Instagram/webo_1958/._1975",
    "dateToken": "1975",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1975,
    "representationId": "representation.inventory.asset:184821",
    "label": "1975",
    "relativePath": "Instagram/webo_1958/1975",
    "dateToken": "1975",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1975,
    "representationId": "representation.inventory.asset:660285",
    "label": "ed34aaeea1975f7056f94e62da3991410d50eb",
    "relativePath": "Instagram/.git/objects/31/ed34aaeea1975f7056f94e62da3991410d50eb",
    "dateToken": "1975",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1975,
    "representationId": "representation.inventory.asset:238350",
    "label": "._1975@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/._1975@SynoEAStream",
    "dateToken": "1975",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184792",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1975,
    "representationId": "representation.inventory.asset:238374",
    "label": "1975@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/1975@SynoEAStream",
    "dateToken": "1975",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184821",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1976,
    "representationId": "representation.inventory.asset:200",
    "label": "@eaDir",
    "relativePath": "1976 - Peter Kentes/@eaDir",
    "dateToken": "",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1976,
    "representationId": "representation.inventory.asset:201",
    "label": "kentes_78_07.jpg",
    "relativePath": "1976 - Peter Kentes/kentes_78_07.jpg",
    "dateToken": "",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1976,
    "representationId": "representation.inventory.asset:203",
    "label": "pose1.jpg",
    "relativePath": "1976 - Peter Kentes/pose1.jpg",
    "dateToken": "",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1976,
    "representationId": "representation.inventory.asset:204",
    "label": "kentes_78_01.jpg",
    "relativePath": "1976 - Peter Kentes/kentes_78_01.jpg",
    "dateToken": "",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1976,
    "representationId": "representation.inventory.asset:205",
    "label": "pose6.jpg",
    "relativePath": "1976 - Peter Kentes/pose6.jpg",
    "dateToken": "",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1976,
    "representationId": "representation.inventory.asset:206",
    "label": "kentes_78_09.jpg",
    "relativePath": "1976 - Peter Kentes/kentes_78_09.jpg",
    "dateToken": "",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1977,
    "representationId": "representation.inventory.asset:13",
    "label": "1977 - Herman Kulkens",
    "relativePath": "1977 - Herman Kulkens",
    "dateToken": "1977",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1977,
    "representationId": "representation.inventory.asset:184795",
    "label": "._1977",
    "relativePath": "Instagram/webo_1958/._1977",
    "dateToken": "1977",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1977,
    "representationId": "representation.inventory.asset:184823",
    "label": "1977",
    "relativePath": "Instagram/webo_1958/1977",
    "dateToken": "1977",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1977,
    "representationId": "representation.inventory.asset:238352",
    "label": "._1977@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/._1977@SynoEAStream",
    "dateToken": "1977",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184795",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1977,
    "representationId": "representation.inventory.asset:238376",
    "label": "1977@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/1977@SynoEAStream",
    "dateToken": "1977",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184823",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1978,
    "representationId": "representation.inventory.asset:184796",
    "label": "._1978",
    "relativePath": "Instagram/webo_1958/._1978",
    "dateToken": "1978",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1978,
    "representationId": "representation.inventory.asset:184825",
    "label": "1978",
    "relativePath": "Instagram/webo_1958/1978",
    "dateToken": "1978",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1978,
    "representationId": "representation.inventory.asset:6",
    "label": "1978 - Michael McDonnell",
    "relativePath": "1978 - Michael McDonnell",
    "dateToken": "1978",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1978,
    "representationId": "representation.inventory.asset:238353",
    "label": "._1978@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/._1978@SynoEAStream",
    "dateToken": "1978",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184796",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1978,
    "representationId": "representation.inventory.asset:238377",
    "label": "1978@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/1978@SynoEAStream",
    "dateToken": "1978",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184825",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1979,
    "representationId": "representation.inventory.asset:10",
    "label": "1979 - Michael McDonnell",
    "relativePath": "1979 - Michael McDonnell",
    "dateToken": "1979",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1979,
    "representationId": "representation.inventory.asset:12",
    "label": "1979 - Patrick Hernandez",
    "relativePath": "1979 - Patrick Hernandez",
    "dateToken": "1979",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1979,
    "representationId": "representation.inventory.asset:184826",
    "label": "1979",
    "relativePath": "Instagram/webo_1958/1979",
    "dateToken": "1979",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1979,
    "representationId": "representation.inventory.asset:2",
    "label": "1979 - Bob's Space",
    "relativePath": "1979 - Bob's Space",
    "dateToken": "1979",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1979,
    "representationId": "representation.inventory.asset:9",
    "label": "1979 - Martin Schreiber",
    "relativePath": "1979 - Martin Schreiber",
    "dateToken": "1979",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1980,
    "representationId": "representation.inventory.asset:184797",
    "label": "._1980",
    "relativePath": "Instagram/webo_1958/._1980",
    "dateToken": "1980",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1980,
    "representationId": "representation.inventory.asset:184827",
    "label": "1980",
    "relativePath": "Instagram/webo_1958/1980",
    "dateToken": "1980",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1980,
    "representationId": "representation.inventory.asset:288040",
    "label": "1980",
    "relativePath": "Instagram/webo1958/Story Highlights/1980",
    "dateToken": "1980",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1980,
    "representationId": "representation.inventory.asset:238354",
    "label": "._1980@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/._1980@SynoEAStream",
    "dateToken": "1980",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184797",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1980,
    "representationId": "representation.inventory.asset:238379",
    "label": "1980@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/1980@SynoEAStream",
    "dateToken": "1980",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:288040",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1981,
    "representationId": "representation.inventory.asset:184798",
    "label": "._1981",
    "relativePath": "Instagram/webo_1958/._1981",
    "dateToken": "1981",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1981,
    "representationId": "representation.inventory.asset:184828",
    "label": "1981",
    "relativePath": "Instagram/webo_1958/1981",
    "dateToken": "1981",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1981,
    "representationId": "representation.inventory.asset:288041",
    "label": "1981",
    "relativePath": "Instagram/webo1958/Story Highlights/1981",
    "dateToken": "1981",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1981,
    "representationId": "representation.inventory.asset:238355",
    "label": "._1981@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/._1981@SynoEAStream",
    "dateToken": "1981",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184798",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1981,
    "representationId": "representation.inventory.asset:238380",
    "label": "1981@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/1981@SynoEAStream",
    "dateToken": "1981",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:288041",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1982,
    "representationId": "representation.inventory.asset:184800",
    "label": "._1982",
    "relativePath": "Instagram/webo_1958/._1982",
    "dateToken": "1982",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1982,
    "representationId": "representation.inventory.asset:184829",
    "label": "1982",
    "relativePath": "Instagram/webo_1958/1982",
    "dateToken": "1982",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1982,
    "representationId": "representation.inventory.asset:288042",
    "label": "1982",
    "relativePath": "Instagram/webo1958/Story Highlights/1982",
    "dateToken": "1982",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1982,
    "representationId": "representation.inventory.asset:238356",
    "label": "._1982@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/._1982@SynoEAStream",
    "dateToken": "1982",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184800",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1982,
    "representationId": "representation.inventory.asset:238381",
    "label": "1982@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/1982@SynoEAStream",
    "dateToken": "1982",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:288042",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1983,
    "representationId": "representation.inventory.asset:20114",
    "label": "1983.10.25 - Discoring - Holiday [TV Performance] @ Rai Uno, IT # 576p, Digital.mp4",
    "relativePath": "UNFILED/2024/Madonna RAI Digital Files (fixed)/Madonna RAI Digital Files (fixed)/1983.10.25 - Discoring - Holiday [TV Performance] @ Rai Uno, IT # 576p, Digital.mp4",
    "dateToken": "1983-10-25",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.inventory.search_projection"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1983,
    "representationId": "representation.inventory.asset:216397",
    "label": "@eaDir",
    "relativePath": "Instagram/webo_1958/1983/@eaDir",
    "dateToken": "",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.inventory.search_projection"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1983,
    "representationId": "representation.inventory.asset:216398",
    "label": "2022-03-08_22-12-57_UTC.jpg",
    "relativePath": "Instagram/webo_1958/1983/2022-03-08_22-12-57_UTC.jpg",
    "dateToken": "2022-03-08",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.inventory.search_projection"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1984,
    "representationId": "representation.inventory.asset:184832",
    "label": "1984",
    "relativePath": "Instagram/webo_1958/1984",
    "dateToken": "1984",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1984,
    "representationId": "representation.inventory.asset:251642",
    "label": "1984-84.txt",
    "relativePath": "Instagram/webo1958/1984-84.txt",
    "dateToken": "1984",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1984,
    "representationId": "representation.inventory.asset:288044",
    "label": "1984",
    "relativePath": "Instagram/webo1958/Story Highlights/1984",
    "dateToken": "1984",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1984,
    "representationId": "representation.inventory.asset:238383",
    "label": "1984@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/1984@SynoEAStream",
    "dateToken": "1984",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:288044",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1984,
    "representationId": "representation.inventory.asset:288072",
    "label": "1984@SynoEAStream",
    "relativePath": "Instagram/webo1958/Story Highlights/@eaDir/1984@SynoEAStream",
    "dateToken": "1984",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:288044",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1985,
    "representationId": "representation.inventory.asset:10167",
    "label": "Madonna  ET News 1985 (Madonna Mania).png",
    "relativePath": "UNFILED/2011-2023/Madonna  ET News 1985 (Madonna Mania).png",
    "dateToken": "1985",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1985,
    "representationId": "representation.inventory.asset:10227",
    "label": "Madonna first ever Dutch TV Interview with Adam Curry in 1985 Countdown special.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna first ever Dutch TV Interview with Adam Curry in 1985 Countdown special.mp4",
    "dateToken": "1985",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1985,
    "representationId": "representation.inventory.asset:10259",
    "label": "Madonna The Virgin Tour opens in Seattle USA 1985 TV news report.png",
    "relativePath": "UNFILED/2011-2023/Madonna The Virgin Tour opens in Seattle USA 1985 TV news report.png",
    "dateToken": "1985",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1985,
    "representationId": "representation.inventory.asset:10371",
    "label": "Madonna first ever Dutch TV Interview with Adam Curry in 1985 Countdown special.png",
    "relativePath": "UNFILED/2011-2023/Madonna first ever Dutch TV Interview with Adam Curry in 1985 Countdown special.png",
    "dateToken": "1985",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1985,
    "representationId": "representation.inventory.asset:10690",
    "label": "Madonna The Virgin Tour opens in Seattle USA 1985 TV news report.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna The Virgin Tour opens in Seattle USA 1985 TV news report.mp4",
    "dateToken": "1985",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1985,
    "representationId": "representation.inventory.asset:10820",
    "label": "Madonna  ET News 1985 (Madonna Mania).mp4",
    "relativePath": "UNFILED/2011-2023/Madonna  ET News 1985 (Madonna Mania).mp4",
    "dateToken": "1985",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1986,
    "representationId": "representation.inventory.asset:10077",
    "label": "Madonna accepting MTV award 1986.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna accepting MTV award 1986.mp4",
    "dateToken": "1986",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1986,
    "representationId": "representation.inventory.asset:10286",
    "label": "Madonna - MTV Year In Madonna 1986.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna - MTV Year In Madonna 1986.mp4",
    "dateToken": "1986",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1986,
    "representationId": "representation.inventory.asset:10338",
    "label": "Madonna accepting MTV award 1986(1).png",
    "relativePath": "UNFILED/2011-2023/Madonna accepting MTV award 1986(1).png",
    "dateToken": "1986",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1986,
    "representationId": "representation.inventory.asset:10417",
    "label": "Madonna accepting MTV award 1986.png",
    "relativePath": "UNFILED/2011-2023/Madonna accepting MTV award 1986.png",
    "dateToken": "1986",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1986,
    "representationId": "representation.inventory.asset:10530",
    "label": "Madonna - MTV Year In Madonna 1986.png",
    "relativePath": "UNFILED/2011-2023/Madonna - MTV Year In Madonna 1986.png",
    "dateToken": "1986",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1987,
    "representationId": "representation.inventory.asset:10086",
    "label": "WANTED_ MADONNA LIVE IN FLORENCE 1987!.mp4",
    "relativePath": "UNFILED/2011-2023/WANTED_ MADONNA LIVE IN FLORENCE 1987!.mp4",
    "dateToken": "1987",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1987,
    "representationId": "representation.inventory.asset:10093",
    "label": "Madonna tour 1987 - Paris reports.png",
    "relativePath": "UNFILED/2011-2023/Madonna tour 1987 - Paris reports.png",
    "dateToken": "1987",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1987,
    "representationId": "representation.inventory.asset:10264",
    "label": "WANTED_ MADONNA LIVE IN FLORENCE 1987!.png",
    "relativePath": "UNFILED/2011-2023/WANTED_ MADONNA LIVE IN FLORENCE 1987!.png",
    "dateToken": "1987",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1987,
    "representationId": "representation.inventory.asset:10265",
    "label": "MADONNA 1987 Who.png",
    "relativePath": "UNFILED/2011-2023/MADONNA 1987 Who.png",
    "dateToken": "1987",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1987,
    "representationId": "representation.inventory.asset:10272",
    "label": "Madonna tour 1987 - New York reports.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna tour 1987 - New York reports.mp4",
    "dateToken": "1987",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1988,
    "representationId": "representation.inventory.asset:10108",
    "label": "SPEED-THE-PLOW 1988 Full Scene from TONY AWARDS.png",
    "relativePath": "UNFILED/2011-2023/SPEED-THE-PLOW 1988 Full Scene from TONY AWARDS.png",
    "dateToken": "1988",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1988,
    "representationId": "representation.inventory.asset:10170",
    "label": "Madonna SPEED-THE-PLOW Opening Night UK TV Report 1988.png",
    "relativePath": "UNFILED/2011-2023/Madonna SPEED-THE-PLOW Opening Night UK TV Report 1988.png",
    "dateToken": "1988",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1988,
    "representationId": "representation.inventory.asset:10375",
    "label": "Madonna Cover Story USA TV special 1988 including premiere of Speed The Plow.png",
    "relativePath": "UNFILED/2011-2023/Madonna Cover Story USA TV special 1988 including premiere of Speed The Plow.png",
    "dateToken": "1988",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1988,
    "representationId": "representation.inventory.asset:10429",
    "label": "Madonna IRISH TV AWARDS Acceptance Speech 1988 RTE.png",
    "relativePath": "UNFILED/2011-2023/Madonna IRISH TV AWARDS Acceptance Speech 1988 RTE.png",
    "dateToken": "1988",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1988,
    "representationId": "representation.inventory.asset:10556",
    "label": "SPEED-THE-PLOW 1988 Full Scene from TONY AWARDS.mp4",
    "relativePath": "UNFILED/2011-2023/SPEED-THE-PLOW 1988 Full Scene from TONY AWARDS.mp4",
    "dateToken": "1988",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1989,
    "representationId": "representation.inventory.asset:10491",
    "label": "Madonna USA TV report on Pepsi _ Like a Prayer controversy 1989.png",
    "relativePath": "UNFILED/2011-2023/Madonna USA TV report on Pepsi _ Like a Prayer controversy 1989.png",
    "dateToken": "1989",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1989,
    "representationId": "representation.inventory.asset:184807",
    "label": "._1989",
    "relativePath": "Instagram/webo_1958/._1989",
    "dateToken": "1989",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1989,
    "representationId": "representation.inventory.asset:184838",
    "label": "1989",
    "relativePath": "Instagram/webo_1958/1989",
    "dateToken": "1989",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1989,
    "representationId": "representation.inventory.asset:238362",
    "label": "._1989@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/._1989@SynoEAStream",
    "dateToken": "1989",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184807",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1989,
    "representationId": "representation.inventory.asset:238388",
    "label": "1989@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/1989@SynoEAStream",
    "dateToken": "1989",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184838",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1990,
    "representationId": "representation.inventory.asset:10091",
    "label": "Madonna Blond Ambition Tour Paris Bercy original TV ad 1990.png",
    "relativePath": "UNFILED/2011-2023/Madonna Blond Ambition Tour Paris Bercy original TV ad 1990.png",
    "dateToken": "1990",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1990,
    "representationId": "representation.inventory.asset:10099",
    "label": "Madonna arrives in France for Blond Ambition Tour in Paris 1990, fans, jogging, hotel & more.png",
    "relativePath": "UNFILED/2011-2023/Madonna arrives in France for Blond Ambition Tour in Paris 1990, fans, jogging, hotel & more.png",
    "dateToken": "1990",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1990,
    "representationId": "representation.inventory.asset:10101",
    "label": "Madonna Blond Ambition Tour in Nice France 1990 TV news report, rehearsal, fans, stage.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna Blond Ambition Tour in Nice France 1990 TV news report, rehearsal, fans, stage.mp4",
    "dateToken": "1990",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1990,
    "representationId": "representation.inventory.asset:10121",
    "label": "Madonna Jogging HYDE PARK LONDON 1990 on SKY NEWS-1.png",
    "relativePath": "UNFILED/2011-2023/Madonna Jogging HYDE PARK LONDON 1990 on SKY NEWS-1.png",
    "dateToken": "1990",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1990,
    "representationId": "representation.inventory.asset:10175",
    "label": "MADONNA BLOND AMBITION LONDON 1990.png",
    "relativePath": "UNFILED/2011-2023/MADONNA BLOND AMBITION LONDON 1990.png",
    "dateToken": "1990",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1991,
    "representationId": "representation.inventory.asset:10109",
    "label": "The Queen of Pop Madonna RockCaffe Cannes News Report 1991.mp4",
    "relativePath": "UNFILED/2011-2023/The Queen of Pop Madonna RockCaffe Cannes News Report 1991.mp4",
    "dateToken": "1991",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1991,
    "representationId": "representation.inventory.asset:10160",
    "label": "Unseen Madonna jogging footage from 1991-1992.mp4",
    "relativePath": "UNFILED/2011-2023/Unseen Madonna jogging footage from 1991-1992.mp4",
    "dateToken": "1991",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1991,
    "representationId": "representation.inventory.asset:10188",
    "label": "The Queen of Pop _ Madonna Truth Or Dare MTV Contest 1991.mp4",
    "relativePath": "UNFILED/2011-2023/The Queen of Pop _ Madonna Truth Or Dare MTV Contest 1991.mp4",
    "dateToken": "1991",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1991,
    "representationId": "representation.inventory.asset:10273",
    "label": "The Queen of Pop Madonna RockCaffe Cannes News Report 1991.png",
    "relativePath": "UNFILED/2011-2023/The Queen of Pop Madonna RockCaffe Cannes News Report 1991.png",
    "dateToken": "1991",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1991,
    "representationId": "representation.inventory.asset:10282",
    "label": "IN BED WITH MADONNA London Premiere JULY 1991.mp4",
    "relativePath": "UNFILED/2011-2023/IN BED WITH MADONNA London Premiere JULY 1991.mp4",
    "dateToken": "1991",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1992,
    "representationId": "representation.inventory.asset:10126",
    "label": "MADONNA on VANITY FAIR COVER 1992 - ET Report.png",
    "relativePath": "UNFILED/2011-2023/MADONNA on VANITY FAIR COVER 1992 - ET Report.png",
    "dateToken": "1992",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1992,
    "representationId": "representation.inventory.asset:10140",
    "label": "Madonna in Milan to promote Erotica in 1992, fans, fashion show, TV news report.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna in Milan to promote Erotica in 1992, fans, fashion show, TV news report.mp4",
    "dateToken": "1992",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1992,
    "representationId": "representation.inventory.asset:10222",
    "label": "MADONNA Portland, Oregon PRESS CONFERENCE Body of Evidence 1992.png",
    "relativePath": "UNFILED/2011-2023/MADONNA Portland, Oregon PRESS CONFERENCE Body of Evidence 1992.png",
    "dateToken": "1992",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1992,
    "representationId": "representation.inventory.asset:10239",
    "label": "MADONNA on VANITY FAIR COVER 1992 - ET Report.mp4",
    "relativePath": "UNFILED/2011-2023/MADONNA on VANITY FAIR COVER 1992 - ET Report.mp4",
    "dateToken": "1992",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1992,
    "representationId": "representation.inventory.asset:10278",
    "label": "MADONNA Bares Breasts at GAULTIER AIDS SHOW 1992 CNN.png",
    "relativePath": "UNFILED/2011-2023/MADONNA Bares Breasts at GAULTIER AIDS SHOW 1992 CNN.png",
    "dateToken": "1992",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1993,
    "representationId": "representation.inventory.asset:10197",
    "label": "Madonna The Girlie Show Australia Melbourne TV news Report 1993.png",
    "relativePath": "UNFILED/2011-2023/Madonna The Girlie Show Australia Melbourne TV news Report 1993.png",
    "dateToken": "1993",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1993,
    "representationId": "representation.inventory.asset:10242",
    "label": "MADONNA Fever - LIVE with BIG BAND - MAY 1993.mp4",
    "relativePath": "UNFILED/2011-2023/MADONNA Fever - LIVE with BIG BAND - MAY 1993.mp4",
    "dateToken": "1993",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1993,
    "representationId": "representation.inventory.asset:10243",
    "label": "Madonna Interview 1993 & Girlie Show.png",
    "relativePath": "UNFILED/2011-2023/Madonna Interview 1993 & Girlie Show.png",
    "dateToken": "1993",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1993,
    "representationId": "representation.inventory.asset:10275",
    "label": "Madonna Expo 1993.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna Expo 1993.mp4",
    "dateToken": "1993",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1993,
    "representationId": "representation.inventory.asset:10316",
    "label": "Madonna Expo 1993(1).png",
    "relativePath": "UNFILED/2011-2023/Madonna Expo 1993(1).png",
    "dateToken": "1993",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1994,
    "representationId": "representation.inventory.asset:184810",
    "label": "._1994",
    "relativePath": "Instagram/webo_1958/._1994",
    "dateToken": "1994",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1994,
    "representationId": "representation.inventory.asset:184844",
    "label": "1994",
    "relativePath": "Instagram/webo_1958/1994",
    "dateToken": "1994",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1994,
    "representationId": "representation.inventory.asset:251651",
    "label": "1994.txt",
    "relativePath": "Instagram/webo1958/1994.txt",
    "dateToken": "1994",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1994,
    "representationId": "representation.inventory.asset:238365",
    "label": "._1994@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/._1994@SynoEAStream",
    "dateToken": "1994",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184810",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1994,
    "representationId": "representation.inventory.asset:238393",
    "label": "1994@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/1994@SynoEAStream",
    "dateToken": "1994",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184844",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1995,
    "representationId": "representation.inventory.asset:10152",
    "label": "Madonna & Babyface, Sanremo festival 1995 Press conference footage(1).png",
    "relativePath": "UNFILED/2011-2023/Madonna & Babyface, Sanremo festival 1995 Press conference footage(1).png",
    "dateToken": "1995",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1995,
    "representationId": "representation.inventory.asset:10327",
    "label": "Madonna photoshoot for Versace - 1995(1).png",
    "relativePath": "UNFILED/2011-2023/Madonna photoshoot for Versace - 1995(1).png",
    "dateToken": "1995",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1995,
    "representationId": "representation.inventory.asset:10329",
    "label": "Madonna photoshoot for Versace - 1995.png",
    "relativePath": "UNFILED/2011-2023/Madonna photoshoot for Versace - 1995.png",
    "dateToken": "1995",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1995,
    "representationId": "representation.inventory.asset:10482",
    "label": "Madonna & Babyface, Sanremo festival 1995 Press conference footage.png",
    "relativePath": "UNFILED/2011-2023/Madonna & Babyface, Sanremo festival 1995 Press conference footage.png",
    "dateToken": "1995",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1995,
    "representationId": "representation.inventory.asset:10583",
    "label": "Madonna & Babyface, Sanremo festival 1995 Press conference footage.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna & Babyface, Sanremo festival 1995 Press conference footage.mp4",
    "dateToken": "1995",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1996,
    "representationId": "representation.inventory.asset:14899",
    "label": "Posts - 1996",
    "relativePath": "UNFILED/2024/Posts - 1996",
    "dateToken": "1996",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1996,
    "representationId": "representation.inventory.asset:184813",
    "label": "._1996",
    "relativePath": "Instagram/webo_1958/._1996",
    "dateToken": "1996",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1996,
    "representationId": "representation.inventory.asset:184846",
    "label": "1996",
    "relativePath": "Instagram/webo_1958/1996",
    "dateToken": "1996",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1996,
    "representationId": "representation.inventory.asset:20409",
    "label": "Posts - 1996@SynoEAStream",
    "relativePath": "UNFILED/2024/@eaDir/Posts - 1996@SynoEAStream",
    "dateToken": "1996",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:14899",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1996,
    "representationId": "representation.inventory.asset:238367",
    "label": "._1996@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/._1996@SynoEAStream",
    "dateToken": "1996",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184813",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1997,
    "representationId": "representation.inventory.asset:10219",
    "label": "Madonna accepting award from Tony Bennet 1997.png",
    "relativePath": "UNFILED/2011-2023/Madonna accepting award from Tony Bennet 1997.png",
    "dateToken": "1997",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1997,
    "representationId": "representation.inventory.asset:10990",
    "label": "Madonna accepting award from Tony Bennet 1997.mpg",
    "relativePath": "UNFILED/2011-2023/Madonna accepting award from Tony Bennet 1997.mpg",
    "dateToken": "1997",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1997,
    "representationId": "representation.inventory.asset:13150",
    "label": "Madonna accepting award from Tony Bennet 1997.mpg@SynoResource",
    "relativePath": "UNFILED/2011-2023/@eaDir/Madonna accepting award from Tony Bennet 1997.mpg@SynoResource",
    "dateToken": "1997",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:10990",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1997,
    "representationId": "representation.inventory.asset:13151",
    "label": "Madonna accepting award from Tony Bennet 1997.mpg@SynoEAStream",
    "relativePath": "UNFILED/2011-2023/@eaDir/Madonna accepting award from Tony Bennet 1997.mpg@SynoEAStream",
    "dateToken": "1997",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:10990",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1997,
    "representationId": "representation.inventory.asset:13152",
    "label": "Madonna accepting award from Tony Bennet 1997.mpg",
    "relativePath": "UNFILED/2011-2023/@eaDir/Madonna accepting award from Tony Bennet 1997.mpg",
    "dateToken": "1997",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:10990",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1998,
    "representationId": "representation.inventory.asset:10158",
    "label": "Madonna - Winner Best Female MTV VMA 1998(1).png",
    "relativePath": "UNFILED/2011-2023/Madonna - Winner Best Female MTV VMA 1998(1).png",
    "dateToken": "1998",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 1998,
    "representationId": "representation.inventory.asset:8715",
    "label": "SHANTI & ROL @REHEARSALS MTV VMAS 1998 (DAN·K HD EDIT 1080P).MP4",
    "relativePath": "#recycle/2026/SHANTI & ROL @REHEARSALS MTV VMAS 1998 (DAN·K HD EDIT 1080P).MP4",
    "dateToken": "1998",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1998,
    "representationId": "representation.inventory.asset:8806",
    "label": "SHANTI & ROL @REHEARSALS MTV VMAS 1998 (DAN·K HD EDIT 1080P).MP4",
    "relativePath": "2026/SHANTI & ROL @REHEARSALS MTV VMAS 1998 (DAN·K HD EDIT 1080P).MP4",
    "dateToken": "1998",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1998,
    "representationId": "representation.inventory.asset:10051",
    "label": "SHANTI & ROL @REHEARSALS MTV VMAS 1998 (DAN·K HD EDIT 1080P).MP4@SynoResource",
    "relativePath": "2026/@eaDir/SHANTI & ROL @REHEARSALS MTV VMAS 1998 (DAN·K HD EDIT 1080P).MP4@SynoResource",
    "dateToken": "1998",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:8806",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1998,
    "representationId": "representation.inventory.asset:8730",
    "label": "SHANTI & ROL @REHEARSALS MTV VMAS 1998 (DAN·K HD EDIT 1080P).MP4@SynoResource",
    "relativePath": "#recycle/2026/@eaDir/SHANTI & ROL @REHEARSALS MTV VMAS 1998 (DAN·K HD EDIT 1080P).MP4@SynoResource",
    "dateToken": "1998",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:8806",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 1999,
    "representationId": "representation.inventory.asset:10187",
    "label": "Madonna introduces BEAUTIFUL STRANGER video on TOP OF THE POPS UK 1999.png",
    "relativePath": "UNFILED/2011-2023/Madonna introduces BEAUTIFUL STRANGER video on TOP OF THE POPS UK 1999.png",
    "dateToken": "1999",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1999,
    "representationId": "representation.inventory.asset:10289",
    "label": "Madonna accepting Best video from a film 1999.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna accepting Best video from a film 1999.mp4",
    "dateToken": "1999",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1999,
    "representationId": "representation.inventory.asset:10332",
    "label": "Madonna accepting Best video from a film 1999(1).png",
    "relativePath": "UNFILED/2011-2023/Madonna accepting Best video from a film 1999(1).png",
    "dateToken": "1999",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1999,
    "representationId": "representation.inventory.asset:10351",
    "label": "Madonna introduces BEAUTIFUL STRANGER video on TOP OF THE POPS UK 1999.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna introduces BEAUTIFUL STRANGER video on TOP OF THE POPS UK 1999.mp4",
    "dateToken": "1999",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 1999,
    "representationId": "representation.inventory.asset:10941",
    "label": "Madonna accepting Best video from a film 1999.png",
    "relativePath": "UNFILED/2011-2023/Madonna accepting Best video from a film 1999.png",
    "dateToken": "1999",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2000,
    "representationId": "representation.inventory.asset:10728",
    "label": "2000 - Mark Steines Interview - ET.png",
    "relativePath": "UNFILED/2011-2023/2000 - Mark Steines Interview - ET.png",
    "dateToken": "2000",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2000,
    "representationId": "representation.inventory.asset:184817",
    "label": "._2000+",
    "relativePath": "Instagram/webo_1958/._2000+",
    "dateToken": "2000",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2000,
    "representationId": "representation.inventory.asset:184851",
    "label": "2000+",
    "relativePath": "Instagram/webo_1958/2000+",
    "dateToken": "2000",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2000,
    "representationId": "representation.inventory.asset:238371",
    "label": "._2000+@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/._2000+@SynoEAStream",
    "dateToken": "2000",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184817",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2000,
    "representationId": "representation.inventory.asset:238399",
    "label": "2000+@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/2000+@SynoEAStream",
    "dateToken": "2000",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184851",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2001,
    "representationId": "representation.inventory.asset:10082",
    "label": "Madonna Drowned World Tour 2001 Berlin German TV News report.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna Drowned World Tour 2001 Berlin German TV News report.mp4",
    "dateToken": "2001",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2001,
    "representationId": "representation.inventory.asset:10094",
    "label": "Madonna Drowned World Tour Berlin 2001 TV News report ticket sales.png",
    "relativePath": "UNFILED/2011-2023/Madonna Drowned World Tour Berlin 2001 TV News report ticket sales.png",
    "dateToken": "2001",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2001,
    "representationId": "representation.inventory.asset:10110",
    "label": "Madonna Drowned World Tour Barcelona 2001 TV News Report.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna Drowned World Tour Barcelona 2001 TV News Report.mp4",
    "dateToken": "2001",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2001,
    "representationId": "representation.inventory.asset:10176",
    "label": "Madonna Drowned World Tour Barcelona 2001 Spanish TV News Report.png",
    "relativePath": "UNFILED/2011-2023/Madonna Drowned World Tour Barcelona 2001 Spanish TV News Report.png",
    "dateToken": "2001",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2001,
    "representationId": "representation.inventory.asset:10177",
    "label": "Madonna Drowned World Tour London Sky News TV report 2001 Earls Court.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna Drowned World Tour London Sky News TV report 2001 Earls Court.mp4",
    "dateToken": "2001",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2002,
    "representationId": "representation.inventory.asset:10253",
    "label": "Madonna attending UK premiere of Die Another Day in London 2002 TV news report.png",
    "relativePath": "UNFILED/2011-2023/Madonna attending UK premiere of Die Another Day in London 2002 TV news report.png",
    "dateToken": "2002",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2002,
    "representationId": "representation.inventory.asset:10434",
    "label": "Madonna rare footage filmed during Up For Grabs play London July 2002.png",
    "relativePath": "UNFILED/2011-2023/Madonna rare footage filmed during Up For Grabs play London July 2002.png",
    "dateToken": "2002",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2002,
    "representationId": "representation.inventory.asset:10594",
    "label": "Madonna attending UK premiere of Die Another Day in London 2002 TV news report.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna attending UK premiere of Die Another Day in London 2002 TV news report.mp4",
    "dateToken": "2002",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2002,
    "representationId": "representation.inventory.asset:12606",
    "label": "Madonna attending UK premiere of Die Another Day in London 2002 TV news report.mp4@SynoResource",
    "relativePath": "UNFILED/2011-2023/@eaDir/Madonna attending UK premiere of Die Another Day in London 2002 TV news report.mp4@SynoResource",
    "dateToken": "2002",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:10594",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2002,
    "representationId": "representation.inventory.asset:12607",
    "label": "Madonna attending UK premiere of Die Another Day in London 2002 TV news report.mp4@SynoEAStream",
    "relativePath": "UNFILED/2011-2023/@eaDir/Madonna attending UK premiere of Die Another Day in London 2002 TV news report.mp4@SynoEAStream",
    "dateToken": "2002",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:10594",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2003,
    "representationId": "representation.inventory.asset:10092",
    "label": "Madonna American Life HMV London promo gig TV news report 2003.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna American Life HMV London promo gig TV news report 2003.mp4",
    "dateToken": "2003",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2003,
    "representationId": "representation.inventory.asset:10183",
    "label": "MADONNA - NUMBER ONE VIDEO STAR! (2003).mp4",
    "relativePath": "UNFILED/2011-2023/MADONNA - NUMBER ONE VIDEO STAR! (2003).mp4",
    "dateToken": "2003",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2003,
    "representationId": "representation.inventory.asset:10191",
    "label": "Madonna American Life HMV London promo gig TV news report 2003.png",
    "relativePath": "UNFILED/2011-2023/Madonna American Life HMV London promo gig TV news report 2003.png",
    "dateToken": "2003",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2003,
    "representationId": "representation.inventory.asset:10210",
    "label": "Madonna American Life UK TV Special _ interview CD_UK London 2003.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna American Life UK TV Special _ interview CD_UK London 2003.mp4",
    "dateToken": "2003",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2003,
    "representationId": "representation.inventory.asset:10220",
    "label": "Madonna American Life HMV promo gig TV news report 2003 SKY NEWS.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna American Life HMV promo gig TV news report 2003 SKY NEWS.mp4",
    "dateToken": "2003",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2004,
    "representationId": "representation.inventory.asset:10129",
    "label": "Madonna arrives at Bercy in Paris in 2004.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna arrives at Bercy in Paris in 2004.mp4",
    "dateToken": "2004",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2004,
    "representationId": "representation.inventory.asset:10132",
    "label": "Madonna Re-Invention Tour News Report 2004.png",
    "relativePath": "UNFILED/2011-2023/Madonna Re-Invention Tour News Report 2004.png",
    "dateToken": "2004",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2004,
    "representationId": "representation.inventory.asset:10180",
    "label": "Madonna French Plus Vite que La Musique Report of the Re-Invention tour 2004.png",
    "relativePath": "UNFILED/2011-2023/Madonna French Plus Vite que La Musique Report of the Re-Invention tour 2004.png",
    "dateToken": "2004",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2004,
    "representationId": "representation.inventory.asset:10212",
    "label": "Madonna Re-Invention Tour Arnhem SBS6 TV News report live 2004.png",
    "relativePath": "UNFILED/2011-2023/Madonna Re-Invention Tour Arnhem SBS6 TV News report live 2004.png",
    "dateToken": "2004",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2004,
    "representationId": "representation.inventory.asset:10263",
    "label": "Madonna Re-Invention Tour 2004 interview SBS6 Shownieuws Dutch TV report.png",
    "relativePath": "UNFILED/2011-2023/Madonna Re-Invention Tour 2004 interview SBS6 Shownieuws Dutch TV report.png",
    "dateToken": "2004",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2005,
    "representationId": "representation.inventory.asset:10076",
    "label": "Madonna Confessions On A Dance Floor promo tour KOKO album launch London 2005 SBS6 TV news report.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna Confessions On A Dance Floor promo tour KOKO album launch London 2005 SBS6 TV news report.mp4",
    "dateToken": "2005",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2005,
    "representationId": "representation.inventory.asset:10131",
    "label": "Madonna Confessions On A Dance Floor promo interview Germany Leute Heute 2005.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna Confessions On A Dance Floor promo interview Germany Leute Heute 2005.mp4",
    "dateToken": "2005",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2005,
    "representationId": "representation.inventory.asset:10377",
    "label": "MADONNA UNCUT - Rare Un-broadcast 2005 UK TV Intervew.mp4",
    "relativePath": "UNFILED/2011-2023/MADONNA UNCUT - Rare Un-broadcast 2005 UK TV Intervew.mp4",
    "dateToken": "2005",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2005,
    "representationId": "representation.inventory.asset:10416",
    "label": "Madonna Confessions On A Dance Floor promo interview Germany Leute Heute 2005.png",
    "relativePath": "UNFILED/2011-2023/Madonna Confessions On A Dance Floor promo interview Germany Leute Heute 2005.png",
    "dateToken": "2005",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2005,
    "representationId": "representation.inventory.asset:10601",
    "label": "MADONNA UNCUT - Rare Un-broadcast 2005 UK TV Intervew-1.png",
    "relativePath": "UNFILED/2011-2023/MADONNA UNCUT - Rare Un-broadcast 2005 UK TV Intervew-1.png",
    "dateToken": "2005",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2006,
    "representationId": "representation.inventory.asset:10293",
    "label": "Madonna fans Amsterdam Arena Confessions tour 2006.png",
    "relativePath": "UNFILED/2011-2023/Madonna fans Amsterdam Arena Confessions tour 2006.png",
    "dateToken": "2006",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2006,
    "representationId": "representation.inventory.asset:10373",
    "label": "Madonna arrives @ Moscow 11_9_2006 Confessions Tour TV REPORT.png",
    "relativePath": "UNFILED/2011-2023/Madonna arrives @ Moscow 11_9_2006 Confessions Tour TV REPORT.png",
    "dateToken": "2006",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2006,
    "representationId": "representation.inventory.asset:10475",
    "label": "Madonna   Confessions Tour 2006   Professional Recordings Hannover, L A  and Horsens.png",
    "relativePath": "UNFILED/2011-2023/Madonna   Confessions Tour 2006   Professional Recordings Hannover, L A  and Horsens.png",
    "dateToken": "2006",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2006,
    "representationId": "representation.inventory.asset:10476",
    "label": "WGN NEWS 9 LIVE COVERAGE FROM CHICAGO AT THE CONFESSIONS TOUR 2006 SEE IF YOU CAN FIND ME..png",
    "relativePath": "UNFILED/2011-2023/WGN NEWS 9 LIVE COVERAGE FROM CHICAGO AT THE CONFESSIONS TOUR 2006 SEE IF YOU CAN FIND ME..png",
    "dateToken": "2006",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2006,
    "representationId": "representation.inventory.asset:10516",
    "label": "Madonna fans Amsterdam Arena Confessions tour 2006.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna fans Amsterdam Arena Confessions tour 2006.mp4",
    "dateToken": "2006",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2007,
    "representationId": "representation.inventory.asset:159723",
    "label": "m_nickel2007_43753603613.json.xz",
    "relativePath": "Instagram/m_nickel2007/m_nickel2007_43753603613.json.xz",
    "dateToken": "2007",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2007,
    "representationId": "representation.inventory.asset:20451",
    "label": "m_nickel2007",
    "relativePath": "Instagram/m_nickel2007",
    "dateToken": "2007",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2007,
    "representationId": "representation.inventory.asset:636907",
    "label": "session-m_nickel2007",
    "relativePath": "Instagram/DEVTOOLS/session-m_nickel2007",
    "dateToken": "2007",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2007,
    "representationId": "representation.inventory.asset:674081",
    "label": "2007",
    "relativePath": "Videos/year/2000s/2007",
    "dateToken": "2007",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2007,
    "representationId": "representation.inventory.asset:678714",
    "label": "2007-00-00 - JP - Brillia Mare Ariake - Commercial (Beyond Borders)",
    "relativePath": "Videos/year/2000s/2007/2007-00-00 - JP - Brillia Mare Ariake - Commercial (Beyond Borders)",
    "dateToken": "2007",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2008,
    "representationId": "representation.inventory.asset:10535",
    "label": "Madonna Sticky & Sweet Tour Berlin TV news Report 2008.png",
    "relativePath": "UNFILED/2011-2023/Madonna Sticky & Sweet Tour Berlin TV news Report 2008.png",
    "dateToken": "2008",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2008,
    "representationId": "representation.inventory.asset:10673",
    "label": "Madonna Sticky & Sweet Tour Dutch TV news report 2008 fans queuing.png",
    "relativePath": "UNFILED/2011-2023/Madonna Sticky & Sweet Tour Dutch TV news report 2008 fans queuing.png",
    "dateToken": "2008",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2008,
    "representationId": "representation.inventory.asset:10678",
    "label": "Madonna Sticky & Sweet Cardiff Belgium TV news report 2008.png",
    "relativePath": "UNFILED/2011-2023/Madonna Sticky & Sweet Cardiff Belgium TV news report 2008.png",
    "dateToken": "2008",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2008,
    "representationId": "representation.inventory.asset:10697",
    "label": "Madonna - Sticky & Sweet Tour Cardiff 2 Hours Dress Rehearsal (August 17th, 2008) [Fixed and Remastered Audio]",
    "relativePath": "UNFILED/2011-2023/Madonna - Sticky & Sweet Tour Cardiff 2 Hours Dress Rehearsal (August 17th, 2008) [Fixed and Remastered Audio]",
    "dateToken": "2008",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2008,
    "representationId": "representation.inventory.asset:10914",
    "label": "Madonna Sticky & Sweet Tour Dutch TV news report 2008 fans queuing.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna Sticky & Sweet Tour Dutch TV news report 2008 fans queuing.mp4",
    "dateToken": "2008",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2009,
    "representationId": "representation.inventory.asset:10314",
    "label": "Madonna Tour 2009 TV NEWS.png",
    "relativePath": "UNFILED/2011-2023/Madonna Tour 2009 TV NEWS.png",
    "dateToken": "2009",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2009,
    "representationId": "representation.inventory.asset:10402",
    "label": "Madonna - Holiday  Dress You Up (Sticky & Sweet Tour Dress Rehearsal) [June 22nd, 2009]",
    "relativePath": "UNFILED/2011-2023/Madonna - Holiday  Dress You Up (Sticky & Sweet Tour Dress Rehearsal) [June 22nd, 2009]",
    "dateToken": "2009",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2009,
    "representationId": "representation.inventory.asset:10781",
    "label": "Madonna Sticky & Sweet Werchter Belgium DE RODE LOPER 13 07 2009.png",
    "relativePath": "UNFILED/2011-2023/Madonna Sticky & Sweet Werchter Belgium DE RODE LOPER 13 07 2009.png",
    "dateToken": "2009",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2009,
    "representationId": "representation.inventory.asset:11377",
    "label": "Madonna - Holiday _ Dress You Up (Sticky & Sweet Tour Dress Rehearsal) [June 22nd, 2009].mov",
    "relativePath": "UNFILED/2011-2023/Madonna - Holiday  Dress You Up (Sticky & Sweet Tour Dress Rehearsal) [June 22nd, 2009]/Madonna - Holiday _ Dress You Up (Sticky & Sweet Tour Dress Rehearsal) [June 22nd, 2009].mov",
    "dateToken": "2009",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2009,
    "representationId": "representation.inventory.asset:11380",
    "label": "Madonna - Holiday _ Dress You Up (Sticky & Sweet Tour Dress Rehearsal) [June 22nd, 2009].mov",
    "relativePath": "UNFILED/2011-2023/Madonna - Holiday  Dress You Up (Sticky & Sweet Tour Dress Rehearsal) [June 22nd, 2009]/@eaDir/Madonna - Holiday _ Dress You Up (Sticky & Sweet Tour Dress Rehearsal) [June 22nd, 2009].mov",
    "dateToken": "2009",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:11377",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2010,
    "representationId": "representation.inventory.asset:10757",
    "label": "Madonna Sticky & Sweet DVD release & Wax figure presentation party FAME 25-03-2010.png",
    "relativePath": "UNFILED/2011-2023/Madonna Sticky & Sweet DVD release & Wax figure presentation party FAME 25-03-2010.png",
    "dateToken": "2010",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2010,
    "representationId": "representation.inventory.asset:10857",
    "label": "Madonna Sticky & Sweet DVD release & Wax figure presentation party FAME 25-03-2010.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna Sticky & Sweet DVD release & Wax figure presentation party FAME 25-03-2010.mp4",
    "dateToken": "2010",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2010,
    "representationId": "representation.inventory.asset:12918",
    "label": "Madonna Sticky & Sweet DVD release & Wax figure presentation party FAME 25-03-2010.mp4@SynoResource",
    "relativePath": "UNFILED/2011-2023/@eaDir/Madonna Sticky & Sweet DVD release & Wax figure presentation party FAME 25-03-2010.mp4@SynoResource",
    "dateToken": "2010",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:10857",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2010,
    "representationId": "representation.inventory.asset:12919",
    "label": "Madonna Sticky & Sweet DVD release & Wax figure presentation party FAME 25-03-2010.mp4@SynoEAStream",
    "relativePath": "UNFILED/2011-2023/@eaDir/Madonna Sticky & Sweet DVD release & Wax figure presentation party FAME 25-03-2010.mp4@SynoEAStream",
    "dateToken": "2010",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:10857",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2010,
    "representationId": "representation.inventory.asset:12920",
    "label": "Madonna Sticky & Sweet DVD release & Wax figure presentation party FAME 25-03-2010.mp4",
    "relativePath": "UNFILED/2011-2023/@eaDir/Madonna Sticky & Sweet DVD release & Wax figure presentation party FAME 25-03-2010.mp4",
    "dateToken": "2010",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:10857",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2011,
    "representationId": "representation.inventory.asset:10069",
    "label": "2011-2023",
    "relativePath": "UNFILED/2011-2023",
    "dateToken": "2011",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2011,
    "representationId": "representation.inventory.asset:10255",
    "label": "MADONNA INTERVIEW at London Premiere of W.E. 2011.mp4",
    "relativePath": "UNFILED/2011-2023/MADONNA INTERVIEW at London Premiere of W.E. 2011.mp4",
    "dateToken": "2011",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2011,
    "representationId": "representation.inventory.asset:10441",
    "label": "Madonna Material Girl Fall 2011 Kelly Osbourne campaign b-roll Lola.png",
    "relativePath": "UNFILED/2011-2023/Madonna Material Girl Fall 2011 Kelly Osbourne campaign b-roll Lola.png",
    "dateToken": "2011",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2011,
    "representationId": "representation.inventory.asset:10608",
    "label": "Madonna Material Girl Fall 2011 Kelly Osbourne campaign b-roll Lola.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna Material Girl Fall 2011 Kelly Osbourne campaign b-roll Lola.mp4",
    "dateToken": "2011",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2011,
    "representationId": "representation.inventory.asset:10640",
    "label": "Madonna Material Girl collection Kelly Osbourne Fall 2011.png",
    "relativePath": "UNFILED/2011-2023/Madonna Material Girl collection Kelly Osbourne Fall 2011.png",
    "dateToken": "2011",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2012,
    "representationId": "representation.inventory.asset:10103",
    "label": "Madonna Chile MDNA Tour 2012.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna Chile MDNA Tour 2012.mp4",
    "dateToken": "2012",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2012,
    "representationId": "representation.inventory.asset:10157",
    "label": "Madonna MDNA Tour New York Madison Square Garden November 13 2012 incl Psy Gangnam Style.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna MDNA Tour New York Madison Square Garden November 13 2012 incl Psy Gangnam Style.mp4",
    "dateToken": "2012",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2012,
    "representationId": "representation.inventory.asset:10169",
    "label": "Madonna MDNA Tour in Toronto CityNews Sept 12th 2012.png",
    "relativePath": "UNFILED/2011-2023/Madonna MDNA Tour in Toronto CityNews Sept 12th 2012.png",
    "dateToken": "2012",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2012,
    "representationId": "representation.inventory.asset:10234",
    "label": "Madonna MDNA Tour Brussels Belgium TV news report 2012.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna MDNA Tour Brussels Belgium TV news report 2012.mp4",
    "dateToken": "2012",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2012,
    "representationId": "representation.inventory.asset:10306",
    "label": "Madonna MDNA Tour Brussels Belgium TV news report 2012.png",
    "relativePath": "UNFILED/2011-2023/Madonna MDNA Tour Brussels Belgium TV news report 2012.png",
    "dateToken": "2012",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2013,
    "representationId": "representation.inventory.asset:10100",
    "label": "Madonna Malawi - SIC Noticias Report 04.04.2013.mp4",
    "relativePath": "UNFILED/2011-2023/Madonna Malawi - SIC Noticias Report 04.04.2013.mp4",
    "dateToken": "2013",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2013,
    "representationId": "representation.inventory.asset:10886",
    "label": "Madonna Malawi - SIC Noticias Report 04.04.2013.png",
    "relativePath": "UNFILED/2011-2023/Madonna Malawi - SIC Noticias Report 04.04.2013.png",
    "dateToken": "2013",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2013,
    "representationId": "representation.inventory.asset:12023",
    "label": "Madonna Malawi - SIC Noticias Report 04.04.2013.mp4@SynoResource",
    "relativePath": "UNFILED/2011-2023/@eaDir/Madonna Malawi - SIC Noticias Report 04.04.2013.mp4@SynoResource",
    "dateToken": "2013",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:10100",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2013,
    "representationId": "representation.inventory.asset:12024",
    "label": "Madonna Malawi - SIC Noticias Report 04.04.2013.mp4@SynoEAStream",
    "relativePath": "UNFILED/2011-2023/@eaDir/Madonna Malawi - SIC Noticias Report 04.04.2013.mp4@SynoEAStream",
    "dateToken": "2013",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:10100",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2013,
    "representationId": "representation.inventory.asset:12025",
    "label": "Madonna Malawi - SIC Noticias Report 04.04.2013.mp4",
    "relativePath": "UNFILED/2011-2023/@eaDir/Madonna Malawi - SIC Noticias Report 04.04.2013.mp4",
    "dateToken": "2013",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:10100",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2014,
    "representationId": "representation.inventory.asset:14865",
    "label": "Madonna - Grammy Awards 26 Jan 2014.ts",
    "relativePath": "UNFILED/2024/Madonna - Grammy Awards 26 Jan 2014.ts",
    "dateToken": "2014",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2014,
    "representationId": "representation.inventory.asset:654720",
    "label": "66ed3b1c2014fa7caa62a0f9db67440e701a08",
    "relativePath": "Instagram/.git/objects/75/66ed3b1c2014fa7caa62a0f9db67440e701a08",
    "dateToken": "2014",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2014,
    "representationId": "representation.inventory.asset:656091",
    "label": "816009b109572132c6001d6922acd260a2014e",
    "relativePath": "Instagram/.git/objects/64/816009b109572132c6001d6922acd260a2014e",
    "dateToken": "2014",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2014,
    "representationId": "representation.inventory.asset:656241",
    "label": "2e2014f0551ecf948c7c078360ddc7e5c5b735",
    "relativePath": "Instagram/.git/objects/62/2e2014f0551ecf948c7c078360ddc7e5c5b735",
    "dateToken": "2014",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2014,
    "representationId": "representation.inventory.asset:667608",
    "label": "2014",
    "relativePath": "Videos/year/2010s/2014",
    "dateToken": "2014",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2015,
    "representationId": "representation.inventory.asset:14894",
    "label": "2015 - Rebel Heart Tour (Studio Sessions)",
    "relativePath": "UNFILED/2024/2015 - Rebel Heart Tour (Studio Sessions)",
    "dateToken": "2015",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2015,
    "representationId": "representation.inventory.asset:20225",
    "label": "2015 - Rebel Heart Tour (Studio Versions)",
    "relativePath": "UNFILED/2024/$ REHEARSALS/2015 - Rebel Heart Tour (Studio Versions)",
    "dateToken": "2015",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2015,
    "representationId": "representation.inventory.asset:20227",
    "label": "2015 - Rebel Heart Tour (Studio Versions)_Clips from 'Backstage Pass with Madonna'",
    "relativePath": "UNFILED/2024/$ REHEARSALS/2015 - Rebel Heart Tour (Studio Versions)_Clips from 'Backstage Pass with Madonna'",
    "dateToken": "2015",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2015,
    "representationId": "representation.inventory.asset:20255",
    "label": "2015 - Rebel Heart Tour (Studio Versions)",
    "relativePath": "UNFILED/2024/$ REHEARSALS/2015 - Rebel Heart Tour (Studio Versions)_Clips from 'Backstage Pass with Madonna'/2015 - Rebel Heart Tour (Studio Versions)",
    "dateToken": "2015",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2015,
    "representationId": "representation.inventory.asset:20283",
    "label": "2015 - Rebel Heart Tour (Studio Versions)",
    "relativePath": "UNFILED/2024/$ REHEARSALS/2015 - Rebel Heart Tour (Studio Versions)/2015 - Rebel Heart Tour (Studio Versions)",
    "dateToken": "2015",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2016,
    "representationId": "representation.inventory.asset:10578",
    "label": "Soundbreaking Segment (November 14, 2016)",
    "relativePath": "UNFILED/2011-2023/Soundbreaking Segment (November 14, 2016)",
    "dateToken": "2016",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2016,
    "representationId": "representation.inventory.asset:11331",
    "label": "Soundbreaking Segment (November 14, 2016).mkv",
    "relativePath": "UNFILED/2011-2023/Soundbreaking Segment (November 14, 2016)/Soundbreaking Segment (November 14, 2016).mkv",
    "dateToken": "2016",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2016,
    "representationId": "representation.inventory.asset:20229",
    "label": "2016 - Nothing Compares 2 U (Billboard Awards)",
    "relativePath": "UNFILED/2024/$ REHEARSALS/2016 - Nothing Compares 2 U (Billboard Awards)",
    "dateToken": "2016",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2016,
    "representationId": "representation.inventory.asset:11334",
    "label": "Soundbreaking Segment (November 14, 2016).mkv",
    "relativePath": "UNFILED/2011-2023/Soundbreaking Segment (November 14, 2016)/@eaDir/Soundbreaking Segment (November 14, 2016).mkv",
    "dateToken": "2016",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:11331",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2016,
    "representationId": "representation.inventory.asset:12585",
    "label": "Soundbreaking Segment (November 14, 2016)@SynoEAStream",
    "relativePath": "UNFILED/2011-2023/@eaDir/Soundbreaking Segment (November 14, 2016)@SynoEAStream",
    "dateToken": "2016",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:10578",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2017,
    "representationId": "representation.inventory.asset:656898",
    "label": "0f2e2017d2a4e277b7407e5fd0ea6d484c7d1b",
    "relativePath": "Instagram/.git/objects/5a/0f2e2017d2a4e277b7407e5fd0ea6d484c7d1b",
    "dateToken": "2017",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2017,
    "representationId": "representation.inventory.asset:667611",
    "label": "2017",
    "relativePath": "Videos/year/2010s/2017",
    "dateToken": "2017",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2017,
    "representationId": "representation.inventory.asset:667617",
    "label": "2017 Women's March @ Washington DC - Jan. 21 [From ''Women's March On Washington'' YouTube Channel - Full] [HQ].mp4",
    "relativePath": "Videos/year/2010s/2017/2017 Women's March @ Washington DC - Jan. 21 [From ''Women's March On Washington'' YouTube Channel - Full] [HQ].mp4",
    "dateToken": "2017",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2017,
    "representationId": "representation.inventory.asset:667619",
    "label": "2017 The 4th Annual St. Tropez Gala - July 26 [Fanmade Montage] [MQ].mp4",
    "relativePath": "Videos/year/2010s/2017/2017 The 4th Annual St. Tropez Gala - July 26 [Fanmade Montage] [MQ].mp4",
    "dateToken": "2017",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2017,
    "representationId": "representation.inventory.asset:667620",
    "label": "2017 Women's March @ Washington DC - Jan. 21 [No Logo News Feed - Full - CloseUp] [HQ].ts",
    "relativePath": "Videos/year/2010s/2017/2017 Women's March @ Washington DC - Jan. 21 [No Logo News Feed - Full - CloseUp] [HQ].ts",
    "dateToken": "2017",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2018,
    "representationId": "representation.inventory.asset:644800",
    "label": "dfd3ed55b3e2018b73153925ada09c2e257a24",
    "relativePath": "Instagram/.git/objects/ef/dfd3ed55b3e2018b73153925ada09c2e257a24",
    "dateToken": "2018",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2018,
    "representationId": "representation.inventory.asset:667612",
    "label": "2018",
    "relativePath": "Videos/year/2010s/2018",
    "dateToken": "2018",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2018,
    "representationId": "representation.inventory.asset:667614",
    "label": "2018 MET Gala - ''Like A Prayer - Beautiful Game - Hallelujah'' [Official Full Footage] [HQ].mp4",
    "relativePath": "Videos/year/2010s/2018/2018 MET Gala - ''Like A Prayer - Beautiful Game - Hallelujah'' [Official Full Footage] [HQ].mp4",
    "dateToken": "2018",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2018,
    "representationId": "representation.inventory.asset:667615",
    "label": "2018 M @ The Stonewall Inn - Full Footage - Fanmade Montage - Dec. 31 [HQ].mp4",
    "relativePath": "Videos/year/2010s/2018/2018 M @ The Stonewall Inn - Full Footage - Fanmade Montage - Dec. 31 [HQ].mp4",
    "dateToken": "2018",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2018,
    "representationId": "representation.inventory.asset:720926",
    "label": "Madonna - Aretha Franklin Tribute Speech & Camila Cabello Video of the Year - MTV Video Music Awards 2018 UNCENSORED BACKHAUL 1080i H264 46Mbps-ALANiS.ts",
    "relativePath": "Videos/Music Videos/Madonna - Aretha Franklin Tribute Speech & Camila Cabello Video of the Year - MTV Video Music Awards 2018 UNCENSORED BACKHAUL 1080i H264 46Mbps-ALANiS.ts",
    "dateToken": "2018",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2019,
    "representationId": "representation.inventory.asset:20226",
    "label": "2019 - Madame X Tour (Studio Versions)",
    "relativePath": "UNFILED/2024/$ REHEARSALS/2019 - Madame X Tour (Studio Versions)",
    "dateToken": "2019",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2019,
    "representationId": "representation.inventory.asset:20270",
    "label": "2019 - Madame X Tour (Studio Versions)",
    "relativePath": "UNFILED/2024/$ REHEARSALS/2019 - Madame X Tour (Studio Versions)/2019 - Madame X Tour (Studio Versions)",
    "dateToken": "2019",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2019,
    "representationId": "representation.inventory.asset:614376",
    "label": "Fall 2019",
    "relativePath": "Instagram/bigasbilly/Fall 2019",
    "dateToken": "2019",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2019,
    "representationId": "representation.inventory.asset:614392",
    "label": "Summer 2019",
    "relativePath": "Instagram/bigasbilly/Summer 2019",
    "dateToken": "2019",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2019,
    "representationId": "representation.inventory.asset:20311",
    "label": "2019 - Madame X Tour (Studio Versions)@SynoEAStream",
    "relativePath": "UNFILED/2024/$ REHEARSALS/@eaDir/2019 - Madame X Tour (Studio Versions)@SynoEAStream",
    "dateToken": "2019",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:20270",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2020,
    "representationId": "representation.inventory.asset:614365",
    "label": "1️⃣ 🦠🦠2020",
    "relativePath": "Instagram/bigasbilly/1️⃣ 🦠🦠2020",
    "dateToken": "2020",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2020,
    "representationId": "representation.inventory.asset:614368",
    "label": "2️⃣ 🦠🦠 2020",
    "relativePath": "Instagram/bigasbilly/2️⃣ 🦠🦠 2020",
    "dateToken": "2020",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2020,
    "representationId": "representation.inventory.asset:614377",
    "label": "Fall 2020",
    "relativePath": "Instagram/bigasbilly/Fall 2020",
    "dateToken": "2020",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2020,
    "representationId": "representation.inventory.asset:614385",
    "label": "Paris 2020",
    "relativePath": "Instagram/bigasbilly/Paris 2020",
    "dateToken": "2020",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2020,
    "representationId": "representation.inventory.asset:614393",
    "label": "Summer 2020",
    "relativePath": "Instagram/bigasbilly/Summer 2020",
    "dateToken": "2020",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2021,
    "representationId": "representation.inventory.asset:288060",
    "label": "2021",
    "relativePath": "Instagram/webo1958/Story Highlights/2021",
    "dateToken": "2021",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2021,
    "representationId": "representation.inventory.asset:614379",
    "label": "Fall 2021",
    "relativePath": "Instagram/bigasbilly/Fall 2021",
    "dateToken": "2021",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2021,
    "representationId": "representation.inventory.asset:614386",
    "label": "Spring 2021",
    "relativePath": "Instagram/bigasbilly/Spring 2021",
    "dateToken": "2021",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2021,
    "representationId": "representation.inventory.asset:614394",
    "label": "Summer 2021",
    "relativePath": "Instagram/bigasbilly/Summer 2021",
    "dateToken": "2021",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2021,
    "representationId": "representation.inventory.asset:288088",
    "label": "2021@SynoEAStream",
    "relativePath": "Instagram/webo1958/Story Highlights/@eaDir/2021@SynoEAStream",
    "dateToken": "2021",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:288060",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2022,
    "representationId": "representation.inventory.asset:184853",
    "label": "2022",
    "relativePath": "Instagram/webo_1958/2022",
    "dateToken": "2022",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2022,
    "representationId": "representation.inventory.asset:20230",
    "label": "2022 - Finally Enough Live Pride",
    "relativePath": "UNFILED/2024/$ REHEARSALS/2022 - Finally Enough Live Pride",
    "dateToken": "2022",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2022,
    "representationId": "representation.inventory.asset:20234",
    "label": "2022 - Finally Enough Live Pride",
    "relativePath": "UNFILED/2024/$ REHEARSALS/2022 - Finally Enough Live Pride/2022 - Finally Enough Live Pride",
    "dateToken": "2022",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2022,
    "representationId": "representation.inventory.asset:20316",
    "label": "2022 - Finally Enough Live Pride@SynoEAStream",
    "relativePath": "UNFILED/2024/$ REHEARSALS/@eaDir/2022 - Finally Enough Live Pride@SynoEAStream",
    "dateToken": "2022",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:20234",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2022,
    "representationId": "representation.inventory.asset:238401",
    "label": "2022@SynoEAStream",
    "relativePath": "Instagram/webo_1958/@eaDir/2022@SynoEAStream",
    "dateToken": "2022",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:184853",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2023,
    "representationId": "representation.inventory.asset:10898",
    "label": "Cher - 2023 - Christmas",
    "relativePath": "UNFILED/2011-2023/Cher - 2023 - Christmas",
    "dateToken": "2023",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2023,
    "representationId": "representation.inventory.asset:14388",
    "label": "Madame X Complete Theater Experience 2023 edit_Madame X Complete Theater Experience 2023 edit wav",
    "relativePath": "UNFILED/2025/Madame X Complete Theater Experience 2023 edit_Madame X Complete Theater Experience 2023 edit wav",
    "dateToken": "2023",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2023,
    "representationId": "representation.inventory.asset:14552",
    "label": "Madame X Complete Theater Experience 2023 edit",
    "relativePath": "UNFILED/2025/Madame X Complete Theater Experience 2023 edit_Madame X Complete Theater Experience 2023 edit wav/Madame X Complete Theater Experience 2023 edit",
    "dateToken": "2023",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2023,
    "representationId": "representation.inventory.asset:14554",
    "label": "Madame X Complete Theater Experience 2023 edit wav",
    "relativePath": "UNFILED/2025/Madame X Complete Theater Experience 2023 edit_Madame X Complete Theater Experience 2023 edit wav/Madame X Complete Theater Experience 2023 edit/Madame X Complete Theater Experience 2023 edit wav",
    "dateToken": "2023",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2023,
    "representationId": "representation.inventory.asset:12957",
    "label": "Cher - 2023 - Christmas@SynoEAStream",
    "relativePath": "UNFILED/2011-2023/@eaDir/Cher - 2023 - Christmas@SynoEAStream",
    "dateToken": "2023",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:10898",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2024,
    "representationId": "representation.inventory.asset:10067",
    "label": "2024",
    "relativePath": "UNFILED/2024",
    "dateToken": "2024",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2024,
    "representationId": "representation.inventory.asset:14393",
    "label": "2024 Auction Photos",
    "relativePath": "UNFILED/2025/Auction Photos/2024 Auction Photos",
    "dateToken": "2024",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2024,
    "representationId": "representation.inventory.asset:8794",
    "label": "Madonna - The Celebration Tour In Rio (04.05.2024) (Rebroadcast)",
    "relativePath": "2026/Madonna - The Celebration Tour In Rio (04.05.2024) (Rebroadcast)",
    "dateToken": "2024",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2024,
    "representationId": "representation.inventory.asset:10038",
    "label": "Madonna - The Celebration Tour In Rio (04.05.2024) (Rebroadcast)@SynoEAStream",
    "relativePath": "2026/@eaDir/Madonna - The Celebration Tour In Rio (04.05.2024) (Rebroadcast)@SynoEAStream",
    "dateToken": "2024",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:8794",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2024,
    "representationId": "representation.inventory.asset:10039",
    "label": "Madonna - The Celebration Tour In Rio (04.05.2024) (Rebroadcast)@SynoResource",
    "relativePath": "2026/@eaDir/Madonna - The Celebration Tour In Rio (04.05.2024) (Rebroadcast)@SynoResource",
    "dateToken": "2024",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:8794",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2025,
    "representationId": "representation.inventory.asset:8713",
    "label": "I'm Going To Tell You a Secret [Extended HD cut · Dan·K 2025] 1080p.mkv",
    "relativePath": "#recycle/2026/I'm Going To Tell You a Secret [Extended HD cut · Dan·K 2025] 1080p.mkv",
    "dateToken": "2025",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2025,
    "representationId": "representation.inventory.asset:8780",
    "label": "ScreenRecording_08-08-2025 19-07-04_1.MOV",
    "relativePath": "2026/ScreenRecording_08-08-2025 19-07-04_1.MOV",
    "dateToken": "2025",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2025,
    "representationId": "representation.inventory.asset:8808",
    "label": "I'm Going To Tell You a Secret [Extended HD cut · Dan·K 2025] 1080p.mkv",
    "relativePath": "2026/I'm Going To Tell You a Secret [Extended HD cut · Dan·K 2025] 1080p.mkv",
    "dateToken": "2025",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2025,
    "representationId": "representation.inventory.asset:10005",
    "label": "ScreenRecording_08-08-2025 19-07-04_1.MOV@SynoResource",
    "relativePath": "2026/@eaDir/ScreenRecording_08-08-2025 19-07-04_1.MOV@SynoResource",
    "dateToken": "2025",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:8780",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2025,
    "representationId": "representation.inventory.asset:8728",
    "label": "I'm Going To Tell You a Secret [Extended HD cut · Dan·K 2025] 1080p.mkv@SynoResource",
    "relativePath": "#recycle/2026/@eaDir/I'm Going To Tell You a Secret [Extended HD cut · Dan·K 2025] 1080p.mkv@SynoResource",
    "dateToken": "2025",
    "observationState": "technical_sidecar",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "representation.inventory.asset:8808",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "Technical sidecar observation retained separately; it is not proof of a second historical copy."
  },
  {
    "year": 2026,
    "representationId": "representation.inventory.asset:184801",
    "label": "._1983",
    "relativePath": "Instagram/webo_1958/._1983",
    "dateToken": "1983",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2026,
    "representationId": "representation.inventory.asset:184831",
    "label": "1983",
    "relativePath": "Instagram/webo_1958/1983",
    "dateToken": "1983",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2026,
    "representationId": "representation.inventory.asset:19593",
    "label": "Like A Virgin (Studio Version).wav",
    "relativePath": "UNFILED/2024/2015 - Rebel Heart Tour (Studio Sessions)/Like A Virgin (Studio Version).wav",
    "dateToken": "",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "",
    "sourceSenses": [
      "archive.inventory.search_projection"
    ],
    "caution": "Year-scoped archive representation observation; its presence does not prove assignment to a specific event."
  },
  {
    "year": 2026,
    "representationId": "representation.inventory.asset:202",
    "label": "1976 kentes (3).jpg",
    "relativePath": "1976 - Peter Kentes/1976 kentes (3).jpg",
    "dateToken": "1976",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2026,
    "representationId": "representation.inventory.asset:251641",
    "label": "1983.txt",
    "relativePath": "Instagram/webo1958/1983.txt",
    "dateToken": "1983",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  },
  {
    "year": 2026,
    "representationId": "representation.inventory.asset:4",
    "label": "1976 - Set 1",
    "relativePath": "1976 - Set 1",
    "dateToken": "1976",
    "observationState": "logical_archive_file",
    "provenanceState": "source_observed",
    "logicalRepresentationId": "",
    "unresolvedReason": "No retained event reached the bounded two-token filename match threshold.",
    "sourceSenses": [
      "archive.nas.postgresql"
    ],
    "caution": "No retained event reached the bounded two-token filename match threshold."
  }
]
;
