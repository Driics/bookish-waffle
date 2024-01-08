'use client';

import React, {PropsWithChildren, useRef} from 'react'
import {motion} from 'framer-motion'
import {cn} from "@/lib/utils";

interface Props {
    outerClassName?: string
    innerClassName?: string
    hasActiveOnHover?: boolean
    activeColor?: 'default' | 'brand'
    hasShimmer?: boolean
    hasInnerShimmer?: boolean
    shimmerFromColor?: string
    shimmerToColor?: string
    hasMotion?: boolean
}

const Panel = ({
                   outerClassName,
                   innerClassName,
                   hasActiveOnHover = false,
                   activeColor = 'default',
                   hasShimmer = false,
                   hasInnerShimmer = false,
                   shimmerFromColor,
                   shimmerToColor,
                   hasMotion = false,
                   children
               }: PropsWithChildren<Props>) => {
    const outerRef = useRef(null)
    const innerRef = useRef(null)
    const Component = hasMotion ? motion.div : 'div'
    const trackCursor = hasShimmer || hasInnerShimmer

    return (
        <Component ref={outerRef}
                   className={cn('relative rounded-xl bg-surface-100 bg-gradient-to-b from-border to-surface-200 p-px transition-all shadow-md', outerClassName)} {...(hasMotion ? {
            whileHover: 'hover',
            animate: 'initial'
        } : undefined)}>
            <div
                className={cn('relative z-10 w-full h-full rounded-xl bg-surface-100 overflow-hidden text-foreground-light', innerClassName)}>
                {children}
                <div
                    ref={innerRef}
                    className="absolute z-10 inset-0 w-full h-full pointer-events-none opacity-20"
                />
            </div>
        </Component>
    )
}

export default Panel