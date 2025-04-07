import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const FormInputField = ({
  name,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  required = false,
}) => {
  return (
    <FormField name={name} error={error}>
      <FormItem>
        <FormLabel>{label}:</FormLabel>
        <FormControl>
          <Input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
          />
        </FormControl>
        <FormMessage>{error}</FormMessage>
      </FormItem>
    </FormField>
  );
};

export default FormInputField;
