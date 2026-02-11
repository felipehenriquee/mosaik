import {
  Container,
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ListImages from "./ListImage";
import PageOptions from "./PageOptions";

interface ListPagesProps {
  pages: string[][];
  onDelete?: (index: number) => void;
  onView?: (index: number) => void;
}

const ListPages = ({ pages, onDelete, onView }: ListPagesProps) => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const getCols = () => {
    if (isXs) return 1;
    if (isSm) return 2;
    if (isMd) return 3;
    return 4;
  };

  return (
    <Container className=" flex-wrap">
      <ImageList cols={getCols()} gap={12} className=" !p-4">
        {pages.map((page, index) => (
          <ImageListItem key={index}>
            <div
              className="group w-62.5 h-83.5 cursor-pointer bg-white shadow-md 
                flex flex-wrap items-start justify-center
                transition-transform duration-200 ease-in-out
                hover:scale-105 relative"
              style={{ padding: "11px" }}
            >
              <div className="hidden w-full h-full group-hover:block absolute top-0 right-0 z-1">
                <PageOptions
                  index={index}
                  onDelete={onDelete}
                  onView={onView}
                />
              </div>
              <ListImages images={page} />
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default ListPages;
