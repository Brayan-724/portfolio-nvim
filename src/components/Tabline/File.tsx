import { useLocation } from "wouter-preact";

export default function TablineFile() {
  const [pathname] = useLocation();

  const filename = pathname === "/" ? "index" : pathname.split("/").pop() || "index";

  return <span class="tabline-file">{filename}.html </span>;
}
