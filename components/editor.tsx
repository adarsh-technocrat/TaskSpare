"use client";

import { useTheme } from "next-themes";
import { BlockNoteEditor, PartialBlock, defaultBlockSpecs } from "@blocknote/core";
import { BlockNoteView, getDefaultReactSlashMenuItems, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useEdgeStore } from "@/lib/edgestore";
import { useAiTooling } from "@/hooks/use-ai-tooling";
import { AiToolBarBlock } from "./custom_editor_block";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();
  const { listOfCustomAiToolingBackSlashItems } = useAiTooling();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });

    return response.url;
  };

  const customSlashMenuItemList = [
    ...getDefaultReactSlashMenuItems(),
    ...listOfCustomAiToolingBackSlashItems,
  ];

  const blockSpecs: any = {
    ...defaultBlockSpecs,
    aiToolBar: AiToolBarBlock,
  };

  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    onEditorContentChange(editor) {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
    uploadFile: handleUpload,
    slashMenuItems: customSlashMenuItemList,
    blockSpecs: blockSpecs,
    onTextCursorPositionChange(editor) {
      const listOfAddedBlocks = editor.topLevelBlocks;
      const findBlock = listOfAddedBlocks.filter((block) => block.type === "aiToolBar");
      if (findBlock.length > 1) {
        findBlock.shift();
        editor.removeBlocks(findBlock);
      }
    },
  });

  return (
    <div>
      <BlockNoteView editor={editor} theme={resolvedTheme === "dark" ? "dark" : "light"} />
    </div>
  );
};

export default Editor;
