import { defaultProps } from "@blocknote/core";
import { createReactBlockSpec } from "@blocknote/react";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { Input } from "./ui/input";

export const AiToolBarBlock: any = createReactBlockSpec(
  {
    type: "aiToolBar",
    propSchema: {
      ...defaultProps,
      font: {
        default: "Comic Sans MS",
      },
      generatedTextContent: {
        default: "",
      },
    },
    content: "none",
  },

  {
    render: ({ block, contentRef }) => {
      return (
        <div className="flex flex-row  justify-between ">
          <div className="flex items-center gap-2 flex-1">
            <Sparkles />
            <Input
              placeholder="Ask AI to write anything...."
              className="bg-transparent border-none outline-none !ring-0 !ring-offset-0 "
            />
          </div>
          <Button
            onClick={() => {}}
            className="bg-gradient-to-r from-purple-400 to-indigo-600 text-white font-bold py-2 px-4 rounded-full flex flex-row justify-center gap-2 cursor-pointer"
          >
            <Sparkles />
            Generate Content
          </Button>
        </div>
      );
    },
    parse: (element) => {
      return {};
    },
  }
);
