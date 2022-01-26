import { BsTypeH1, BsTypeH2, BsTypeH3 } from "react-icons/bs";
import { EditorComponent } from "../types";
import ToolbarButton from "./ToolbarButton";

export const HeadingOneTool: EditorComponent = ({ editor }) => {
  return (
    <ToolbarButton
      label="Heading 1"
      // @ts-ignore
      onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      isActive={editor.isActive("heading", { level: 1 })}
      icon={<BsTypeH1 />}
      disabled={!editor.isEditable}
    />
  );
};

export const HeadingTwoTool: EditorComponent = ({ editor }) => {
  return (
    <ToolbarButton
      label="Heading 2"
      // @ts-ignore
      onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      isActive={editor.isActive("heading", { level: 2 })}
      icon={<BsTypeH2 />}
      disabled={!editor.isEditable}
    />
  );
};

export const HeadingThreeTool: EditorComponent = ({ editor }) => {
  return (
    <ToolbarButton
      label="Heading 3"
      // @ts-ignore
      onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      isActive={editor.isActive("heading", { level: 3 })}
      icon={<BsTypeH3 />}
      disabled={!editor.isEditable}
    />
  );
};
