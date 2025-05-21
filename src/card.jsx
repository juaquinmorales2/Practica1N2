function Card({ image, name, position, className }) {
    return (
        <div className="p-5">
            <div className="flex flex-row items-center relative">
            <p className="rotate-90 absolute top-12 left-17 w-30">{position}</p>
            <img className="w-30" src={image} />
            </div>
            <p className="font-bold font-md">{name}</p>
        </div>
    );
}
export default Card