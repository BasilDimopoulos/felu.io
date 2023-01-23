export default function BookTextComponent(props) {
    return (
        <div>
            <h3 className="font-anton mb-3">1</h3>
            <h1 className="font-anton text-5xl uppercase text-[#170A27]">RETHINKING LEADERSHIP</h1>
            <p className="mt-5 text-xl text-[#3a3838]">{props.text}</p>
        </div>
    );
}