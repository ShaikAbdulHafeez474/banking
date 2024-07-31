import { Control, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";

interface CustomInputProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ control, name, label, placeholder }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="form-control">
          <label  className="form-label">{label}</label>
          <Input type={name==='password'?'password':'text'}
 {...field} placeholder={placeholder} />
          {error && <p className="form-error">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default CustomInput;
