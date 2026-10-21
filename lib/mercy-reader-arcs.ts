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
  representationId: string; label: string; relativePath: string; dateToken: string; observationState: string; provenanceState: string; logicalRepresentationId: string; matchState: string; unresolvedReason: string; caution: string;
};

export type MercyArcStep = {
  stepId: string; year: number; lane: string; label: string; dateStart: string; dateEnd: string; datePrecision: string; dateRole: string; dateBasis: string; factType: string; assertion: string; confidence: number; state: string; place: string; sourceCount: number; sourceExcerpt: string; sourcePointers: MercyArcSourcePointer[]; representationIds: string[]; representations: MercyArcRepresentation[]; uncertainties: Array<{ detail?: string; kind?: string } | string>;
};

export type MercyReaderArc = {
  arcId: string; title: string; summary: string; state: string; years: number[]; steps: MercyArcStep[]; gaps: string[]; inputFingerprints: Record<string, string>; provenanceJobId: string; sourceSearchState: string; authorityBoundary: string; nextAction: string;
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
  }
];
