"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from "@heroui/react";
import { redirect } from "next/navigation";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";

export function EditModal({ destination }) {
    const { _id, destinationName, category, country, departureDate, description, duration, imageUrl, price } = destination
    console.log(destinationName);



    const onSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget)
        // console.log(formdata);

        const destination = Object.fromEntries(formdata.entries());
        console.log(destination);
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(destination)
        })

        const data = await res.json()
        // console.log("updated data", data);
        toast("From update successfully")
        window.location.reload()
        redirect(`/destination`)


    }




    return (
        <Modal>
            <div className='flex justify-end'>
                <Button variant='outline' className={"rounded-none mt-5 mb-3 "}><BiEdit /> Edit</Button>
            </div>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-4xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>

                            <Modal.Heading className="text-blue-600 text-xl font-bold">Edit</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit}
                                    className="p-10 space-y-8 w-3xl"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                        <div className="md:col-span-2">
                                            <TextField name="destinationName" defaultValue={destinationName} isRequired>
                                                <Label>Destination Name</Label>
                                                <Input className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        <TextField name="country" defaultValue={country} isRequired>
                                            <Label>Country</Label>
                                            <Input placeholder="Indonesia" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>


                                        <div>
                                            <Select
                                                defaultValue={category}
                                                name="category"
                                                isRequired
                                                className="w-full"
                                                placeholder="Select category"
                                            >
                                                <Label>Category</Label>
                                                <Select.Trigger className="rounded-2xl">
                                                    <Select.Value />
                                                    <Select.Indicator />
                                                </Select.Trigger>
                                                <Select.Popover>
                                                    <ListBox>
                                                        <ListBox.Item id="Beach" textValue="Beach">
                                                            Beach
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="Mountain" textValue="Mountain">
                                                            Mountain
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="City" textValue="City">
                                                            City
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="Adventure" textValue="Adventure">
                                                            Adventure
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>


                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>
                                        </div>


                                        <TextField defaultValue={price} name="price" type="number" isRequired>
                                            <Label>Price</Label>
                                            <Input
                                                type="number"
                                                placeholder="1299"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>


                                        <TextField name="duration" defaultValue={duration} isRequired>
                                            <Label>Duration</Label>
                                            <Input
                                                placeholder="3 Days / 2 Nights"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>


                                        <div className="md:col-span-2">
                                            <TextField name="departureDate" defaultValue={departureDate} type="date" isRequired>
                                                <Label>Departure Date</Label>
                                                <Input type="date" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>


                                        <div className="md:col-span-2">
                                            <TextField name="imageUrl" defaultValue={imageUrl} isRequired>
                                                <Label>Image URL</Label>
                                                <Input
                                                    type="url"
                                                    placeholder="https://example.com/bali-paradise.jpg"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>


                                        <div className="md:col-span-2">
                                            <TextField name="description" defaultValue={description} isRequired>
                                                <Label>Description</Label>
                                                <TextArea
                                                    placeholder="Describe the travel experience..."
                                                    className="rounded-3xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                    </div>




                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit"> Save </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}