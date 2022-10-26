import { PropsWithChildren } from "../../types/props";
import SideTree from "../SideTree";
import Tabline from "../Tabline";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div class="main-layout">
        <SideTree />

      <div class="content">
        {children}
      </div>

      <div class="bottom-content">
        <Tabline />
      </div>
    </div>
  );
}
