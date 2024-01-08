import React from 'react';
import Icon from "@/components/Icon";
import Image from "next/image";

interface SocialLink {
    title: string;
    url: string;
    icon: string;
}

interface Ranking {
    title: string;
    url: string;
}

interface Product {
    title: string;
    url: string;
}

interface Logo {
    url: string;
    alt: string;
}

interface FooterProps {
    data: {
        logo: Logo;
        socialLinks: SocialLink[];
        rankings: Ranking[];
        products: Product[];
    };
}


const Footer: React.FC<FooterProps> = ({data}) => {
    return (
        <div className="flex items-start justify-between px-6 py-12 mx-auto max-w-screen-3xl lg-max:flex-col">
            <div className="flex flex-col lg-max:mb-12">
                <a href="https://escharts.com" className="inline-flex mb-12">
                    <Image src={data.logo.url} width={0} height={0} alt={data.logo.alt} className="w-auto h-11"/>
                </a>
                <div className="flex items-center space-x-2">
                    {data.socialLinks.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" title={link.title}
                           rel="noopener nofollow noreferrer" className="p-2 rounded_full btn equilateral card">
                            <Icon name={link.icon} className={"w-4 h-4 w-5 h-5 text-secondary shrink-0"}/>
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex items-stretch lg-max:flex-wrap">
                <div className="flex flex-col lg-max:mr-16 lg-max:mb-6">
                    <h5 className="mb-4 text-sm font-bold text-left text-secondary">
                        Esports rankings:
                    </h5>
                    <ul className="grid text-left xl:grid-flow-col xl:grid-rows-4 gap-x-8 gap-y-2">
                        {data.rankings.map((ranking, index) => (
                            <li key={index}>
                                <a className="font-normal btn link-secondary" href={ranking.url} title={ranking.title}>
                                    {ranking.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mx-6 border-r border-card lg-max:hidden"></div>
                <div className="flex flex-col lg-max:mr-16 lg-max:mb-6">
                    <h5 className="mb-4 text-sm font-bold text-left text-secondary">
                        Products:
                    </h5>
                    <ul className="grid text-left xl:grid-flow-col xl:grid-rows-6 gap-x-8 gap-y-2">
                        {data.products.map((product, index) => (
                            <li key={index}>
                                <a className="font-normal btn link-secondary" href={product.url} title={product.title}>
                                    {product.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;