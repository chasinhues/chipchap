import { BsLink45Deg } from "react-icons/bs";
import { WithEditor } from "../types";
import ToolbarButton from "./ToolbarButton";

const LinkTool = ({ editor }: WithEditor) => {
    const handleToggleLink = () => {
        if (editor.isActive("link")) {
            editor.chain().focus().unsetLink().run();
        } else {
            const url = window.prompt("Link URL");
            if (url) editor.chain().focus().setLink({ href: url }).run();
        }
    };

    return (
        <ToolbarButton
            label="Insert link"
            onClick={handleToggleLink}
            isActive={editor.isActive("link")}
            icon={<BsLink45Deg />}
            disabled={!editor.isEditable}
        />
    );
};

export default LinkTool;
