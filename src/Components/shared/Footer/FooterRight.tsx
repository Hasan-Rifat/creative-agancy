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
    <div className="p-[40px] rounded-[20px] shadow-[0px_4px_80px_rgba(0,0,0,0.1)]">
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
          className="focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent w-full block placeholder-[rgba(0,0,0,0.3)] p-[25px] font-light rounded-[4px] tracking-[0.396px] border-[1px] border-[rgba(0,0,0,0.9)]"
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
    </div>
  );
};
export default FooterRight;
