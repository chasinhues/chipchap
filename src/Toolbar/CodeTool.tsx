import { BsCode } from "react-icons/bs";
import { EditorComponent } from "../types";
import ToolbarButton from "./ToolbarButton";

const CodeTool: EditorComponent = ({ editor }) => {
  return (
    <ToolbarButton
      label="Code"
      // @ts-ignore
      onClick={() => editor.chain().focus().toggleCode().run()}
      isActive={editor.isActive("code")}
      icon={<BsCode />}
      disabled={!editor.isEditable}
    />
  );
};

export default CodeTool;
