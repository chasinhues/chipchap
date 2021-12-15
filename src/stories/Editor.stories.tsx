import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { useEditor, EditorContent, Toolbar } from "../index";
import { Stack } from "@chakra-ui/react";
import StarterKit from "@tiptap/starter-kit";

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
  });
  return (
    <Stack>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </Stack>
  );
};

export default {
  title: "Editor",
  component: Editor,
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args) => <Editor />;
export const Primary = Template.bind({});
