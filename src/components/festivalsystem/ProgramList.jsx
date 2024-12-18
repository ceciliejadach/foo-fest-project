"use client";
import React, { useState, useEffect } from "react";
import BandCard from "@/components/festivalsystem/BandCard";
import { motion } from "framer-motion";
import Headline from "@/components/global/Headline";
import MusicRune from "@/img/svg/music_rune.svg";

//font
import { Caesar_Dressing } from "next/font/google";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function ProgramList({ mergedArray, days }) {
  const [selectedDay, setSelectedDay] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // useEffect bruges her, så hver gang siden indlæses, så vises de artister der spiller idag
  useEffect(() => {
    const today = new Date().toLocaleDateString("en", { weekday: "short" }).toLowerCase();
    setSelectedDay(today);

    // Loading Animation
    if (mergedArray) {
      setIsLoading(false);
    }
  }, [mergedArray]);

  // Opdaterer den valgte dag
  const filterActsByDay = (day) => {
    setSelectedDay(day);
  };

  //Fået hjælp af tutorer til at sortere bands efter tid
  // Funktionen starter med at filtrerer ud fra scene og dag
  // Sorterer herefter "bands" ud fra sammenlignign af starttidspunkterne
  const sortedByTime = (scene) => {
    return mergedArray
      .filter((band) => band.scene === scene && band.day === selectedDay)
      .sort((a, b) => {
        const aTime = new Date(`1970-01-01T${a.eventInfo.start}`);
        const bTime = new Date(`1970-01-01T${b.eventInfo.start}`);

        return aTime.getTime() - bTime.getTime();
      });
  };

  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} animate={{ y: -40 }}>
      <>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div className="mt-24 mb-10 pl-4 ">
              <Headline src={MusicRune} text="PROGRAM" size="text-5xl md:text-6xl" width={40} height={40} />
            </div>
            <div className="flex justify-center flex-wrap my-4 gap-5">
              {days.map((day) => (
                <button key={day} className={`${selectedDay === day ? "bg-gradient-to-r from-customPink via-customRed to-customOrange text-white w-32 h-10 rounded-sm" : "  w-32 h-10 bg-gradient-to-r from-customPink via-customRed to-customOrange text-white p-[1.5px] rounded-sm"} `} onClick={() => filterActsByDay(day)}>
                  <span className={`${selectedDay === day ? "bg-transparent" : "bg-customBlack h-full w-full block "} flex justify-center items-center `}>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                </button>
              ))}
            </div>
            <section className="p-2 md:px-6 md:py-12 z-0">
              <div className="grid md:grid-cols-[.5fr_1fr] mb-20">
                <div className="sticky top-[120px] md:top-28 self-start z-10 bg-gradient-to-bl from-customBlack to-transparent w-fit px-2 py-2">
                  <h2 className={`${ceasarDressing.className} text-3xl md:text-4xl`}>MIDGARD</h2>
                </div>
                <div className="grid grid-cols-2 gap-4 ">
                  {/* Vi mapper med sortedByTime istedet for newArray (filtreringen sker i sortedByTime istedt for her) */}
                  {sortedByTime("Midgard").map((band) => (
                    <BandCard slug={band.slug} logo={band.logo} key={band.name} name={band.name} genre={band.genre} start={band.eventInfo.start} end={band.eventInfo.end} day={band.day} />
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-[.5fr_1fr] mb-20">
                <div className="sticky top-[120px] md:top-28 self-start z-10 bg-gradient-to-bl from-customBlack to-transparent w-fit px-2 py-2">
                  <h2 className={`${ceasarDressing.className}  text-3xl md:text-4xl`}>VANAHEIM</h2>
                </div>
                <div className="grid grid-cols-2 gap-4 ">
                  {sortedByTime("Vanaheim").map((band) => (
                    <BandCard slug={band.slug} logo={band.logo} key={band.name} name={band.name} genre={band.genre} start={band.eventInfo.start} end={band.eventInfo.end} day={band.day} />
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-[.5fr_1fr] mb-20">
                <div className="sticky top-[120px] md:top-28 self-start z-10 bg-gradient-to-bl from-customBlack to-transparent w-fit px-2 py-2">
                  <h2 className={`${ceasarDressing.className}  text-3xl md:text-4xl`}>JOTUNHEIM</h2>
                </div>
                <div className="grid grid-cols-2 gap-4 ">
                  {sortedByTime("Jotunheim").map((band) => (
                    <BandCard slug={band.slug} logo={band.logo} key={band.name} name={band.name} genre={band.genre} start={band.eventInfo.start} end={band.eventInfo.end} day={band.day} logoCredits={band.logoCredits} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}
      </>
    </motion.section>
  );
}

export default ProgramList;
