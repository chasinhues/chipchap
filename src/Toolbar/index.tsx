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
import { EditorComponent } from "../types";
import { Wrap, Divider, Skeleton } from "@chakra-ui/react";

export const Toolbar: EditorComponent = ({ editor }) => {
  if (!editor) {
    return <ToolbarSkeleton />;
  }
  return (
    <Wrap shouldWrapChildren>
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
