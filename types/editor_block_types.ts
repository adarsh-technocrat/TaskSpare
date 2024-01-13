import { Block, BlockNoteEditor, InlineContent } from "@blocknote/core";

type DefaultProps = {
  backgroundColor?: "default";
  textColor?: "default";
  textAlignment?: "left" | "center" | "right" | "justify";
};

export type ContinueWritingBlock = {
  id: string;
  type: "aiToolBar";
  props: DefaultProps;
  content: InlineContent[];
  children: Block[];
};
