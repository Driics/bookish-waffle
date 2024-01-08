// FaqBlock.tsx
import React from 'react';

interface FaqBlockProps {
    faqData: {
        question: string;
        answer: string | React.ReactNode;
    }[];
}

export const FaqBlock: React.FC<FaqBlockProps> = ({faqData}) => {
    return (
        <div className="relative w-full p-6 rounded-lg bg-card flex flex-col h-full">
            <div className="relative w-full h-full" data-loading-class="opacity-75 pointer-events-none show-loader">
                <div itemScope itemType={"https://schema.org/FAQPage"}
                     className="relative grid-cols-2 -m-6 md:grid center_border">
                    <ul className="pt-3 md:pb-3 md:border-r border-gray-dark faq-questions-list">
                        {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item, index) => (
                            <li key={index} className="px-6 py-3 border-gray-dark" itemScope
                                itemType="https://schema.org/Question">
                                <h3 className="text-base font-bold" itemProp="name">
                                    {item.question}
                                </h3>
                                <div className="mt-1" itemScope itemProp="acceptedAnswer"
                                     itemType="https://schema.org/Answer">
                                    <p className="text-sm leading-6 text-secondary whitespace-pre-wrap" itemProp="text">
                                        {item.answer}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className="pb-3 md:pt-3 faq-questions-list">
                        {faqData.slice(Math.ceil(faqData.length / 2)).map((item, index) => (
                            <li key={index} className="px-6 py-3 border-gray-dark" itemScope
                                itemType="https://schema.org/Question">
                                <h3 className="text-base font-bold" itemProp="name">
                                    {item.question}
                                </h3>
                                <div className="mt-1" itemScope itemProp="acceptedAnswer"
                                     itemType="https://schema.org/Answer">
                                    <p className="text-sm leading-6 text-secondary" itemProp="text">
                                        {item.answer}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
