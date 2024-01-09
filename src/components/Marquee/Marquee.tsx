"use client"

import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";

import styles from './Marquee.module.css'

const Marquee = () => (
    <div
        className="sticky bottom-0 left-0 right-0 z-20 flex items-center w-full border-t md:h-16 bg-body border-card sm-max:flex-col">
        <div className="flex items-center w-full h-full mx-auto max-w-screen-3xl md:px-6 sm-max:h-12">
            <div
                className="flex items-center h-full px-3 border-r text-secondary md:pr-14 border-card max-w-50 sm-max:text-sm">
                Компании использующие CNNs:
            </div>
            <div className="flex items-center flex-1 w-full h-full overflow-hidden">
                <div className={`flex items-center ${styles["imgTicker"]}`}>
                    <Image src={"/img/usedBy/sberbank.svg"} alt={"sberbank"} loading="lazy" decoding="async" width={50}
                           height={50}/>
                    <Image src={"/img/usedBy/adobe.svg"} alt={"adobe"} loading="lazy" decoding="async" width={50}
                           height={50}/>
                    <Image src={"/img/usedBy/yandex.svg"} alt={"yandex"} loading="lazy" decoding="async" width={50}
                           height={50}/>
                    <Image src={"/img/usedBy/amazon.svg"} alt={"amazon"} loading="lazy" decoding="async" width={50}
                           height={50}/>
                    <Image src={"/img/usedBy/apple.svg"} alt={"apple"} loading="lazy" decoding="async" width={30}
                           height={30}/>
                    <Image src={"/img/usedBy/facebook.svg"} alt={"facebook"} loading="lazy" decoding="async" width={50}
                           height={50}/>
                    <Image src={"/img/usedBy/google.svg"} alt={"google"} loading="lazy" decoding="async" width={50}
                           height={50}/>
                    <Image src={"/img/usedBy/ibm.svg"} alt={"ibm"} loading="lazy" decoding="async" width={50}
                           height={50}/>
                    <Image src={"/img/usedBy/intel.svg"} alt={"intel"} loading="lazy" decoding="async" width={50}
                           height={50}/>
                    <Image src={"/img/usedBy/microsoft.svg"} alt={"microsoft"} loading="lazy" decoding="async"
                           width={50}
                           height={50}/>
                    <Image src={"/img/usedBy/netflix.svg"} alt={"netflix"} loading="lazy" decoding="async" width={50}
                           height={50}/>
                    <Image src={"/img/usedBy/nvidia.svg"} alt={"nvidia"} loading="lazy" decoding="async" width={50}
                           height={50}/>
                    <Image src={"/img/usedBy/tesla.svg"} alt={"tesla"} loading="lazy" decoding="async" width={30}
                           height={30}/>
                    <Image src={"/img/usedBy/x.svg"} alt={"x"} loading="lazy" decoding="async" width={50}
                           height={50}/>

                </div>
            </div>
            <div className="flex items-center h-full pl-6 border-l border-card sm-max:hidden">
                <Button className="!px-5 font-bold" asChild>
                    <Link href={"/"} target="_blank">Начать изучать</Link>
                </Button>
            </div>
        </div>
        <Button className="md:hidden w-full !rounded-none !px-5 font-bold" asChild>
            <Link href={"/"} target="_blank">Начать изучать</Link>
        </Button>
    </div>
)

export default Marquee;