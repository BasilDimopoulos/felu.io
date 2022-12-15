export default function LandingSection() {
    return (
        <div className="h-[75vh] flex flex-col items-center text-center justify-center bg-[url('/images/repeated-square-dark.webp')]">
            <h1 className="w-auto leading-[52px] text-[48px] md:text-[72px] md:leading-[80px] text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-red-500">Hello World</h1>
            <p className="mt-3 px-5 text-white">Welcome to the other side. The journey of your developer experience is boosted here.</p>
        </div>
    )
}