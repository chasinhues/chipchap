import { BsTypeItalic } from "react-icons/bs";
import { EditorComponent } from "../types";
import ToolbarButton from "./ToolbarButton";

const ItalicTool: EditorComponent = ({ editor }) => {
  return (
    <ToolbarButton
      label="Italic"
      // @ts-ignore
      onClick={() => editor.chain().focus().toggleItalic().run()}
      isActive={editor.isActive("italic")}
      icon={<BsTypeItalic />}
      disabled={!editor.isEditable}
    >
      I
    </ToolbarButton>
  );
};

export default ItalicTool;
