import SideTreeFileNode from "./FileNode";
import SideTreeFolderNode, { SideTreeFolderContext } from "./FolderNode";

export default function SideTree() {
  return (
    <div class="side-tree">
      <SideTreeFolderContext.Provider value={{ base: "" }}>
        <SideTreeFolderNode name="Proyects" base="/proyects">
          <SideTreeFileNode href="/nasgar" text="Nasgar Network" icon="爵" />
          <SideTreeFileNode href="/densky" text="Densky" icon="ﯤ" />
          <SideTreeFileNode href="/rusky" text="Rusky" icon="" />
          <SideTreeFileNode href="/sky-any" text="Sky - Any" icon="" />
          <SideTreeFileNode
            href="/hampton-hair-salon"
            text="Hampton Hair Salon"
            icon="爵"
          />
        </SideTreeFolderNode>

        <SideTreeFolderNode name="Folder 1" base="/folder1">
          <SideTreeFileNode href="#" text="File 2" />
        </SideTreeFolderNode>

        <SideTreeFileNode href="/" text="index" icon="" />
        <SideTreeFileNode href="#" text="File 4" />
      </SideTreeFolderContext.Provider>
    </div>
  );
}