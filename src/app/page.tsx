import DefaultLayout from '@/components/Layouts/Default'
import Hero from "@/components/Hero/Hero";
import '@/components/Hero/hero.css'
import SectionContainer from "@/components/Layouts/SectionContainer";
import React from "react";
import Marquee from "@/components/Marquee/Marquee";
import dynamic from "next/dynamic";
import TimedTabsSection from "@/components/Sections/TimedTabsSection";

import pageData from "@/data/pageData/mainPageData"

const ImageCarousel = dynamic(() => import("@/components/Carousels/ImageCarousel"), {ssr: false})
const UseCasesSection = dynamic(() => import('@/components/Sections/UseCasesSection'))

const Index = () => (
    <DefaultLayout>
        <Hero/>
        <SectionContainer className="pt-16 pb-0">
            <ImageCarousel
                content={pageData.generalInfoSection}
                altTabView={false}
            />
        </SectionContainer>
        <UseCasesSection {...pageData.useCasesSection} />
        <TimedTabsSection {...pageData.codeSection}/>
        <Marquee/>
    </DefaultLayout>
)

export default Index;