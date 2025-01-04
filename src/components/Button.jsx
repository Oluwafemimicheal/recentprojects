/* eslint-disable react/prop-types */
export const Button = ({ text = "Button" }) => {
  return (
    <button className="bg-yellow-200 p-2 rounded-md px-4 hover:bg-yellow-200/80">
      {text}
    </button>
  );
};
