import './hero.css'

const Hero = () => (
    <div className={`intro_root home_root`}>
        <div className="relative p-8"/>
        <div className={"intro_intro intro_gridLineTop"}>
            <svg
                aria-hidden="true"
                className="intro_gridCircle"
                data-side="top-left"
                fill="none"
                height={75}
                viewBox="0 0 75 75"
                width={75}>
                <path
                    d="M74 37.5C74 30.281 71.8593 23.2241 67.8486 17.2217C63.838 11.2193 58.1375 6.541 51.4679 3.7784C44.7984 1.0158 37.4595 0.292977 30.3792 1.70134C23.2989 3.1097 16.7952 6.58599 11.6906 11.6906C6.58599 16.7952 3.1097 23.2989 1.70134 30.3792C0.292977 37.4595 1.0158 44.7984 3.7784 51.4679C6.541 58.1375 11.2193 63.838 17.2217 67.8486C23.2241 71.8593 30.281 74 37.5 74"
                    opacity="var(--line-opacity)"
                    stroke="url(#paint0_angular_25_2122)"
                    strokeDasharray="2 2"
                />
                <defs>
                    <radialGradient
                        cx={0}
                        cy={0}
                        gradientTransform="translate(37.5 37.5) rotate(90) scale(36.5)"
                        gradientUnits="userSpaceOnUse"
                        id="paint0_angular_25_2122"
                        r={1}
                    >
                        <stop/>
                        <stop offset={0.5} stopOpacity={0.34}/>
                        <stop offset={1}/>
                    </radialGradient>
                </defs>
            </svg>
            <div aria-hidden="true" className="intro_gridContainerLine" data-fade="true" data-offset="true"
                 data-side="left"/>
            <h1 className={`intro_title intro_gridLineBottom`}>
                Unleash the Power of Convolutional Networks
                <svg
                    aria-hidden="true"
                    className={`intro_gridCircle`}
                    data-side="bottom-right"
                    fill="none"
                    height={75}
                    viewBox="0 0 75 75"
                    width={75}>
                    <path
                        d="M74 37.5A36.5 36.5 0 1 0 37.5 74"
                        opacity="var(--line-opacity)"
                        stroke="url(#a)"
                        strokeDasharray="2 2"
                    />
                    <defs>
                        <radialGradient
                            cx={0}
                            cy={0}
                            gradientTransform="rotate(90 0 37.5) scale(36.5)"
                            gradientUnits="userSpaceOnUse"
                            id="a"
                            r={1}
                        >
                            <stop/>
                            <stop offset={0.5} stopOpacity={0.34}/>
                            <stop offset={1}/>
                        </radialGradient>
                    </defs>
                </svg>
            </h1>
            <div className="intro_subtitle intro_gridLineBottom">
                <p>
                    Revolutionize your understanding of image processing with <strong>convolutional
                    networks</strong>.
                </p>
            </div>
            <div aria-hidden="true" className="intro_gridContainerLine" data-fade="true" data-offset="true"
                 data-side="right"/>
        </div>
    </div>
)

export default Hero;
