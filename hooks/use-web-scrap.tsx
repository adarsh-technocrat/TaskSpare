import { create } from "zustand";

type WebScrapeStore = {
  url?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useWebScrap = create<WebScrapeStore>((set) => ({
  url: undefined,
  isOpen: false,
  onOpen: () => set({ isOpen: true, url: undefined }),
  onClose: () => set({ isOpen: false, url: undefined }),
}));
