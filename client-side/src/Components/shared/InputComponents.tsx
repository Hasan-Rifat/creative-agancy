import React from "react";

type InputComponentsProps = {
  type: string;
  placeholder: string;
  name: string;
  className?: string;
};

const InputComponents: React.FC<InputComponentsProps> = ({
  type,
  placeholder,
  name,
  className,
}: InputComponentsProps) => {
  return (
    <input
      className={`${className} p-[20px] outline-0 font-light rounded-[4px] tracking-[0.396px] block w-full mb-[16px] ${
        type === "email" && "placeholder-[rgba(0,0,0,0.9)]"
      }
      
      ${type === "name" && "placeholder-[rgba(0,0,0,0.3)]"}  }`}
      type={type}
      placeholder={placeholder}
      name={name}
      required
    />
  );
};
export default InputComponents;
