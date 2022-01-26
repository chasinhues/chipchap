import { MdHorizontalRule } from "react-icons/md";
import { EditorComponent } from "../types";
import ToolbarButton from "./ToolbarButton";

const HorizontalRuleTool: EditorComponent = ({ editor }) => {
  return (
    <ToolbarButton
      label="Horizontal rule"
      // @ts-ignore
      onClick={() => editor.chain().focus().setHorizontalRule().run()}
      icon={<MdHorizontalRule />}
      disabled={!editor.isEditable}
    />
  );
};

export default HorizontalRuleTool;
