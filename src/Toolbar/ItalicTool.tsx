import { BsTypeItalic } from "react-icons/bs";
import { WithEditor } from "../types";
import ToolbarButton from "./ToolbarButton";

const ItalicTool = ({ editor }: WithEditor) => {
  return (
    <ToolbarButton
      label="Italic"
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
