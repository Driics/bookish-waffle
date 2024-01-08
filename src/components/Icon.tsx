import React from "react";
import {cn} from "@/lib/utils";
interface IconProps {
    name: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({name, className = "", ...props}) => {
    const c = cn(`w-4 h-4`, className)

    return (
        <svg className={c} {...props}>
            <use className={"fill-current"} xlinkHref={`/img/sprite.svg#icon-${name}`}/>
        </svg>
    )
};

export default Icon;