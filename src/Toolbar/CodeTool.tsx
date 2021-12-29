import { BsCode } from "react-icons/bs";
import { WithEditor } from "../types";
import ToolbarButton from "./ToolbarButton";

const CodeTool = ({ editor }: WithEditor) => {
  return (
    <ToolbarButton
      label="Code"
      onClick={() => editor.commands.toggleCode()}
      isActive={editor.isActive("code")}
      icon={<BsCode />}
      disabled={!editor.isEditable}
    />
  );
};

export default CodeTool;
