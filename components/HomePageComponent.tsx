import { Button } from "flowbite-react";

export default function HomePageComponent() {
  return (
    <div className="container-xl">
      <div className="flex h-[850px]">
        <div className="w-full flex flex-col justify-center">
          <div className="max-w-xl">
            <h2 className="uppercase font-anton text-5xl font-bold mb-2">
              A little coding goes a long way
            </h2>
            <p className="text-xl leading-7 mb-5">
              Meet Felu. Your new go to story time for the learned developer. Some other text that I dont know what to put goes here.
            </p>
            <button className="bg-[#1E222A] text-white pt-4 pb-4 w-40 text-xl tracking-wide font-anton uppercase">Click Me</button>
          </div>
        </div>

        <div className="w-full h-full flex justify-start">
          <img
            alt="home image"
            src="/images/home_1.jpg"
            className="w-auto z-10 pt-10 pb-10"
          ></img>
          <div className="bg-[#1D1B20] absolute h-[850px] w-[33%] right-0"></div>
        </div>
      </div>
    </div>
  );
}
