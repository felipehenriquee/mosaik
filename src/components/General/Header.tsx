import Logo from "./Logo/Logo";

const Header = () => {
  return (
    <div className="w-full h-16 bg-orange-100 flex items-center p-4 shadow-sm">
      <Logo size={32} />
    </div>
  );
};

export default Header;
