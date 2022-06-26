import { gql, useQuery } from "@apollo/client";
import Marquee from "react-fast-marquee";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { AddressBook, UsersThree } from "phosphor-react";

import CardsProjects from "../Components/CardsProjects";
import Form from "../Components/Form";
import Header from "../Components/Header";
import Marque from "../Components/Marque";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const CARD_QUERY = gql`
query cardinskills {
  allCards {
    slug
    id
    imagem {
      url
    }
    nomeDoProjeto
  }
  allSkills {
    id
    imgtecnologia
    tecnologia
  }
}


`

export default function Home() {
    const { data, loading } = useQuery(CARD_QUERY)
    return (
        <>
            <Header />
            {loading ?
                <main className="w-full flex items-center justify-center">
                    <div className="h-[50vh] flex flex-col items-center justify-center">
                        <img src="/src/img/833.gif" alt="carregamento" />
                        <span>Carregando...</span>
                    </div>
                </main> :
                <main className="flex items-center justify-center flex-col">
                    <section className="w-[80%] h-[85vh] mt-8 flex items-center justify-center">
                        <div className="flex flex-col gap-3 flex-1">
                            <strong className="block text-3xl">FRONTEND DEVELOPER</strong>
                            <p>Olá!Meu nome é Ryan Luca e sou desenvolvedor e estudante de front-end.Você está prestes a ver um pouco do meu trabalho!</p>
                            <AnchorLink className="mt-8 w-48 bg-[#F9F5FF] text-[#0A0119] px-1 py-1 rounded-lg flex items-center gap-2 hover:opacity-40 transition-opacity" href="#contato"><AddressBook size={32} />Entre em Contato</AnchorLink >
                        </div>
                        <div>
                            <img className="w-[480px]" src="/src/img/BannerInicial.png" alt="Banner inicial" />
                        </div>
                    </section>
                    <section className="w-full flex items-center flex-col gap-3">
                        <h2 className="text-2xl">Algumas Tecnologias que utilizo</h2>
                        <Marquee className="w-5/6 p-6 " gradient={false} pauseOnHover={true}>
                            {data?.allSkills.map(skill => {
                                return (
                                    <Marque
                                        key={skill.id}
                                        img={skill.imgtecnologia}
                                        name={skill.tecnologia}
                                    />
                                )
                            })}
                        </Marquee>
                    </section>
                    <section id="Sobre" className="flex flex-col items-center gap-3 mt-10">
                        <h2 className="text-2xl">Um pouco Sobre Min</h2>
                        <div className="flex items-center gap-4">
                            <img src="https://github.com/ryan1235.png" alt="Esse sou eu RyanLuca" />
                            <div className="flex flex-1 flex-col">
                                <p>Sou apaixonado por tecnologia desde pequeno, ganhei meu primeiro computador com 8 anos e dai em diante não parei mais, sempre me interessei pela área de tecnológica e principalmente programação.
                                    Minha jornada como desenvolvedor fornt end começou no início do ano de 2022 com aquela famosa promessa de ano novo e acabou que me apaixonei e de aí em diante não parei mais de estudar e de me aperfeiçoar nessa área que amo tanto! </p>
                                <AnchorLink className="mt-8 flex gap-2 items-center bg-[#F9F5FF] text-[#0A0119] w-[220px] px-1 py-2 rounded-lg hover:opacity-50 transition-opacity" href="#redes">
                                    <UsersThree size={32} />Minhas Redes Sociais
                                </AnchorLink>
                            </div>
                        </div>
                    </section>
                    <section id="Projetos" className="mt-8 w-full flex flex-col items-center justify-center">
                        <h2 className="text-4xl">Projetos</h2>
                        <div className="flex flex-wrap w-full gap-5 items-center justify-center mt-8">
                            {data?.allCards.map(card => {
                                return (
                                    <CardsProjects
                                        key={card.id}
                                        img={card.imagem.url}
                                        name={card.nomeDoProjeto}
                                        slug={card.slug}
                                    />
                                )
                            })}
                        </div>
                    </section>
                    <section id="contato" className="flex items-center flex-col gap-6 w-full mt-6 mb-8">
                        <h2 className="mt-6 text-3xl ">Entre em Contato</h2>
                        <Form />
                    </section>
                </main>}
            <Footer />
        </>
    )
}
