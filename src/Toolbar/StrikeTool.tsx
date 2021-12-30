import { BsTypeStrikethrough } from "react-icons/bs";
import { WithEditor } from "../types";
import ToolbarButton from "./ToolbarButton";

const StrikeTool = ({ editor }: WithEditor) => {
  return (
    <ToolbarButton
      label="Strike"
      onClick={() => editor.chain().focus().toggleStrike().run()}
      isActive={editor.isActive("strike")}
      icon={<BsTypeStrikethrough />}
      disabled={!editor.isEditable}
    />
  );
};

export default StrikeTool;
