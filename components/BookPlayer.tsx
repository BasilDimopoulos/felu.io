import React, { useRef, useEffect, useState } from "react";
import BookImageComponent from "./BookImageComponent";
import BookTextComponent from "./BookTextComponent";
import TextData from "../public/json_files/demo-text.json"

export default function BookPlayer() {
    console.log(TextData.value)
    return (
        <div className="w-full h-[920px]  pl-44 pr-44 pt-16 pb-16">
            <div className="w-full bg-slate-500 h-1 mb-5"></div>
            <div className="flex h-full pt-5">
                {/* container 1 */}
                <div className="flex-1 flex flex-col justify-center">
                    <div className="w-10/12">
                        <BookTextComponent text={TextData.value} />
                    </div>
                </div>
                {/* container 2 */}
                <div className="flex-1">
                    <BookImageComponent />
                </div>
            </div>
        </div>
    )
}
