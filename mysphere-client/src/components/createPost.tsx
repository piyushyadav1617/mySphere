import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
export const CreatePost = ({ children }: { children: React.ReactNode }) => {
    const [file, setFile] = useState<string | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) return;
        console.log(e.target.files);
        console.log(URL.createObjectURL(e.target.files[0]));
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent className="p-2">
                    {/* <DialogClose className="text-blue-500 ">X</DialogClose>S */}
                    {file ?
                        <>   <DialogHeader>
                            <Button variant={"ghost"} size={"icon"} onClick={() => setFile(null)}>
                                <ArrowLeft />
                            </Button>
                        </DialogHeader>
                            <img src={file} alt="image" className="w-full h-full object-cover aspect-square" />
                            <Textarea placeholder="Write a caption . . ." rows={3} className="outline-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-primary-foreground/40  border-none text-sm focus-visible:outline-none resize-none  max-h-40" />
                            <Button variant={"ghost"} className=" text-xl  text-blue-500 hover:text-blue-500">Post</Button>

                        </> :
                        <>   <DialogHeader className="border-b p-4">
                            <DialogTitle className="text-center">Create new post</DialogTitle>
                        </DialogHeader>
                            {/* <h1 className="text-lg font-semibold">Create new post</h1> */}
                            <div className="flex flex-col items-center justify-center h-80">
                                <Label htmlFor="image-file" className="rounded-md bg-blue-500 hover:bg-blue-500/80 cursor-pointer p-[0.7rem] px-4">Select from your device</Label>
                                <Input type="file" id="image-file" name="image" onChange={handleChange} className="sr-only" />

                            </div>
                        </>
                    }



                </DialogContent>
            </Dialog>
        </>
    );
};