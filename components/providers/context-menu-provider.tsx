import { ContextmenuContent } from "../context-menu-content";
import { ContextMenu, ContextMenuTrigger } from "../ui/context-menu";

interface ContextMenuProviderProps {
  children: React.ReactNode;
}

export const ContextMenuProvider = ({ children }: ContextMenuProviderProps) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextmenuContent />
    </ContextMenu>
  );
};
