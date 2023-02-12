import Link from "next/link";

export default function HomePageComponentRight() {
  return (
    <div className="container-xl">
      <div className="flex h-[975px] justify-end">
        <div className="h-40 w-1 bg-[#201E1E] absolute">
          <p className="relative top-44 right-9 text-black text-7xl font-anton">
            02
          </p>
        </div>
        <div className="w-full h-full flex justify-start">
          <img
            alt="home image"
            src="/images/home_2.jpg"
            className="max-w-[627px] h-auto z-10 pt-10 pb-10"
          ></img>
          <div className="bg-[#1D1B20] absolute h-[975px] w-[38%] left-0"></div>
        </div>
        <div className="w-full flex flex-col justify-center items-end">
          <div className="max-w-[30rem]">
            <h2 className="uppercase font-anton text-5xl font-medium text-end leading-[1.05] mb-2">
              A little coding goes a long way
            </h2>
            <p className="text-xl leading-7 mb-5 text-end">
              Meet Felu. Your new go to story time for the learned developer.
              Some other text that I dont know what to put goes here.
            </p>
            <Link href="/demo" className="flex justify-end">
              <button className="bg-[#1E222A] text-white pt-4 pb-4 w-40 text-xl tracking-wide font-anton uppercase">
                Click Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
