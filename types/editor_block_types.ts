import { Block, InlineContent } from "@blocknote/core";

type DefaultProps = {
  backgroundColor?: "default";
  textColor?: "default";
  textAlignment?: "left" | "center" | "right" | "justify";
};

export type ContinueWritingBlock = {
  id: string;
  type: "continueWriting";
  props: DefaultProps;
  content: InlineContent[];
  children: Block[];
};
