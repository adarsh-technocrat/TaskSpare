"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useCoverImage } from "@/hooks/use-cover-image";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useEdgeStore } from "@/lib/edgestore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UnsplashImage } from "../unsplash-image";
import { useWebScrap } from "@/hooks/use-web-scrap";

export const WebScrapingModal = () => {
  const webscrap = useWebScrap();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClose = () => {
    webscrap.onClose();
  };

  const onScraping = async () => {
    onClose();
  };

  return (
    <Dialog open={webscrap.isOpen} onOpenChange={webscrap.onClose}>
      <DialogContent className="dark:text-white">
        <DialogHeader>
          <h2 className="text-left text-lg font-semibold dark:text-white">
            Scrape Content From Web
          </h2>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
