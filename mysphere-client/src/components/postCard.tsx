
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Heart, MessageCircle, Bookmark, Send, Ellipsis } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
export function PostCard() {
    return (
        <Card className="h-fit w-full sm:max-w-md border-0 shadow-none">
            <CardHeader className="flex flex-row items-center justify-between p-2 sm:px-0 py-4">
                <Link to="#" className="flex items-center gap-2 text-sm font-semibold">
                    <Avatar className="border h-12 w-12">
                        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4PnzC50nS6p-Amu_gSiNpAoulvk0YM0Zug&s" />
                        <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <span className="text-lg">sabrinacarpenter</span>
                </Link>
                <button className="w-fit hover:text-primary/60">
                    <Ellipsis />
                </button>
            </CardHeader>
            <CardContent className="border p-0 flex items-center justify-center">
                <img src="https://diffusmag.de/wp-content/uploads/Snapinsta.app_438099196_18443668189009287_1623133747236782719_n_1080.jpg" alt="Image" className="object-cover aspect-square" />
            </CardContent>
            <CardFooter className="grid gap-2 p-2 sm:px-0 pt-4 pb-2 border-b">
                <div className="flex gap-4 items-center w-full">
                    <button className="w-fit hover:text-primary/60 group">
                        <Heart className="h-6 w-6" />
                        <span className="sr-only">Like</span>
                    </button>
                    <button className="w-fit hover:text-primary/60">
                        <MessageCircle className="h-6 w-6" />
                        <span className="sr-only">Comment</span>
                    </button>
                    <button className="w-fit hover:text-primary/60">
                        <Send className="h-6 w-6" />
                        <span className="sr-only">Share</span>
                    </button>
                    <button className="w-fit ml-auto hover:text-primary/60">
                        <Bookmark className="h-6 w-6" />
                        <span className="sr-only">Bookmark</span>
                    </button>
                </div>
                <span className="text-sm font-semibold">
                    4,093,228 likes
                </span>
                <p className="tex-sm text-ellipsis overflow-hidden">
                    Chasing sunsets and making memories 🌅✨ #GoldenHour #SummerVibes
                </p>
                <button className="w-fit text-primary/60 text-sm">
                View all 4,647 comments
                </button>
                <Textarea  className="outline-none border-none text-sm p-0 focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0 resize-none min-h-0  max-h-40" placeholder="Add a comment..."></Textarea>
            </CardFooter>
        </Card>
    )
}












