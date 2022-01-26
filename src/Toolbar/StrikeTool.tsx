import { BsTypeStrikethrough } from "react-icons/bs";
import { EditorComponent } from "../types";
import ToolbarButton from "./ToolbarButton";

const StrikeTool: EditorComponent = ({ editor }) => {
  return (
    <ToolbarButton
      label="Strike"
      // @ts-ignore
      onClick={() => editor.chain().focus().toggleStrike().run()}
      isActive={editor.isActive("strike")}
      icon={<BsTypeStrikethrough />}
      disabled={!editor.isEditable}
    />
  );
};

export default StrikeTool;
