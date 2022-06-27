import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { X, List } from "phosphor-react";

export default function Header() {
    const [menuMobilide, setMenuMobile] = useState(false)

    function togleMovile() {
        setMenuMobile(!menuMobilide)
    }
    return (
        <header className="flex items-center justify-between mt-12">
            <span className="block ml-2 text-2xl font-semibold">RyanLuca</span>
            <nav className="hidden md:flex gap-9 mr-10">
                <Link to="/">Inicio</Link>
                <Link to="#Sobre">Sobre</Link >
                <Link to="/#Projetos">Projetos</Link >
                <Link to="/#contato" >Contato</Link >
            </nav>
            {menuMobilide ?
                <div onClick={togleMovile} className='w-full h-full fixed top-0 bg-black/50 z-20'>
                    <nav data-aos="fade-left" className='fixed flex flex-col h-full w-[25vh] z-30 bg-black top-0 right-0 items-center justify-evenly border-t-2 border-b-2 border-l-2 border-slate-200'>
                        <X onClick={togleMovile} className='w-full mt-[-60px] ml-28 top-2' size={32} />
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
