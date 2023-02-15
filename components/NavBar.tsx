import { Navbar } from "flowbite-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-transparent absolute top-6 w-full">
      <div className="flex justify-center">
        <div className="fixed sm:block hidden">
          <div className="flex space-x-16 justify-center items-center">
            <Link href={"/"}>
              <p className="text-white">Home</p>
            </Link>
            <Link href={"/about"}>
              <p className="text-white">About</p>
            </Link>
            <Link href={"/"}>
              <img
                alt="logo"
                src="/images/felu-moon.png"
                className="h-16"
              ></img>
            </Link>
            <Link href={"/stories"}>
              <p className="text-white">Stories</p>
            </Link>
            <Link href={"/journal"}>
              <p className="text-white">Journal</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex w-full justify-between container pl-14 pr-14">
        <div>
          <Link href={"/"}>
            <img alt="logo" src="/images/felu-moon.png" className="h-14"></img>
          </Link>
        </div>

        <button className="relative group">
          <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
              <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
              <div className="bg-white h-[1px] rounded"></div>
              <div className="bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
