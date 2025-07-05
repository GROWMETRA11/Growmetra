import React from "react";

import AboutHero from "./AboutHero";
import CoreValues from "./CoreValues";
import EdgeAndWhoWeServe from "./EdgeAndWhoWeServe";
import MisssionAndVission from "./MissionAndVission";
import Story from "./Story";
import Partnership from "./Partnership";
import WhatWeOffer from "./WhatWeOffer";

export default function AboutView() {
  return (
    <div>
           <AboutHero/>
           <Story/>
           <WhatWeOffer/>
           <MisssionAndVission/>
           <EdgeAndWhoWeServe/>
           <CoreValues/>
           <Partnership/>
    </div>
  );
}
