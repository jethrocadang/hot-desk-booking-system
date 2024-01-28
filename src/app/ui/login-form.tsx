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
import {signIn} from "next-auth/react";

const formSchema = z
  .object({
    email: z.string().min(1, "Required").email("Invalid Email"),
    password: z.string().min(5,'At least 12 Characters'),
  })
  
 

export default function Register() {

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {

    signIn( 'credentials', {
      email: values.email,
      password: values.password,
      callbackUrl : '/users/dashboard'
    })

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
        <Button type="submit" className="w-full">Log In <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" /></Button>
      </form>
    </Form>
  );
}


