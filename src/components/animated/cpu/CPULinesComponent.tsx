'use client';

import * as React from "react"
import {SVGProps} from "react"
import {motion} from "framer-motion";

export const CPULinesComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        fill="none"
        height={264}
        role="img"
        viewBox="0 0 891 264"
        width={891}
        data-lines="true"
        aria-label="A bunch of connecting lines that form into the CPU, with the text Powered By on top of the the CPU. Gradient lines are animating along the drawn lines, dissolving into the CPU in the center."
        {...props}
    >
        <motion.path
            d="M388 96L388 68C388 65.7909 386.209 64 384 64L310 64"
            stroke="var(--geist-foreground)"
            strokeOpacity={0.1}
            pathLength={1}
            strokeDashoffset="0px"
            initial={{strokeDasharray: "0px 1px"}}
            animate={{strokeDasharray: "1px 1px"}}
        />
        <motion.path
            d="M349 150L73 150C70.7909 150 69 151.791 69 154L69 174"
            stroke="var(--geist-foreground)"
            strokeOpacity={0.1}
            pathLength={1}
            initial={{strokeDasharray: "0px 1px"}}
            animate={{strokeDasharray: "1px 1px"}}
        />
        <g>
            <path
                d="M547 130L822 130C824.209 130 826 131.791 826 134L826 264"
                stroke="var(--geist-foreground)"
                strokeOpacity={0.1}
                pathLength={1}
                strokeDashoffset="0px"
                strokeDasharray="1px 1px"
            />
            <path
                d="M547 130L822 130C824.209 130 826 131.791 826 134L826 264"
                stroke="url(#orange-pulse-1)"
                strokeWidth={2}
            />
        </g>
        <g>
            <path
                d="M349 130L5.00002 130C2.79088 130 1.00001 131.791 1.00001 134L1.00001 264"
                stroke="var(--geist-foreground)"
                strokeOpacity={0.1}
                pathLength={1}
                strokeDashoffset="0px"
                strokeDasharray="1px 1px"
            />
            <path
                d="M349 130L5.00002 130C2.79088 130 1.00001 131.791 1.00001 134L1.00001 264"
                stroke="url(#blue-pulse-1)"
                strokeLinecap="round"
                strokeWidth={2}
            />
        </g>
        <g>
            <path
                d="M547 150L633 150C635.209 150 637 151.791 637 154L637 236C637 238.209 635.209 240 633 240L488 240C485.791 240 484 241.791 484 244L484 264"
                stroke="var(--geist-foreground)"
                strokeOpacity={0.1}
                pathLength={1}
                strokeDashoffset="0px"
                strokeDasharray="1px 1px"
            />
            <path
                d="M547 150L633 150C635.209 150 637 151.791 637 154L637 236C637 238.209 635.209 240 633 240L488 240C485.791 240 484 241.791 484 244L484 264"
                stroke="url(#pink-pulse-2)"
                strokeLinecap="round"
                strokeWidth={2}
            />
        </g>
        <g>
            <path
                d="M388 184L388 194C388 196.209 386.209 198 384 198L77 198C74.7909 198 73 199.791 73 202L73 264"
                stroke="var(--geist-foreground)"
                strokeOpacity={0.1}
                pathLength={1}
                strokeDashoffset="0px"
                strokeDasharray="1px 1px"
            />
            <path
                d="M388 184L388 194C388 196.209 386.209 198 384 198L77 198C74.7909 198 73 199.791 73 202L73 264"
                stroke="url(#blue-pulse-2)"
                strokeLinecap="round"
                strokeWidth={2}
            />
        </g>
        <path
            d="M412 96L412 0"
            stroke="url(#paint0_linear_341_27683)"
            strokeOpacity={0.1}
            pathLength={1}
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
        />
        <g>
            <path
                d="M412 263.5L412 184"
                stroke="var(--geist-foreground)"
                strokeOpacity={0.1}
                pathLength={1}
                strokeDashoffset="0px"
                strokeDasharray="1px 1px"
                style={{
                    transform: "scale(-1)",
                    transformOrigin: "412px 223.75px",
                }}
                transformOrigin="412px 223.75px"
            />
            <path
                d="M412 263.5L412 184"
                stroke="url(#pink-pulse-1)"
                strokeLinecap="round"
                strokeWidth={2}
            />
        </g>
        <g>
            <path
                d="M508 96L508 88C508 85.7909 509.791 84 512 84L886 84C888.209 84 890 85.7909 890 88L890 264"
                stroke="var(--geist-foreground)"
                strokeOpacity={0.1}
                pathLength={1}
                strokeDashoffset="0px"
                strokeDasharray="1px 1px"
            />
            <path
                d="M508 96L508 88C508 85.7909 509.791 84 512 84L886 84C888.209 84 890 85.7909 890 88L890 264"
                stroke="url(#orange-pulse-2)"
                strokeWidth={2}
            />
        </g>
        <path
            d="M436 96L436 0"
            stroke="url(#paint1_linear_341_27683)"
            strokeOpacity={0.1}
            pathLength={1}
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
        />
        <path
            d="M436 214L436 184"
            stroke="var(--geist-foreground)"
            strokeOpacity={0.1}
            pathLength={1}
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
            style={{
                transform: "scale(-1)",
                transformOrigin: "436px 199px",
            }}
            transformOrigin="436px 199px"
        />
        <path
            d="M460 96L460 64"
            stroke="var(--geist-foreground)"
            strokeOpacity={0.1}
            pathLength={1}
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
        />
        <path
            d="M460 239L460 184"
            stroke="var(--geist-foreground)"
            strokeOpacity={0.1}
            pathLength={1}
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
            style={{
                transform: "scale(-1)",
                transformOrigin: "460px 211.5px",
            }}
            transformOrigin="460px 211.5px"
        />
        <path
            d="M484 96L484 24C484 21.7909 485.791 20 488 20L554 20"
            stroke="url(#paint2_linear_341_27683)"
            strokeOpacity={0.1}
            pathLength={1}
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
        />
        <path
            d="M484 184L484 210C484 212.209 485.791 214 488 214L560 214"
            stroke="var(--geist-foreground)"
            strokeOpacity={0.1}
            pathLength={1}
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
        />
        <path
            d="M508 184L508 193C508 195.209 509.791 197 512 197L560 197"
            stroke="var(--geist-foreground)"
            strokeOpacity={0.1}
            pathLength={1}
            strokeDashoffset="0px"
            strokeDasharray="1px 1px"
        />
        <circle cx={460} cy={64} fill="var(--geist-background)" r={4} opacity={1}/>
        <circle
            cx={460}
            cy={64}
            r={3.5}
            stroke="var(--geist-foreground)"
            strokeOpacity={0.1}
            opacity={1}
        />
        <circle cx={308} cy={64} fill="var(--geist-background)" r={4} opacity={1}/>
        <circle
            cx={308}
            cy={64}
            r={3.5}
            stroke="var(--geist-foreground)"
            strokeOpacity={0.1}
            opacity={1}
        />
        <circle cx={69} cy={173} fill="var(--geist-background)" r={4} opacity={1}/>
        <circle
            cx={69}
            cy={173}
            r={3.5}
            stroke="var(--geist-foreground)"
            strokeOpacity={0.1}
            opacity={1}
        />
        <circle
            cx={436}
            cy={214}
            fill="var(--geist-background)"
            r={4}
            opacity={1}
        />
        <circle
            cx={436}
            cy={214}
            r={3.5}
            stroke="var(--geist-foreground)"
            strokeOpacity={0.1}
            opacity={1}
        />
        <circle
            cx={460}
            cy={240}
            fill="var(--geist-background)"
            r={4}
            opacity={1}
        />
        <circle
            cx={460}
            cy={240}
            r={3.5}
            stroke="var(--geist-foreground)"
            strokeOpacity={0.1}
            opacity={1}
        />
        <circle
            cx={560}
            cy={214}
            fill="var(--geist-background)"
            r={4}
            opacity={1}
        />
        <circle
            cx={560}
            cy={214}
            r={3.5}
            stroke="var(--geist-foreground)"
            strokeOpacity={0.1}
            opacity={1}
        />
        <circle
            cx={560}
            cy={197}
            fill="var(--geist-background)"
            r={4}
            opacity={1}
        />
        <circle
            cx={560}
            cy={197}
            r={3.5}
            stroke="var(--geist-foreground)"
            strokeOpacity={0.1}
            opacity={1}
        />
        <defs>
            <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_341_27683"
                x1={412.5}
                x2={412.5}
                y1={-3.27835e-8}
                y2={96}
            >
                <stop stopOpacity={0}/>
                <stop offset={1}/>
            </linearGradient>
            <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint1_linear_341_27683"
                x1={436.5}
                x2={436.5}
                y1={-3.27835e-8}
                y2={96}
            >
                <stop stopOpacity={0}/>
                <stop offset={1}/>
            </linearGradient>
            <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint2_linear_341_27683"
                x1={554}
                x2={484}
                y1={20}
                y2={96}
            >
                <stop stopOpacity={0}/>
                <stop offset={1}/>
            </linearGradient>
            <motion.linearGradient
                gradientUnits="userSpaceOnUse"
                id="blue-pulse-1"
                animate={{
                    x1: [83, 400],
                    x2: [83, 350],
                    y1: [320, 83],
                    y2: [415, 133.75]
                }}
                transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 1.4,
                    delay: .5
                }}
            >
                <stop stopColor="#2EB9DF" stopOpacity={0}/>
                <stop offset={0.05} stopColor="#2EB9DF"/>
                <stop offset={1} stopColor="#2EB9DF" stopOpacity={0}/>
            </motion.linearGradient>
            <motion.linearGradient
                gradientUnits="userSpaceOnUse"
                id="blue-pulse-2"
                animate={{
                    x1: [83, 400],
                    x2: [83, 350],
                    y1: [320, 83],
                    y2: [415, 133.75]
                }}
                transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 1.4,
                    delay: .5
                }}
            >
                <stop stopColor="#2EB9DF" stopOpacity={0}/>
                <stop offset={0.05} stopColor="#2EB9DF"/>
                <stop offset={1} stopColor="#2EB9DF" stopOpacity={0}/>
            </motion.linearGradient>
            <motion.linearGradient
                gradientUnits="userSpaceOnUse"
                id="pink-pulse-1"
                animate={{
                    x1: [412, 400],
                    y1: [264, 83],
                    x2: [412, 350],
                    y2: [304, 133.75]
                }}
                transition={{
                    duration: .9,
                    repeat: Infinity,
                    repeatDelay: 1.9,
                    delay: .3
                }}
            >
                <stop stopColor="#FF4A81" stopOpacity={0}/>
                <stop offset={0.03} stopColor="#FF4A81"/>
                <stop offset={0.27} stopColor="#DF6CF6"/>
                <stop offset={1} stopColor="#0196FF" stopOpacity={0}/>
            </motion.linearGradient>
            <motion.linearGradient
                gradientUnits="userSpaceOnUse"
                id="pink-pulse-2"
                animate={{
                    x1: [490, 490, 480, 478, 475],
                    x2: [490, 479, 488],
                    y1: [266, 120],
                    y2: [284, 150]
                }}
                transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 1.8,
                    delay: .5
                }}
            >
                <stop stopColor="#FF4A81" stopOpacity={0}/>
                <stop offset={0.0564843} stopColor="#FF4A81"/>
                <stop offset={0.4616} stopColor="#DF6CF6"/>
                <stop offset={1} stopColor="#0196FF" stopOpacity={0}/>
            </motion.linearGradient>
            <motion.linearGradient
                gradientUnits="userSpaceOnUse"
                id="orange-pulse-1"
                animate={{
                    x1: [826, 360],
                    x2: [826, 400],
                    y1: [270, 130],
                    y2: [340, 170]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1.8,
                    delay: .6
                }}
            >
                <stop stopColor="#FF7432" stopOpacity={0}/>
                <stop offset={0.0550784} stopColor="#FF7432"/>
                <stop offset={0.373284} stopColor="#F7CC4B"/>
                <stop offset={1} stopColor="#F7CC4B" stopOpacity={0}/>
            </motion.linearGradient>
            <motion.linearGradient
                gradientUnits="userSpaceOnUse"
                id="orange-pulse-2"
                animate={{
                    x1: [868, 300],
                    x2: [868, 400],
                    y1: [280, 140],
                    y2: [440, 180]
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: .9
                }}
            >
                <stop stopColor="#FF7432" stopOpacity={0}/>
                <stop offset={0.0531089} stopColor="#FF7432"/>
                <stop offset={0.415114} stopColor="#F7CC4B"/>
                <stop offset={1} stopColor="#F7CC4B" stopOpacity={0}/>
            </motion.linearGradient>
        </defs>
    </svg>
);
