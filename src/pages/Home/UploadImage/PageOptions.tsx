import RButton from "@/components/General/RButton";
import { colors } from "@/utils/variables/colors";
import { rIcons } from "@/utils/variables/icons";

interface PageOptionsProps {
  onDelete?: (index: number) => void;
  onView?: (index: number) => void;
  index: number;
}

const PageOptions = ({ onDelete, onView, index }: PageOptionsProps) => {
  return (
    <div className="w-full h-full flex flex-wrap items-end p-2 justify-center">
      <div className="bg-white flex  min-w-[20%] rounded-4xl shadow-md">
        <RButton
          variant="iconButton"
          color={colors.orange}
          title="Visualizar"
          onClick={() => onView && onView(index)}
          startIcon={rIcons.view}
          iconSize={13}
        />
        <RButton
          variant="iconButton"
          color={colors.orange}
          title="Remover"
          onClick={() => onDelete && onDelete(index)}
          startIcon={rIcons.delete}
          iconSize={13}
        />
      </div>
    </div>
  );
};

export default PageOptions;
