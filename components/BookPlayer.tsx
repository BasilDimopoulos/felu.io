import React, { useRef, useEffect, useState } from "react";

export default function BookPlayer() {
    return (
        <div className="w-full h-[920px]  pl-44 pr-44 pt-16 pb-16">
            <div className="w-full bg-slate-500 h-1 mb-5"></div>
            <div className="flex h-full pt-5">
                {/* container 1 */}
                <div className="flex-1 flex flex-col justify-center">
                    <div className="w-10/12">
                        <h3 className="font-anton mb-3">1</h3>
                        <h1 className="font-anton text-5xl uppercase text-[#170A27]">RETHINKING LEADERSHIP</h1>
                        <p className="mt-5 text-xl text-[#3a3838]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br className="mb-5" />

                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br className="mb-5" />

                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br className="mb-5" />

                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br className="mb-5" />

                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br className="mb-5" />

                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                {/* container 2 */}
                <div className="flex-1">
                    <img className="w-11/12" src="/images/img-1.jpg">
                    </img>
                </div>
            </div>
        </div>
    )
}
