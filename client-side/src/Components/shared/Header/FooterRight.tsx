import React from "react";
import Button from "../Button";
import InputComponents from "../InputComponents";

type FooterRightProps = {};

const formHandler = (e: { target: any; preventDefault: () => void }) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const textArea = e.target.textArea.value;
};

const FooterRight: React.FC<FooterRightProps> = () => {
  return (
    <form onSubmit={formHandler}>
      <InputComponents
        type={"email"}
        placeholder={"Your email address"}
        name={"email"}
      />
      <InputComponents
        type={"text"}
        placeholder={"Your name / company’s name"}
        name={"name"}
      />
      <textarea
        className=" w-full block placeholder-[rgba(0,0,0,0.3)] p-[25px] font-light rounded-[4px] tracking-[0.396px] outline-0"
        name="textArea"
        placeholder="Your message"
        id=""
        cols={30}
        rows={10}
      ></textarea>
      <button type="submit" className="mt-[16px]">
        <Button>Send</Button>
      </button>
    </form>
  );
};
export default FooterRight;
