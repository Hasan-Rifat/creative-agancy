type Props = {
  children: string;
};

const Button = ({ children }: Props) => {
  return (
    <div className="rounded-[5px] mr-[10px] px-[47px] py-[10px] text-white bg-primary  transition-none hover:bg-secondary ">
      {children}
    </div>
  );
};

export default Button;
