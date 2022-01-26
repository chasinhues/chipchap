import { BsCodeSlash } from "react-icons/bs";
import { EditorComponent } from "../types";
import ToolbarButton from "./ToolbarButton";

const CodeBlockTool: EditorComponent = ({ editor }) => {
  return (
    <ToolbarButton
      label="Codeblock"
      // @ts-ignore
      onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      isActive={editor.isActive("codeBlock")}
      icon={<BsCodeSlash />}
      disabled={!editor.isEditable}
    />
  );
};

export default CodeBlockTool;
