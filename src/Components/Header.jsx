import AnchorLink from 'react-anchor-link-smooth-scroll'
import { HashLink as Link } from 'react-router-hash-link';

export default function Header() {
    return (
        <header className="flex items-center justify-between mt-12">
            <span className="block ml-2 text-2xl font-semibold">RyanLuca</span>
            <nav className="flex gap-9 mr-10">
                <Link to="/">Inicio</Link>
                <Link to="#Sobre">Sobre</Link >
                <Link to="/#Projetos">Projetos</Link >
                <Link to="/#contato" >Contato</Link >
            </nav>
        </header>
    )
}
