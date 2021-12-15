import { BsListUl } from "react-icons/bs";
import { WithEditor } from "../types";
import ToolbarButton from "./ToolbarButton";

const UnorderedListTool = ({ editor }: WithEditor) => {
    return (
        <ToolbarButton
            label="Bullet list"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            isActive={editor.isActive("bulletList")}
            icon={<BsListUl />}
            disabled={!editor.isEditable}
        />
    );
};

export default UnorderedListTool;
