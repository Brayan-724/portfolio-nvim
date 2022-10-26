import { createContext } from "preact";
import { useState } from "preact/hooks";
import { PropsWithChildren } from "~/types/props";

export const SideTreeFolderContext = createContext({ base: "" });

export type SideTreeFolderProps = PropsWithChildren<{
  name: string;
  base: string;
  defaultOpened?: boolean;
}>;

export default function SideTreeFolderNode({
  name,
  base,
  children,
  defaultOpened = false,
}: SideTreeFolderProps) {
  const [isOpened, setIsOpened] = useState(defaultOpened);

  return (
    <SideTreeFolderContext.Consumer>
      {({ base: parentBase }) => (
        <div class={"side-tree-folder " + (isOpened ? "open" : "")}>
          <span onClick={() => setIsOpened((_) => !_)}>{name}</span>
          <SideTreeFolderContext.Provider value={{ base: parentBase + base }}>
            {isOpened && children}
          </SideTreeFolderContext.Provider>
        </div>
      )}
    </SideTreeFolderContext.Consumer>
  );
}