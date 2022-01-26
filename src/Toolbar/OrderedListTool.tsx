import { BsListOl } from "react-icons/bs";
import { EditorComponent } from "../types";
import ToolbarButton from "./ToolbarButton";

const OrderedListTool: EditorComponent = ({ editor }) => {
  return (
    <ToolbarButton
      label="Numbered list"
      // @ts-ignore
      onClick={() => editor.chain().focus().toggleOrderedList().run()}
      isActive={editor.isActive("orderedList")}
      icon={<BsListOl />}
      disabled={!editor.isEditable}
    />
  );
};

export default OrderedListTool;
