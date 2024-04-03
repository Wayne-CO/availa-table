import ImageList, { ImageListProps } from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import * as React from "react";

type Props = {
  photos: string[];
  photoWidth: number;
  photoHeight: number;
  imageListProps?: Pick<ImageListProps, "gap" | "cols" | "sx">;
};

export default function PhotoList({
  photos,
  photoWidth,
  photoHeight,
  imageListProps,
}: Props) {
  return (
    <ImageList {...imageListProps}>
      {photos.map((photo) => (
        <ImageListItem key={photo}>
          <Image src={photo} alt="" width={photoWidth} height={photoHeight} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
