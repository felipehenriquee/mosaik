import Logo from "@/components/General/Logo/Logo";
import UploadImage from "./UploadImage/UploadImage";

const Home = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center min-h-[200px] h-[20vh]">
        <Logo size={90} />
        <h2 className="ml-4 mt-[-20px] text-[16px] font-bold text-justify">
          Crie mosaicos com suas imagens
          <br></br>e gere PDFs prontos para impressão.
        </h2>
      </div>
      <div className="w-full flex justify-center items-center mt-5"> 
        <UploadImage />
      </div>
    </div>
  );
};

export default Home;
