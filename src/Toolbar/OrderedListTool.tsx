import { BsListOl } from "react-icons/bs";
import { WithEditor } from "../types";
import ToolbarButton from "./ToolbarButton";

const OrderedListTool = ({ editor }: WithEditor) => {
    return (
        <ToolbarButton
            label="Numbered list"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            isActive={editor.isActive("orderedList")}
            icon={<BsListOl />}
            disabled={!editor.isEditable}
        />
    );
};

export default OrderedListTool;
