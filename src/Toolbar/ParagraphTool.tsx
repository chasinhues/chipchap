import { BsType } from "react-icons/bs";
import { WithEditor } from "../types";
import ToolbarButton from "./ToolbarButton";

const ParagraphTool = ({ editor }: WithEditor) => {
  return (
    <ToolbarButton
      label="Normal text"
      onClick={() => editor.commands.setParagraph()}
      isActive={editor.isActive("paragraph")}
      icon={<BsType />}
      disabled={!editor.isEditable}
    />
  );
};

export default ParagraphTool;
