export default function BookTextComponent(props) {
    return (
        <div>
            <h3 className="font-anton mb-3">1</h3>
            <h1 className="font-anton text-5xl uppercase text-[#170A27]">RETHINKING LEARNING</h1>
            {props.content.map((t: String, index) => (
                <p key={index} className="mt-5 text-xl text-[#3a3838]">{t}</p>
            ))}
        </div>
    );
}