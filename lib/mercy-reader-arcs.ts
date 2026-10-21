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

export type MercyArcStep = {
  stepId: string; year: number; label: string; dateStart: string; dateEnd: string; datePrecision: string; dateRole: string; dateBasis: string; factType: string; assertion: string; confidence: number; state: string; place: string; sourceCount: number; sourceExcerpt: string; sourcePointers: MercyArcSourcePointer[]; uncertainties: Array<{ detail?: string; kind?: string } | string>;
};

export type MercyReaderArc = {
  arcId: string; title: string; summary: string; state: string; years: number[]; steps: MercyArcStep[]; gaps: string[]; inputFingerprints: Record<string, string>; workerJobId: string; sourceSearchState: string; authorityBoundary: string; nextAction: string;
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
        "uncertainties": []
      },
      {
        "stepId": "mercy.fact.ea26511de50d033f7e3f",
        "year": 1986,
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
        "uncertainties": []
      },
      {
        "stepId": "mercy.fact.caf970534db4f661c9f6",
        "year": 1986,
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
        "uncertainties": []
      },
      {
        "stepId": "mercy.core.fact.54fdcb9f29343bda0aeb",
        "year": 1987,
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
        "uncertainties": []
      },
      {
        "stepId": "mercy.arc.sean-penn.relationship-end-1989",
        "year": 1989,
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
    "workerJobId": "mercy-connection-worker-2026-10-21-sean-penn-material-girl-v1",
    "sourceSearchState": "unresolved",
    "authorityBoundary": "Derived arc projection only; source facts remain separately labelled and no canonical, inventory, media, filesystem, or public-network writes occurred.",
    "nextAction": "Resolve or preserve the first-meeting candidate through a new retained-source lane or curator testimony; do not infer it from the arc sequence."
  }
];
