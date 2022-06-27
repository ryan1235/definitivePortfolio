import { Copyright, TwitterLogo, GithubLogo, LinkedinLogo, InstagramLogo } from "phosphor-react";

export default function Footer() {
    return (
        <footer id="redes" className="bg-black border-t border-slate-200 flex flex-col gap-2 items-center p-3 w-full">
            <span className="text-2xl">RyanLuca</span>
            <strong className="flex gap-1 items-center"><Copyright size={24} /> Todos Os Direitos Reservados 2022</strong>
            <div className="gap-2 flex">
                <a href="https://twitter.com/ryanluca007123" target={"_blank"} className="hover:text-cyan-500 transition-colors"><TwitterLogo size={32} /></a>
                <a href="https://github.com/ryan1235" target={"_blank"} className="hover:text-cyan-500 transition-colors"><GithubLogo size={32} /></a>
                <a href="https://www.linkedin.com/in/ryan-luca-839194230/" target={"_blank"} className="hover:text-cyan-500 transition-colors"><LinkedinLogo size={32} /></a>
                <a href="https://www.instagram.com/ryanluca007122/" target={"_blank"} className="hover:text-cyan-500 transition-colors"><InstagramLogo size={32} /></a>
            </div>
        </footer>
    )
}
