import { Divider, Skeleton, Wrap, WrapProps } from "@chakra-ui/react";
import BoldTool from "./BoldTool";
import CodeBlockTool from "./CodeBlockTool";
import CodeTool from "./CodeTool";
import ItalicTool from "./ItalicTool";
import ParagraphTool from "./ParagraphTool";
import BlockQuoteTool from "./BlockQuoteTool";
import UnorderedListTool from "./UnorderedListTool";
import OrderedListTool from "./OrderedListTool";
import LinkTool from "./LinkTool";
import { WithEditor } from "../types";

interface ToolbarProps extends WithEditor, WrapProps {}

export const Toolbar = ({ editor, ...wrapProps }: ToolbarProps) => {
  if (!editor) {
    return <ToolbarSkeleton />;
  }
  return (
    <Wrap shouldWrapChildren {...wrapProps}>
      {/*
       * Typography tools
       * TODO replace with typography dropdown
       */}
      <ParagraphTool editor={editor} />
      <Divider orientation="vertical" />

      {/* Inline styles */}
      <BoldTool editor={editor} />
      <ItalicTool editor={editor} />
      <CodeTool editor={editor} />
      <LinkTool editor={editor} />
      <Divider orientation="vertical" />

      {/* Block styles */}
      <UnorderedListTool editor={editor} />
      <OrderedListTool editor={editor} />
      <CodeBlockTool editor={editor} />
      <BlockQuoteTool editor={editor} />
    </Wrap>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <Wrap shouldWrapChildren data-testid="toolbar-skeleton">
      <Skeleton height="8" width="28" />
      <Divider orientation="vertical" />
      <Skeleton height="8" width="28" />
      <Divider orientation="vertical" />
      <Skeleton height="8" width="28" />
      <Divider orientation="vertical" />
      <Skeleton boxSize="8" />
    </Wrap>
  );
};
