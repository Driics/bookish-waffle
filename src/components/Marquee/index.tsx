"use client"

import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";

const Marquee = () => {
    const reqSvgs = require.context('public/img/usedBy', true, /\.svg$/ )
    const paths = reqSvgs.keys()

    console.log(paths);

    return (<div
        className="sticky bottom-0 left-0 right-0 z-20 flex items-center w-full border-t md:h-16 bg-body border-card sm-max:flex-col">
        <div className="flex items-center w-full h-full mx-auto max-w-screen-3xl md:px-6 sm-max:h-12">
            <div
                className="flex items-center h-full px-3 border-r text-secondary md:pr-14 border-card max-w-50 sm-max:text-sm">
                Нам доверяют:
            </div>
            <div className="flex items-center flex-1 w-full h-full overflow-hidden">
                <div className="flex items-center img-ticker">
                    {paths.map((path: string) => (
                        <Image key={path} src={path} alt={"Test"} width={0} height={0}/>
                    ))}
                </div>
            </div>
            <div className="flex items-center h-full pl-6 border-l border-card sm-max:hidden">
                <Button className="!px-5" asChild>
                    <Link href={"/"} target="_blank">Станьте нашим клиентом</Link>
                </Button>
            </div>
        </div>
        <Button className="md:hidden w-full !rounded-none !px-5" asChild>
            <Link href={"/"} target="_blank">Станьте нашим клиентом</Link>
        </Button>
    </div>)
}

export default Marquee;