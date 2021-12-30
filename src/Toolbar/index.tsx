import { Divider, Skeleton, Wrap, WrapProps } from "@chakra-ui/react";
import { WithEditor } from "../types";
import BoldTool from "./BoldTool";
import CodeBlockTool from "./CodeBlockTool";
import CodeTool from "./CodeTool";
import ItalicTool from "./ItalicTool";
import ParagraphTool from "./ParagraphTool";
import BlockQuoteTool from "./BlockQuoteTool";
import UnorderedListTool from "./UnorderedListTool";
import OrderedListTool from "./OrderedListTool";
import HorizontalRuleTool from "./HorizontalRuleTool";
import {
  HeadingOneTool,
  HeadingThreeTool,
  HeadingTwoTool,
} from "./HeadingTool";
import StrikeTool from "./StrikeTool";

interface ToolbarProps extends WithEditor, WrapProps {}

export const Toolbar = ({ editor, ...wrapProps }: ToolbarProps) => {
  if (!editor) {
    return <ToolbarSkeleton />;
  }
  return (
    <Wrap shouldWrapChildren {...wrapProps}>
      <ParagraphTool editor={editor} />
      <HeadingOneTool editor={editor} />
      <HeadingTwoTool editor={editor} />
      <HeadingThreeTool editor={editor} />
      <Divider orientation="vertical" />

      {/* Inline styles */}
      <BoldTool editor={editor} />
      <ItalicTool editor={editor} />
      <StrikeTool editor={editor} />
      <CodeTool editor={editor} />
      <Divider orientation="vertical" />

      {/* Block styles */}
      <UnorderedListTool editor={editor} />
      <OrderedListTool editor={editor} />
      <CodeBlockTool editor={editor} />
      <BlockQuoteTool editor={editor} />
      <HorizontalRuleTool editor={editor} />
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
