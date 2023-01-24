import React, { useRef, useEffect, useState } from "react";
import BookImageComponent from "./BookImageComponent";
import BookTextComponent from "./BookTextComponent";
import TextData from "../public/json_files/demo-text.json"

class Page {
    type: String;
    value: String[] | String;

    constructor(type: string, value: String[] | String) {
        this.type = type;
        this.value = value;
    }
}

class Book {
    pages: Page[];
    pageLength: Number;
    readingLocation: Number;

    constructor(pages: Page[]) {
        this.pages = pages;
        this.pageLength = pages.length;
        this.readingLocation = 1;
    }
}

export default function BookPlayer() {
    var curentLocation = 1;
    let pages = [new Page(TextData.type, TextData.value), new Page(TextData.type, TextData.value)];
    let chapter: Book = new Book(pages);
    return (
        <div className="w-full h-[920px]  pl-44 pr-44 pt-16 pb-16">
            <div className="w-full bg-slate-500 h-1 mb-5"></div>
            <div className="flex h-full pt-5">
                {/* container 1 */}
                <div className="flex-1 flex flex-col justify-center">
                    <div className="w-10/12">
                        <BookTextComponent text={chapter.pages[0].value} />
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
