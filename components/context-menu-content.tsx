import React from "react";
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "./ui/context-menu";
import { useWebScrap } from "@/hooks/use-web-scrap";

export const ContextmenuContent = () => {
  const webscrap = useWebScrap();

  return (
    <ContextMenuContent className="w-64">
      {/* <ContextMenuItem>Create New Page</ContextMenuItem> */}
      <ContextMenuSub>
        <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          {/* Web Scraping Section */}
          <ContextMenuItem onClick={() => webscrap.onOpen()}>Scrape Data</ContextMenuItem>
          <ContextMenuItem>Scrape Images</ContextMenuItem>
          <ContextMenuSeparator />

          {/* AI Integration Section */}
          <ContextMenuItem>AI Summarize</ContextMenuItem>
          <ContextMenuItem>AI Tagging</ContextMenuItem>
          <ContextMenuSeparator />
        </ContextMenuSubContent>
      </ContextMenuSub>
    </ContextMenuContent>
  );
};
