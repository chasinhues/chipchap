import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Editor } from "../src/Editor";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default {
  title: "Editor",
  component: Editor,
} as ComponentMeta<typeof Editor>;

export const Primary: ComponentStory<typeof Editor> = () => {
  const editor = useEditor({ extensions: [StarterKit] });
  return <Editor editor={editor} />;
};
