import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Editor } from "../Editor";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default {
  title: "Editor",
  component: Editor,
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args) => <Editor {...args} />;
export const Primary = () => {
  const editor = useEditor({ extensions: [StarterKit] });
  return <Editor editor={editor} />;
};
