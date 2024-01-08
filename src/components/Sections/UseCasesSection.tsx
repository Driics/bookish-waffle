"use client";

import {ReactNode, useRef} from "react";
import {getAnimation, INITIAL_BOTTOM} from "@/lib/animations";
import {domAnimation, LazyMotion, m, useInView} from 'framer-motion'
import Panel from "@/components/Panels/Panel";
import SectionContainer from "@/components/Layouts/SectionContainer";

interface UseCase {
    img?: string
    title: string
    description: string
    icon?: string
    cta?: {
        label?: string
        link: string
        isDisabled?: boolean
    }
}

interface Props {
    title: string | ReactNode
    paragraph: string | ReactNode
    useCases: UseCase[]
}

const UseCase = ({
                     useCase,
                     index,
                     isInView,
                 }: {
    useCase: UseCase
    index: number
    isInView: boolean
}) => {
    const initial = INITIAL_BOTTOM
    const animate = getAnimation({delay: index * 0.1})

    return (
        <m.div initial={initial} animate={isInView ? animate : initial} className="flex">
            <Panel outerClassName="w-full" innerClassName="p-4 md:p-8 h-full !bg-[#111]">
                <div className="h-full flex flex-col gap-4 items-start justify-between">
                    <div className="prose">
                        <div className="flex items-center gap-2">
                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d={useCase.icon} fillRule="evenodd" fill="hsl(var(--accent))"/>
                            </svg>
                            <h4 className="text-base sm:text-lg m-0">{useCase.title}</h4>
                        </div>
                        <p className="text-sm text-secondary mt-2">{useCase.description}</p>
                    </div>
                </div>
            </Panel>
        </m.div>
    )
}

const UseCasesSection = ({title, paragraph, useCases}: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {margin: '-25%', once: true})

    return (
        <LazyMotion features={domAnimation}>
            <SectionContainer className="flex flex-col gap-12 font-sans">
                <div className="flex flex-col text-center gap-4 items-center justify-center">
                    <h2 className="heading-gradient font-bold text-2xl sm:text-3xl xl:text-4xl">{title}</h2>
                    <p className="mx-auto text-secondary lg:w-1/2">{paragraph}</p>
                </div>
                <div
                    ref={ref}
                    className="relative mx-auto w-full max-w-5xl grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
                >
                    {useCases.map((useCase, i) => {
                        return <UseCase useCase={useCase} isInView={isInView} index={i} key={useCase.title}/>
                    })}
                </div>
            </SectionContainer>
        </LazyMotion>
    )
}

export default UseCasesSection;