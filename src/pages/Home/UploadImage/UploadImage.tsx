import RButton from "@/components/General/RButton";
import { colors } from "@/utils/variables/colors";
import { rIcons } from "@/utils/variables/icons";
import { useRef, useState } from "react";
import ListPages from "./ListPrintPages";

const UploadImage = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [pages, setPages] = useState<string[][]>([]);
  const IMAGES_PER_PAGE = 9;

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  const organizeIntoPages = (allImages: string[]) => {
    const newPages: string[][] = [];

    for (let i = 0; i < allImages.length; i += IMAGES_PER_PAGE) {
      newPages.push(allImages.slice(i, i + IMAGES_PER_PAGE));
    }

    return newPages;
  };
  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file),
    );

    setPages((prevPages) => {
      const flattened = [...prevPages.flat(), ...newImages];
      return organizeIntoPages(flattened);
    });
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="w-full flex items-center justify-center">
        <RButton
          variant="contained"
          color="white"
          title="Upload de Imagens"
          onClick={handleUploadClick}
        />
        <RButton
          variant="iconButton"
          color={colors.black}
          title="Configurações de página"
          onClick={() => {}}
          startIcon={rIcons.settings}
        />
      </div>
      <input
        type="file"
        multiple
        accept="image/*"
        ref={fileInputRef}
        hidden
        onChange={handleFilesChange}
      />
      <div>
        <ListPages pages={pages} />
      </div>
    </div>
  );
};

export default UploadImage;
