import { Button } from "flowbite-react";

export default function HomePageComponent() {
  return (
    <div className="container-xl">
      <div className="flex h-[850px]">
        <div className="w-full flex flex-col justify-center">
          <h2 className="uppercase font-anton grow-">
            A little coding goes a long way{" "}
          </h2>
          <p>
            Meet Felu. Your new go to story time for the learned developer. Meet
            Felu. Your new go to story time for the learned developer. Meet
            Felu. Your new go to story time for the learned developer.
          </p>
          <Button className="w-28">Click Me</Button>
        </div>

        <div className="w-full h-full flex justify-start">
          <img
            alt="home image"
            src="/images/home_1.jpg"
            className="h-full z-10"
          ></img>
          <div className="bg-[#1D1B20] absolute h-[850px] w-1/4 right-0"></div>
        </div>
      </div>
    </div>
  );
}
