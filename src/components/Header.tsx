"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const toggleMenu = () => {
        document.body.classList.toggle('menu-opened');
        setMenuOpen(!menuOpen);
    };

    const toggleMenuItem = (event: React.MouseEvent<HTMLDivElement>) => {
        const closestDropdownToggle = (event.target as HTMLElement).closest('.dropdown-toggle');
        if (closestDropdownToggle) {
            closestDropdownToggle.classList.toggle('active');
        }
    };

    useEffect(() => {
        const header = document.getElementById('header');
        const headerHeight = header?.clientHeight || 0;

        let lastScroll = window.pageYOffset || document.documentElement.scrollTop;

        const handleScroll = () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScroll && currentScroll > headerHeight) {
                header?.classList.add('header-hidden');
            } else {
                header?.classList.remove('header-hidden');
            }
            lastScroll = currentScroll;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="header"
             className="fixed top-0 left-0 w-full transition-transform duration-500 border-b z-100 border-card bg-body">
            <header className="header-container font-sans">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center sm-max:flex-grow">
                        <div
                            className="px-6 py-2.5 border-r border-card sm-max:order-2 sm-max:flex sm-max:items-center sm-max:justify-center sm-max:border-none h-16">
                            <Link href="https://escharts.com" className="inline-block" title="Esports Charts">
                                <Image loading="lazy" decoding="async" priority={false}
                                       src="https://escharts.com/img/logos/esc-logo-white.svg" alt="Esports Charts"
                                       width="160" height="44" className="sm-max:hidden"/>
                                <Image loading="lazy" decoding="async"
                                       src="https://escharts.com/img/logos/esc-symbol.svg" alt="Esports Charts"
                                       width="34" height="40" className="md:hidden"/>
                            </Link>
                        </div>
                        <div className="relative flex items-center h-16 px-2 sm-max:pr-0 sm-max:pl-2">
                            <button className="btn link-secondary mobile-menu-toggle xl:hidden" onClick={toggleMenu}>
                                <Icon name={!menuOpen ? "menu" : "close"}/>
                            </button>
                            <div className="mobile-menu">
                                <ul className="flex items-center lg-max:flex-col">
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;