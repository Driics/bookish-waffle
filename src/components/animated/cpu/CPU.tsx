'use client'

import "@/components/animated/cpu/cpu.css"
import MobileLines from 'public/img/mobile_lines.svg'
import {CPULinesComponent} from "@/components/animated/cpu/CPULinesComponent";
import {useRef} from "react";

export const CPU: React.FC = () => {

    return (
        <div className="foundation_root">
            <div className="foundation_main">
                <div className="foundation_illustration stack" style={{
                    "--stack-flex": "initial",
                    "--stack-direction": "column",
                    "--stack-align": "center",
                    "--stack-justify": "center",
                    "--stack-padding": "0px",
                    "--stack-gap": "0px",
                }}>
                    <CPULinesComponent/>
                    <MobileLines width={400} height={312}/>
                    <div
                        style={{
                            "--stack-flex": "initial",
                            "--stack-direction": "column",
                            "--stack-align": "center",
                            "--stack-justify": "center",
                            "--stack-padding": "0px",
                            "--stack-gap": "0px",
                        }}
                        className="foundation_cpu stack" aria-hidden={true}>
                        <div data-cpu-shine="true"></div>
                        <div data-connectors="true" data-side="left">
                            <span data-connector="true"></span>
                            <span data-connector="true"></span>
                        </div>
                        <div data-connectors="true" data-side="top">
                            <span data-connector="true"></span>
                            <span data-connector="true"></span>
                            <span data-connector="true"></span>
                            <span data-connector="true"></span>
                            <span data-connector="true"></span>
                            <span data-connector="true"></span>
                        </div>
                        <span data-text="true">Powered by</span>
                        <div data-connectors="true" data-side="bottom">
                            <span data-connector="true"></span>
                            <span data-connector="true"></span>
                            <span data-connector="true"></span>
                            <span data-connector="true"></span>
                            <span data-connector="true"></span>
                            <span data-connector="true"></span>
                        </div>
                        <div data-connectors="true" data-side="right">
                            <span data-connector="true"></span>
                            <span data-connector="true"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}