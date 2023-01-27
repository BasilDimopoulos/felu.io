import React, { useRef, useEffect, useState } from "react";
import BookImageComponent from "./BookImageComponent";
import BookTextComponent from "./BookTextComponent";
import TextData from "../../public/json_files/demo-text.json"
import ImageData from "../../public/json_files/image-demo.json"
import Page from "../../models/PaageModels";
import Book from "../../models/BookModel";
import BookProgressBar from "./BookProgressBar";


function generatePage(page: Page) {
    if (page.type == "text") {
        return <BookTextComponent content={page.value} />
    } else if (page.type == "image") {
        return <BookImageComponent content={page.value} />
    }
}

function calculateLocation(currentLocation: number, chapterLength: number) {
    const progress = currentLocation / chapterLength * 100;
    return progress;
}



export default function BookPlayer() {
    const [currentLocation, setLocation] = useState(1);
    let pages = [new Page(TextData.type, TextData.value), new Page(ImageData.type, ImageData.value), new Page(TextData.type, TextData.value), new Page(TextData.type, TextData.value)];
    let chapter: Book = new Book(pages);

    function moveForward() {

        if (currentLocation + 2 < pages.length) {
            setLocation(currentLocation + 2);
        }
    }

    function moveBackward() {
        if (currentLocation - 2 > 0) {
            setLocation(currentLocation - 2);
        }
    }

    return (
        <div className="w-full h-[920px]  pl-44 pr-44 pt-16 pb-16">
            <BookProgressBar width={`w-[${calculateLocation(currentLocation, pages.length)}%]`} />
            <div className="flex h-full pt-5">
                {/* container 1 */}
                <div className="flex-1 flex flex-col justify-center">
                    <div className="w-10/12">
                        {generatePage(pages[currentLocation - 1])}
                    </div>
                </div>
                {/* container 2 */}
                <div className="flex-1">
                    {generatePage(pages[currentLocation])}
                </div>
            </div>
            <button onClick={moveForward}>Next</button>
            <button className="pl-4" onClick={moveBackward}>Back</button>
        </div>
    )
}
