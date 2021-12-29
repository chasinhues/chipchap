import { BsTypeBold } from "react-icons/bs";
import { WithEditor } from "../types";
import ToolbarButton from "./ToolbarButton";

const BoldTool = ({ editor }: WithEditor) => {
  return (
    <ToolbarButton
      label="Bold"
      onClick={() => editor.commands.toggleBold()}
      isActive={editor.isActive("bold")}
      icon={<BsTypeBold />}
      disabled={!editor.isEditable}
    />
  );
};

export default BoldTool;
