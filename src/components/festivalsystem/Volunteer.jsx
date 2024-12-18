"use client";
import Headline from "@/components/global/Headline";
import VolunteerRune from "@/img/svg/volunteer_rune.svg";
import Accordion from "@/components/festivalsystem/Accordion";
import { motion } from "framer-motion";

import Image from "next/image";
import RuneCircle from "@/img/svg/rune_circle.svg";

const Volunteer = () => {
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} animate={{ y: -40 }}>
      <section className="p-4 max-w-screen-xl mx-auto mt-32">
        <div className="grid md:grid-cols-2">
          <div>
            <Headline src={VolunteerRune} text="BLIV FRIVILLIG" size="text-5xl md:text-6xl" width={45} height={45} />
            <p className="pt-4 text-base md:text-lg">Har du lyst til at opleve festivalen på en helt unik måde? Så bliv en del af vores fantastiske hold af frivillige og vær med til at skabe en festival, der bringer musik og fællesskab sammen! Vi søger engagerede mennesker, der vil bidrage med deres tid og gode energi, og som samtidig ønsker en oplevelse udover det sædvanlige.</p>
          </div>
          <Image className="motion-safe:animate-[spin_50s_linear_infinite] place-self-center w-[300px] h-[300px]  mt-10" src={RuneCircle} alt="cirkel af runer der roterer" width={250} height={250} />
        </div>
        <div className="mt-14">
          <h2 className="font-bold text-xl md:text-3xl ">Ofte stillede spørgsmål</h2>
          <Accordion questionOne="Hvordan bliver jeg frivillig?" textOne="Ansøg alene eller med dine venner ved at skrive en mail til kontaktpersonen, som er knyttet til den specifikke frivillig rolle" questionTwo="Hvem kan blive frivillig på FooFest?" textTwo="Alle, der har lyst til at tage på festival, kan blive frivillige! Man skal blot være fyldt 15 år ved festivalens start." questionThree="Hvilke formål støtter jeg ved at være frivillig?" textThree="Din indsats som frivillig går udelukkende til at støtte gode formål." questionFour="Hvor mange timer skal jeg være frivillig?" textFour="Som frivillig skal du lægge en indsats på 32 timer fordelt over hele festivalperioden." MobileTextSize="text-xl" DesktoptextSize="text-2xl" />
        </div>
      </section>
    </motion.section>
  );
};

export default Volunteer;
