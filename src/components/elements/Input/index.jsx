import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef(({ label, type, placeholder, name }, ref) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} ref={ref}/>
    </div>
  );
})

export default InputForm;
