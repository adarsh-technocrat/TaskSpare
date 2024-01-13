import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { Input } from "./ui/input";
import AiToolBar from "./ai-tool-bar";

export const AiToolBarBlock: any = createReactBlockSpec(
  {
    type: "aiToolBar",
    propSchema: {
      ...defaultProps,
      font: {
        default: "Comic Sans MS",
      },
    },
    content: "none",
  },

  {
    render: ({ block, contentRef }) => {
      return <AiToolBar />;
    },
    parse: (element) => {
      return {};
    },
  }
);
