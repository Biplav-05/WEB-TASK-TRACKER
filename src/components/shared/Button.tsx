type ButtonProp = {
  text: string | JSX.Element;
  className?: string;
  onClick: () => void;
};
const Button = ({ text, className = "", onClick }: ButtonProp) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${className} text-white bg-gradient-to-r from-blue-500 to-purple-600 font-medium rounded-lg text-sm px-4 py-2 text-center shadow-lg hover:translate-y-1 hover:shadow-none`}
    >
      {text}
    </button>
  );
};

export default Button;
