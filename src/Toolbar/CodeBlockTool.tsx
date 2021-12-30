import { BsCodeSlash } from "react-icons/bs";
import { WithEditor } from "../types";
import ToolbarButton from "./ToolbarButton";

const CodeBlockTool = ({ editor }: WithEditor) => {
  return (
    <ToolbarButton
      label="Codeblock"
      onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      isActive={editor.isActive("codeBlock")}
      icon={<BsCodeSlash />}
      disabled={!editor.isEditable}
    />
  );
};

export default CodeBlockTool;
