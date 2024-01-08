import React from "react";
import {cn} from "@/lib/utils";
import Nav from "@/components/Nav";

type Props = {
    hideHeader?: boolean
    hideFooter?: boolean
    className?: string
    footerClassName?: string
    children: React.ReactNode
}

const DefaultLayout = ({
                           hideHeader = false,
                           hideFooter = false,
                           className = '',
                           footerClassName = '',
                           children,
                       }: Props) => {
    return (
        <>
            {!hideHeader && <Nav />}
            <main className={cn('w-full pt-16 bg-body', className)}>{children}</main>
        </>
    )
}

export default DefaultLayout;