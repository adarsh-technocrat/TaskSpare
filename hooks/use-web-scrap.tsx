import { create } from "zustand";

type WebScrapeStore = {
  content?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useWebScrap = create<WebScrapeStore>((set) => ({
  url: undefined,
  isOpen: false,
  onOpen: () => set({ isOpen: true, content: undefined }),
  onClose: () => set({ isOpen: false, content: undefined }),
}));
