"use client";
import { useState, useEffect } from "react";
import LineUpCard from "@/components/festivalsystem/LineUpCard";

const LineUpList = ({ initialLineup }) => {
  const [bands, setBands] = useState(initialLineup);

  // Sortér bands alfabetisk efter navn
  useEffect(() => {
    const sortedBands = [...initialLineup].sort((a, b) => a.name.localeCompare(b.name));
    setBands(sortedBands);
  }, [initialLineup]);

  return (
    <section className="max-w-screen-xl mx-auto p-2 mb-10">
      <ul className="flex flex-wrap gap-8 justify-center items-center">
        {bands.map((band, index) => (
          <li key={index}>
            <LineUpCard key={index} slug={band.slug} logo={band.logo} name={band.name} bio={band.bio} start={band.start} end={band.end} scene={band.scene} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LineUpList;
