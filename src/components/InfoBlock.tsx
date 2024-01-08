import React, {ReactNode} from "react";

interface InfoBlockProps {
    title: string;
    icon?: ReactNode
    children?: ReactNode
}

export const InfoBlock: React.FC<InfoBlockProps> = ({title, icon, children}) => (
    <div className="flex">
        <section className={"info-block"}>
            <header className={"info-block__slot-header"}>
                <div className="flex items-center">
                    <div className="items-center inline-block sm-max:flex-col sm-max:items-start">
                        <div className="flex items-center">
                            <div className="relative w-8 h-8 mb-3 mr-3 info-block__button">
                                <div className="info-block__icon bg-card text-secondary">
                                    {icon}
                                </div>
                            </div>
                            <div className="flex items-center mb-3 min-h-8">
                                <h3 className="text-base font-bold left-full text-default mr-3">
                                    {title}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="flex-1 info-block-slot" style={{'flex': '1'}}>
                <div className={"relative w-full  p-6 rounded-lg bg-card  flex flex-col h-full "}>
                    {children}
                </div>
            </div>
        </section>
    </div>
)