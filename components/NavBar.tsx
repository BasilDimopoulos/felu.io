import { Navbar } from "flowbite-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full flex justify-center bg-transparent absolute top-6 ">
      <div className="sticky">
        <Link href={"/"}>
          <img alt="logo" src="/images/felu-moon.png" className="h-16"></img>
        </Link>
      </div>
    </div>
  );
}
