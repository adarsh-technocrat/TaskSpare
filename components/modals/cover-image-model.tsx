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

export const CoverImageModal = () => {
  const params = useParams();
  const update = useMutation(api.documents.update);
  const coverImage = useCoverImage();
  const [file, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { edgestore } = useEdgeStore();

  const onClose = () => {
    setFile(undefined);
    setIsSubmitting(false);
    coverImage.onClose();
  };

  const onChange = async ({
    file,
    unsplashBannerUrl,
  }: {
    file?: File;
    unsplashBannerUrl?: string;
  }) => {
    if (file || unsplashBannerUrl) {
      setIsSubmitting(true);
      setFile(file);
      let res: any = null;
      if (!unsplashBannerUrl && file) {
        res = await edgestore.publicFiles.upload({
          file,
          options: {
            replaceTargetUrl: coverImage.url,
          },
        });
      }
      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res?.url ?? unsplashBannerUrl,
      });

      onClose();
    }
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold dark:text-white">Cover Image</h2>
        </DialogHeader>
        <Tabs defaultValue="upload" className="pt-2">
          <div className="flex flex-row justify-center items-center">
            <TabsList>
              <TabsTrigger value="upload">Upload Cover</TabsTrigger>
              <TabsTrigger value="unsplash">Select From Unsplash</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="upload" className="py-3">
            <SingleImageDropzone
              className="w-full outline-none"
              disabled={isSubmitting}
              value={file}
              onChange={(file) => onChange({ file })}
            />
          </TabsContent>
          <TabsContent value="unsplash" className="py-3">
            <UnsplashImage onChange={(unsplashBannerUrl) => onChange({ unsplashBannerUrl })} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
