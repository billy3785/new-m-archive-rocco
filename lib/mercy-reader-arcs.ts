// Generated from the QA-passed resumed MERCY working graph and the bounded connection-worker receipt. Do not hand-edit.
// This projection preserves source, date role, precision, uncertainty, and explicit gaps.

export type MercyArcSourcePointer = {
  sourceItemId: string;
  authority: string;
  sourceType: string;
  locator: string;
  url: string;
  excerpt: string;
};

export type MercyArcRepresentation = {
  representationId: string; label: string; relativePath: string; dateToken: string; extension: string; fileKind: string; bytes: number | null; sourceSenses: string[]; matchedTokens: string[]; observationState: string; provenanceState: string; logicalRepresentationId: string; matchState: string; unresolvedReason: string; caution: string;
};

export type MercyArcStep = {
  stepId: string; year: number; lane: string; label: string; dateStart: string; dateEnd: string; datePrecision: string; dateRole: string; dateBasis: string; factType: string; assertion: string; confidence: number; state: string; place: string; sourceCount: number; sourceExcerpt: string; sourcePointers: MercyArcSourcePointer[]; representationIds: string[]; representations: MercyArcRepresentation[]; uncertainties: Array<{ detail?: string; kind?: string } | string>;
};

export type MercyArcRelationshipEdge = { edgeId: string; fromId: string; toId: string; predicate: string; state: string; sourceSense: string; evidence: string; nonclaim: string; };

export type MercyReaderArc = {
  arcId: string; title: string; summary: string; state: string; years: number[]; steps: MercyArcStep[]; relationshipEdges?: MercyArcRelationshipEdge[]; gaps: string[]; inputFingerprints: Record<string, string>; provenanceJobId: string; sourceSearchState: string; authorityBoundary: string; nextAction: string;
};

export const mercyReaderArcs: MercyReaderArc[] = 
[
  {
    "arcId": "mercy.arc.madonna-sean-penn-1985-1989",
    "title": "Madonna & Sean Penn · marriage through supported 1989 end claim",
    "summary": "A source-labelled relationship arc from the 1985 wedding through shared 1986 contexts, a 1987 separation interview, a 1988 shared performance context, and a retained source claim that the marriage ended in 1989.",
    "state": "archive_visible_supported_with_explicit_gap",
    "years": [
      1985,
      1986,
      1987,
      1988,
      1989
    ],
    "steps": [
      {
        "stepId": "mercy.fact.4c1d21bfa7cbd55361bc",
        "year": 1985,
        "lane": "relationship",
        "label": "Wedding of Madonna and Sean Penn",
        "dateStart": "1985-08-16",
        "dateEnd": "1985-08-16",
        "datePrecision": "day",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "WEBO cluster 160: Madonna and Sean Penn were married at a clifftop mansion in Malibu, California on August 16th 1985.",
        "confidence": 1,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 3,
        "sourceExcerpt": "Herb Ritts then photographed Madonna on her wedding day to Sean Penn in Malibu August 16th 1985. Madonna and Sean Penn were married at a clifftop mansion in Malibu, California. Their wedding day was also Madonna’s 27th birthday. Some of the celebrities attending the wedding included Rosanna Arquette, Tom Cruise, Andy Warhol, Cher, Martin Sheen, Rob Lowe, Carrie Fisher, Diane Keaton, David Letterman, Rosanna Arquette, Christopher Walken, Steve Rubell and many others. Sean and Madonna later honeymooned at the Highlands Inn in Carmel, California. Andy Warhol recalled this about the wedding: It was just the most exciting weekend of my life. Martin went down to the hairdresser earlier in the day to have his hair done. We rode in a limo out to Malibu and when we saw helicopters in the distance we knew we were at the wedding. Somebody had tipped the reporters off about where the wedding was and about ten helicopters were hovering, it was like Apocalypse Now. And one helicopter had a girl hanging off with a camera and they were all trying to get in close. And the security people found camouflage-outfitted photographers in the bushes. And I looked really close at Madonna and she is beautifu…",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_49e4031db0be2896df1e91bee78bf8bffd639877335d1cd7986c0545f27fefca",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BFBbbSIDYZxROa3qaYxZYsvRLMKCJ4uwHSep0E0/",
            "excerpt": "Herb Ritts then photographed Madonna on her wedding day to Sean Penn in Malibu August 16th 1985. Madonna and Sean Penn were married at a clifftop mansion in Malibu, California. Their wedding day was also Madonna’s 27th birthday. Some of the celebrities attending the wedding included Rosanna Arquette, Tom Cruise, Andy Warhol, Cher, Martin Sheen, Rob Lowe, Carrie Fisher, Diane Keaton, David Letterman, Rosanna Arquette, Christopher Walken, Steve Rubell and many others. Sean and Madonna later honeymooned at the Highlands Inn in Carmel, California. Andy Warhol recalled this about the wedding: It was just the most exciting weekend of my life. Martin went down to the hairdresser earlier in the day to have his hair done. We rode in a limo out to Malibu and when we saw helicopters in the distance we knew we were at the wedding. Somebody had tipped the reporters off about where the wedding was and about ten helicopters were hovering, it was like Apocalypse Now. And one helicopter had a girl hanging off with a camera and they were all trying to get in close. And the security people found camouflage-outfitted photographers in the bushes. And I looked really close at Madonna and she is beautifu…"
          },
          {
            "sourceItemId": "source_item_41c366e4d65b3f2c462c113c9ce69990c952b58c0df769a29b1f6f0616bdb8e2",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BFBbfNgDYZ6VSm-03vTv1u-RZz2p6oXhS5n4Sc0/",
            "excerpt": "Herb Ritts then photographed Madonna on her wedding day to Sean Penn in Malibu August 16th 1985. Madonna and Sean Penn were married at a clifftop mansion in Malibu, California. Their wedding day was also Madonna’s 27th birthday. Some of the celebrities attending the wedding included Rosanna Arquette, Tom Cruise, Andy Warhol, Cher, Martin Sheen, Rob Lowe, Carrie Fisher, Diane Keaton, David Letterman, Rosanna Arquette, Christopher Walken, Steve Rubell and many others. Sean and Madonna later honeymooned at the Highlands Inn in Carmel, California. Andy Warhol recalled this about the wedding: It was just the most exciting weekend of my life. Martin went down to the hairdresser earlier in the day to have his hair done. We rode in a limo out to Malibu and when we saw helicopters in the distance we knew we were at the wedding. Somebody had tipped the reporters off about where the wedding was and about ten helicopters were hovering, it was like Apocalypse Now. And one helicopter had a girl hanging off with a camera and they were all trying to get in close. And the security people found camouflage-outfitted photographers in the bushes. And I looked really close at Madonna and she is beautifu…"
          },
          {
            "sourceItemId": "source_item_059ba25b5ce15a011a28736b8285377b616e12dff50068b81d06c9e0701a4765",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BFBbmPFjYaH2IWM2Q_lN1B9yJJZ7A97llBPSI00/",
            "excerpt": "Herb Ritts then photographed Madonna on her wedding day to Sean Penn in Malibu August 16th 1985. Madonna and Sean Penn were married at a clifftop mansion in Malibu, California. Their wedding day was also Madonna’s 27th birthday. Some of the celebrities attending the wedding included Rosanna Arquette, Tom Cruise, Andy Warhol, Cher, Martin Sheen, Rob Lowe, Carrie Fisher, Diane Keaton, David Letterman, Rosanna Arquette, Christopher Walken, Steve Rubell and many others. Sean and Madonna later honeymooned at the Highlands Inn in Carmel, California. Andy Warhol recalled this about the wedding: It was just the most exciting weekend of my life. Martin went down to the hairdresser earlier in the day to have his hair done. We rode in a limo out to Malibu and when we saw helicopters in the distance we knew we were at the wedding. Somebody had tipped the reporters off about where the wedding was and about ten helicopters were hovering, it was like Apocalypse Now. And one helicopter had a girl hanging off with a camera and they were all trying to get in close. And the security people found camouflage-outfitted photographers in the bushes. And I looked really close at Madonna and she is beautifu…"
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": []
      },
      {
        "stepId": "mercy.fact.ea26511de50d033f7e3f",
        "year": 1986,
        "lane": "shared film context",
        "label": "At Close Range premiere",
        "dateStart": "1986-04-17",
        "dateEnd": "1986-04-17",
        "datePrecision": "day",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "On April 17, 1986, Madonna and her husband Sean Penn attended the Los Angeles premiere of his film 'At Close Range' at the Bruin Theater.",
        "confidence": 1,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 6,
        "sourceExcerpt": "On April 17 1986, Madonna and Sean Penn attended the Los Angeles premiere of his film At Close Range at the Bruin Theater, Los Angeles. Showcasing her new cropped platinum blonde hairstyle, Madonna and her notoriously media-shy husband paused to speak with various media outlets as they made their way down the red carpet. The film, which co-starred Christopher Walken and Mary Stuart Masterson, featured Madonna’s latest single, Live To Tell, along with an original musical score by Patrick Leonard comprising mostly of motifs inspired by Live To Tell‘s minor chord changes. Its director, James Foley, helmed several of Madonna’s music videos for the True Blue album and directed her next film, Who’s That Girl. #madonna #seanpenn #atcloserange #bruinstheatre #losangeles #1986 #livetotell",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_046c09b40cd967561927463f990287e6fdb9d9cacb9ddf7b8da475d803a46dd9",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BFhRuBqDYTPm8WQlVNf8991HWt7ZCsviLSFAFo0/",
            "excerpt": "On April 17 1986, Madonna and Sean Penn attended the Los Angeles premiere of his film At Close Range at the Bruin Theater, Los Angeles. Showcasing her new cropped platinum blonde hairstyle, Madonna and her notoriously media-shy husband paused to speak with various media outlets as they made their way down the red carpet. The film, which co-starred Christopher Walken and Mary Stuart Masterson, featured Madonna’s latest single, Live To Tell, along with an original musical score by Patrick Leonard comprising mostly of motifs inspired by Live To Tell‘s minor chord changes. Its director, James Foley, helmed several of Madonna’s music videos for the True Blue album and directed her next film, Who’s That Girl. #madonna #seanpenn #atcloserange #bruinstheatre #losangeles #1986 #livetotell"
          },
          {
            "sourceItemId": "source_item_98c9cfa8e1059b907581654aa93479914bfd53904a5101585de86ecb68778d5f",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BFhR4A-DYTqFj3Cn7psCi-KylFsQT654ZWvta80/",
            "excerpt": "On April 17 1986, Madonna and Sean Penn attended the Los Angeles premiere of his film At Close Range at the Bruin Theater, Los Angeles. Showcasing her new cropped platinum blonde hairstyle, Madonna and her notoriously media-shy husband paused to speak with various media outlets as they made their way down the red carpet. The film, which co-starred Christopher Walken and Mary Stuart Masterson, featured Madonna’s latest single, Live To Tell, along with an original musical score by Patrick Leonard comprising mostly of motifs inspired by Live To Tell‘s minor chord changes. Its director, James Foley, helmed several of Madonna’s music videos for the True Blue album and directed her next film, Who’s That Girl. #madonna #seanpenn #atcloserange #bruinstheatre #losangeles #1986 #livetotell"
          },
          {
            "sourceItemId": "source_item_f9deb251f5d49b4a8561fa0087fee34bce1d706c1a3ed6027864d5559106a682",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BFhR-twjYT-JlKTedJPU6t5NDUKBnw7cCtbAW00/",
            "excerpt": "On April 17 1986, Madonna and Sean Penn attended the Los Angeles premiere of his film At Close Range at the Bruin Theater, Los Angeles. Showcasing her new cropped platinum blonde hairstyle, Madonna and her notoriously media-shy husband paused to speak with various media outlets as they made their way down the red carpet. The film, which co-starred Christopher Walken and Mary Stuart Masterson, featured Madonna’s latest single, Live To Tell, along with an original musical score by Patrick Leonard comprising mostly of motifs inspired by Live To Tell‘s minor chord changes. Its director, James Foley, helmed several of Madonna’s music videos for the True Blue album and directed her next film, Who’s That Girl. #madonna #seanpenn #atcloserange #bruinstheatre #losangeles #1986 #livetotell"
          },
          {
            "sourceItemId": "source_item_4ecaf808c50d7d019a89b68b647644c0ee5a7942db58443d1a358bb41ba2fdfb",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BFhSJ5LjYUYOpBTZjLHkdZXl4RygqdJ6TnFp9c0/",
            "excerpt": "On April 17 1986, Madonna and Sean Penn attended the Los Angeles premiere of his film At Close Range at the Bruin Theater, Los Angeles. Showcasing her new cropped platinum blonde hairstyle, Madonna and her notoriously media-shy husband paused to speak with various media outlets as they made their way down the red carpet. The film, which co-starred Christopher Walken and Mary Stuart Masterson, featured Madonna’s latest single, Live To Tell, along with an original musical score by Patrick Leonard comprising mostly of motifs inspired by Live To Tell‘s minor chord changes. Its director, James Foley, helmed several of Madonna’s music videos for the True Blue album and directed her next film, Who’s That Girl. #madonna #seanpenn #atcloserange #bruinstheatre #losangeles #1986 #livetotell"
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": []
      },
      {
        "stepId": "mercy.fact.caf970534db4f661c9f6",
        "year": 1986,
        "lane": "shared theatre context",
        "label": "Rehearsals for Goose & Tomtom",
        "dateStart": "1986-08-28",
        "dateEnd": "1986-08-28",
        "datePrecision": "day",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "On August 28, 1986, Madonna and Sean Penn were rehearsing for David Rabe’s play 'Goose & Tomtom'.",
        "confidence": 0.95,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 2,
        "sourceExcerpt": "On August 28 1986, Madonna and Sean opened in David Rabe’s Goose & Tomtom at Lincoln Centre’s Mitzi Newhouse Theatre, in New York. Here’s a snippet of an article that Dena Kleiman published about the play: A Revival that may not revive (New York Times August 19, 1986): Madonna and Sean Penn are quietly dashing in and out of Lincoln Center these days in connection with closely guarded rehearsals of David Rabe’s Goose and Tomtom that may never be opened to the public. But maybe, said Mr. Rabe, who is also directing the play, he will invite a special audience to come next week to a free performance – or even two. And after that? ”I’ve reserved the right not to show it,” Mr. Rabe said. The rehearsals, in which Harvey Keitel, Barry Miller and Lorraine Bracco are also taking part, have been described by Mr. Rabe as a ”work in progress” for a play that was previously – but in his view unsuccessfully – produced. He said he believes he has a better handle on the play now, but is still not absolutely sure. In the play, Goose (Barry Miller) and Tomtom (Sean Penn) are a pair of jewel thieves, who, in collaboration with a sexy woman named Lorraine (Madonna), amass a collection of gems only to h…",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_3e7e7dbad3ecdfcb77571911e4025bae91afe1e18dcb93d13e4e9c3e312e1903",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BGiuzcPDYbCwOQEKucQhUZj2FZvl0w6yZsQRrk0/",
            "excerpt": "On August 28 1986, Madonna and Sean opened in David Rabe’s Goose & Tomtom at Lincoln Centre’s Mitzi Newhouse Theatre, in New York. Here’s a snippet of an article that Dena Kleiman published about the play: A Revival that may not revive (New York Times August 19, 1986): Madonna and Sean Penn are quietly dashing in and out of Lincoln Center these days in connection with closely guarded rehearsals of David Rabe’s Goose and Tomtom that may never be opened to the public. But maybe, said Mr. Rabe, who is also directing the play, he will invite a special audience to come next week to a free performance – or even two. And after that? ”I’ve reserved the right not to show it,” Mr. Rabe said. The rehearsals, in which Harvey Keitel, Barry Miller and Lorraine Bracco are also taking part, have been described by Mr. Rabe as a ”work in progress” for a play that was previously – but in his view unsuccessfully – produced. He said he believes he has a better handle on the play now, but is still not absolutely sure. In the play, Goose (Barry Miller) and Tomtom (Sean Penn) are a pair of jewel thieves, who, in collaboration with a sexy woman named Lorraine (Madonna), amass a collection of gems only to h…"
          },
          {
            "sourceItemId": "source_item_9addbe3686c9ea25d8fbde9a9ea6596149d2b954dde4198f04823ea37483b986",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BGivTyDjYcAGJsMKo0cekrfOUlYFrack-vtYJw0/",
            "excerpt": "On August 28 1986, Madonna and Sean opened in David Rabe’s Goose & Tomtom at Lincoln Centre’s Mitzi Newhouse Theatre, in New York. Here’s a snippet of an article that Dena Kleiman published about the play: A Revival that may not revive (New York Times August 19, 1986): Madonna and Sean Penn are quietly dashing in and out of Lincoln Center these days in connection with closely guarded rehearsals of David Rabe’s Goose and Tomtom that may never be opened to the public. But maybe, said Mr. Rabe, who is also directing the play, he will invite a special audience to come next week to a free performance – or even two. And after that? ”I’ve reserved the right not to show it,” Mr. Rabe said. The rehearsals, in which Harvey Keitel, Barry Miller and Lorraine Bracco are also taking part, have been described by Mr. Rabe as a ”work in progress” for a play that was previously – but in his view unsuccessfully – produced. He said he believes he has a better handle on the play now, but is still not absolutely sure. In the play, Goose (Barry Miller) and Tomtom (Sean Penn) are a pair of jewel thieves, who, in collaboration with a sexy woman named Lorraine (Madonna), amass a collection of gems only to h…"
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": []
      },
      {
        "stepId": "mercy.core.fact.54fdcb9f29343bda0aeb",
        "year": 1987,
        "lane": "relationship",
        "label": "WEBO draft: Madonna Interviewed About Sean Penn Separation During Who's That Girl World Tour in Chicago, August 2nd 1987",
        "dateStart": "1987-01-01",
        "dateEnd": "1987-01-01",
        "datePrecision": "year",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "core_entity",
        "assertion": "Source-linked canonical draft promoted from reviewed WEBO candidate; source precision and review status retained.",
        "confidence": 0.78,
        "state": "archive_visible_supported",
        "place": "",
        "sourceCount": 1,
        "sourceExcerpt": "Source-linked canonical draft promoted from reviewed WEBO candidate; source precision and review status retained.",
        "sourcePointers": [
          {
            "sourceItemId": "core.entity:bdeff3a3-1c76-5677-b269-11e6604d5350",
            "authority": "canonical SQLite Core read projection",
            "sourceType": "core_entity_record",
            "locator": "",
            "url": "",
            "excerpt": ""
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": [
          {
            "detail": "Core preserves source precision year; no precision was invented.",
            "kind": "date_precision"
          }
        ]
      },
      {
        "stepId": "mercy.fact.af5d1e120a9c84210f69",
        "year": 1988,
        "lane": "shared performance context",
        "label": "Exit from Speed-the-Plow performance",
        "dateStart": "1988-07-01",
        "dateEnd": "1988-07-01",
        "datePrecision": "day",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "July 1st 1988. Leaving Speed-the-Plow performance at Royale Theatre with Sean Penn",
        "confidence": 0.9,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 1,
        "sourceExcerpt": "July 1st 1988. Leaving Speed-the-Plow performance at Royale Theatre with Sean Penn, on way to film Letterman with Sandra Bernhard . PHOTOGRAPH COURTESY OF @anastaza - thank you for sharing it and getting intouch! 😘#madonna #manhattan #newyork #broadway #1988 #speedtheplow @madonna @anastaza",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_ab324ffb96e83cf49cfceaae2fd121acc1b48e854c044146d0f6e4dd67e60efb",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BHR2apeBCbiEC1NUjhv0o7l_gDrGnRPh3eZsJ00/",
            "excerpt": "July 1st 1988. Leaving Speed-the-Plow performance at Royale Theatre with Sean Penn, on way to film Letterman with Sandra Bernhard . PHOTOGRAPH COURTESY OF @anastaza - thank you for sharing it and getting intouch! 😘#madonna #manhattan #newyork #broadway #1988 #speedtheplow @madonna @anastaza"
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": []
      },
      {
        "stepId": "mercy.arc.sean-penn.relationship-end-1989",
        "year": 1989,
        "lane": "relationship",
        "label": "Relationship-end claim",
        "dateStart": "1989",
        "dateEnd": "1989",
        "datePrecision": "year",
        "dateRole": "relationship_end_claim",
        "dateBasis": "Retained source excerpt states that the divorce occurred in 1989; the containing source record is published in 2005.",
        "factType": "core_entity",
        "assertion": "Source: ContactMusic - 21 April 2005 Actor Sean Penn has concluded his marriage to Madonna collapsed under the strain of their equally bad behaviour. The Mystic River star, 44, admits his desire to stay out of the limelight mixed with Madonna's quest for international superstardom was a damaging combination, one which ultimately led to their divorce in 1989, after a turbulent four-year union. And while Pen…",
        "confidence": 0.78,
        "state": "archive_visible_supported",
        "place": "",
        "sourceCount": 1,
        "sourceExcerpt": "Source: ContactMusic - 21 April 2005 Actor Sean Penn has concluded his marriage to Madonna collapsed under the strain of their equally bad behaviour. The Mystic River star, 44, admits his desire to stay out of the limelight mixed with Madonna's quest for international superstardom was a damaging combination, one which ultimately led to their divorce in 1989, after a turbulent four-year union. And while Pen…",
        "sourcePointers": [
          {
            "sourceItemId": "core.claim:7aea3ae6-e6e1-50ce-a5e9-a1e019af446f",
            "authority": "Mad-Eyes",
            "sourceType": "core_source_claim",
            "locator": "mad_eyes_retained_article_news:mad-eyes-structured:111ac1a18c64f2c2663a1e71",
            "url": "",
            "excerpt": "Source: ContactMusic - 21 April 2005 Actor Sean Penn has concluded his marriage to Madonna collapsed under the strain of their equally bad behaviour. The Mystic River star, 44, admits his desire to stay out of the limelight mixed with Madonna's quest for international superstardom was a damaging combination, one which ultimately led to their divorce in 1989, after a turbulent four-year union. And while Pen…"
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": [
          "This is a year-level relationship-end claim carried by a later source, not a dated 1989 event record.",
          "It does not establish a precise separation, filing, or divorce day."
        ]
      }
    ],
    "gaps": [
      "The retained-source search found no explicit account that Sean Penn first met Madonna on the Material Girl set; that lead remains a source-scoped candidate.",
      "The 1989 endpoint is supported as a year claim in a later source, not as a separately dated 1989 event record."
    ],
    "inputFingerprints": {
      "graph_database": "sha256:a58a64bd595ff091637ccd7795fdea601176e1ee9a9b57a0a0ce69adab589b99",
      "graph_receipt": "sha256:af7f1cc4a9a266f9850217ab22648197430a40357c756e4e2eaa5ae5019c8369",
      "qa_receipt": "sha256:793838d3eea5f33811a422b5338d8cc47c79cea24ee75b6d240e652630db8205",
      "retained_snapshot": "sha256:cf1f1c40f52bf0c43f378c20a31e27a4e8b02d79cf2531c0dde925ccd5e84558"
    },
    "provenanceJobId": "mercy-connection-worker-2026-10-21-sean-penn-material-girl-v1",
    "sourceSearchState": "unresolved",
    "authorityBoundary": "Derived arc projection only; source facts remain separately labelled and no canonical, inventory, media, filesystem, or public-network writes occurred.",
    "nextAction": "Resolve or preserve the first-meeting candidate through a new retained-source lane or curator testimony; do not infer it from the arc sequence."
  },
  {
    "arcId": "mercy.arc.like-a-virgin-1984-1985",
    "title": "Like a Virgin · from recording room to Virgin Tour",
    "summary": "A source-labelled cross-medium arc through the 1984 recording sessions, album-cover and video work, publication context, launch event, and the 1985 Virgin Tour opening.",
    "state": "archive_visible_supported_with_explicit_gap",
    "years": [
      1984,
      1985
    ],
    "steps": [
      {
        "stepId": "mercy.fact.c696daa25e5b53c1e885",
        "year": 1984,
        "lane": "recording / song and album",
        "label": "Like A Virgin Recording Sessions",
        "dateStart": "1984-03-01",
        "dateEnd": "1984-04-30",
        "datePrecision": "month",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "Madonna and Nile Rodgers appeared at The Power Station in New York between March and April 1984.",
        "confidence": 0.95,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 1,
        "sourceExcerpt": "March / April 1984 The Power Station 441 West 53rd Street New York NY —————————- Photographer: Orishige (unconfirmed spelling) Madonna (wearing her ‘Borderline’ hat and ‘Boy Toy’ graffitied denim jacket and newly dyed brown hair) is captured with Nile Rodgers in the studio (most likely The Power Station) between March and April 1984. —————————- By March ‘84 Nile Rodger’s was on board to produce Madonna’s then unnamed second album. Before recording the two started spending more time with each other. Madonna had a selection of demos worked on in collaboration with Stephen Bray that she was bringing to the project, these included Angel, Stay, Pretender, Over and Over and also a self penned track titled ‘Shoo Bee Doo’. It is said that there are alternate versions of “Angel”, “Over and Over” and “Shoo-Bee-Doo” produced by Stephen Bray before the arrival of Nile Rodgers. These have yet to surface. Bray has however confirmed that ‘Shoo Bee Doo’ was demo’ed as part of the ‘Vision Quest’ sessions, this therefore helps date the track during late ‘83. Madonna made it clear to Nile that she wanted very little altered to these demo’s he did however insist that the sound needed to be less progra…",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_793a60ffd43e601748540ba89cb6544a775889f51aa4a0026cdc49484fac02cc",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/C_LkGDesqH7/",
            "excerpt": "March / April 1984 The Power Station 441 West 53rd Street New York NY —————————- Photographer: Orishige (unconfirmed spelling) Madonna (wearing her ‘Borderline’ hat and ‘Boy Toy’ graffitied denim jacket and newly dyed brown hair) is captured with Nile Rodgers in the studio (most likely The Power Station) between March and April 1984. —————————- By March ‘84 Nile Rodger’s was on board to produce Madonna’s then unnamed second album. Before recording the two started spending more time with each other. Madonna had a selection of demos worked on in collaboration with Stephen Bray that she was bringing to the project, these included Angel, Stay, Pretender, Over and Over and also a self penned track titled ‘Shoo Bee Doo’. It is said that there are alternate versions of “Angel”, “Over and Over” and “Shoo-Bee-Doo” produced by Stephen Bray before the arrival of Nile Rodgers. These have yet to surface. Bray has however confirmed that ‘Shoo Bee Doo’ was demo’ed as part of the ‘Vision Quest’ sessions, this therefore helps date the track during late ‘83. Madonna made it clear to Nile that she wanted very little altered to these demo’s he did however insist that the sound needed to be less progra…"
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": [
          {
            "detail": "Retained evidence supports month precision; no day was invented.",
            "kind": "date_precision"
          }
        ]
      },
      {
        "stepId": "mercy.fact.2ad254019efa5d28d3df",
        "year": 1984,
        "lane": "album / cover",
        "label": "Like A Virgin album cover shoot",
        "dateStart": "1984-04-01",
        "dateEnd": "1984-04-30",
        "datePrecision": "month",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "WEBO cluster 5967: April 1984",
        "confidence": 0.95,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 3,
        "sourceExcerpt": "April 1984 New York NY —————————— CREATING THE VISUAL FOR ‘LIKE A VIRGIN’ Art Direction: Jeffrey Kent Ayeroff, Paula Greif, Jeri McManus Photographer: Steven Meisel Design: Jeri McManus Stylist: Maripol Hair: Unknown Make Up: Debi Mazar (unconfirmed) Dress: An original wedding dress from? Boy Toy belt: Maripol Jewellery: Maripol and unknown —————————— During April ‘84 with the recording, final mixing and mastering of Madonna’s second album in place the next step was the visual direction for the album. Stylist Maripol (who was bought onboard by Madonna) would maintain her influence on Madonna’s style right through the ‘Virgin’ era beginning with the album cover shoot. The decision to use Steven Meisel as photographer was also likely to have been Madonna’s choice too. Meisel and Madonna had shot together twice before. August ‘83 for Madamoiselle magazine and again in December ‘83 - this promotional session was originally used to promote ‘Borderline’. Images from the session were then used for the flip side of the ‘Like A Virgin’ sleeve campaign - “the whore”. The concept of the album was a play on the virgin and the whore - the before and after. The main cover depicting the Virgin br…",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_585d0fdf8465e6676b975a637cd4d424c71fd422c83a757524f251825a4ee806",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/DCj6GzjiRwM/",
            "excerpt": "April 1984 New York NY —————————— CREATING THE VISUAL FOR ‘LIKE A VIRGIN’ Art Direction: Jeffrey Kent Ayeroff, Paula Greif, Jeri McManus Photographer: Steven Meisel Design: Jeri McManus Stylist: Maripol Hair: Unknown Make Up: Debi Mazar (unconfirmed) Dress: An original wedding dress from? Boy Toy belt: Maripol Jewellery: Maripol and unknown —————————— During April ‘84 with the recording, final mixing and mastering of Madonna’s second album in place the next step was the visual direction for the album. Stylist Maripol (who was bought onboard by Madonna) would maintain her influence on Madonna’s style right through the ‘Virgin’ era beginning with the album cover shoot. The decision to use Steven Meisel as photographer was also likely to have been Madonna’s choice too. Meisel and Madonna had shot together twice before. August ‘83 for Madamoiselle magazine and again in December ‘83 - this promotional session was originally used to promote ‘Borderline’. Images from the session were then used for the flip side of the ‘Like A Virgin’ sleeve campaign - “the whore”. The concept of the album was a play on the virgin and the whore - the before and after. The main cover depicting the Virgin br…"
          },
          {
            "sourceItemId": "source_item_78ab5a46c65bdab236a4d16ca0d13c98553317f741adb620df92626f479e0205",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/DCkLHTVCu6R/",
            "excerpt": "April 1984 New York NY —————————— CREATING THE VISUAL FOR ‘LIKE A VIRGIN’ Art Direction: Jeffrey Kent Ayeroff, Paula Greif, Jeri McManus Photographer: Steven Meisel Design: Jeri McManus Stylist: Maripol Hair: Unknown Make Up: Debi Mazar (unconfirmed) Dress: An original wedding dress from? Boy Toy belt: Maripol Jewellery: Maripol and unknown —————————— During April ‘84 with the recording, final mixing and mastering of Madonna’s second album in place the next step was the visual direction for the album. Stylist Maripol (who was bought onboard by Madonna) would maintain her influence on Madonna’s style right through the ‘Virgin’ era beginning with the album cover shoot. The decision to use Steven Meisel as photographer was also likely to have been Madonna’s choice too. Meisel and Madonna had shot together twice before. August ‘83 for Madamoiselle magazine and again in December ‘83 - this promotional session was originally used to promote ‘Borderline’. Images from the session were then used for the flip side of the ‘Like A Virgin’ sleeve campaign - “the whore”. The concept of the album was a play on the virgin and the whore - the before and after. The main cover depicting the Virgin br…"
          },
          {
            "sourceItemId": "source_item_a8ae6f947073c28fea5b0af8feb19045b8c9f2ad8dfa9af2a5fbe3bbdabcfd70",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/DCn1tUxofYP/",
            "excerpt": "April 1984 New York NY —————————— CREATING THE VISUAL FOR ‘LIKE A VIRGIN’ Art Direction: Jeffrey Kent Ayeroff, Paula Greif, Jeri McManus Photographer: Steven Meisel Design: Jeri McManus Stylist: Maripol Hair: Unknown Make Up: Debi Mazar (unconfirmed) Dress: An original wedding dress from? Boy Toy belt: Maripol Jewellery: Maripol and unknown —————————— During April ‘84 with the recording, final mixing and mastering of Madonna’s second album in place the next step was the visual direction for the album. Stylist Maripol (who was bought onboard by Madonna) would maintain her influence on Madonna’s style right through the ‘Virgin’ era beginning with the album cover shoot. The decision to use Steven Meisel as photographer was also likely to have been Madonna’s choice too. Meisel and Madonna had shot together twice before. August ‘83 for Madamoiselle magazine and again in December ‘83 - this promotional session was originally used to promote ‘Borderline’. Images from the session were then used for the flip side of the ‘Like A Virgin’ sleeve campaign - “the whore”. The concept of the album was a play on the virgin and the whore - the before and after. The main cover depicting the Virgin br…"
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": [
          {
            "detail": "Retained evidence supports month precision; no day was invented.",
            "kind": "date_precision"
          }
        ]
      },
      {
        "stepId": "mercy.fact.0e0d4ab0ea7a39b05998",
        "year": 1984,
        "lane": "music video / visual",
        "label": "Filming of Like A Virgin music video",
        "dateStart": "1984-07-01",
        "dateEnd": "1984-07-31",
        "datePrecision": "month",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "End June into July 1984 Ponte Minich Venice Italy",
        "confidence": 0.95,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 6,
        "sourceExcerpt": "End June into July 1984 Ponte Minich Venice Italy ————————— Photographer: Larry Williams (1951-1999), captures Madonna on set whilst filming ‘Like A Virgin’ in Venice. Stylist: Tina Bossidy Select jewellery: Maripol Lime Lace Top: possibly Erika Belle (unconfirmed) ————————— Larry an established music photographer had captured Debbie Harry, Iggy Pop, Keith Richards, Paul Simon , The Time, Apollonia 6, Sheila E and Prince for his ‘Purple Rain’ album cover before joining Madonna and crew for the trip to Venice. Madonna was scheduled to re-sit for a second session with Larry for ‘Star Hits’ magazine during late ‘84. Sadly this shoot never happened.",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_50095718663725db27502b3992c826955b06d4eb0d59b8b0a715fce31d68198e",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/DHtwIdpo7gs/",
            "excerpt": "End June into July 1984 Ponte Minich Venice Italy ————————— Photographer: Larry Williams (1951-1999), captures Madonna on set whilst filming ‘Like A Virgin’ in Venice. Stylist: Tina Bossidy Select jewellery: Maripol Lime Lace Top: possibly Erika Belle (unconfirmed) ————————— Larry an established music photographer had captured Debbie Harry, Iggy Pop, Keith Richards, Paul Simon , The Time, Apollonia 6, Sheila E and Prince for his ‘Purple Rain’ album cover before joining Madonna and crew for the trip to Venice. Madonna was scheduled to re-sit for a second session with Larry for ‘Star Hits’ magazine during late ‘84. Sadly this shoot never happened."
          },
          {
            "sourceItemId": "source_item_b00e7c619320ddd2343de823014609cb3e317d011c501f4a26cb2c04a8dc10cc",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/DHtwJaRIyGg/",
            "excerpt": "End June into July 1984 Ponte Minich Venice Italy ————————— Photographer: Larry Williams (1951-1999), captures Madonna on set whilst filming ‘Like A Virgin’ in Venice. Stylist: Tina Bossidy Select jewellery: Maripol Lime Lace Top: possibly Erika Belle (unconfirmed) ————————— Larry an established music photographer had captured Debbie Harry, Iggy Pop, Keith Richards, Paul Simon , The Time, Apollonia 6, Sheila E and Prince for his ‘Purple Rain’ album cover before joining Madonna and crew for the trip to Venice. Madonna was scheduled to re-sit for a second session with Larry for ‘Star Hits’ magazine during late ‘84. Sadly this shoot never happened."
          },
          {
            "sourceItemId": "source_item_9137ed0af14f9282b1b777be525866d970bf63d89c88984202a17fcb96d569e1",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/DHtwMKaoItk/",
            "excerpt": "End June into July 1984 Ponte Minich Venice Italy ————————— Photographer: Larry Williams (1951-1999), captures Madonna on set whilst filming ‘Like A Virgin’ in Venice. Stylist: Tina Bossidy Select jewellery: Maripol Lime Lace Top: possibly Erika Belle (unconfirmed) ————————— Larry an established music photographer had captured Debbie Harry, Iggy Pop, Keith Richards, Paul Simon , The Time, Apollonia 6, Sheila E and Prince for his ‘Purple Rain’ album cover before joining Madonna and crew for the trip to Venice. Madonna was scheduled to re-sit for a second session with Larry for ‘Star Hits’ magazine during late ‘84. Sadly this shoot never happened. NOTE: This shot would be used for the cover of the Like A Virgin 12” release in most countries apart from the UK."
          },
          {
            "sourceItemId": "source_item_b490b6a78343078f208f8d8fa010fadad999382bb03d24ee13c4b5cac14cd77d",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/DHtwSHNICQH/",
            "excerpt": "End June into July 1984 Ponte Minich Venice Italy ————————— Photographer: Larry Williams (1951-1999), captures Madonna on set whilst filming ‘Like A Virgin’ in Venice. Stylist: Tina Bossidy Select jewellery: Maripol Lime Lace Top: possibly Erika Belle (unconfirmed) ————————— Larry an established music photographer had captured Debbie Harry, Iggy Pop, Keith Richards, Paul Simon , The Time, Apollonia 6, Sheila E and Prince for his ‘Purple Rain’ album cover before joining Madonna and crew for the trip to Venice. Madonna was scheduled to re-sit for a second session with Larry for ‘Star Hits’ magazine during late ‘84. Sadly this shoot never happened."
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": [
          {
            "detail": "Retained evidence supports month precision; no day was invented.",
            "kind": "date_precision"
          }
        ]
      },
      {
        "stepId": "mercy.fact.e2eba626f586a88ad991",
        "year": 1984,
        "lane": "publication",
        "label": "Mention in Rolling Stone magazine",
        "dateStart": "1984-07-05",
        "dateEnd": "1984-07-05",
        "datePrecision": "day",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "WEBO cluster 6565: In issue 425 of Rolling Stone magazine dated July 5th, 1984, Madonna’s second album 'Like a Virgin' was mentioned as being ready for release.",
        "confidence": 0.9,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 1,
        "sourceExcerpt": "JUST DISCOVERED Thursday 5th July 1984 Rolling Stone magazine New York NY ——————————— In issue 425 of Rolling Stone magazine dated July 5th ‘84, in their random notes section they mention Madonna’s second album: “RANDOM NOTES (July 5, 1984) “Borderline” vocalist Madonna has a second album, Like a Virgin, ready for release, but what’s the rush? After more than forty weeks, the first album from the ex-Alvin Ailey dancer is still climbing up the charts.”. #madonna #1984 #newyork @madonna @rollingstone #icon #madonnastyle #queen #musicicon #BoyToy #musicroyalty #madonnamusic #iconic #madonnaqueen #bitchimmadonna #allhailthequeen #madonnaphotos #themadonnastory",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_cdee40b9135f6f054f5703d4def1c97c7cd6bded998d67d6e2686d6bf0bee052",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/DMijmGPI55D/",
            "excerpt": "JUST DISCOVERED Thursday 5th July 1984 Rolling Stone magazine New York NY ——————————— In issue 425 of Rolling Stone magazine dated July 5th ‘84, in their random notes section they mention Madonna’s second album: “RANDOM NOTES (July 5, 1984) “Borderline” vocalist Madonna has a second album, Like a Virgin, ready for release, but what’s the rush? After more than forty weeks, the first album from the ex-Alvin Ailey dancer is still climbing up the charts.”. #madonna #1984 #newyork @madonna @rollingstone #icon #madonnastyle #queen #musicicon #BoyToy #musicroyalty #madonnamusic #iconic #madonnaqueen #bitchimmadonna #allhailthequeen #madonnaphotos #themadonnastory"
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": []
      },
      {
        "stepId": "mercy.fact.a2b3bda5b8d8c0f44219",
        "year": 1984,
        "lane": "album / launch event",
        "label": "Like A Virgin Launch Party",
        "dateStart": "1984-11-12",
        "dateEnd": "1984-11-12",
        "datePrecision": "day",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "WEBO cluster 203 document text",
        "confidence": 0.9,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 3,
        "sourceExcerpt": "Shot by Andy Warhol 4th 7th or 12th November 1984 (depending on what info you read) . Like A Virgin Launch party. Private Eyes night club New York.One of the more notable New York club opening in the summer of 1984 was Private Eyes, a trendy gay lounge at 12 W. 21st Street, poised to meet the video future with full-on glittery radness. With MTV revolutionizing pop music by the early 80s, nightclubs rushed to incorporate the new trend into their aesthetic. At Private Eyes, clubgoers needn’t have worried about a frenetic disco floor; they were literally invited to be mesmerized. “There is no defined dance area — it’s like a living room with the coffee table pushed aside.” the owner told Billboard magazine in November 1984. The club is now called The Sound Factory Bar. #Madonna #jellybean #andywarhol #newyork #likeavirgin #1984",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_947f465b4d501a99bfbaabd2368d73d83cf85ae950d9be4d6f14b716924e4509",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BFWGa64jYZ7YTA_7vWtJBQZuM9KiEZkhjDer3o0/",
            "excerpt": "Shot by Andy Warhol 4th 7th or 12th November 1984 (depending on what info you read) . Like A Virgin Launch party. Private Eyes night club New York.One of the more notable New York club opening in the summer of 1984 was Private Eyes, a trendy gay lounge at 12 W. 21st Street, poised to meet the video future with full-on glittery radness. With MTV revolutionizing pop music by the early 80s, nightclubs rushed to incorporate the new trend into their aesthetic. At Private Eyes, clubgoers needn’t have worried about a frenetic disco floor; they were literally invited to be mesmerized. “There is no defined dance area — it’s like a living room with the coffee table pushed aside.” the owner told Billboard magazine in November 1984. The club is now called The Sound Factory Bar. #Madonna #jellybean #andywarhol #newyork #likeavirgin #1984"
          },
          {
            "sourceItemId": "source_item_4411104696444c4bb23bb85b55b22454d2034a7afc590bb0795fdea511c19e74",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BFWGjqTDYaNQW7g9wN_dtwOeZk165EygqhQfs80/",
            "excerpt": "Shot by Andy Warhol 4th 7th or 12th November 1984 (depending on what info you read) . Like A Virgin Launch party. Private Eyes night club New York.One of the more notable New York club opening in the summer of 1984 was Private Eyes, a trendy gay lounge at 12 W. 21st Street, poised to meet the video future with full-on glittery radness. With MTV revolutionizing pop music by the early 80s, nightclubs rushed to incorporate the new trend into their aesthetic. At Private Eyes, clubgoers needn’t have worried about a frenetic disco floor; they were literally invited to be mesmerized. “There is no defined dance area — it’s like a living room with the coffee table pushed aside.” the owner told Billboard magazine in November 1984. #Madonna #jellybean #andywarhol #newyork #likeavirgin #1984"
          },
          {
            "sourceItemId": "source_item_9f4190810f1b9e7288af45a43aa56134b02ea74eb733f24692963b7d53106a2b",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BFWG7axDYa9axButyuivtf7PXJ3wd8Lgtieypc0/",
            "excerpt": "Shot by Andy Warhol 4th 7th or 12th November 1984 (depending on what info you read) . Like A Virgin Launch party. Private Eyes night club New York.One of the more notable New York club opening in the summer of 1984 was Private Eyes, a trendy gay lounge at 12 W. 21st Street, poised to meet the video future with full-on glittery radness. With MTV revolutionizing pop music by the early 80s, nightclubs rushed to incorporate the new trend into their aesthetic. At Private Eyes, clubgoers needn’t have worried about a frenetic disco floor; they were literally invited to be mesmerized. “There is no defined dance area — it’s like a living room with the coffee table pushed aside.” the owner told Billboard magazine in November 1984. #Madonna #jellybean #andywarhol #newyork #likeavirgin #1984"
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": []
      },
      {
        "stepId": "mercy.fact.85b3cfc5c4eab92474d9",
        "year": 1985,
        "lane": "tour / performance",
        "label": "The Virgin Tour",
        "dateStart": "1985-04-10",
        "dateEnd": "1985-06-11",
        "datePrecision": "day",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "The Virgin Tour started its 40 date run of North America/Canada on April 10th, 1985 at Seattle and ended at Madison Square Garden on June 11th, 1985.",
        "confidence": 0.95,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 12,
        "sourceExcerpt": "On April 10th 1985 the Virgin Tour started its 40 date run of North America/Canada. Unlike today's shows the setlist stayed the same throughout, however the costumes (all by Maripol) for the opening performance changed from venue to venue. Showcased here are the variations from show one in Seattle up until show forty in Madison Square Gardens on June 11th 1985. #Madonna #virgintour #1985",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_f55dcc6a63a2877da16c2fa8b654431052485a7c95cb36a0b71ddb53a43e17bc",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BE5SPDujYZywE1--EP2iOyk93kF4lAQzO1yLxA0/",
            "excerpt": "On April 10th 1985 the Virgin Tour started its 40 date run of North America/Canada. Unlike today's shows the setlist stayed the same throughout, however the costumes (all by Maripol) for the opening performance changed from venue to venue. Showcased here are the variations from show one in Seattle up until show forty in Madison Square Gardens on June 11th 1985. #Madonna #virgintour #1985"
          },
          {
            "sourceItemId": "source_item_83751f86c6d1853c23d2a6a446f81ee2a07be5ec8243e2a913a7e079366a53bd",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BE5SZCcDYaK_z9BJDqcScCaw-qxZNdddiW9ZSs0/",
            "excerpt": "On April 10th 1985 the Virgin Tour started its 40 date run of North America/Canada. Unlike today's shows the setlist stayed the same throughout, however the costumes (all by Maripol) for the opening performance changed from venue to venue. Showcased here are the variations from show one in Seattle up until show forty in Madison Square Gardens on June 11th 1985. #Madonna #virgintour #1985"
          },
          {
            "sourceItemId": "source_item_07ad2bfca302239db903ee6c960d2927d52b7261b6f10f838a3d766860313f76",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BE5SmXUjYab3EWszkPmEVRyYdjDdKddNqlEwmQ0/",
            "excerpt": "On April 10th 1985 the Virgin Tour started its 40 date run of North America/Canada. Unlike today's shows the setlist stayed the same throughout, however the costumes (all by Maripol) for the opening performance changed from venue to venue. Showcased here are the variations from show one in Seattle up until show forty in Madison Square Gardens on June 11th 1985. #Madonna #virgintour #1985"
          },
          {
            "sourceItemId": "source_item_5f6ebc850010f6173f9f62d9c514dd61b2546c8ba7ad23b16c5ad990bc886e0e",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BE5ajw1jYVMMiQwfym-jQB9aCDnpJLqi48nM3U0/",
            "excerpt": "On April 10th 1985 the Virgin Tour started its 40 date run of North America/Canada. Unlike today's shows the setlist stayed the same throughout, however the costumes (all by Maripol) for the opening performance changed from venue to venue. Showcased here are the variations from show one in Seattle up until show forty in Madison Square Gardens on June 11th 1985. #Madonna #virgintour #1985"
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": [
          {
            "detail": "No event place is asserted by this retained event record.",
            "kind": "place"
          }
        ]
      }
    ],
    "gaps": [
      "The recording, album, video, publication, launch, and tour steps are separately sourced contexts; the arc does not claim that every named representation or performance is the same object.",
      "The video and album-cover records retain month-level or source-qualified timing; no exact shoot day is invented."
    ],
    "inputFingerprints": {
      "graph_database": "sha256:a58a64bd595ff091637ccd7795fdea601176e1ee9a9b57a0a0ce69adab589b99",
      "graph_receipt": "sha256:af7f1cc4a9a266f9850217ab22648197430a40357c756e4e2eaa5ae5019c8369",
      "qa_receipt": "sha256:793838d3eea5f33811a422b5338d8cc47c79cea24ee75b6d240e652630db8205",
      "retained_snapshot": "sha256:cf1f1c40f52bf0c43f378c20a31e27a4e8b02d79cf2531c0dde925ccd5e84558"
    },
    "provenanceJobId": "mercy-working-graph-1958-2026-v1.rebuild-20261021-resumed-qa",
    "sourceSearchState": "source_bundles_materialized",
    "authorityBoundary": "Derived arc projection only; source facts remain separately labelled and no canonical, inventory, media, filesystem, or public-network writes occurred.",
    "nextAction": "Extend the arc with typed song-to-release, video-to-broadcast, and representation edges only when their source bundles and endpoint identities are independently visible."
  },
  {
    "arcId": "mercy.arc.photo-sessions-publications-representations-1991-1995",
    "title": "Photo sessions · publications, campaigns, and local representations",
    "summary": "A source-labelled visual arc from the 1991 Truth or Dare advert through the 1992 Vanity Fair cover story and 1995 Versace campaign, with five matched local representations kept separate.",
    "state": "archive_visible_supported_with_explicit_gap",
    "years": [
      1991,
      1992,
      1995
    ],
    "steps": [
      {
        "stepId": "mercy.fact.94de293f928b94d7e2fa",
        "year": 1991,
        "lane": "advertisement / broadcast",
        "label": "Truth or Dare ad campaign photo session",
        "dateStart": "1991-03-01",
        "dateEnd": "1991-04-30",
        "datePrecision": "month",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "March April 1991 Truth or Dare LA premier MTV contest advert.",
        "confidence": 0.85,
        "state": "archive_visible_supported",
        "place": "",
        "sourceCount": 2,
        "sourceExcerpt": "March April 1991 Truth or Dare LA premier MTV contest advert. Shot at the same time as Saturday Night Lives / Wayne's World sketch. And judging by her hair the same time as the previous Meisel shots!! Madonna's \"you don't think I'm over exposed do you? perfectly sums up this period of her career. And she looks amazing! This ad aired throughout April on MTV America in the run up to the Los Angeles premier on May 6th 1991. And was everyone's first glimpse of the Truth or Dare footage. #madonna #truthordare #1991 #losangeles #mtv @madonna",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_b6ccd0567db397bf024e215998445ff7e20ea7673c3c9ca5dffbfa961a9e07aa",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BQTQkOzDVUhhdu-hlakIKeNEF0_bSzZc-Vm7DM0/",
            "excerpt": "March April 1991 Truth or Dare LA premier MTV contest advert. Shot at the same time as Saturday Night Lives / Wayne's World sketch. And judging by her hair the same time as the previous Meisel shots!! Madonna's \"you don't think I'm over exposed do you? perfectly sums up this period of her career. And she looks amazing! This ad aired throughout April on MTV America in the run up to the Los Angeles premier on May 6th 1991. And was everyone's first glimpse of the Truth or Dare footage. #madonna #truthordare #1991 #losangeles #mtv @madonna"
          },
          {
            "sourceItemId": "source_item_5efc7af9a294b66e0b4683df9e4b431b17988c30e79fe496bfb4ce4c92156d3b",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BQTQ6XEjs5HNCvNakHsEH5FsjfeDBTZgYTroZg0/",
            "excerpt": "March April 1991 Truth or Dare LA premier MTV contest advert. Shot at the same time as Saturday Night Lives / Wayne's World sketch. And judging by her hair the same time as the previous Meisel shots!! Madonna's \"you don't think I'm over exposed do you? perfectly sums up this period of her career. And she looks amazing! This ad aired throughout April on MTV America in the run up to the Los Angeles premier on May 6th 1991. And was everyone's first glimpse of the Truth or Dare footage. #madonna #truthordare #1991 #losangeles #mtv @madonna"
          }
        ],
        "representationIds": [
          "representation.inventory.asset:10188"
        ],
        "representations": [
          {
            "representationId": "representation.inventory.asset:10188",
            "label": "The Queen of Pop _ Madonna Truth Or Dare MTV Contest 1991.mp4",
            "relativePath": "UNFILED/2011-2023/The Queen of Pop _ Madonna Truth Or Dare MTV Contest 1991.mp4",
            "dateToken": "1991",
            "extension": "mp4",
            "fileKind": "file",
            "bytes": 4631444,
            "sourceSenses": [
              "archive.nas.postgresql"
            ],
            "matchedTokens": [
              "contest",
              "dare",
              "mtv",
              "truth"
            ],
            "observationState": "logical_archive_file",
            "provenanceState": "source_observed",
            "logicalRepresentationId": "",
            "matchState": "visible_inferred_filename_match",
            "unresolvedReason": "",
            "caution": "Filename/context association is evidence-labelled and does not prove the file is the original shoot, an outtake, or the canonical publication object."
          }
        ],
        "uncertainties": [
          {
            "detail": "Retained evidence supports month precision; no day was invented.",
            "kind": "date_precision"
          }
        ]
      },
      {
        "stepId": "mercy.fact.7886aba0b9f9fe5a7d68",
        "year": 1992,
        "lane": "publication / Vanity Fair",
        "label": "Photo session for Vanity Fair",
        "dateStart": "1992-06-01",
        "dateEnd": "1992-06-30",
        "datePrecision": "month",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "WEBO cluster 1730: Madonna was photographed exclusively by renowned photographer Steven Meisel for a cover story in US Vanity Fair magazine.",
        "confidence": 0.8,
        "state": "archive_visible_supported",
        "place": "",
        "sourceCount": 1,
        "sourceExcerpt": "Mid June 1992 Location unknown : Long Island/Hamptons/Miami? Photographer : Steven Meisel Hair : Garren of New York Make Up : Francois Nars Styling : Marina Schiano US VANITY FAIR COVER STORY PUBLISHED OCTOBER '92 Madonna is shot exclusively for Vanity Fair magazine by Steven Meisel. The pictures are not released until the cover story runs in October '92. The series of shots caused a stir amongst many because of the Lolitaesque inspiration....... #madonna #1992 #vanityfair @madonna @stevenmeisel @garrennewyork @francoisnars #marinaschiano",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_a24bf6242a6cac2bf574a18f2f9c734685c205321ffb7528d79756d083cefedf",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BWqVLLkDRJy50q5B04JROqoHywg0nYveP654ZU0/",
            "excerpt": "Mid June 1992 Location unknown : Long Island/Hamptons/Miami? Photographer : Steven Meisel Hair : Garren of New York Make Up : Francois Nars Styling : Marina Schiano US VANITY FAIR COVER STORY PUBLISHED OCTOBER '92 Madonna is shot exclusively for Vanity Fair magazine by Steven Meisel. The pictures are not released until the cover story runs in October '92. The series of shots caused a stir amongst many because of the Lolitaesque inspiration....... #madonna #1992 #vanityfair @madonna @stevenmeisel @garrennewyork @francoisnars #marinaschiano"
          }
        ],
        "representationIds": [
          "representation.inventory.asset:10126",
          "representation.inventory.asset:10239"
        ],
        "representations": [
          {
            "representationId": "representation.inventory.asset:10126",
            "label": "MADONNA on VANITY FAIR COVER 1992 - ET Report.png",
            "relativePath": "UNFILED/2011-2023/MADONNA on VANITY FAIR COVER 1992 - ET Report.png",
            "dateToken": "1992",
            "extension": "png",
            "fileKind": "file",
            "bytes": 148888,
            "sourceSenses": [
              "archive.nas.postgresql"
            ],
            "matchedTokens": [
              "cover",
              "fair",
              "vanity"
            ],
            "observationState": "logical_archive_file",
            "provenanceState": "source_observed",
            "logicalRepresentationId": "",
            "matchState": "visible_inferred_filename_match",
            "unresolvedReason": "",
            "caution": "Filename/context association is evidence-labelled and does not prove the file is the original shoot, an outtake, or the canonical publication object."
          },
          {
            "representationId": "representation.inventory.asset:10239",
            "label": "MADONNA on VANITY FAIR COVER 1992 - ET Report.mp4",
            "relativePath": "UNFILED/2011-2023/MADONNA on VANITY FAIR COVER 1992 - ET Report.mp4",
            "dateToken": "1992",
            "extension": "mp4",
            "fileKind": "file",
            "bytes": 10196286,
            "sourceSenses": [
              "archive.nas.postgresql"
            ],
            "matchedTokens": [
              "cover",
              "fair",
              "vanity"
            ],
            "observationState": "logical_archive_file",
            "provenanceState": "source_observed",
            "logicalRepresentationId": "",
            "matchState": "visible_inferred_filename_match",
            "unresolvedReason": "",
            "caution": "Filename/context association is evidence-labelled and does not prove the file is the original shoot, an outtake, or the canonical publication object."
          }
        ],
        "uncertainties": [
          {
            "detail": "Retained evidence supports month precision; no day was invented.",
            "kind": "date_precision"
          }
        ]
      },
      {
        "stepId": "mercy.fact.0d47169ef0cfb585f8c3",
        "year": 1995,
        "lane": "campaign / Something to Remember",
        "label": "Versace A/W 1995 Campaign Photoshoot",
        "dateStart": "1995-07-13",
        "dateEnd": "1995-07-14",
        "datePrecision": "day",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "WEBO cluster 3009",
        "confidence": 0.95,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 1,
        "sourceExcerpt": "Thursday 13th July 1995 & Friday 14th July 1995 Via dell’Aprica 12 Milan Italy ———————————————————— Photographer : Mario Testino Hairdresser : Orlando Pita Make Up : Laura Mercier Styling : Lori Goldstein Art direction : Donatella Versace ———————————————————— THIS SHOT WAS FAMOUSLY USED FOR THE COVER OF MADONNA’S FORTHCOMING BALLADS ALBUM “SOMETHING TO REMEMBER” ———————————————————— Madonna is shot for the A/W’95 Versace Atelier campaign. Photography by Testino in a studio on Via dell’Aprica, Milan, Italy. The two day shoot coincided with a vacation Madonna had taken at the Versace villa in Lake Como (an hours drive away). #madonna #milan #versace #1995 @madonna @mariotestino @versace @orlandopita @lorigoldstein @donatella_versace @lauramercier",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_5e42e236f139f4af458a84df17237d261006281ec375df4df88622f4dea4007c",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/B2lN6ErgMtuYKheOwcncOZ95-bQYalIFFIz83I0/",
            "excerpt": "Thursday 13th July 1995 & Friday 14th July 1995 Via dell’Aprica 12 Milan Italy ———————————————————— Photographer : Mario Testino Hairdresser : Orlando Pita Make Up : Laura Mercier Styling : Lori Goldstein Art direction : Donatella Versace ———————————————————— THIS SHOT WAS FAMOUSLY USED FOR THE COVER OF MADONNA’S FORTHCOMING BALLADS ALBUM “SOMETHING TO REMEMBER” ———————————————————— Madonna is shot for the A/W’95 Versace Atelier campaign. Photography by Testino in a studio on Via dell’Aprica, Milan, Italy. The two day shoot coincided with a vacation Madonna had taken at the Versace villa in Lake Como (an hours drive away). #madonna #milan #versace #1995 @madonna @mariotestino @versace @orlandopita @lorigoldstein @donatella_versace @lauramercier"
          }
        ],
        "representationIds": [
          "representation.inventory.asset:10327",
          "representation.inventory.asset:10329"
        ],
        "representations": [
          {
            "representationId": "representation.inventory.asset:10327",
            "label": "Madonna photoshoot for Versace - 1995(1).png",
            "relativePath": "UNFILED/2011-2023/Madonna photoshoot for Versace - 1995(1).png",
            "dateToken": "1995",
            "extension": "png",
            "fileKind": "file",
            "bytes": 216641,
            "sourceSenses": [
              "archive.nas.postgresql"
            ],
            "matchedTokens": [
              "photoshoot",
              "versace"
            ],
            "observationState": "logical_archive_file",
            "provenanceState": "source_observed",
            "logicalRepresentationId": "",
            "matchState": "visible_inferred_filename_match",
            "unresolvedReason": "",
            "caution": "Filename/context association is evidence-labelled and does not prove the file is the original shoot, an outtake, or the canonical publication object."
          },
          {
            "representationId": "representation.inventory.asset:10329",
            "label": "Madonna photoshoot for Versace - 1995.png",
            "relativePath": "UNFILED/2011-2023/Madonna photoshoot for Versace - 1995.png",
            "dateToken": "1995",
            "extension": "png",
            "fileKind": "file",
            "bytes": 193945,
            "sourceSenses": [
              "archive.nas.postgresql"
            ],
            "matchedTokens": [
              "photoshoot",
              "versace"
            ],
            "observationState": "logical_archive_file",
            "provenanceState": "source_observed",
            "logicalRepresentationId": "",
            "matchState": "visible_inferred_filename_match",
            "unresolvedReason": "",
            "caution": "Filename/context association is evidence-labelled and does not prove the file is the original shoot, an outtake, or the canonical publication object."
          }
        ],
        "uncertainties": []
      }
    ],
    "gaps": [
      "The 1992 source preserves the location as unknown / Long Island / Hamptons / Miami; the arc does not choose among those alternatives.",
      "The five local representations are filename/context matches. They are not asserted to be the original shoot, an outtake, or the canonical publication object without further evidence."
    ],
    "inputFingerprints": {
      "graph_database": "sha256:a58a64bd595ff091637ccd7795fdea601176e1ee9a9b57a0a0ce69adab589b99",
      "graph_receipt": "sha256:af7f1cc4a9a266f9850217ab22648197430a40357c756e4e2eaa5ae5019c8369",
      "qa_receipt": "sha256:793838d3eea5f33811a422b5338d8cc47c79cea24ee75b6d240e652630db8205",
      "retained_snapshot": "sha256:cf1f1c40f52bf0c43f378c20a31e27a4e8b02d79cf2531c0dde925ccd5e84558"
    },
    "provenanceJobId": "mercy-working-graph-1958-2026-v1.rebuild-20261021-resumed-qa",
    "sourceSearchState": "representation_historical_match_projection",
    "authorityBoundary": "Derived visual arc and representation projection only; original paths and representation observations remain unchanged, and no canonical, inventory, media, filesystem, or public-network writes occurred.",
    "nextAction": "Inspect source provenance and any retained publication/outtake evidence before upgrading a representation association; preserve each logical file and technical sidecar separately."
  },
  {
    "arcId": "mercy.arc.crazy-for-you-demo-to-release-1983-1985",
    "title": "Crazy for You · demo, Vision Quest, and 1985 release",
    "summary": "A source-labelled song-and-screen arc that keeps the 1983 live demo separate from the later soundtrack/single version while following the retained recording, filming, release, and soundtrack-promotion evidence.",
    "state": "archive_visible_supported_with_explicit_gap",
    "years": [
      1983,
      1985
    ],
    "steps": [
      {
        "stepId": "mercy.fact.64d3c813362a472e4579",
        "year": 1983,
        "lane": "demo / song",
        "label": "Recording of Crazy for You demo",
        "dateStart": "1983-08-15",
        "dateEnd": "1983-11-15",
        "datePrecision": "month",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "The ‘live demo’ was recorded sometime between mid August and mid November, prior to Madonna filming her ‘Vision Quest’ scene on November 22nd ‘83.",
        "confidence": 0.85,
        "state": "archive_visible_supported",
        "place": "",
        "sourceCount": 1,
        "sourceExcerpt": "The ‘live demo’ version of ‘Crazy for You’ is featured in a couple of other scenes throughout the movie. Performed by Madonna Written and produced by Jon Lind and John Bettis. The instrumentation is sparse in comparison to the final ‘soundtrack’ version recorded after filming and used as the singles release in 1985. The ‘live demo’ was recorded sometime between mid August and mid November, prior to Madonna filming her ‘Vision Quest’ scene on November 22nd ‘83.",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_8375c8fe95cdaad156897aab357ef1e4b1649d1c51fc06f1fd8ecb743cf070c4",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/C05AL-EMTlD/",
            "excerpt": "The ‘live demo’ version of ‘Crazy for You’ is featured in a couple of other scenes throughout the movie. Performed by Madonna Written and produced by Jon Lind and John Bettis. The instrumentation is sparse in comparison to the final ‘soundtrack’ version recorded after filming and used as the singles release in 1985. The ‘live demo’ was recorded sometime between mid August and mid November, prior to Madonna filming her ‘Vision Quest’ scene on November 22nd ‘83."
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": [
          {
            "detail": "Retained evidence supports month precision; no day was invented.",
            "kind": "date_precision"
          },
          {
            "detail": "No event place is asserted by this retained event record.",
            "kind": "place"
          }
        ]
      },
      {
        "stepId": "mercy.fact.a682a6c252c354c7e1a9",
        "year": 1983,
        "lane": "recording / song version",
        "label": "Vision Quest Recording Sessions",
        "dateStart": "1983-11-01",
        "dateEnd": "1983-12-31",
        "datePrecision": "range",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "It would seem that it was during this Sigma studio time in November and December that the tracks ‘Crazy for You’, ‘Gambler’, ‘Warning Signs’ were re-recorded",
        "confidence": 0.85,
        "state": "archive_visible_supported",
        "place": "",
        "sourceCount": 2,
        "sourceExcerpt": "November - December 1983 Sigma Sound Studios 10TH FLOOR 1697 BROADWAY New York NY ————————- It would seem that it was during this Sigma studio time in November and December that the tracks ‘Crazy for You’, ‘Gambler’, ‘Warning Signs’ were re-recorded by Madonna and produced by Jellybean. With the exception of ‘Crazy for You’ Stephen Bray was also involved in these sessions too. Bray also suggested that ‘Shoo Bee Doo’ was first worked on during this time as well (as confirmed in the MLVC podcast interview dated October 2022). The only other time available for the re-recordings was around the week of December 11th whilst Madonna was in Los Angeles, however we are not aware that Jellybean or Stephen accompanied her to LA. Furthermore we were under the impression that all three tracks were recorded in New York City. To finish, evidence of the three ‘Vision Quest’ tracks being finalised by January ‘84 and Jellybeans involvement is given in the Warner Bros. in house magazine “Word of Mouth” dated Jan ‘84 (more to follow in due coarse). This cements the fact that they would have been laid down after the filming of ‘Vision Quest’ and the visit to Detroit for Thanksgiving. Leaving only a ver…",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_c49ca6712e366ed0c203e90419dc2e99ffbb5f68b6931bb0c7fc3ef89de800bc",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/C2r6nEbsHgf/",
            "excerpt": "November - December 1983 Sigma Sound Studios 10TH FLOOR 1697 BROADWAY New York NY ————————- It would seem that it was during this Sigma studio time in November and December that the tracks ‘Crazy for You’, ‘Gambler’, ‘Warning Signs’ were re-recorded by Madonna and produced by Jellybean. With the exception of ‘Crazy for You’ Stephen Bray was also involved in these sessions too. Bray also suggested that ‘Shoo Bee Doo’ was first worked on during this time as well (as confirmed in the MLVC podcast interview dated October 2022). The only other time available for the re-recordings was around the week of December 11th whilst Madonna was in Los Angeles, however we are not aware that Jellybean or Stephen accompanied her to LA. Furthermore we were under the impression that all three tracks were recorded in New York City. To finish, evidence of the three ‘Vision Quest’ tracks being finalised by January ‘84 and Jellybeans involvement is given in the Warner Bros. in house magazine “Word of Mouth” dated Jan ‘84 (more to follow in due coarse). This cements the fact that they would have been laid down after the filming of ‘Vision Quest’ and the visit to Detroit for Thanksgiving. Leaving only a ver…"
          },
          {
            "sourceItemId": "source_item_d8b52abe81d568ff0d87d563c38113709bd263374bda03cbdd5abccca3e2d885",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/C2r71C5Khyi/",
            "excerpt": "November - December 1983 Sigma Sound Studios 10TH FLOOR 1697 BROADWAY New York NY ————————- It would seem that it was during this Sigma studio time in November and December that the tracks ‘Crazy for You’, ‘Gambler’, ‘Warning Signs’ were re-recorded by Madonna and produced by Jellybean. With the exception of ‘Crazy for You’ Stephen Bray was also involved in these sessions too. Bray also suggested that ‘Shoo Bee Doo’ was first worked on during this time as well (as confirmed in the MLVC podcast interview dated October 2022). The only other time available for the re-recordings was around the week of December 11th whilst Madonna was in Los Angeles, however we are not aware that Jellybean or Stephen accompanied her to LA. Furthermore we were under the impression that all three tracks were recorded in New York City. To finish, evidence of the three ‘Vision Quest’ tracks being finalised by January ‘84 and Jellybeans involvement is given in the Warner Bros. in house magazine “Word of Mouth” dated Jan ‘84 (more to follow in due coarse). This cements the fact that they would have been laid down after the filming of ‘Vision Quest’ and the visit to Detroit for Thanksgiving. Leaving only a ver…"
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": [
          {
            "detail": "Retained evidence supports range precision; no day was invented.",
            "kind": "date_precision"
          }
        ]
      },
      {
        "stepId": "mercy.fact.389970d368ac6928d0f9",
        "year": 1983,
        "lane": "film / scene",
        "label": "Filming scene for Vision Quest",
        "dateStart": "1983-11-22",
        "dateEnd": "1983-11-22",
        "datePrecision": "day",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "Madonna shoots her nightclub scene for the Warner Bros. Pictures film ‘Vision Quest’.",
        "confidence": 0.95,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 3,
        "sourceExcerpt": "Tuesday 22nd November 1983 Bigfoot Pub & Eatery 9115 N Division Street Spokane Washington —————————— Madonna shoots her nightclub scene for the Warner Bros. Pictures film ‘Vision Quest’. News paper paragraph from: The Spokesman Review - May 19th 1991 —————————— Madonna had met with Jon Peters, the ex-lover / business associate of Barbra Streisand and producer of forthcoming film ‘Vision Quest’ during her visit to Los Angeles in August ‘83. It is not clear if she also met the films director Harold Becker and the films musical producer legendary Phil Ramone at this time or if that happened earlier or later in New York. From Wikipedia: “Film producers Jon Peters and Peter Guber, along with music director Phil Ramone, decided to use Madonna after listening to her previous recordings, employing John Bettis and Jon Lind to write. After reading the script of the film, Bettis and Lind wrote the song about the situation in which the lead characters meet at a nightclub”. By November 22nd three tracks had been recorded as “live demos” in preparation for the filming process. Two of the tracks, ‘Gambler’ and ‘Warning Signs’ were written by Madonna. With the third track ‘Crazy for You’ written b…",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_8784fe6f1af17ff62f320f0b54ed7845c9875f07b01126fdb4b9beb384df8a7e",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/C0o3aHtqLde/",
            "excerpt": "Tuesday 22nd November 1983 Bigfoot Pub & Eatery 9115 N Division Street Spokane Washington —————————— Madonna shoots her nightclub scene for the Warner Bros. Pictures film ‘Vision Quest’. News paper paragraph from: The Spokesman Review - May 19th 1991 —————————— Madonna had met with Jon Peters, the ex-lover / business associate of Barbra Streisand and producer of forthcoming film ‘Vision Quest’ during her visit to Los Angeles in August ‘83. It is not clear if she also met the films director Harold Becker and the films musical producer legendary Phil Ramone at this time or if that happened earlier or later in New York. From Wikipedia: “Film producers Jon Peters and Peter Guber, along with music director Phil Ramone, decided to use Madonna after listening to her previous recordings, employing John Bettis and Jon Lind to write. After reading the script of the film, Bettis and Lind wrote the song about the situation in which the lead characters meet at a nightclub”. By November 22nd three tracks had been recorded as “live demos” in preparation for the filming process. Two of the tracks, ‘Gambler’ and ‘Warning Signs’ were written by Madonna. With the third track ‘Crazy for You’ written b…"
          },
          {
            "sourceItemId": "source_item_4a79cd7cff32f9c0987955ff34e9da2bb185b957e99f706b10facedb7e4f95f4",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/C03hVQ-shdE/",
            "excerpt": "Tuesday 22nd November 1983 Bigfoot Pub & Eatery 9115 N Division Street Spokane Washington —————————— Madonna shoots her nightclub scene for the Warner Bros. Pictures film ‘Vision Quest’. The Making of ‘Vision Quest’, promo footage from 1985 during the films release. On set interview and footage from the filming of the nightclub scene. Also includes interviews with Harold Becker and Phil Ramone. —————————— Madonna had met with Jon Peters, the ex-lover / business associate of Barbra Streisand and producer of forthcoming film ‘Vision Quest’ during her visit to Los Angeles in August ‘83. It is not clear if she also met the films director Harold Becker and the films musical producer legendary Phil Ramone at this time or if that happened earlier or later in New York. From Wikipedia: “Film producers Jon Peters and Peter Guber, along with music director Phil Ramone, decided to use Madonna after listening to her previous recordings, employing John Bettis and Jon Lind to write. After reading the script of the film, Bettis and Lind wrote the song about the situation in which the lead characters meet at a nightclub”. By November 22nd three tracks had been recorded as “live demos” in preparatio…"
          },
          {
            "sourceItemId": "source_item_d8ebcfcafef5dcdd37b24a1774ceab204bd25dcc915cf3e55ec7a12f70aa8fa8",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/C043OJlMhv1/",
            "excerpt": "Tuesday 22nd November 1983 Bigfoot Pub & Eatery 9115 N Division Street Spokane Washington —————————— Madonna shoots her nightclub scene for the Warner Bros. Pictures film ‘Vision Quest’. On set interview and footage from the filming of the nightclub scene. —————————— Madonna had met with Jon Peters, the ex-lover / business associate of Barbra Streisand and producer of forthcoming film ‘Vision Quest’ during her visit to Los Angeles in August ‘83. It is not clear if she also met the films director Harold Becker and the films musical producer legendary Phil Ramone at this time or if that happened earlier or later in New York. From Wikipedia: “Film producers Jon Peters and Peter Guber, along with music director Phil Ramone, decided to use Madonna after listening to her previous recordings, employing John Bettis and Jon Lind to write. After reading the script of the film, Bettis and Lind wrote the song about the situation in which the lead characters meet at a nightclub”. By November 22nd three tracks had been recorded as “live demos” in preparation for the filming process. Two of the tracks, ‘Gambler’ and ‘Warning Signs’ were written by Madonna. With the third track ‘Crazy for You’ wri…"
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": []
      },
      {
        "stepId": "mercy.fact.c2d96da96f215d541033",
        "year": 1985,
        "lane": "single / release",
        "label": "Release of Crazy for You single",
        "dateStart": "1985-02-20",
        "dateEnd": "1985-02-20",
        "datePrecision": "day",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "Wednesday 20th February 1985 Geffen Records release the 7” single ‘Crazy for You’ to the U.S. market.",
        "confidence": 1,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 1,
        "sourceExcerpt": "Wednesday 20th February 1985 Geffen Records USA ————————————- Geffen Records release the 7” single ‘Crazy for You’ to the U.S. market. A single sided Madonna record lifted from the ‘Vision Quest’ soundtrack. For its U.S. release it was backed with a Berlin track ‘No More Words’ - this track was used in the film, but not featured on the films soundtrack. The vinyl was housed in a unique picture sleeve, featuring an uncredited shot of Madonna captured on set by Richard Corman while filming her ‘Vision Quest’ scenes in Spokane, Washington on November 22nd 1983. Corman had previously shot Madonna many times through ‘83 and was personally invited by her to the set. Most online information regarding this release points to the date of March 2nd ‘85. According to Billboard it entered the Hot 100 chart on March 2nd, so therefore the release date would have to of been the week previous - Wed 20th Feb. Geffen Records – 7-29051 Geffen Records – 9 29051-7 A. Madonna Crazy For You Arranged By – Rob Mounsey Producer – John “Jellybean” Benitez Written-By – John Bettis, Jon Lind 4:08 B. Berlin No More Words Producer – Giorgio Moroder, Richie Zito Written-By – John Crawford 3:54 Phonographic Copyrig…",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_ed8cf6d4ddbe277dc1f0daaa18753b41ba05189f75d7d51e9ac6d797af666414",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/DXgwnvxCOZV/",
            "excerpt": "Wednesday 20th February 1985 Geffen Records USA ————————————- Geffen Records release the 7” single ‘Crazy for You’ to the U.S. market. A single sided Madonna record lifted from the ‘Vision Quest’ soundtrack. For its U.S. release it was backed with a Berlin track ‘No More Words’ - this track was used in the film, but not featured on the films soundtrack. The vinyl was housed in a unique picture sleeve, featuring an uncredited shot of Madonna captured on set by Richard Corman while filming her ‘Vision Quest’ scenes in Spokane, Washington on November 22nd 1983. Corman had previously shot Madonna many times through ‘83 and was personally invited by her to the set. Most online information regarding this release points to the date of March 2nd ‘85. According to Billboard it entered the Hot 100 chart on March 2nd, so therefore the release date would have to of been the week previous - Wed 20th Feb. Geffen Records – 7-29051 Geffen Records – 9 29051-7 A. Madonna Crazy For You Arranged By – Rob Mounsey Producer – John “Jellybean” Benitez Written-By – John Bettis, Jon Lind 4:08 B. Berlin No More Words Producer – Giorgio Moroder, Richie Zito Written-By – John Crawford 3:54 Phonographic Copyrig…"
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": [
          {
            "detail": "No event place is asserted by this retained event record.",
            "kind": "place"
          }
        ]
      },
      {
        "stepId": "mercy.fact.a83fba68e1573a885e2b",
        "year": 1985,
        "lane": "soundtrack / promotion",
        "label": "Billboard Soundtrack Mention",
        "dateStart": "1985-02-23",
        "dateEnd": "1985-02-23",
        "datePrecision": "day",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "Billboard article by Brian Chin mentions Madonna's inclusion in the soundtrack.",
        "confidence": 0.95,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 1,
        "sourceExcerpt": "Weekending Saturday 23rd February 1985 Hit newsstands Wednesday 20th Feb Billboard New York NY ———————————- Brian Chin gives mention to the ‘Vision Quest’ soundtrack. A local radio station reveals Madonna’s inclusion in its playlists. A TV show reveals Madonna’s fifth week at number one. And Warner reveal their huge success has been due to their artists like Prince, Madonna and others. Cheap advert, incase anyone wants any Madonna Lace Bows!",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_83b4d2c649554d92001299b7e6c053af8206841984aaebfc9af8b3fd7024a46b",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/DXRvJC2iD_j/",
            "excerpt": "Weekending Saturday 23rd February 1985 Hit newsstands Wednesday 20th Feb Billboard New York NY ———————————- Brian Chin gives mention to the ‘Vision Quest’ soundtrack. A local radio station reveals Madonna’s inclusion in its playlists. A TV show reveals Madonna’s fifth week at number one. And Warner reveal their huge success has been due to their artists like Prince, Madonna and others. Cheap advert, incase anyone wants any Madonna Lace Bows!"
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": []
      }
    ],
    "gaps": [
      "The retained source explicitly distinguishes the live demo from the later soundtrack/single version; this derived arc does not merge them into one canonical recording or version entity.",
      "The recording-session fact is source-qualified as an inference (\"it would seem\") and retains a November–December range; no exact session day is invented.",
      "No local film master, B-roll, tag, or other archive representation was directly matched to these facts in the pinned projection; that is an evidence boundary, not proof that no such file exists."
    ],
    "inputFingerprints": {
      "graph_database": "sha256:a58a64bd595ff091637ccd7795fdea601176e1ee9a9b57a0a0ce69adab589b99",
      "graph_receipt": "sha256:af7f1cc4a9a266f9850217ab22648197430a40357c756e4e2eaa5ae5019c8369",
      "qa_receipt": "sha256:793838d3eea5f33811a422b5338d8cc47c79cea24ee75b6d240e652630db8205",
      "retained_snapshot": "sha256:cf1f1c40f52bf0c43f378c20a31e27a4e8b02d79cf2531c0dde925ccd5e84558"
    },
    "provenanceJobId": "mercy-working-graph-1958-2026-v1.rebuild-20261021-resumed-qa",
    "sourceSearchState": "source_bundles_materialized",
    "authorityBoundary": "Derived song-and-screen arc only; recording/version, release, and representation authorities remain separate, and no canonical, inventory, media, filesystem, or public-network writes occurred.",
    "nextAction": "Promote typed demo-to-recording-version and recording-to-release edges only after their endpoint identities and any local film/audio representations are independently evidenced."
  },
  {
    "arcId": "mercy.arc.beautiful-stranger-video-to-aired-representations-1999",
    "title": "Beautiful Stranger · recording, video, broadcast, and local files",
    "summary": "A source-labelled music-video arc from the February 1999 recording session through the May video shoot and June Top of the Pops introduction, with two preserved local representations attached to the aired-program fact.",
    "state": "archive_visible_supported_with_explicit_gap",
    "years": [
      1999
    ],
    "steps": [
      {
        "stepId": "mercy.fact.2a8e2d40822241171c21",
        "year": 1999,
        "lane": "recording / song",
        "label": "Recording sessions for Beautiful Stranger and Be Careful",
        "dateStart": "1999-02-25",
        "dateEnd": "1999-02-28",
        "datePrecision": "day",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "WEBO cluster 4012: Recording sessions for Madonna's 'Beautiful Stranger' and duet with Ricky Martin ('Be Careful') occurred at Guerilla Beach Studios, Los Angeles from February 25th to 28th, 1999.",
        "confidence": 0.9,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 1,
        "sourceExcerpt": "Thursday 25th February - Sunday 28th February 1999 Guerilla Beach Studios Los Angeles ———————- RICKY MARTIN DISCUSSES HIS DUET WITH MADONNA - “BE CAREFUL” ———————— As has been stated from various sources that Madonna’s track “Beautiful Stranger” and her duet with Ricky Martin ”Be Careful (Cuidado Con Mi Corazon”) we’re laid down at Guerilla Beach Studios, LA during February ‘99. Following the Grammy Awards all three - Madonna, Ricky Martin and William Orbit were located in LA . This would put a time frame on the recording sessions happening sometime between Feb 25th - 28th. “Be Careful” was thought to of been an earlier unused “ Ray of Light” track - however @williamorbit has confirmed it “was cooked up that week” A demo version containing Madonna on solo vocals also exists (see my later post). Apparently it was Ricky who convinced Madonna to record this as a duet, which featured on his self-entitled 1999 album. It was considered as the second single of the album. However, Madonna was too busy with other projects to shoot a video, so it was never released. Ricky added it also to his 'Best Of' album, released in 2001. “Beautiful Stranger” was recorded especially for the upcoming Aus…",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_f6b033d5ba143a2a3e03877618e98f445e90db8808920eec30df3972731f8dd8",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/CZ85yZOPaHgI7VHi4YILXI9XUcMIA91K6mPLKM0/",
            "excerpt": "Thursday 25th February - Sunday 28th February 1999 Guerilla Beach Studios Los Angeles ———————- RICKY MARTIN DISCUSSES HIS DUET WITH MADONNA - “BE CAREFUL” ———————— As has been stated from various sources that Madonna’s track “Beautiful Stranger” and her duet with Ricky Martin ”Be Careful (Cuidado Con Mi Corazon”) we’re laid down at Guerilla Beach Studios, LA during February ‘99. Following the Grammy Awards all three - Madonna, Ricky Martin and William Orbit were located in LA . This would put a time frame on the recording sessions happening sometime between Feb 25th - 28th. “Be Careful” was thought to of been an earlier unused “ Ray of Light” track - however @williamorbit has confirmed it “was cooked up that week” A demo version containing Madonna on solo vocals also exists (see my later post). Apparently it was Ricky who convinced Madonna to record this as a duet, which featured on his self-entitled 1999 album. It was considered as the second single of the album. However, Madonna was too busy with other projects to shoot a video, so it was never released. Ricky added it also to his 'Best Of' album, released in 2001. “Beautiful Stranger” was recorded especially for the upcoming Aus…"
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": []
      },
      {
        "stepId": "mercy.fact.243b770684ecdde69883",
        "year": 1999,
        "lane": "music video / shoot",
        "label": "Beautiful Stranger music video shoot",
        "dateStart": "1999-05-01",
        "dateEnd": "1999-05-01",
        "datePrecision": "day",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "Madonna films the 'Beautiful Stranger' video at Universal Studios, Los Angeles.",
        "confidence": 1,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 4,
        "sourceExcerpt": "Saturday 1st May 1999 Universal Studios 100 Universal City PIz Universal City CA ——————— Styling: Arianne Phillips Make Up : Kevyn Aucoin Hair: Luigi Murenu Black leather jacket : Sold Sequin camisole: Chloé Plaid trousers: Bruns Bazaar Shoes: Diavolina ——————- MADONNA ON SET WITH MIKE MYERS AND DIRECTOR BRETT RATNER —————— During a weekend off from filming “The Next Best Thing” Madonna films the \"Beautiful Stranger\" video at Universal Studios, Los Angeles. Directed by Brett Ratner who’s career started in music video direction for the likes of Run DMC, Public Enemy, Lionel Richie, Mary J Blige and Mariah Carey before directing for Madonna. He also directed the films Rush Hour (in ‘97) and most recently Hercules (in 2014). Madonna had previously shown interest in working with Ratner due to his work on D'Angelo's video for \"Brown Sugar\" (in ‘95). Following the weekend shoot MTV NEWS reported this: MADONNA, MIKE MYERS TEAM UP FOR \"AUSTIN POWERS\" VIDEO “Madonna shot a groovy video this past weekend in Los Angeles for her new soundtrack song, \"Beautiful Stranger,\" which was recorded for the Mike Myers spy spoof \"Austin Powers: The Spy Who Shagged Me.\" Helmed by \"Rush Hour\" director Bre…",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_4c89940996853ac05eef1607007f56b0ae15af300d75ad842ae714f40138533b",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/CbVvJD3qrr_/",
            "excerpt": "Saturday 1st May 1999 Universal Studios 100 Universal City PIz Universal City CA ——————— Styling: Arianne Phillips Make Up : Kevyn Aucoin Hair: Luigi Murenu Black leather jacket : Sold Sequin camisole: Chloé Plaid trousers: Bruns Bazaar Shoes: Diavolina ——————- MADONNA ON SET WITH MIKE MYERS AND DIRECTOR BRETT RATNER —————— During a weekend off from filming “The Next Best Thing” Madonna films the \"Beautiful Stranger\" video at Universal Studios, Los Angeles. Directed by Brett Ratner who’s career started in music video direction for the likes of Run DMC, Public Enemy, Lionel Richie, Mary J Blige and Mariah Carey before directing for Madonna. He also directed the films Rush Hour (in ‘97) and most recently Hercules (in 2014). Madonna had previously shown interest in working with Ratner due to his work on D'Angelo's video for \"Brown Sugar\" (in ‘95). Following the weekend shoot MTV NEWS reported this: MADONNA, MIKE MYERS TEAM UP FOR \"AUSTIN POWERS\" VIDEO “Madonna shot a groovy video this past weekend in Los Angeles for her new soundtrack song, \"Beautiful Stranger,\" which was recorded for the Mike Myers spy spoof \"Austin Powers: The Spy Who Shagged Me.\" Helmed by \"Rush Hour\" director Bre…"
          },
          {
            "sourceItemId": "source_item_9071e1b107fcc14197752cce8f6f649806ea14d074ee1dea8e3a1dc974e68872",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/CbVwn6cqRlX/",
            "excerpt": "Saturday 1st May 1999 Universal Studios 100 Universal City PIz Universal City CA ——————— Styling: Arianne Phillips Make Up : Kevyn Aucoin Hair: Luigi Murenu Black leather jacket : Sold Sequin camisole: Chloé Plaid trousers: Bruns Bazaar Shoes: Diavolina ——————- MADONNA ON SET WITH MIKE MYERS —————— During a weekend off from filming “The Next Best Thing” Madonna films the \"Beautiful Stranger\" video at Universal Studios, Los Angeles. Directed by Brett Ratner who’s career started in music video direction for the likes of Run DMC, Public Enemy, Lionel Richie, Mary J Blige and Mariah Carey before directing for Madonna. He also directed the films Rush Hour (in ‘97) and most recently Hercules (in 2014). Madonna had previously shown interest in working with Ratner due to his work on D'Angelo's video for \"Brown Sugar\" (in ‘95). Following the weekend shoot MTV NEWS reported this: MADONNA, MIKE MYERS TEAM UP FOR \"AUSTIN POWERS\" VIDEO “Madonna shot a groovy video this past weekend in Los Angeles for her new soundtrack song, \"Beautiful Stranger,\" which was recorded for the Mike Myers spy spoof \"Austin Powers: The Spy Who Shagged Me.\" Helmed by \"Rush Hour\" director Brett Ratner, the clip featur…"
          },
          {
            "sourceItemId": "source_item_8427041106a6e3c0977204570a5c103ba0278e89496ea1ade7e8dafc986dc250",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/CbVxqq6KRnC/",
            "excerpt": "Saturday 1st May 1999 Universal Studios 100 Universal City PIz Universal City CA ——————— Styling: Arianne Phillips Make Up : Kevyn Aucoin Hair: Luigi Murenu Black leather jacket : Sold Sequin camisole: Chloé Plaid trousers: Bruns Bazaar Shoes: Diavolina ——————- MADONNA ON SET POLAROID TAKEN BY MAKE UP ARTIST KEVYN AUCOIN —————— During a weekend off from filming “The Next Best Thing” Madonna films the \"Beautiful Stranger\" video at Universal Studios, Los Angeles. Directed by Brett Ratner who’s career started in music video direction for the likes of Run DMC, Public Enemy, Lionel Richie, Mary J Blige and Mariah Carey before directing for Madonna. He also directed the films Rush Hour (in ‘97) and most recently Hercules (in 2014). Madonna had previously shown interest in working with Ratner due to his work on D'Angelo's video for \"Brown Sugar\" (in ‘95). Following the weekend shoot MTV NEWS reported this: MADONNA, MIKE MYERS TEAM UP FOR \"AUSTIN POWERS\" VIDEO “Madonna shot a groovy video this past weekend in Los Angeles for her new soundtrack song, \"Beautiful Stranger,\" which was recorded for the Mike Myers spy spoof \"Austin Powers: The Spy Who Shagged Me.\" Helmed by \"Rush Hour\" director…"
          },
          {
            "sourceItemId": "source_item_1536c0cf3cca88a8bd4fdb5ab1ace734d978a4ba812ca5d5ae05f68459a2ab8a",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/CbVyBmcKkhf/",
            "excerpt": "Saturday 1st May 1999 Universal Studios 100 Universal City PIz Universal City CA ——————— Styling: Arianne Phillips Make Up : Kevyn Aucoin Hair: Luigi Murenu Black leather jacket : Sold Sequin camisole: Chloé Plaid trousers: Bruns Bazaar Shoes: Diavolina ——————- MADONNA ON SET WITH MIKE MYERS AND DIRECTOR BRETT RATNER —————— During a weekend off from filming “The Next Best Thing” Madonna films the \"Beautiful Stranger\" video at Universal Studios, Los Angeles. Directed by Brett Ratner who’s career started in music video direction for the likes of Run DMC, Public Enemy, Lionel Richie, Mary J Blige and Mariah Carey before directing for Madonna. He also directed the films Rush Hour (in ‘97) and most recently Hercules (in 2014). Madonna had previously shown interest in working with Ratner due to his work on D'Angelo's video for \"Brown Sugar\" (in ‘95). Following the weekend shoot MTV NEWS reported this: MADONNA, MIKE MYERS TEAM UP FOR \"AUSTIN POWERS\" VIDEO “Madonna shot a groovy video this past weekend in Los Angeles for her new soundtrack song, \"Beautiful Stranger,\" which was recorded for the Mike Myers spy spoof \"Austin Powers: The Spy Who Shagged Me.\" Helmed by \"Rush Hour\" director Bre…"
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": []
      },
      {
        "stepId": "mercy.fact.2394fba0a99f5cb480a3",
        "year": 1999,
        "lane": "broadcast / video introduction",
        "label": "Appearance on Top of the Pops",
        "dateStart": "1999-06-18",
        "dateEnd": "1999-06-18",
        "datePrecision": "day",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "Madonna appeared on BBC Top of the Pops to introduce her new video ‘Beautiful Stranger’.",
        "confidence": 0.95,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 1,
        "sourceExcerpt": "Aired: Friday 18th June 1999 Top of the Pops BBC UK ——————— Make up: Sarah Monzani Hair: Lyndell Quiyou ——————— Madonna introduces her new video “Beautiful Stranger” on the UK’s BBC ONE TV show “Top of the Pops”. The introduction looks likely to of been filmed sometime in early June whilst on set of “The Next Best Thing”. #madonna #losangeles #1999 #beautifulstranger @madonna #sarahmonzan @topofthepops90s #itsgroovybaby #madonna90s #icon #90smadonna #madonnastyle #queen #musicicon #BoyToy #musicroyalty #madonnamusic #madonnafans #Madonna #iconic #madonnaqueen #bitchimmadonna #allhailthequeen #madonnaphotos #rebel #madonnapictures #mlvc #madonnalove #whenmadonnaruledtheworld #supportmadonna #MadonnaStory",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_3af398e2d3a1602545e8ec84a7bd9adb0f4eef2f2df6b207794635bf514f0125",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/Cbp-jXJKrC5/",
            "excerpt": "Aired: Friday 18th June 1999 Top of the Pops BBC UK ——————— Make up: Sarah Monzani Hair: Lyndell Quiyou ——————— Madonna introduces her new video “Beautiful Stranger” on the UK’s BBC ONE TV show “Top of the Pops”. The introduction looks likely to of been filmed sometime in early June whilst on set of “The Next Best Thing”. #madonna #losangeles #1999 #beautifulstranger @madonna #sarahmonzan @topofthepops90s #itsgroovybaby #madonna90s #icon #90smadonna #madonnastyle #queen #musicicon #BoyToy #musicroyalty #madonnamusic #madonnafans #Madonna #iconic #madonnaqueen #bitchimmadonna #allhailthequeen #madonnaphotos #rebel #madonnapictures #mlvc #madonnalove #whenmadonnaruledtheworld #supportmadonna #MadonnaStory"
          }
        ],
        "representationIds": [
          "representation.inventory.asset:10187",
          "representation.inventory.asset:10351"
        ],
        "representations": [
          {
            "representationId": "representation.inventory.asset:10187",
            "label": "Madonna introduces BEAUTIFUL STRANGER video on TOP OF THE POPS UK 1999.png",
            "relativePath": "UNFILED/2011-2023/Madonna introduces BEAUTIFUL STRANGER video on TOP OF THE POPS UK 1999.png",
            "dateToken": "1999",
            "extension": "png",
            "fileKind": "file",
            "bytes": 107870,
            "sourceSenses": [
              "archive.nas.postgresql"
            ],
            "matchedTokens": [
              "beautiful",
              "pops",
              "stranger",
              "top"
            ],
            "observationState": "logical_archive_file",
            "provenanceState": "source_observed",
            "logicalRepresentationId": "",
            "matchState": "visible_inferred_filename_match",
            "unresolvedReason": "",
            "caution": "Filename/context association is evidence-labelled and does not prove the file is the original shoot, an outtake, or the canonical publication object."
          },
          {
            "representationId": "representation.inventory.asset:10351",
            "label": "Madonna introduces BEAUTIFUL STRANGER video on TOP OF THE POPS UK 1999.mp4",
            "relativePath": "UNFILED/2011-2023/Madonna introduces BEAUTIFUL STRANGER video on TOP OF THE POPS UK 1999.mp4",
            "dateToken": "1999",
            "extension": "mp4",
            "fileKind": "file",
            "bytes": 1744966,
            "sourceSenses": [
              "archive.nas.postgresql"
            ],
            "matchedTokens": [
              "beautiful",
              "pops",
              "stranger",
              "top"
            ],
            "observationState": "logical_archive_file",
            "provenanceState": "source_observed",
            "logicalRepresentationId": "",
            "matchState": "visible_inferred_filename_match",
            "unresolvedReason": "",
            "caution": "Filename/context association is evidence-labelled and does not prove the file is the original shoot, an outtake, or the canonical publication object."
          }
        ],
        "uncertainties": []
      },
      {
        "stepId": "mercy.fact.0e55cb3d1452da6d0c15",
        "year": 1999,
        "lane": "publication / remix",
        "label": "Billboard review of Beautiful Stranger remix",
        "dateStart": "1999-06-19",
        "dateEnd": "1999-06-19",
        "datePrecision": "day",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "Billboard magazine reviewed the DJ promo remix of Madonna's song 'Beautiful Stranger' on June 19th, 1999.",
        "confidence": 0.9,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 1,
        "sourceExcerpt": "Saturday 19th June 1999 Billboard magazine ———————— In the Dance Trax section of Billboard magazine Michael Paoletta, reviews the forthcoming DJ promo remixes of “Beautiful Stranger” Calderone Opens Club Doors For \"Stranger” POPSICLE DAYS: It's been nearly two months since we first heard Madonna's \"Beautiful Stranger\" culled from the soundtrack to \"Austin Powers: The Spy Who Shagged Me\". and in that time we kept wishin' and hopin' for a wildly wonderful club restructuring. No disrespect to the singer and William Orbit, who collectively penned and produced this effervescent blast of psychedelic electronica, but we knew that no fierce-ruling club D.J in 1999 would dare play the original jangly rock-etched version of the song. Diversity on the dancefloor tends to be a losing battle with the approaching new millennium. Perhaps this will change in 2000. In the meantime, we have remixer/producer Victor Calderone to thank for taking \"Beautiful Stranger\" on a clubby musical trip that every fierce-ruling club DJ should gladly embrace. And we've got to hand it to Calderone, who wickedly keeps the integrity of the song while infusing the mix with much tribal drama. Unlike many of his recent r…",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_c97fe06af12fe218d0a3851639a044ec22ad552500c79a44e714e842658b656f",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/CbqXQwjKDKn/",
            "excerpt": "Saturday 19th June 1999 Billboard magazine ———————— In the Dance Trax section of Billboard magazine Michael Paoletta, reviews the forthcoming DJ promo remixes of “Beautiful Stranger” Calderone Opens Club Doors For \"Stranger” POPSICLE DAYS: It's been nearly two months since we first heard Madonna's \"Beautiful Stranger\" culled from the soundtrack to \"Austin Powers: The Spy Who Shagged Me\". and in that time we kept wishin' and hopin' for a wildly wonderful club restructuring. No disrespect to the singer and William Orbit, who collectively penned and produced this effervescent blast of psychedelic electronica, but we knew that no fierce-ruling club D.J in 1999 would dare play the original jangly rock-etched version of the song. Diversity on the dancefloor tends to be a losing battle with the approaching new millennium. Perhaps this will change in 2000. In the meantime, we have remixer/producer Victor Calderone to thank for taking \"Beautiful Stranger\" on a clubby musical trip that every fierce-ruling club DJ should gladly embrace. And we've got to hand it to Calderone, who wickedly keeps the integrity of the song while infusing the mix with much tribal drama. Unlike many of his recent r…"
          }
        ],
        "representationIds": [],
        "representations": [],
        "uncertainties": [
          {
            "detail": "No event place is asserted by this retained event record.",
            "kind": "place"
          }
        ]
      }
    ],
    "gaps": [
      "The two local files are evidence-labelled filename/context matches to the Top of the Pops fact; they are not promoted as the aired master, a canonical broadcast capture, or the original production file.",
      "No separately typed B-roll, tag, or technical-master relation is present in this pinned projection; the reader keeps that endpoint unresolved rather than inferring it from the filenames.",
      "The recording source describes the February session as a retained-source reconstruction and preserves a February 25–28 range; no exact recording day is invented."
    ],
    "inputFingerprints": {
      "graph_database": "sha256:a58a64bd595ff091637ccd7795fdea601176e1ee9a9b57a0a0ce69adab589b99",
      "graph_receipt": "sha256:af7f1cc4a9a266f9850217ab22648197430a40357c756e4e2eaa5ae5019c8369",
      "qa_receipt": "sha256:793838d3eea5f33811a422b5338d8cc47c79cea24ee75b6d240e652630db8205",
      "retained_snapshot": "sha256:cf1f1c40f52bf0c43f378c20a31e27a4e8b02d79cf2531c0dde925ccd5e84558"
    },
    "provenanceJobId": "mercy-working-graph-1958-2026-v1.rebuild-20261021-resumed-qa",
    "sourceSearchState": "source_bundles_and_representation_match_materialized",
    "authorityBoundary": "Derived music-video and representation arc only; source facts, operational inventory, local files, and canonical recording/release authorities remain separate, and no canonical, inventory, media, filesystem, or public-network writes occurred.",
    "nextAction": "The two local files are now receipt-backed read-only observations; consider aired-master, B-roll, tag, or recording-version edges only if additional evidence supports them."
  },
  {
    "arcId": "mercy.arc.virgin-tour-opening-broadcast-representations-1985",
    "title": "Virgin Tour opening · Seattle performance, TV report, and local files",
    "summary": "A source-labelled performance-to-broadcast arc for the 10 April 1985 Seattle opening, with 15 retained source items and two preserved local TV-news representations kept as inferred filename/context matches.",
    "state": "archive_visible_supported_with_explicit_gap",
    "years": [
      1985
    ],
    "steps": [
      {
        "stepId": "mercy.fact.02cb7a58d582a22515b9",
        "year": 1985,
        "lane": "performance / broadcast",
        "label": "Virgin Tour Opening",
        "dateStart": "1985-04-10",
        "dateEnd": "1985-04-10",
        "datePrecision": "day",
        "dateRole": "event_date",
        "dateBasis": "source-preserved graph fact",
        "factType": "historical_event",
        "assertion": "Madonna's Virgin Tour began at Seattle on April 10th, 1985.",
        "confidence": 0.95,
        "state": "archive_visible_high_confidence",
        "place": "",
        "sourceCount": 15,
        "sourceExcerpt": "On April 10th 1985 the Virgin Tour started its 40 date run of North America/Canada. Seattle was its first stop for three nights 10th/12th/13th. Unlike today's shows the setlist stayed the same throughout, however the costumes (all by Maripol) for the opening performance changed from venue to venue. Showcased here are the variations from show one in Seattle up until show forty in Madison Square Gardens on June 11th 1985. #Madonna #virgintour #Seattle #openingnight #1985",
        "sourcePointers": [
          {
            "sourceItemId": "source_item_5e5b8efb4b9defdc541d4759800cf52d2b5dda87281dd654190592895284d2dc",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BE5OScgDYTmBdY6MAXrKGp9xRF8PdVIAhWkr7M0/",
            "excerpt": "On April 10th 1985 the Virgin Tour started its 40 date run of North America/Canada. Seattle was its first stop for three nights 10th/12th/13th. Unlike today's shows the setlist stayed the same throughout, however the costumes (all by Maripol) for the opening performance changed from venue to venue. Showcased here are the variations from show one in Seattle up until show forty in Madison Square Gardens on June 11th 1985. #Madonna #virgintour #Seattle #openingnight #1985"
          },
          {
            "sourceItemId": "source_item_3f8089023456ec3a749d6916735f433c2fffe70dd1247e2452147479948c079c",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BE5Of4LjYT78vg0eg2SM-oeKBnP-hVDMxqN4cc0/",
            "excerpt": "On April 10th 1985 the Virgin Tour started its 40 date run of North America/Canada. Seattle was its first stop for three nights 10th/12th/13th. Unlike today's shows the setlist stayed the same throughout, however the costumes (all by Maripol) for the opening performance changed from venue to venue. Showcased here are the variations from show one in Seattle up until show forty in Madison Square Gardens on June 11th 1985. #Madonna #virgintour #Seattle #openingnight #1985 @madonna"
          },
          {
            "sourceItemId": "source_item_6e49fd53cdfb9930bc3a775cf4ef45b81d0e90acac57d1350e43894821acd7c4",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BE5O6YTjYUeoW7wnSRzqHB4AFQpcKT8DcQamD80/",
            "excerpt": "On April 10th 1985 the Virgin Tour started its 40 date run of North America/Canada. Seattle was its first stop for three nights 10th/12th/13th. Unlike today's shows the setlist stayed the same throughout, however the costumes (all by Maripol) for the opening performance changed from venue to venue. Showcased here are the variations from show one in Seattle up until show forty in Madison Square Gardens on June 11th 1985. #Madonna #virgintour #Seattle #openingnight #1985 @madonna"
          },
          {
            "sourceItemId": "source_item_b7a63fce8370434c3f79fa5023fc26e6328ecebb6d8731a2e43bf389a693636a",
            "authority": "WEBO retained local corpus",
            "sourceType": "retained_webo_caption",
            "locator": "",
            "url": "https://www.instagram.com/p/BE5Pc-RjYVgfLS6bFhn6ln3feJ4BMSQEI0SIbc0/",
            "excerpt": "On April 10th 1985 the Virgin Tour started its 40 date run of North America/Canada. Seattle was its first stop for three nights 10th/12th/13th. Unlike today's shows the setlist stayed the same throughout, however the costumes (all by Maripol) for the opening performance changed from venue to venue. Showcased here are the variations from show one in Seattle up until show forty in Madison Square Gardens on June 11th 1985. #Madonna #virgintour #Seattle #openingnight #1985"
          }
        ],
        "representationIds": [
          "representation.inventory.asset:10259",
          "representation.inventory.asset:10690"
        ],
        "representations": [
          {
            "representationId": "representation.inventory.asset:10259",
            "label": "Madonna The Virgin Tour opens in Seattle USA 1985 TV news report.png",
            "relativePath": "UNFILED/2011-2023/Madonna The Virgin Tour opens in Seattle USA 1985 TV news report.png",
            "dateToken": "1985",
            "extension": "png",
            "fileKind": "file",
            "bytes": 120753,
            "sourceSenses": [
              "archive.nas.postgresql"
            ],
            "matchedTokens": [
              "seattle",
              "tour",
              "virgin"
            ],
            "observationState": "logical_archive_file",
            "provenanceState": "source_observed",
            "logicalRepresentationId": "",
            "matchState": "visible_inferred_filename_match",
            "unresolvedReason": "",
            "caution": "Filename/context association is evidence-labelled and does not prove the file is the original shoot, an outtake, or the canonical publication object."
          },
          {
            "representationId": "representation.inventory.asset:10690",
            "label": "Madonna The Virgin Tour opens in Seattle USA 1985 TV news report.mp4",
            "relativePath": "UNFILED/2011-2023/Madonna The Virgin Tour opens in Seattle USA 1985 TV news report.mp4",
            "dateToken": "1985",
            "extension": "mp4",
            "fileKind": "file",
            "bytes": 36418201,
            "sourceSenses": [
              "archive.nas.postgresql"
            ],
            "matchedTokens": [
              "seattle",
              "tour",
              "virgin"
            ],
            "observationState": "logical_archive_file",
            "provenanceState": "source_observed",
            "logicalRepresentationId": "",
            "matchState": "visible_inferred_filename_match",
            "unresolvedReason": "",
            "caution": "Filename/context association is evidence-labelled and does not prove the file is the original shoot, an outtake, or the canonical publication object."
          }
        ],
        "uncertainties": []
      }
    ],
    "relationshipEdges": [
      {
        "edgeId": "mercy.edge.virgin-tour-opening.representation.inventory.asset:10259",
        "fromId": "mercy.fact.02cb7a58d582a22515b9",
        "toId": "representation.inventory.asset:10259",
        "predicate": "contextually_matches_representation",
        "state": "visible_inferred_filename_match",
        "sourceSense": "archive.nas.postgresql",
        "evidence": "Preserved filename tokens: seattle, tour, virgin; the graph match is source-scoped and the file was fingerprinted in the read-only inspection receipt.",
        "nonclaim": "This edge does not identify the aired master, original production file, complete broadcast capture, or canonical performance representation."
      },
      {
        "edgeId": "mercy.edge.virgin-tour-opening.representation.inventory.asset:10690",
        "fromId": "mercy.fact.02cb7a58d582a22515b9",
        "toId": "representation.inventory.asset:10690",
        "predicate": "contextually_matches_representation",
        "state": "visible_inferred_filename_match",
        "sourceSense": "archive.nas.postgresql",
        "evidence": "Preserved filename tokens: seattle, tour, virgin; the graph match is source-scoped and the file was fingerprinted in the read-only inspection receipt.",
        "nonclaim": "This edge does not identify the aired master, original production file, complete broadcast capture, or canonical performance representation."
      }
    ],
    "gaps": [
      "The two local files are receipt-backed filename/context matches to the Seattle opening fact; neither is promoted as the aired master, original production file, or complete broadcast capture.",
      "The retained source describes opening-night costume variation across the tour but does not identify which local file corresponds to which captured segment.",
      "No typed setlist-item, broadcast-master, tag, or recording-version edge is asserted from the filename alone."
    ],
    "inputFingerprints": {
      "graph_database": "sha256:a58a64bd595ff091637ccd7795fdea601176e1ee9a9b57a0a0ce69adab589b99",
      "graph_receipt": "sha256:af7f1cc4a9a266f9850217ab22648197430a40357c756e4e2eaa5ae5019c8369",
      "qa_receipt": "sha256:793838d3eea5f33811a422b5338d8cc47c79cea24ee75b6d240e652630db8205",
      "retained_snapshot": "sha256:cf1f1c40f52bf0c43f378c20a31e27a4e8b02d79cf2531c0dde925ccd5e84558",
      "virgin_tour_png": "64b44e00cac94bdd56c70802aa1b5f04a7e16f4ff0fc0e9d0d238b2296195a60",
      "virgin_tour_mp4": "8556f055139c26dad4bd6b652f8b31c0d08a1f515fc179dbaf9d016813b5ad39"
    },
    "provenanceJobId": "mercy-reader-virgin-tour-opening-inspection-2026-10-21-v1",
    "sourceSearchState": "source_bundles_and_representation_match_materialized",
    "authorityBoundary": "Derived performance, broadcast, and representation projection only; the retained source, operational inventory, local files, and canonical performance/release authorities remain separate, and no canonical, inventory, media, filesystem, or public-network writes occurred.",
    "nextAction": "Seek retained broadcast provenance, a technical tag, or curator testimony before adding aired-master, B-roll, setlist-item, or recording-version edges; preserve the current inferred state until then."
  }
];
