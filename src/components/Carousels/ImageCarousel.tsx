"use client"

import {usePathname} from 'next/navigation'
import React, {ReactNode, useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import ImageCarouselStyles from './ImageCarousel.module.css'

import Image from 'next/image'
import {useInView} from "framer-motion";
import {Tab, Tabs} from "@nextui-org/tabs";

interface Content {
    title: string
    label?: string
    img_url?: string
    text?: string | ReactNode
    cta?: string
    url?: string
    youtube_id?: string
}

interface ImageCarouselProps {
    content: Content[]
    footer?: React.ReactNode
    altTabView?: boolean
}

const ImageCarousel = (props: ImageCarouselProps) => {
    const sectionRef = useRef<any>(null)
    const isInView = useInView(sectionRef, {margin: '75%', once: true})
    // base path for images
    const basePath = usePathname()

    // store API swiper instance
    const [imageSwiper, setImageSwiper] = useState(undefined)
    const [swiperDetails, setSwiperDetails] = useState(undefined)

    const [imageSwiperActiveIndex, setImageSwiperActiveIndex] = useState(0)

    function handleImageSwiperNav(e: number) {
        setImageSwiperActiveIndex(e)
        // @ts-ignore
        imageSwiper.slideTo(e)
        // @ts-ignore
        swiperDetails.slideTo(e)
    }

    return (
        <div className="grid grid-cols-12" ref={sectionRef}>
            <div className="col-span-12 w-full lg:col-span-6">
                <div className="col-span-12 lg:col-span-7">
                    <div className={props.altTabView ? 'hidden' : 'block'}>
                        <Tabs
                            variant={props.altTabView ? 'underlined' : 'light'}
                            selectedKey={imageSwiperActiveIndex.toString()}
                            onSelectionChange={(id) => handleImageSwiperNav(Number(id))}
                            classNames={{
                                base: 'w-full justify-between space-y-4 mask-fadeout-right',
                                tabList: 'space-x-1 whitespace-nowrap !overflow-x-scroll max-w-min',
                                tab: 'border border-sm border-secondary font-bold'
                            }}
                        >
                            {props.content.map((content: Content, i) => {
                                return (
                                    <Tab
                                        key={i}
                                        title={content.label ? content.label : content.title}
                                        id={i.toString()}
                                    >
                                        <span></span>
                                    </Tab>
                                )
                            })}
                        </Tabs>
                    </div>
                    <div
                        className={`overflow-hidden rounded-md border border-control bg-border-stronger ${ImageCarouselStyles['gradient-bg']}`}
                    >
                        <Swiper
                            // @ts-ignore
                            onSwiper={setImageSwiper}
                            style={{zIndex: 0}}
                            initialSlide={0}
                            spaceBetween={0}
                            slidesPerView={1}
                            speed={300}
                            autoHeight={true}
                            allowTouchMove={false}
                        >
                            {props.content.map((content: Content, i: number) => {
                                return (
                                    <SwiperSlide key={i}>
                                        {content.img_url && (
                                            <Image
                                                src={content.img_url}
                                                alt={content.title}
                                                layout="responsive"
                                                width={0}
                                                height={0}
                                            />
                                        )}
                                        {isInView && content.youtube_id && (
                                            <div className="relative w-full" style={{padding: '56.25% 0 0 0'}}>
                                                <iframe
                                                    title="Demo video"
                                                    className="absolute h-full w-full rounded-b-md"
                                                    src={`https://www.youtube-nocookie.com/embed/${content.youtube_id}?&autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&disablekb=1&mute=0&muted=0`}
                                                    style={{top: 0, left: 0}}
                                                    frameBorder="0"
                                                    allow="autoplay; modestbranding; encrypted-media"
                                                    loading="lazy"
                                                />
                                            </div>
                                        )}
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="col-span-12 mt-8 lg:col-span-5 lg:col-start-8 lg:mt-0 xl:col-span-5 xl:col-start-8">
                <div className={`${props.altTabView ? 'block' : 'hidden'} mb-3`}>
                    <Tabs
                        variant="underlined"
                        size="sm"
                        selectedKey={imageSwiperActiveIndex.toString()}
                        onSelectionChange={(id) => handleImageSwiperNav(Number(id))}
                        classNames={{
                            tab: "font-bold"
                        }}
                    >
                        {props.content.map((content: Content, i: number) => {
                            return (
                                <Tab
                                    title={content.label ? content.label : content.title}
                                    id={i.toString()}
                                    key={i}
                                />
                            )
                        })}
                    </Tabs>
                </div>
                <Swiper
                    // @ts-ignore
                    onSwiper={setSwiperDetails}
                    initialSlide={0}
                    speed={300}
                    allowTouchMove={false}
                    autoHeight={true}
                >
                    {props.content.map((content, i) => {
                        return (
                            <SwiperSlide key={i} className="py-4">
                                <h4 className="text-foreground font-bold mb-4 text-xl">{content.title}</h4>
                                <p className="p text-base">{content.text}</p>
                                {/*<TextLink*/}
                                {/*    label={content.cta ? content.cta : 'View documentation'}*/}
                                {/*    url={content.url}*/}
                                {/*/>*/}
                            </SwiperSlide>
                        )
                    })}
                    {props.footer && <div className="my-8">{props.footer}</div>}
                </Swiper>
            </div>
        </div>
    )
}

export default ImageCarousel