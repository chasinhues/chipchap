import { MdHorizontalRule } from "react-icons/md";
import { WithEditor } from "../types";
import ToolbarButton from "./ToolbarButton";

const HorizontalRuleTool = ({ editor }: WithEditor) => {
  return (
    <ToolbarButton
      label="Horizontal rule"
      onClick={() => editor.chain().focus().setHorizontalRule().run()}
      icon={<MdHorizontalRule />}
      disabled={!editor.isEditable}
    />
  );
};

export default HorizontalRuleTool;
