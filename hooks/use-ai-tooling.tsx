import { ContinueWritingBlock } from "@/types/editor_block_types";
import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { ReactSlashMenuItem } from "@blocknote/react";
import { PenLine } from "lucide-react";

export const useAiTooling = () => {
  const insertContinueWritingBlock = (editor: BlockNoteEditor) => {
    const currentBlock = editor.getTextCursorPosition().block;

    const continueWritingBlock: ContinueWritingBlock = {
      type: "aiToolBar",
    };

    editor.insertBlocks([continueWritingBlock], currentBlock, "before");
  };

  const insertContinueWritingItem: ReactSlashMenuItem = {
    name: "AI Tool Bar",
    execute: insertContinueWritingBlock,
    aliases: ["ai", "AI"],
    group: "Task Spare AI",
    icon: <PenLine size={18} />,
    hint: "Inserts a block below your current content, allowing you to continue writing seamlessly.",
  };

  return { listOfCustomAiToolingBackSlashItems: [insertContinueWritingItem] };
};
