import React, { useEffect, useState } from "react";

let pageIsFull = false;
let finalArrayToBeReturned = [];

function checkOverflow(ref) {
  if (ref.current.clientHeight < ref.current.scrollHeight) {
    console.log("OVERFLOW!!!");
    return true;
  } else {
    return false;
  }
}

function getLastWord(words: string) {
  var n = words.split(" ");
  return n[n.length - 1];
}

export default function BookTextComponent(props) {
  var lastWord = "";
  const text =
    "Abel Makkonen Tesfaye (born February 16, 1990), known professionally as the Weeknd, is a Canadian singer, songwriter and actor. Known for his sonic versatility and dark lyricism, his music explores escapism, romance, and melancholia, and is often inspired by personal experiences.[3] He has received numerous accolades, including four Grammy Awards, a Latin Grammy Award, 20 Billboard Music Awards, 17 Juno Awards, six American Music Awards, two MTV Video Music Awards, and nominations for an Academy Award and a Primetime Emmy Award. Born and raised in Toronto, Ontario, Tesfaye began his career in 2009 by anonymously releasing music on YouTube. Two years later, he co-founded the XO record label and released the mixtapes House of Balloons, Thursday and Echoes of Silence, which gained recognition for his style of contemporary and alternative R&B and the mystique surrounding his identity. In 2012, he signed with Republic Records and rereleased the mixtapes in the compilation album Trilogy. He explored dark wave in his debut studio album Kiss Land (2013), which debuted at number two on the US Billboard 200. After its release, Tesfaye began contributing to film soundtracks, with his acclaimed single Earned It from Fifty Shades of Grey (2015) winning the Grammy Award for Best R&B Performance, while also being nominated for the Academy Award for Best Original Song. Among the world's best-selling music artists with over 75 million records sold, Tesfaye holds several streaming and Billboard chart records. He is the first artist to simultaneously debut on the top three on Hot R&B/Hip-Hop Songs, while Blinding Lights is ranked as the greatest Hot 100 song in Billboard history.";
  const ref = React.createRef<HTMLDivElement>();
  const paragraphRef = React.createRef<HTMLParagraphElement>();
  const [displayText, updateText] = useState("");
  const [arrayOfWords, updateArrayOfWords] = useState(text.split(" "));

  function addText(ref) {
    if (arrayOfWords.length > 0 && !pageIsFull) {
      var new_word = arrayOfWords[0];
      updateArrayOfWords(arrayOfWords.slice(1));
      updateText(displayText + new_word + " ");
      lastWord = new_word;
      if (checkOverflow(ref)) {
        console.log("WE have overflown time to stop");
        pageIsFull = true;
      }
    } else {
      console.log("Done!");
    }
  }

  function pruneText(ref) {
    let overflowingWord;
    console.log("Prunning Text");
    if (checkOverflow(ref)) {
      console.log("RUnning!");
      overflowingWord = getLastWord(displayText);
      updateText(displayText.substring(0, displayText.lastIndexOf(" "))); //delete last word
    }
    return overflowingWord;
  }

  useEffect(() => {
    if (!pageIsFull) {
      addText(ref);
    } else if (checkOverflow(ref)) {
      console.log("Prune Text");
      finalArrayToBeReturned.push(pruneText(ref));
    } else {
      console.log("Completed");
      console.log(finalArrayToBeReturned);
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
