import { Container, ImageList, ImageListItem } from "@mui/material";
import ListImages from "./ListImage";

interface ListPagesProps {
  pages: string[][];
}

const ListPages = ({ pages }: ListPagesProps) => {
  return (
    <Container className="mt-10">
      <ImageList cols={4} gap={12} className=" !p-4">
        {pages.map((page, index) => (
          <ImageListItem key={index}>
            <div
              className="w-62.5 h-83.5 cursor-pointer bg-white shadow-md 
                flex flex-wrap items-center justify-center
                transition-transform duration-200 ease-in-out
                hover:scale-105"
                style={{ padding: "11px" }}
            >
              <ListImages images={page} />
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default ListPages;
