"use client";

import { ChangeEvent, useState } from "react";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useCoverImage } from "@/hooks/use-cover-image";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useEdgeStore } from "@/lib/edgestore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UnsplashImage } from "../unsplash-image";
import { useWebScrap } from "@/hooks/use-web-scrap";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { CopyIcon, Image } from "lucide-react";
import LinkPreview from "../link-preview";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { toast } from "sonner";
import { scrapeAndConstructData } from "@/lib/actions";

export const WebScrapingModal = () => {
  const webscrap = useWebScrap();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [url, setUrl] = useState('');

  const onClose = () => {
    webscrap.onClose();
  };

  const onScraping = async () => {
    setIsSubmitting(true)
    // Scrape the Data 
    const promise = scrapeAndConstructData(url).then((value) => {
      console.log("value", value)
      setIsSubmitting(false)
      onClose();
    });
    toast.promise(promise, {
      loading: "Scrapping the data...",
      success: "Data has been scraped",
      error: "Failed to scrape the data",
    });

  };

  const handleonChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    const url = e.target.value;
    setUrl(url);
  }

  return (
    <Dialog open={webscrap.isOpen} onOpenChange={webscrap.onClose}>
      <DialogContent className="dark:text-white">
        <DialogHeader>
          <DialogTitle>Web Scraping Tool</DialogTitle>
          <DialogDescription>
            Extract content from any website using this tool.
          </DialogDescription>
        </DialogHeader>
        <Separator className="my-4" />
        <div className="grid flex-1 gap-2">
          <LinkPreview url={url} />
          <Label htmlFor="link" className="sr-only">
            Link
          </Label>
          <div className="flex items-center space-x-2">
            <Input
              id="link"
              type="text"
              placeholder="Enter the website URL that you need to scrape"
              onChange={handleonChange}
            />
            <Button type="submit" size="sm" className="px-3" onClick={onScraping}>
              Scrape Data
            </Button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
};
