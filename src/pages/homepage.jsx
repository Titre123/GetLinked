import React from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/navbar/navbar";
import HeroSection from "../components/hero_section/hero_section";
import Introduction from "../components/intro/introduction";
import RulesAndRegulation from "../components/rules/rules";
import Attributes from "../components/attributes/attributes";
import FAQSection from "../components/FAQ_section/FAQ_section";
import TImeline from "../components/timeline/timeline";
import Winnings from "../components/winnings/winnings";
import PartnersSection from "../components/partners/partners";
import Privacy from "../components/privacy/privacy";
import FooterSection from "../components/footer/footer_section";

export default function Homepage() {
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-primary-400 max-w-screen">
      <section className="h-screen overflow-hidden">
        <div className="Navbar">
          <div className="mx-auto container px-6 xl:max-w-[1280px]">
            <Navbar />
          </div>
          <hr className="w-screen h-[0px] border border-white border-opacity-20" />
        </div>
        <div>
          <div className="HeroSection container mx-auto px-6 xl:max-w-[1280px]">
            <HeroSection />
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
        <hr className="w-screen h-[0px] border-white border border-opacity-20" />
        <div className="mx-auto container px-6 xl:max-w-[1280px]">
          <Introduction />
        </div>
        <hr className="w-screen h-[0px] border-white border border-opacity-20" />
        <div className="mx-auto container px-6 xl:max-w-[1280px]">
          <RulesAndRegulation />
        </div>
        <hr className="w-screen h-[0px] border-white border border-opacity-20" />
      </section>
      <section className="overflow-hidden">
        <div className="mx-auto container px-6 xl:max-w-[1280px]">
          <Attributes />
        </div>
        <hr className="w-screen h-[0px] border-white border border-opacity-20" />
      </section>
      <section className="overflow-hidden">
        <div className="mx-auto container px-6 xl:max-w-[1280px]">
          <FAQSection />
        </div>
        <hr className="w-screen h-[0px] border-white border border-opacity-20" />
      </section>
      <section className="overflow-hidden">
        <div className="mx-auto container px-6 xl:max-w-[1280px]">
          <TImeline />
        </div>
        <hr className="w-screen h-[0px] border-white border border-opacity-20" />
      </section>
      <section className="overflow-hidden lg:h-[600px]">
        <div className="mx-auto container px-6 xl:max-w-[1280px] lg:h-full">
          <Winnings />
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="mx-auto container px-6 xl:max-w-[1280px] lg:h-full">
          <PartnersSection />
        </div>
        <hr className="w-screen h-[0px] border-white border border-opacity-20" />
      </section>
      <section className="overflow-hidden">
        <div className="mx-auto container px-6 xl:max-w-[1280px] lg:h-full">
          <Privacy />
        </div>
      </section>
      <footer className="overflow-hidden bg-gray-900">
        <div className="mx-auto container px-6 xl:max-w-[1280px] h-full ">
          <FooterSection />
        </div>
      </footer>
    </div>
  );
}
