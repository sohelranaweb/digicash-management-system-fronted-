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
import Story from "@/components/modules/About/Story";

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
      <Story loading={loading} />
      <Corporate loading={loading} />
      <Publications loading={loading} />
    </div>
  );
}

export default About;
