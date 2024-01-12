import { Block, InlineContent } from "@blocknote/core";

type DefaultProps = {
  backgroundColor?: "default";
  textColor?: "default";
  textAlignment?: "left" | "center" | "right" | "justify";
};

export type ContinueWritingBlock = {
  id: string;
  type: "aiToolBar";
  props: {
    generatedTextContent: "";
  } & Omit<DefaultProps, "textAlignment">;
  content: InlineContent[];
  children: Block[];
};
