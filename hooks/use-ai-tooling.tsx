import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { ReactSlashMenuItem } from "@blocknote/react";
import { PenLine } from "lucide-react";

export const useAiTooling = () => {
  const insertHelloWorld = (editor: BlockNoteEditor) => {
    const currentBlock: Block = editor.getTextCursorPosition().block;

    const continueWritingBlock: PartialBlock = {
      type: "continueWriting",
      // content: [{ type: "text", text: "Hello World", styles: { f: true } }],
    };

    editor.insertBlocks([continueWritingBlock], currentBlock, "before");
  };

  const insertContinueWritingItem: ReactSlashMenuItem = {
    name: "Continue writing",
    execute: insertHelloWorld,
    aliases: ["writing", "cw"],
    group: "Task Spare AI",
    icon: <PenLine size={18} />,
    hint: "Inserts a block below your current content, allowing you to continue writing seamlessly.",
  };

  return { listOfCustomAiToolingBackSlashItems: [insertContinueWritingItem] };
};
