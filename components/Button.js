const Button = ({ className, onClick, children }) => {
  return (
    <button
      className={`${className} py-2 px-4 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;