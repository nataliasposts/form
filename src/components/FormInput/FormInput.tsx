import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import './FormInput.scss';

type FormInputProps<T extends FieldValues> = {
  name: string;
  type: string;
  required: boolean;
  register: UseFormRegister<T>;
  placeholder?: string;
};

const FormInput = <T extends FieldValues>({
  name,
  type,
  required,
  register,
  placeholder
}: FormInputProps<T>) => {
  return (
    <div>
      <FormControl>
        <InputBase
          id={name as Path<T>}
          {...register(name as Path<T>, { required })}
          type={type}
          placeholder={placeholder}
          className="input"
        />
      </FormControl>
    </div>
  );
};

export default FormInput;
