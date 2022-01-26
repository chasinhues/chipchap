import { GoQuote } from "react-icons/go";
import { EditorComponent } from "../types";
import ToolbarButton from "./ToolbarButton";

const BlockQuoteTool: EditorComponent = ({ editor }) => {
  return (
    <ToolbarButton
      label="Blockquote"
      // @ts-ignore
      onClick={() => editor.chain().focus().toggleBlockquote().run()}
      isActive={editor.isActive("blockquote")}
      icon={<GoQuote />}
      disabled={!editor.isEditable}
    />
  );
};

export default BlockQuoteTool;
