import React, { useState } from "react";
import LanguageGate from "@/components/proposal/LanguageGate";
import ProposalTranslator from "@/components/proposal/ProposalTranslator";
import StickyNav from "@/components/proposal/StickyNav";
import PdfExportButton from "@/components/proposal/PdfExportButton";
import WebflowMotion from "@/components/proposal/WebflowMotion";
import Section01Hero from "@/components/proposal/Section01Hero";
import Section02Apresentacao from "@/components/proposal/Section02Apresentacao";
import Section03ProvaSocial from "@/components/proposal/Section03ProvaSocial";
import Section04Experiencia from "@/components/proposal/Section04Experiencia";
import Section05PorQue from "@/components/proposal/Section05PorQue";
import Section06Beneficios from "@/components/proposal/Section06Beneficios";
import Section07Cronograma from "@/components/proposal/Section07Cronograma";
import Section08Layout from "@/components/proposal/Section08Layout";
import Section09Coquetel from "@/components/proposal/Section09Coquetel";
import Section10Comparativo from "@/components/proposal/Section10Comparativo";
import Section11Pacote from "@/components/proposal/Section11Pacote";
import Section12Depoimentos from "@/components/proposal/Section12Depoimentos";
import Section13ChamadaFinal from "@/components/proposal/Section13ChamadaFinal";
import Section14Roteiro from "@/components/proposal/Section14Roteiro";
import Section15Encerramento from "@/components/proposal/Section15Encerramento";

export default function Home() {
  const [language, setLanguage] = useState(null);

  if (!language) {
    return <LanguageGate onSelect={setLanguage} />;
  }

  return (
    <ProposalTranslator language={language}>
    <div id="proposal-lp" className="min-h-screen" data-language={language}>
      <WebflowMotion />
      <StickyNav />
      <PdfExportButton />
      <Section01Hero />
      <Section02Apresentacao />
      <Section03ProvaSocial />
      <Section04Experiencia />
      <Section05PorQue />
      <Section06Beneficios />
      <Section07Cronograma />
      <Section08Layout />
      <Section09Coquetel />
      <Section10Comparativo />
      <Section11Pacote />
      <Section12Depoimentos />
      <Section13ChamadaFinal />
      <Section14Roteiro />
      <Section15Encerramento />
    </div>
    </ProposalTranslator>
  );
}
