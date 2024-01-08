'use client'

import SectionContainer from "@/components/Layouts/SectionContainer";
import ProductCard from "@/components/Products/ProductCard";
import Image from "next/image";

const Products = (props: any) => (
    <SectionContainer className="!pt-0 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4 lg:gap-6 md:grid-cols-12">
        <ProductCard
            alignLeft
            className="col-span-6 lg:col-span-12 xl:col-span-6"
            url={""}
            icon={""}
            title={"Test"}
            subtitle={
                <>
                    Integrate your favorite ML-models to store,
                    <br className="inline-block md:hidden"/> index and search vector embeddings.
                </>
            }
            highlights={
                <ul className="flex flex-col gap-1 text-sm">
                    <li className="flex items-center gap-2">
                        <Image src="/images/logos/openai.svg" alt="OpenAI logo" width="25" height="25"/>
                        <span>OpenAI</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Image
                            src="/images/logos/hugging-face.svg"
                            alt="Hugging Face logo"
                            width="25"
                            height="25"
                        />
                        <span>Hugging Face</span>
                    </li>
                </ul>
            }
            image={<Image width={268} className={"absolute inset-0"} height={212} src={'/img/img.png'} alt={"Img"}/>}
        />
    </SectionContainer>
)

export default Products;