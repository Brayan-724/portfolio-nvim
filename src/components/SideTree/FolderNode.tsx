import { createContext } from "preact";
import { useContext, useState } from "preact/hooks";
import { PropsWithChildren } from "~/types/props";

export const SideTreeFolderContext = createContext({
  base: "",
  onClick: () => {},
});

export type SideTreeFolderProps = PropsWithChildren<{
  name: string;
  base: string;
  defaultOpened?: boolean;
}>;

export default function SideTreeFolderNode({
  name,
  base,
  children,
}: SideTreeFolderProps) {
  const { base: parentBase, onClick } = useContext(SideTreeFolderContext);
  const fullBase = parentBase + base;
  const [isOpened, setIsOpened] = useState(
    location.pathname.startsWith(fullBase)
  );

  return (
    <div class={"side-tree-folder " + (isOpened ? "open" : "")}>
      <span onClick={() => setIsOpened((_) => !_)}>{name}</span>
      <SideTreeFolderContext.Provider value={{ base: fullBase, onClick }}>
        {isOpened && children}
      </SideTreeFolderContext.Provider>
    </div>
  );
}
