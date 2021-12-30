# `chipchap`

A Chakra-based Tiptap editor.

# API design

## Configure the editor instance

You configure the editor instance the same way, via Tiptap's `useEditor`.

## Choose which menu to render

Currently only the fixed menu (or no menu) are supported. In the future we'll add support for the bubble menu and floating menus, but you can do that yourself for now.

## Style the editor in the Chakra theme

Use the standard `Prosemirror` classes to target the editor via the Chakra theme.

```jsx
import { useEditor } from "chipchap";

export const MyComponent = () => {
  const editor = useEditor();
  return <Editor editor={editor} menu="fixed" />;
};
```

# Roadmap

1. ~~supports tiptap starterkit extensions (bold, italic, strike, code, text, h1, h2, h3, bullet list, ordered list, code block, block quote, horizontal rule)~~
1. ~~support fixed menu~~
1. ~~support no menu~~
1. ~~support every extension in starterkit~~
1. add a way to style the editor, ideally through the consumers chakra theme
1. code and codeblock styling (highlight/lowlight?)
1. support floating and bubble menus
1. add support for other simple extensions (link)
