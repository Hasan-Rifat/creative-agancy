import React from "react";
import { toast } from "react-toastify";
import Button from "../Button";
import InputComponents from "../InputComponents";
import TextArea from "../TextArea";

type FooterRightProps = {};

const formHandler = (e: { target: any; preventDefault: () => void }) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const textArea = e.target.textArea.value;
  toast.success("sending successfully");
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
          name={"textArea"}
        />
        <TextArea type={"text"} placeholder={"Your message"} name={"message"} />
        <button type="submit" className="mt-[16px]">
          <Button>Send</Button>
        </button>
      </form>
    </div>
  );
};
export default FooterRight;
