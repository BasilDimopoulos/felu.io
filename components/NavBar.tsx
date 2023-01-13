import { Navbar } from "flowbite-react";

export default function NavBar() {
    return (
        <Navbar className="bg-transparent absolute pt-5"
            fluid={true}
        >
            <Navbar.Brand href="/">
                <img
                    src="/images/felu-logo.svg"
                    className="mr-3 h-6 sm:h-9 pl-10 md:pl-16"
                    alt="felu.io"
                />
            </Navbar.Brand>
            {/* <Navbar.Toggle className="hover:bg-gray-700"/>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/navbars"
                    className="hover:bg-gray-700"

                >
                    <p className="text-white hover:text-gray-300 text-[15px] uppercase font-bold">Home</p>
                </Navbar.Link>
                <Navbar.Link href="/" className="hover:bg-gray-700">
                    <p className="text-white hover:text-gray-300 text-[15px] uppercase font-bold">Latest Blogs</p>
                </Navbar.Link>
                <Navbar.Link href="/navbars" className="hover:bg-gray-700">
                    <p className="text-white hover:text-gray-300 text-[15px] uppercase font-bold">About the Author</p>
                </Navbar.Link>
                <Navbar.Link href="/navbars" className="hover:bg-gray-700">
                    <p className="text-white hover:text-gray-300 text-[15px] uppercase font-bold">Contact</p>
                </Navbar.Link>
            </Navbar.Collapse> */}
        </Navbar>
    )
}