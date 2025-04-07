import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const FormFileField = ({ name, label, onChange, error, required = false }) => {
  return (
    <FormField name={name} error={error}>
      <FormItem>
        <FormLabel>{label}:</FormLabel>
        <FormControl>
          <Input
            id="picture"
            type="file"
            name={name}
            onChange={onChange}
            accept="image/*"
            required={required}
          />
          {/* <FileInput name={name} onChange={onChange} accept="image/*" required={required} /> */}
        </FormControl>
        <FormMessage>{error}</FormMessage>
      </FormItem>
    </FormField>
  );
};

export default FormFileField;
