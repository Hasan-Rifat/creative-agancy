import React from "react";

type InputComponentsProps = {
  type: string;
  placeholder: string;
  name: string;
  className?: string;
  defaultValue?: any;
  disabled?: boolean;
};

const InputComponents: React.FC<InputComponentsProps> = ({
  type,
  placeholder,
  name,
  className,
  defaultValue,
  disabled,
}: InputComponentsProps) => {
  return (
    <input
      className={` focus:outline focus:outline-offset-1  focus:outline-[#0071dc] ${className} p-[20px] font-light rounded-[4px] tracking-[0.396px] block w-full mb-[16px] bg-[#f8f8f8] focus:bg-white ${
        type === "email" && "placeholder-[rgba(0,0,0,0.9)]"
      }
      
      ${type === "name" && "placeholder-[rgba(0,0,0,0.3)]"}  }`}
      type={type}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled}
      required
    />
  );
};
export default InputComponents;
