/// <reference types="react" />
import { Editor } from "@tiptap/react";
export interface WithEditor {
    editor: Editor;
}
export declare type EditorComponent = ({ editor }: WithEditor) => JSX.Element;
