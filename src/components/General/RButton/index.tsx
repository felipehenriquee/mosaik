import { Button, IconButton, Tooltip, type SxProps, type Theme } from "@mui/material";
import type { ReactNode } from "react";
import { colors } from "@/utils/variables/colors";
import { Icon } from "@iconify/react";

interface RButtonProps {
  background?: string;
  color?: string;
  children?: ReactNode;
  title?: string;
  endIcon?: string;
  startIcon?: string;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained" | "iconButton";
}
const RButton = ({
  background = colors.orange,
  color = colors.black,
  title,
  children,
  variant = "contained",
  endIcon,
  startIcon,
  onClick,
}: RButtonProps) => {
  const buttonStyle: SxProps<Theme> = {
    backgroundColor: variant === "contained" ? background : "transparent",
    color: color,
    borderColor: background,
    "&:hover": {
      backgroundColor:
        variant === "contained" ? background : "rgba(0,0,0,0.04)",
      borderColor: background,
      filter: "brightness(0.9)", // Escurece levemente
    },
  };
  if (variant === "iconButton") {
    return (
      <Tooltip title={title || "Botão"}>
        <IconButton sx={buttonStyle} onClick={onClick}>
          <Icon icon={startIcon || endIcon || "mdi:help-circle"} width={22} />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    <Button
      sx={buttonStyle}
      variant={variant}
      onClick={onClick}
      className="!normal-case"
      endIcon={endIcon ? <Icon icon={endIcon} width={20} /> : undefined}
      startIcon={startIcon ? <Icon icon={startIcon} width={20} /> : undefined}
    >
      {children || title}
    </Button>
  );
};

export default RButton;
