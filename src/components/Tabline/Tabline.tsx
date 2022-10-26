import TablineMode, { NvimMode } from "./Mode";
import TablineFile from "./File"

export default function Tabline() {
  return (
    <div class="tabline">
      <div>
        <TablineMode mode={NvimMode.NORMAL}/>
        <TablineFile />
      </div>
      <div>
        <div class="tabline-folder">
          <span> </span>
           portfolio
        </div>
        <div class="tabline-credits">
          <span> </span>
          Apika
        </div>
      </div>
    </div>
  );
}
