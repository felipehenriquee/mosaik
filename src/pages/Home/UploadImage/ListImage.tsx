import { ImageList, ImageListItem } from "@mui/material";
interface ListImagesProps {
  images: string[];
}

const ListImages = ({ images }: ListImagesProps) => {
  return (
    <ImageList cols={3} gap={0}>
      {images.map((img, index) => (
        <ImageListItem key={index}>
          <img
            key={index}
            src={img}
            className="w-[60px] h-[83px] object-cover "
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ListImages;
