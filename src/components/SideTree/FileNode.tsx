import { useContext, useMemo } from "preact/hooks";
import { Link, useLocation } from "wouter-preact";
import { SideTreeFolderContext } from "./FolderNode";

export default function SideTreeFileNode({
  text,
  href,
  icon = "",
}: {
  text: string;
  href: string;
  icon?: string;
}) {
  const [pathame] = useLocation();
  const folderContext = useContext(SideTreeFolderContext);
  const pathnameHref = useMemo(() => folderContext.base + href.split("#")[0], [href]);
  const selected = pathnameHref === pathame;

  return (
    <Link class={"side-tree-file " + (selected ? "selected" : "")} href={folderContext.base + href}>
      {icon + " "}
      {text}
    </Link>
  );
}
