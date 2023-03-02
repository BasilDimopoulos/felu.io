import React, { useEffect, useState } from "react";

function checkOverflow(ref) {
  if (ref.current.clientHeight < ref.current.scrollHeight) {
    return true;
  } else {
    return false;
  } 
}

export default function BookTextComponent(props) {
  var lastWord = "";
  let fullPage = false;
  let finalArrayToBeReturned;
  const text =
    "Felu.io is a new way of teaching programming, assisted with AI generated images from Midjourney. Felu.io is a new way of teaching programming, assisted with AI generated images Felu.io is a new way of teaching programming, Felu.io is a new way of teaching programming, assisted with AI generated images assisted with AI generated images from Midjourney. Felu.io is a new way of teaching programming, assisted with AI generated images from Midjourney. Felu.io is a new way of teaching programming, assisted with AI generated images from Midjourney. Felu.io is a new way of teaching programming, assisted with AI generated images from Midjourney. Felu.io is a new way of teaching programming, assisted with AI generated images from Midjourney. Felu.io is a new way of teaching programming, assisted with AI generated images from Midjourney. Felu.io is a new way of teaching programming, assisted with AI generated images from Midjourney. Felu.io is a new way of teaching programming, assisted with AI generated images from Midjourney. Felu.io is a new way of teaching programming, assisted with AI generated images from Midjourney. Felu.io is a new way of teaching programming, assisted with AI generated images from Midjourney. Felu.io is a new way of teaching programming, assisted with AI generated images from Midjourney. Felu.io is a new way of teaching programming, assisted with AI generated images from Midjourney. Felu.io is a new way of teaching programming, assisted with AI generated images from Midjourney. v v v";
  const ref = React.createRef<HTMLDivElement>();
  const paragraphRef = React.createRef<HTMLParagraphElement>();
  const [displayText, updateText] = useState("");
  const [arrayOfWords, updateArrayOfWords] = useState(text.split(" "));

  function addText(ref) {
    if (arrayOfWords.length > 0) {
      var new_word = arrayOfWords[0];
      updateArrayOfWords(arrayOfWords.slice(1));
      updateText(displayText + new_word + " ");
      lastWord = new_word;
      //if overflown remove last word and add back to the array
      if (checkOverflow(ref)) {
        finalArrayToBeReturned = [lastWord, ...arrayOfWords];
        updateText(displayText.substring(0, displayText.lastIndexOf(" ")));
        console.log(arrayOfWords);
      }
    } else {
      console.log("Done!");
      fullPage = true;
    }
  }

  useEffect(() => {
    if (!fullPage) {
      addText(ref);
    } else {
    }
  });

  return (
    <div ref={ref} className="h-[680px] overflow-hidden">
      <p ref={paragraphRef} className="mt-5 text-xl text-[#3a3838]">
        {displayText}
      </p>
    </div>
  );
}
