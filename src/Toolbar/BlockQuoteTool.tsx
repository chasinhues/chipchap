import { GoQuote } from "react-icons/go";
import { WithEditor } from "../types";
import ToolbarButton from "./ToolbarButton";

const BlockQuoteTool = ({ editor }: WithEditor) => {
  return (
    <ToolbarButton
      label="Blockquote"
      onClick={() => editor?.chain().focus().toggleBlockquote().run()}
      isActive={editor?.isActive("blockquote")}
      icon={<GoQuote />}
      disabled={!editor?.isEditable}
    />
  );
};

export default BlockQuoteTool;
