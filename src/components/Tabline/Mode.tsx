export enum NvimMode {
  NORMAL,
  INSERT,
  VISUAL,
}

export default function TablineMode({ mode }: { mode: NvimMode }) {
  return (
    <div class={"tabline-mode tabline-mode--" + mode}>
      <span></span>
    </div>
  );
}
