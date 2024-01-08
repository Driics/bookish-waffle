'use client'

import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/svg-arrow.css';

// Table.tsx
import React from 'react';
import Tippy from "@tippyjs/react";
import Image from "next/image";

import '@/css/main.css'

interface TableProps {
    data: Record<string, string>;
}

const Table: React.FC<TableProps> = ({data}) => {
    return (
        <>
        <div className="relative">
            <table className="w-full about-table">
                <tbody>
                {Object.entries(data).map(([key, value]) => (
                    <tr key={key}>
                        <td className="pb-3 pr-3 text-xs align-baseline text-secondary">{key}:</td>
                        <td className="pb-3 text-xs font-bold">{value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <div className="mt-3 -mx-6 -mb-6">
            <Tippy animation={"fade"} content={
                <div className="tippy-follow">
                    <div className="text">
                        By following, you will receive notifications on the website about the <span>viewership statistics and their updates, as well as about the start of matches</span> of
                        this tournament.
                    </div>
                    <a href="https://escharts.com/profile/notifications?type=tournaments-games" className="link">
                        <Image src="https://escharts.com/icons/settings-fill.svg" width={0} height={0} alt="settings"/>
                    </a>
                </div>
            }  interactive={true} arrow={true}>
            <button
                className={"btn green-transparent md !cursor-pointer x-cloak-hidden !rounded-t-none !w-full bg-green text-green"}>Follow
            </button>
        </Tippy>
        </div>
</>
)
    ;
};

export default Table;
