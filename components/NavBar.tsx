export default function NavBar() {
    return (
        <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <a href="/" className="text-white hover:text-gray-400">
                    <img className="w-10" src="images/Kara-logo.png"></img>
                </a>
                {/* <div className="relative">
                    <input type="text" className="rounded bg-gray-700 placeholder-white w-72 px-3 py-1" placeholder="Search or jump to..."></input>
                    <div className="absolute top-0 right-0 flex items-center h-full">
                        <div className="border border-gray-600 rounded text-xs text-gray-400 px-2 mr-2">/</div>
                    </div>
                </div> */}

            </div>
            {/* <div className="flex items-center space-x-4">
                <ul className="flex items-center font-semibold space-x-4 max-sm:hidden">
                    <li><a href="#" className="hover:text-gray-400">LATEST BLOGS</a></li>
                    <li><a href="#" className="hover:text-gray-400">ABOUT</a></li>
                    <li><a href="#" className="hover:text-gray-400">CONTACT</a></li>
                </ul>
            </div> */}
        </nav>
    )
}