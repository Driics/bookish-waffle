import * as React from "react";
import {SVGProps} from "react";

const ImageLarge = (props: SVGProps<SVGSVGElement>) => (
    <svg
        data-fill="true"
        fill="none"
        height={88}
        viewBox="0 0 184 88"
        width={184}
        {...props}
    >
        <circle cx={174} cy={8.5} fill="#000" opacity={0.2} r={8}/>
        <path
            d="m36.586 4.914-36 36A2 2 0 0 0 0 42.328V85.5a2 2 0 0 0 2 2h180a2 2 0 0 0 2-2V50.828c0-1.781-2.154-2.674-3.414-1.414l-1 1a2 2 0 0 0-.586 1.414v7.344a2 2 0 0 1-.586 1.414l-.828.828a2 2 0 0 1-1.414.586h-10.844a2 2 0 0 0-1.414.586l-8 8a2 2 0 0 1-2.828 0l-19.172-19.172a2 2 0 0 0-2.828 0l-3.172 3.172a2 2 0 0 1-2.828 0L119 48.5 90.414 19.914a2 2 0 0 0-2.828 0L72.414 35.086a2 2 0 0 1-2.828 0L39.414 4.914a2 2 0 0 0-2.828 0Z"
            fill="url(#a)"
        />
        <defs>
            <linearGradient
                gradientUnits="userSpaceOnUse"
                id="a"
                x1={92}
                x2={92}
                y1={7.5}
                y2={87.5}
            >
                <stop stopOpacity={0.1}/>
                <stop offset={1} stopOpacity={0.2}/>
            </linearGradient>
        </defs>
    </svg>
);
export default ImageLarge;