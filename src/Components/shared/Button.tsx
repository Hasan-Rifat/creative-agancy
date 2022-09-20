type Props = {
  children: string;
  className?: string;
};

const Button = ({ children, className }: Props) => {
  return (
    <div
      className={`cursor-pointer hover:translate-y-[-5px] ease-in-out duration-300 hover:shadow-[0px_4px_80px_rgba(0,0,0,0.1)]  rounded-[5px] mr-[10px] xss:text-center xss:px-[15px] md:px-[47px] py-[10px] text-white bg-primary  hover:bg-secondary ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;
