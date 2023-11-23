import { FormControl, Select, MenuItem } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

type FormDropdownProps = {
  name: string;
  options: string[];
};

const FormDropdown: React.FC<FormDropdownProps> = ({ name, options }) => {
  const { control } = useFormContext();

  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select {...field} value={field.value || ''}>
            {options.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default FormDropdown;
