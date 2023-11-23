import { Checkbox, FormControlLabel, InputBase } from '@mui/material';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormText from '../../type/enums/FormText';

type FormCheckboxProps = {
  name: string;
  options: string[];
};

const CheckboxGroup: React.FC<FormCheckboxProps> = ({ name, options }) => {
  const { control, setValue } = useFormContext();
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleOtherInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const otherValue = event.target.value;
    setValue(name, otherValue);
  };

  return (
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={
                      field.value === option ||
                      (option === FormText.INPUT_CHECKBOX && showOtherInput)
                    }
                    onChange={() => {
                      if (option === FormText.INPUT_CHECKBOX) {
                        setShowOtherInput(true);
                      } else {
                        setShowOtherInput(false);
                      }
                      field.onChange(option);
                    }}
                  />
                }
                label={option}
              />
            )}
          />
        </div>
      ))}
      {showOtherInput && (
        <div>
          <InputBase onChange={handleOtherInputChange} className="input" />
        </div>
      )}
    </div>
  );
};

export default CheckboxGroup;
