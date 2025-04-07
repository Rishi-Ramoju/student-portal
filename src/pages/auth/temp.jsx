import React, { useState } from "react";
import { Button } from "@shadcn/ui";
import { z } from "zod";
import FormInputField from "./FormInputField";
import FormSelectField from "./FormSelectField";
import FormFileField from "./FormFileField";

// Validation Schema using Zod
const registrationSchema = z.object({
  aadhaar: z
    .string()
    .min(12, "Aadhaar Number must be 12 digits")
    .max(12, "Aadhaar Number must be 12 digits"),
  fullName: z.string().min(3, "Full Name must be at least 3 characters"),
  dob: z.string().min(1, "Date of Birth is required"),
  fatherName: z.string().min(3, "Father's Name must be at least 3 characters"),
  maritalStatus: z.string().min(1, "Marital Status is required"),
  religion: z.string().min(1, "Religion is required"),
  category: z.string().min(1, "Category is required"),
  state: z.string().min(1, "State is required"),
  disability: z.string().min(1, "Disability selection is required"),
  gender: z.string().min(1, "Gender is required"),
  profilePhoto: z
    .instanceof(File)
    .refine((file) => file.size <= 5000000, "File size must be less than 5MB") // Optional: Limit file size
    .optional(),
});

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    aadhaar: "",
    fullName: "",
    dob: "",
    fatherName: "",
    maritalStatus: "Single",
    religion: "",
    category: "",
    state: "Andhra Pradesh",
    disability: "No",
    gender: "Male",
    profilePhoto: null,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profilePhoto: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form using Zod
    try {
      registrationSchema.parse(formData);
      // If validation passes, handle form submission
      console.log(formData);
      alert("Form submitted successfully!");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.reduce((acc, err) => {
          acc[err.path[0]] = err.message;
          return acc;
        }, {});
        setFormErrors(errors);
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Student Registration
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormInputField
            name="aadhaar"
            label="Aadhaar Number"
            value={formData.aadhaar}
            onChange={handleChange}
            error={formErrors.aadhaar}
            placeholder="Enter Aadhaar Number"
            required
          />
          <FormInputField
            name="fullName"
            label="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            error={formErrors.fullName}
            placeholder="Enter Full Name"
            required
          />
          <FormInputField
            name="fatherName"
            label="Father/Guardian Name"
            value={formData.fatherName}
            onChange={handleChange}
            error={formErrors.fatherName}
            placeholder="Enter Father/Guardian Name"
            required
          />
          <FormInputField
            name="dob"
            label="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
            error={formErrors.dob}
            type="date"
            required
          />
          <FormSelectField
            name="maritalStatus"
            label="Marital Status"
            value={formData.maritalStatus}
            onChange={handleChange}
            error={formErrors.maritalStatus}
            options={[
              { value: "Single", label: "Single" },
              { value: "Married", label: "Married" },
            ]}
            required
          />
          <FormInputField
            name="religion"
            label="Religion"
            value={formData.religion}
            onChange={handleChange}
            error={formErrors.religion}
            placeholder="Enter Religion"
            required
          />
          <FormInputField
            name="category"
            label="Category"
            value={formData.category}
            onChange={handleChange}
            error={formErrors.category}
            placeholder="Enter Category"
            required
          />
          <FormSelectField
            name="state"
            label="Select Your State"
            value={formData.state}
            onChange={handleChange}
            error={formErrors.state}
            options={[
              { value: "Andhra Pradesh", label: "Andhra Pradesh" },
              { value: "Telangana", label: "Telangana" },
              { value: "Tamil Nadu", label: "Tamil Nadu" },
            ]}
            required
          />
          <FormSelectField
            name="disability"
            label="Disability"
            value={formData.disability}
            onChange={handleChange}
            error={formErrors.disability}
            options={[
              { value: "No", label: "No" },
              { value: "Yes", label: "Yes" },
            ]}
            required
          />
          <FormSelectField
            name="gender"
            label="Gender"
            value={formData.gender}
            onChange={handleChange}
            error={formErrors.gender}
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
              { value: "Other", label: "Other" },
            ]}
            required
          />
          <FormFileField
            name="profilePhoto"
            label="Upload Profile Photo"
            onChange={handleFileChange}
            error={formErrors.profilePhoto}
          />
          <div className="col-span-3">
            <Button type="submit" color="primary" className="w-full">
              Save & Continue
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
