import React, { useRef, useEffect, useState } from "react";
import BookImageComponent from "./BookImageComponent";
import BookTextComponent from "./BookTextComponent";
import TextData from "../../public/json_files/demo-text.json";
import ImageData from "../../public/json_files/image-demo.json";
import Page from "../../models/PageModels";
import Book from "../../models/BookModel";
import BookProgressBar from "./BookProgressBar";


function generatePage(page: Page) {
  if (page.type == "text") {
    return <BookTextComponent content={page.value} />;
  } else if (page.type == "image") {
    return <BookImageComponent content={page.value} />;
  }
}



export default function BookPlayer(this: any) {
  const [currentLocation, setLocation] = useState(1);
  let pages = [
    new Page(TextData.type, TextData.value),
    new Page(ImageData.type, ImageData.value),
    new Page(TextData.type, TextData.value),
    new Page(TextData.type, TextData.value),
  ];
  let chapter: Book = new Book(pages);

  function calculateLocation(currentLocation: number, chapterLength: number) {
    if (currentLocation + 2 >= pages.length) {
        return 100
    }else{
    return (currentLocation / chapterLength) * 100;
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", iteratePage, true);
  }, [iteratePage]);

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function iteratePage(event) {
    if (event.key === "ArrowLeft" || event.key === "37") {
      moveBackward();
    } else if (event.key === "ArrowRight" || event.key === "39") {
      moveForward();
    }
  }

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
    <div className="w-full h-[940px]  pl-44 pr-44 pt-12 pb-20">
      <BookProgressBar
        width={`${calculateLocation(currentLocation, pages.length)}%`}
      />
      <div className="flex h-full mt-8">
        {/* container 1 */}
        <div className="flex-1 flex flex-col justify-center max-h-fit">
          <div className="w-10/12" id="bookContent">
            {generatePage(pages[currentLocation - 1])}
          </div>
        </div>
        {/* container 2 */}
        <div className="flex-1">{generatePage(pages[currentLocation])}</div>
      </div>
      <div className="flex w-full items-center justify-center">
        <button
          type="button"
          onKeyDown={iteratePage}
          onClick={moveBackward}
          className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          type="button"
          className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
          onClick={moveForward}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
