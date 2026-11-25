"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";


export function Delete({ destination }) {
    const handleDelete = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${destination._id}`,
            {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                }
            }
        )

        const data = await res.json()
        redirect("/destination")
        window.location.reload()

    }

    return (
        <AlertDialog>
            <div className='flex justify-end'>
                <Button variant='danger' className={"rounded-none mt-5 mb-3 "}> Delete</Button>
            </div>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete {destination.destinationName} permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete Destination
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}