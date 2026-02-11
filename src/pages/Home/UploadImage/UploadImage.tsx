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

  const handleDeletePage = (index: number) => {
    setPages((prevPages) => {
      const newPages = [...prevPages];
      newPages.splice(index, 1);
      return newPages;
    });
  };

  const handleViewPage = (index: number) => {
    console.log("Viewing page", index);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="w-full  flex items-center justify-center">
        <RButton
          variant="contained"
          color="white"
          title="Upload de Imagens"
          onClick={handleUploadClick}
          background={colors.blue}
        />
        <RButton
          variant="iconButton"
          color={colors.black}
          title="Configurações de página para impressão"
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

      {pages.length > 0 && (
        <div className="custom-scroll relative mt-2 overflow-auto min-h-105 max-h-[63vh]">
          <ListPages
            pages={pages}
            onDelete={handleDeletePage}
            onView={handleViewPage}
          />
          <div className="sticky bottom-0 w-full flex justify-end p-2">
            <RButton
              variant="contained"
              color={colors.white}
              title="Gerar PDF"
              onClick={() => {}}
              background={colors.orange}
            />
          </div>
        </div>
      )}
      {pages.length === 0 && (
        <div className="flex items-center justify-center h-40">
          <p className="text-gray-500">Nenhuma imagem carregada</p>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
