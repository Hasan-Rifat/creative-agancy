import React from "react";

type TextAreaProps = {
  type?: string;
  placeholder: string;
  name: string;
  className?: string;
  defaultValue?: string;
};

const TextArea: React.FC<TextAreaProps> = ({
  type,
  placeholder,
  name,
  className,
  defaultValue,
}) => {
  return (
    <textarea
      className={`focus:outline focus:outline-offset-1  focus:outline-[#0071dc] ${className} p-[20px] font-light rounded-[4px] tracking-[0.396px] block w-full mb-[16px] bg-[#f8f8f8] focus:bg-white 
  `}
      defaultValue={defaultValue}
      name={name}
      placeholder={placeholder}
      id=""
      cols={30}
      rows={10}
      required
    ></textarea>
  );
};
export default TextArea;
