import { BsListUl } from "react-icons/bs";
import { EditorComponent } from "../types";
import ToolbarButton from "./ToolbarButton";

const UnorderedListTool: EditorComponent = ({ editor }) => {
  return (
    <ToolbarButton
      label="Bullet list"
      // @ts-ignore
      onClick={() => editor.chain().focus().toggleBulletList().run()}
      isActive={editor.isActive("bulletList")}
      icon={<BsListUl />}
      disabled={!editor.isEditable}
    />
  );
};

export default UnorderedListTool;
