import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long.",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number.",
    })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character.",
    }),
});

function RegistrationPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-full min-h-[85%] max-w-md bg-primary text-white p-6 shadow-md ml-15 my-5 mr-15-xs rounded">
      <div className="w-70 min-h-full flex flex-col-reverse  space-y-10 place-self-center flex-grow">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <span className="text-left text-xs text-gray-100 opacity-70">
                    <Link to="#">Forgot Password?</Link>
                  </span>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-70 bg-secondary text-white hover:bg-[#925FE2]"
            >
              Register
            </Button>
          </form>
        </Form>
        <div className="space-y-2 text-left my-10">
          <h1 className="font-bold text-3xl">Register</h1>
          <p className="opacity-80 text-sm">
            Enter your details to create account
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
