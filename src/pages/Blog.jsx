import { gql, useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"

import Header from "../Components/Header"
import gifloader from "../img/833.gif"

import { GithubLogo, Browsers } from "phosphor-react";
import Footer from "../Components/Footer";

const QUERY_BLOG = gql`
query blog($in: [String] = "") {
  card(filter: {slug: {in: $in}}) {
    id
    slug
    blog {
      demo
      dataProjeto
      demoLink
      github
      githubLink
      blog(markdown: true)
    }
    imagem {
      url
    }
    nomeDoProjeto
  }
}


`

export default function Blog() {
    const { slug } = useParams()
    const { data, loading } = useQuery(QUERY_BLOG, {
        variables: {
            in: slug
        }
    })


    return (
        <>
        <Header />
        {loading ?
          <main className="w-full flex items-center justify-center">
            <div className="h-[50vh] flex flex-col items-center justify-center">
              <img src={gifloader} alt="carregamento" />
              <span>Carregando...</span>
            </div>
          </main> :
          <main className="flex flex-col items-center">
            <h1 className="text-3xl mt-16 underline">{data?.card.nomeDoProjeto}</h1>
            <div className="flex gap-6 mt-4">
              {data?.card.blog.github ? <a className="bg-[#F9F5FF] text-[#0A0119] w-[145px] py-1 rounded-lg flex items-center justify-center text-2xl" href={data?.card.blog.githubLink}><GithubLogo size={32} /> Git Hub</a> : null

              }
              {data?.card.blog.demo ? <a className=" bg-[#F9F5FF] text-[#0A0119] w-[145px] py-1 rounded-lg flex items-center justify-center text-1xl" href={data?.card.blog.demoLink}><Browsers size={32} /> Site do Projeto</a> : null

              }
            </div>
            <section className="flex-1 flex flex-col items-center justify-center p-5">
              <div data-aos="zoom-in-down" data-aos-duration="1000" className="flex flex-col items-center gap-6 blog" dangerouslySetInnerHTML={{ __html: data?.card.blog.blog }}></div>
            </section>
            <div className="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="500" data-numposts="5" ></div>
          </main>

          }

        <Footer/>
        </>
    )
}
