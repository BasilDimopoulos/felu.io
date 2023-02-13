export default function LegacyLandingSection() {
    return (
        <div className="w-full h-[800px] sm:h-[920px] flex">
            <div className="bg-[#201E1E] w-full">
                <div className="p-12 md:p-20 h-full flex flex-col justify-center font-normal">
                    <h1 className="text-white font-anton text-[32px] leading-10 md:text-[65px] md:leading-[68px] uppercase">Normal tutorials make you scream</h1>
                    <p className="mt-3 md:mt-6 text-lg text-slate-300 max-w-3xl">Meet Felu. Your new go to story time for the learned developer.</p>
                </div>
            </div>
            <div className="md:w-full h-full bg-[url(/images/felu-landing-comic.jpg)] bg-cover bg-center" />
        </div>
    )
}