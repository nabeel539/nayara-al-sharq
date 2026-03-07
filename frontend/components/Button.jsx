import { RiArrowRightUpLine } from "react-icons/ri";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[210px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] group bg-accent hover:shadow-lg hover:shadow-accent/50 transition-shadow duration-300 cursor-pointer"
    >
      <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase select-none">
        {text}
      </div>
      <div className="w-11 h-11 bg-primary flex items-center justify-center">
        <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
      </div>
    </button>
  );
};

export default Button;
