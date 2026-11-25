'use client'
import React from 'react';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';


const page = () => {

    const handleForm = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const user = Object.fromEntries(formdata.entries());
        console.log(user);

        const { data, error } = await authClient.signIn.email({

            email: user.email,
            password: user.password,



        });
        // console.log({data,error});


        if (data) {
            toast.success(`Welcome Back`)
            redirect("/destination")
        }
        else {
            toast.error(`LogIn failed`)
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
                    <p className='font-bold text-3xl'>Log In</p>

                </Card.Header>
                <Form className="flex w-96 flex-col gap-4" onSubmit={handleForm}>

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

                        <FieldError />
                    </TextField>
                    <div className="flex justify-center gap-2  mt-5">
                        <Button className={"w-full rounded-md"} type="submit">

                            Log In
                        </Button>

                    </div>
                </Form>
                <div>
                    <Button onClick={HandleGoogle} variant='secondary' className={"w-full rounded-md"}><FcGoogle /> Log In With Google</Button>
                </div>
            </Card>
        </div>
    );
};

export default page;