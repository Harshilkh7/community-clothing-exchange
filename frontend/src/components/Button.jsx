// src/components/Button.jsx
const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
