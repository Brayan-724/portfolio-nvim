export enum NvimMode {
  NORMAL,
  INSERT,
  VISUAL,
}

type NvimModeRecord = { [key in NvimMode]: string };

const text: NvimModeRecord = {
  [NvimMode.NORMAL]: "NORMAL",
  [NvimMode.INSERT]: "INSERT",
  [NvimMode.VISUAL]: "VISUAL",
};

export default function TablineMode({ mode }: { mode: NvimMode }) {
  return (
    <div class={"tabline-mode tabline-mode--" + mode}>
       {text[mode]}
      <span></span>
    </div>
  );
}
