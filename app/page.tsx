"use client";

import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import TapFooter from "@/components/TapFooter";
import TapFounders from "@/components/TapFounders";
import TapRenewal from "@/components/TapRenewal";
import TapSupport from "@/components/TapSupport";
import TapWorks from "@/components/TapWorks";
import { ArrowRight, Leaf, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="flex  flex-col gap-8">
      <Hero />
      <Logos />
      <Services />
      <TapWorks />
      <div className="">
        <div className="w-full flex flex-col gap-12">
          <TapRenewal />
          {/* <TapFounders /> */}
          <TapSupport />
        </div>
      </div>
    </div>
  );
};

export default Home;
