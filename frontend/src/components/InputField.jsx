// src/components/InputField.jsx
const InputField = ({ label, type = "text", ...props }) => {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        {...props}
      />
    </div>
  );
};

export default InputField;
