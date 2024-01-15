"use client";

import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";

interface UnsplashImageProps {
  onChange: (url: string) => void;
}

export const UnsplashImage = ({ onChange }: UnsplashImageProps) => {
  const [isUnsplashDataLoading, setUnsplashDataLoading] = useState<boolean>(false);
  const [unsplashData, setUnsplashData] = useState<any>([]);

  const unsplash = createApi({
    accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY ?? "",
  });

  const getUnsplashBanner = async () => {
    setUnsplashDataLoading(true);
    const data = await unsplash.search.getPhotos({
      query: "Landscape Images",
      perPage: 100,
      page: 5,
      orientation: "landscape",
    });
    setUnsplashData(data?.response?.results);
    setUnsplashDataLoading(false);
  };

  useEffect(() => {
    getUnsplashBanner();
  }, []);

  return (
    <div>
      {isUnsplashDataLoading && (
        <div className="grid grid-cols-3 gap-3">
          {[...Array(6)].map((item) => (
            <Skeleton key={item} className="w-full h-[8vh]" />
          ))}
        </div>
      )}
      <div className="grid grid-cols-3 gap-3 max-h-[30vh] overflow-auto">
        {unsplashData.map((imageData: any) => (
          <Image
            key={imageData?.id}
            src={imageData?.links?.download}
            alt={imageData?.alt_description}
            className="!w-full !h-[8vh] cursor-pointer rounded-sm "
            width={100}
            height={25}
            onClick={() => {
              onChange(imageData?.links?.download);
            }}
          />
        ))}
      </div>
    </div>
  );
};
