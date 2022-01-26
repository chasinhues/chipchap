import { Editor as TiptapEditor } from "@tiptap/react";
export declare type Menu = null | "fixed";
export interface EditorProps {
    editor: TiptapEditor | null;
    menu?: Menu;
}
export declare const Editor: ({ editor, menu }: EditorProps) => JSX.Element | null;
