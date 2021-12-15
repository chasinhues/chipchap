import { BsCode } from "react-icons/bs";
import { WithEditor } from "../types";
import ToolbarButton from "./ToolbarButton";

const CodeTool = ({ editor }: WithEditor) => {
  return (
    <ToolbarButton
      label="Code"
      onClick={() => editor?.chain().focus().toggleCode().run()}
      isActive={editor?.isActive("code")}
      icon={<BsCode />}
      disabled={!editor?.isEditable}
    />
  );
};

export default CodeTool;
