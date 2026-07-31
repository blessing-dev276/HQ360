import coverReveal from "@/assets/launch-cover-reveal.mp4.asset.json";
import coverFront from "@/assets/launch-cover-front.jpg.asset.json";
import coverBack from "@/assets/launch-cover-back.webp.asset.json";
import bookSnow from "@/assets/launch-book-snow.jpg.asset.json";
import authorTable1 from "@/assets/launch-author-table-1.jpg.asset.json";
import authorTable2 from "@/assets/launch-author-table-2.jpg.asset.json";
import venue from "@/assets/launch-venue.jpg.asset.json";
import group from "@/assets/launch-group.jpg.asset.json";
import guests from "@/assets/launch-guests.jpg.asset.json";
import speech from "@/assets/launch-speech.jpg.asset.json";
import signingDesk from "@/assets/launch-signing-desk.jpg.asset.json";
import trioTable from "@/assets/launch-trio-table.jpg.asset.json";
import familyBanner from "@/assets/launch-family-banner.jpg.asset.json";
import readersThree from "@/assets/launch-readers-three.jpg.asset.json";
import familyFour from "@/assets/launch-family-four.jpg.asset.json";
import windowDisplay from "@/assets/launch-window-display.jpg.asset.json";
import windowClose from "@/assets/launch-window-close.jpg.asset.json";
import groupWide from "@/assets/launch-group-wide.jpg.asset.json";

export const LAUNCH = {
  author: "Sanman Thapa",
  book: "From the Window: The City of What Ifs",
  publisher: "Arti Facts Publishing",
  intro:
    "A live launch day for Sanman Thapa, built around signed copies, a full room and a cover reveal film. Photographs and video from the event.",
  video: {
    src: coverReveal.url,
    title: "Cover reveal film for From the Window: The City of What Ifs",
  },
};

export const LAUNCH_COVERS = [
  {
    src: coverFront.url,
    alt: "Front cover of From the Window: The City of What Ifs by Sanman Thapa",
    caption: "Front cover",
  },
  {
    src: coverBack.url,
    alt: "Back cover copy for From the Window: The City of What Ifs",
    caption: "Back cover",
  },
  {
    src: bookSnow.url,
    alt: "Printed copy of the book standing in snow",
    caption: "First printed copy",
  },
];

export const LAUNCH_GALLERY = [
  {
    src: group.url,
    alt: "Guests holding copies of the books beside the Arti Facts Publishing banner",
    caption: "The room at the signing",
    wide: true,
  },
  {
    src: speech.url,
    alt: "Sanman Thapa speaking into a microphone at the launch event",
    caption: "Opening remarks",
  },
  {
    src: authorTable1.url,
    alt: "Sanman Thapa at the signing table with stacked copies of both titles",
    caption: "Signing table",
  },
  {
    src: authorTable2.url,
    alt: "Sanman Thapa holding a copy of From the Window: The City of What Ifs",
    caption: "Holding the new title",
  },
  {
    src: guests.url,
    alt: "Two guests seated by the cafe window during the launch",
    caption: "Guests at the venue",
  },
  {
    src: venue.url,
    alt: "Meet the author signage outside the cafe hosting the launch",
    caption: "Street level signage",
  },
];
