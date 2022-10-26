import { useEffect, useState } from "preact/hooks";

const prompt = "  /home/apika ❯ ";
const finalText = "nvim portfolio" + location.pathname + " ";
const openningMsg = "Opening /home/apika/portfolio" + location.pathname;

export default function Loader() {
  const [text, setText] = useState(prompt);
  const [textIdx, setTextIdx] = useState(0);
  // Prevent continous loader render by hmt
  const [loaded, setLoaded] = useState((window as any).loaded);

  useEffect(() => {
    if (textIdx < finalText.length)
      setTimeout(() => {
        setText((_) => _ + finalText[textIdx]);
        setTextIdx((_) => _ + 1);
      }, 50);
    else {
      setText((_) => _ + "\n");
      setTimeout(() => {
        setText((_) => _ + openningMsg);

        setTimeout(() => {
          (window as any).loaded = true;
          setLoaded(true);
        }, 500);
      }, 200);
    }
  }, [textIdx]);

  return <pre class={"nvim-loader " + (loaded ? "loaded" : "")}>{text}|</pre>;
}
