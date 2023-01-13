export default function LandingSection() {
    return (
        <div className="w-full h-[880px] flex">
            <div className="bg-[#201E1E]">
                <div className="p-20 h-full flex flex-col justify-center">
                    <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight">Normal tutorials make you look like this</h1>
                    <p className="mt-6 text-lg text-slate-400 max-w-3xl">Meet Felu. Your new go to story time for the learned developer.</p>
                </div>
            </div>
            <div className="w-full h-full bg-[url(/images/felu-landing-comic.jpg)] bg-cover bg-center" />
        </div>
    )
}