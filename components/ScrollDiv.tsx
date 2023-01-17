import React, { useRef, useEffect, useState } from "react";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ScrollDiv() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const [tween, setTween] = useState(null);

  useEffect(() => {
    if (tween) return;

    gsap.registerPlugin(ScrollTrigger);
    let scrollTween = gsap.to(ref.current, {
      ease: "none",
      backgroundColor: "#DAF7A6",
      scrollTrigger: {
        trigger: ref.current,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 1,
        start: "top 0%",
        end: "+=300%",
        markers: false,
        toggleActions: "play reset play reset",
        onUpdate: (self) => {
          let p = (self.progress * 100).toFixed(1);
          //@ts-ignore
          setProgress(p);
        }
      }
    });
    //@ts-ignore
    setTween(scrollTween);
  }, []);

  return (
    <div className="App">
      <div className="top">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>{" "}
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <div ref={ref} id="hscroll">
        <h1>
          When the scroll arrive this div, the position of this div will become
          sticky, and the percentage will start to increase from 0 to 100. When
          arriving 100%, user can then scroll to next section
        </h1>
        <h2 id="output">{`Percentage scrolled: ${progress}%.`}</h2>
      </div>
      <div className="bottom">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
}
