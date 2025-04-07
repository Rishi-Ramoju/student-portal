import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FormSelectField = ({
  name,
  label,
  value,
  onChange,
  error,
  options,
  required = false,
}) => {
  return (
    <FormField name={name} error={error}>
      <FormItem>
        <FormLabel>{label}:</FormLabel>
        <FormControl>
          <Select
            name={name}
            value={value}
            onChange={onChange}
            required={required}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {options.map((option, index) => (
                <SelectItem key={index} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormControl>
        <FormMessage>{error}</FormMessage>
      </FormItem>
    </FormField>
  );
};

export default FormSelectField;
