

export default function Marque({name, img}) {
    return (
        <div>
            <img className="w-16 mx-8" src={img} alt={name} />
        </div>
    )
}
