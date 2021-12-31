import { Stack } from "@chakra-ui/react";
import { EditorContent, Editor as TiptapEditor } from "@tiptap/react";
import { Toolbar } from "./Toolbar";

export type Menu = null | "fixed"; // | "bubble" | "floating";

export interface EditorProps {
  editor: TiptapEditor | null;
  menu?: Menu;
}

export const Editor = ({ editor, menu = "fixed" }: EditorProps) => {
  if (!editor) {
    return null;
  }
  return (
    <Stack>
      {menu === "fixed" ? <Toolbar editor={editor} /> : null}
      <EditorContent editor={editor} />
    </Stack>
  );
};
