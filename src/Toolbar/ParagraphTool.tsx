import { BsType } from "react-icons/bs";
import { EditorComponent } from "../types";
import ToolbarButton from "./ToolbarButton";

const ParagraphTool: EditorComponent = ({ editor }) => {
  return (
    <ToolbarButton
      label="Normal text"
      // @ts-ignore
      onClick={() => editor.chain().focus().setParagraph().run()}
      isActive={editor.isActive("paragraph")}
      icon={<BsType />}
      disabled={!editor.isEditable}
    />
  );
};

export default ParagraphTool;
