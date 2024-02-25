"use client";

import React, {useState} from "react";
import {menu} from "@/data/nav"
import MenuItem from "@/components/Nav/MenuItem";
import {cn} from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import HamburgerButton from "@/components/Nav/HamburgerMenu";

const Nav = () => {
    const [open, setOpen] = useState(false)

    React.useEffect(() => {
        if (open) {
            // Prevent scrolling on mount
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [open])

    /**
     * Temporary fix for next-theme client side bug
     * https://github.com/pacocoursey/next-themes/issues/169
     * TODO: remove when bug has been fixed
     */
    const [mounted, setMounted] = useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <>
            <div
                className={cn('sticky top-0 z-40 transform')}
                style={{transform: 'translate3d(0,0,999px)'}}
            >
                <div
                    className={cn(
                        'absolute inset-0 h-full w-full opacity-80 bg-background'
                    )}
                />
                <nav
                    className={cn(
                        `relative z-40 border-card border-b backdrop-blur-sm transition-opacity`
                    )}
                >
                    <div className="relative flex justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20">
                        <div className="flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between">
                            <div className="flex items-center">
                                <NavigationMenu
                                    delayDuration={0}
                                    className="hidden pl-8 sm:space-x-4 xl:flex h-16"
                                    viewportClassName="rounded-xl bg-background"
                                >
                                    <NavigationMenuList>
                                        {menu.primaryNav.map((menuItem) =>
                                            (
                                                <NavigationMenuItem className="text-sm font-medium"
                                                                    key={menuItem.title}>
                                                    <NavigationMenuLink asChild>
                                                        <MenuItem
                                                            href={menuItem.url}
                                                            title={menuItem.title}
                                                            className="group-hover:bg-transparent font-bold text-secondary focus-visible:text-primary"
                                                            hoverColor="brand"
                                                        />
                                                    </NavigationMenuLink>
                                                </NavigationMenuItem>
                                            )
                                        )}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>
                        </div>
                        <HamburgerButton
                            toggleFlyOut={() => setOpen(true)}
                        />
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav;