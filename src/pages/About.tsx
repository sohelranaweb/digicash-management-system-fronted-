// import Corporate from "@/components/modules/About/Corporate";
// import Publications from "@/components/modules/About/Publications";
// import Story from "@/components/modules/About/Story";

// function About() {
//   return (
//     <div>
//       <Story></Story>
//       <Corporate></Corporate>
//       <Publications></Publications>
//     </div>
//   );
// }

// export default About;

"use client";

import { useEffect, useState } from "react";
import Corporate from "@/components/modules/About/Corporate";
import Publications from "@/components/modules/About/Publications";

import AboutBanner from "@/components/modules/About/AboutBanner";
import CoreValue from "@/components/modules/About/CoreValue";

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate API fetch delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Pass loading state to children */}
      <AboutBanner></AboutBanner>
      <hr />
      <CoreValue></CoreValue>
      <hr />
      {/* <Story loading={loading} /> */}
      <Corporate loading={loading} />
      <hr />
      <Publications loading={loading} />
    </div>
  );
}

export default About;
