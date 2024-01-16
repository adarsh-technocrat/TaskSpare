import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Block, BlockFromConfig, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useEffect, useState } from "react";

function AiToolBar(block: BlockFromConfig) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    // if (!block?.props?.url) return;
    setUrl(block?.props?.url ?? "thisis isi i");
  }, []);

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
        onClick={() => {
          setUrl("URL");
        }}
        className="bg-gradient-to-r from-purple-400 to-indigo-600 text-white font-bold py-2 px-4 rounded-full flex flex-row justify-center gap-2 cursor-pointer"
      >
        <Sparkles />
        Generate Content
      </Button>
    </div>
  );
}

export default AiToolBar;
