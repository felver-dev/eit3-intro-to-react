const CustomButton = ({ title, bgColor, handleClick, children }) => {
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: bgColor ? bgColor : "seagreen" }}
      className="text-white w-50 py-2 rounded-sm transition ease-in-out cursor-pointer"
    >
      {title ? title : "Mon custom button"}

      {children}
    </button>
  );
};

export default CustomButton;
