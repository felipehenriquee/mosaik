import { colors } from "@/utils/variables/colors";
interface LogoProps {
  color?: string;
  size?: number;
}
const Logo = ({ color, size = 24 }: LogoProps) => {
  const textStyle = {
    color: color || colors.orange,
    fontWeight: "bold",
    fontSize: `${size}px`,
    letterSpacing: "0.5px",
  };
  const iStyle = {
    fontSize: `${size - 3}px`,
  };
  return (
    <div>
      <span style={textStyle} className="font-fjalla">
        MOSA
        <span style={iStyle}>i</span>
        <span className="inline-block scale-x-[-1]">K</span>
      </span>
    </div>
  );
};

export default Logo;
