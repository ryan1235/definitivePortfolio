import { Link } from "react-router-dom";


export default function CardsProjects(props) {

    return (
        <div data-aos="flip-left" data-aos-duration="1000" className="w-[350px] h-[200px] rounded-lg relative">
            <img className="w-[350px] h-[200px] rounded-lg" src={ props.img } alt="Card" />
            <div className="absolute top-0 gap-2 flex flex-col items-center justify-center w-[350px] h-[200px] bg-black/60 opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-2xl block font-bold">{ props.name }</span>
                <Link to={`/blog/${props.slug}`} exact className="text-lg underline hover:text-blue-400 transition-colors" >Clique aqui para saber mais </Link>
            </div>
        </div>
    )
}
