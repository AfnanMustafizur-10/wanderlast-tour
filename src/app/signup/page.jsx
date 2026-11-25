'use client'
import React from 'react';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';

const SignUpPage = () => {

    const handleForm = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const user = Object.fromEntries(formdata.entries());
        console.log(user);

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password


        });

        if (data) {
            toast.success(`Welcome ${user.name}`)
            redirect("/destination")

        }
        else {
            toast.error(`${user.email} is  already registered`)
        }

    }

    const HandleGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };



    return (
        <div className='max-w-7xl mx-auto mt-20'>

            <Card className='bonder border-blue-300 bg-blue-50  p-10'>

                <Card.Header className='text-center mb-10'>
                    <p className='font-semibold text-3xl'>Create Account</p>
                    <p className='text-gray-500'>Start your adventure with Winderlast</p>
                </Card.Header>
                <Form className="flex w-96 flex-col gap-4" onSubmit={handleForm}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                        validate={(value) => {
                            if (value.length === 0) {
                                return "Please enter a name";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input placeholder="Mustafizur Rahman" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="mustafizur@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }

                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex justify-center gap-2  mt-5">
                        <Button className={"w-full rounded-md"} type="submit">

                            Create Account
                        </Button>

                    </div>
                </Form>
                <div>
                    <Button onClick={HandleGoogle} variant='secondary' className={"w-full rounded-md"}><FcGoogle /> Sign up With Google</Button>
                </div>
            </Card>
        </div>
    );
};

export default SignUpPage;