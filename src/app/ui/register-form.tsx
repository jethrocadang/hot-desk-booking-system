'use client';

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/app/ui/shadcn/form";

import { Input } from "@/app/ui/shadcn/input";
import { Button } from "./button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { createUser } from "../lib/actions";
import { METHODS } from "http";

const formSchema = z
  .object({
    firstName: z.string().min(1, "Required."),
    lastName: z.string().min(1, "Required"),
    email: z.string().min(1, "Required").email("Invalid Email"),
    password: z.string().min(5,'At least 5 Characters'),
    confirmPassword: z.string().min(1, "required"),
  })
  
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

export default function Register() {

  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {


  
    const response = await fetch('/api/register',{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password
      })
    })

    if (response.ok){
      console.log(values)
      console.log(response)
    } else{
      console.error('Failed')
    }

  }

  return (
    <Form {...form}>
      <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-3" method="POST">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Type your First Name." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Type your Last Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input  placeholder="example@email.com" {...field} />
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
                <Input type='password' placeholder="Type your Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder="Confirm your Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" onClick={form.handleSubmit(onSubmit)}>Submit <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" /></Button>
      </form>
    </Form>
  );
}


