import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { X, List, Sun, Moon } from "phosphor-react";
import { usetheme } from '../hooks/useTheme';

export default function Header() {
    const [menuMobilide, setMenuMobile] = useState(false)
    const { theme, settheme } = usetheme()

    function togleMovile() {
        setMenuMobile(!menuMobilide)
    }
    return (
        <header className="flex items-center justify-between mt-12 relative">
            <span className="block ml-2 text-2xl font-semibold">RyanLuca</span>
            <div className='hidden md:block'>{theme === "light" ? <p onClick={() => settheme("dark")}
                className="flex items-center text-1xl gap-1 cursor-pointer absolute -bottom-11 right-5 bg-[#0A0119] text-[#FAFBFF] px-3 py-1 rounded-xl border border-slate-400">
                <Moon size={20} />Dark Mode</p> :
                <p onClick={() => settheme("light")}
                    className="flex items-center text-1xl gap-1 cursor-pointer absolute -bottom-11 right-5 bg-[#FAFBFF] text-[#0A0119] px-3 py-1 rounded-xl border border-slate-400">
                    <Sun size={20} />Light Mode
                </p>}
            </div>
            <nav className="hidden md:flex gap-9 mr-10">
                <Link to="/">Inicio</Link>
                <Link to="#Sobre">Sobre</Link >
                <Link to="/#Projetos">Projetos</Link >
                <Link to="/#contato" >Contato</Link >
            </nav>
            {menuMobilide ?
                <div onClick={togleMovile} className='w-full h-full fixed top-0 bg-black/50 z-20'>
                    <nav data-aos="fade-left" className='fixed flex flex-col h-full w-[25vh] z-30 bg-slate-200 dark:bg-black top-0 right-0 items-center justify-evenly border-t-2 border-b-2 border-l-2 border-slate-200'>
                        <X onClick={togleMovile} className='w-full mt-[-60px] ml-28 top-2' size={32} />

                        <div className='block'>{theme === "light" ? <p onClick={() => settheme("dark")}
                            className="flex items-center text-1xl gap-1 cursor-pointer bg-[#0A0119] text-[#FAFBFF] px-3 py-1 rounded-xl border border-slate-400">
                            <Moon size={20} />Dark Mode</p> :
                            <p onClick={() => settheme("light")}
                                className="flex items-center text-1xl gap-1 cursor-pointer bg-[#FAFBFF] text-[#0A0119] px-3 py-1 rounded-xl border border-slate-400">
                                <Sun size={20} />Light Mode
                            </p>}
                        </div>

                        <Link onClick={togleMovile} to="/">Inicio</Link>
                        <Link onClick={togleMovile} to="#Sobre">Sobre</Link >
                        <Link onClick={togleMovile} to="/#Projetos">Projetos</Link >
                        <Link onClick={togleMovile} to="/#contato" >Contato</Link >
                    </nav>
                </div>
             :
                <List onClick={togleMovile} className='block md:hidden' size={36} />}
        </header>
    )
}
