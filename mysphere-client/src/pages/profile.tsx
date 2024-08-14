
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Ellipsis } from "lucide-react"

function ProfilePage() {
    return (
        <div className="w-full">
            <div className="mx-auto max-w-4xl">
                <div className="overflow-hidden">
                    <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10">
                        <div className="flex-shrink-0">
                            <Avatar className="w-28 h-28 md:w-40 md:h-40 border">
                                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4PnzC50nS6p-Amu_gSiNpAoulvk0YM0Zug&s" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex-1 grid gap-2 md:gap-4">
                            <div className="flex items-center gap-4">
                                <h1 className="text-xl md:text-2xl font-semibold">sabrinacarpenter</h1>
                                <Button variant="secondary">Edit Profile</Button>
                                <Button variant="ghost" size={"icon"}><Ellipsis /></Button>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">274 </span>
                                    <span className="">Posts</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">36.4M </span>
                                    <span className="">Followers</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">634</span>
                                    <span className="">Following</span>
                                </div>
                            </div>
                            <div className="text-sm">
                                <span className="font-medium">Sabrina Carpenter</span>
                                <p className="leading-loose">
                                    Short n&apos; Sweet out August 23rd💋
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-1 mt-8 md:mt-14 border-t pt-10 ">
                    <img
                        src="https://diffusmag.de/wp-content/uploads/Snapinsta.app_438099196_18443668189009287_1623133747236782719_n_1080.jpg"
                        width={500}
                        height={500}
                        alt="Image"
                        className="aspect-square object-cover cursor-pointer hover:opacity-80"
                    />
                    <img
                        src="https://scentbeauty.com/cdn/shop/files/Sabrina_Banner_Part_2.png?v=1715761335&width=3840"
                        width={500}
                        height={500}
                        alt="Image"
                        className="aspect-square object-cover cursor-pointer hover:opacity-80"
                    />  <img
                        src="https://lastfm.freetls.fastly.net/i/u/770x0/dd7886d2d4ded4abf4065d6aaf7ca50d.jpg#dd7886d2d4ded4abf4065d6aaf7ca50d"
                        width={500}
                        height={500}
                        alt="Image"
                        className="aspect-square object-cover cursor-pointer hover:opacity-80"
                    />  <img
                        src="https://scentbeauty.com/cdn/shop/files/Sabrina_Banner_Part_2.png?v=1715761335&width=3840"
                        width={500}
                        height={500}
                        alt="Image"
                        className="aspect-square object-cover cursor-pointer hover:opacity-80"
                    />
                    <img
                        src="https://lastfm.freetls.fastly.net/i/u/770x0/711d0f0a533d66a97dad8c7dfff54b3d.jpg#711d0f0a533d66a97dad8c7dfff54b3d"
                        width={500}
                        height={500}
                        alt="Image"
                        className="aspect-square object-cover cursor-pointer hover:opacity-80"
                    />  <img
                        src="https://scentbeauty.com/cdn/shop/files/Sabrina_Banner_Part_2.png?v=1715761335&width=3840"
                        width={500}
                        height={500}
                        alt="Image"
                        className="aspect-square object-cover cursor-pointer hover:opacity-80"
                    />
                    <img
                        src="https://lastfm.freetls.fastly.net/i/u/770x0/dd7886d2d4ded4abf4065d6aaf7ca50d.jpg#dd7886d2d4ded4abf4065d6aaf7ca50d"
                        width={500}
                        height={500}
                        alt="Image"
                        className="aspect-square object-cover cursor-pointer hover:opacity-80"
                    />
                    <img
                        src="https://lastfm.freetls.fastly.net/i/u/770x0/711d0f0a533d66a97dad8c7dfff54b3d.jpg#711d0f0a533d66a97dad8c7dfff54b3d"
                        width={500}
                        height={500}
                        alt="Image"
                        className="aspect-square object-cover cursor-pointer hover:opacity-80"
                    />  <img
                        src="https://diffusmag.de/wp-content/uploads/Snapinsta.app_438099196_18443668189009287_1623133747236782719_n_1080.jpg"
                        width={500}
                        height={500}
                        alt="Image"
                        className="aspect-square object-cover cursor-pointer hover:opacity-80"
                    />  <img
                        src="https://scentbeauty.com/cdn/shop/files/Sabrina_Banner_Part_2.png?v=1715761335&width=3840"
                        width={500}
                        height={500}
                        alt="Image"
                        className="aspect-square object-cover cursor-pointer hover:opacity-80"
                    />
                    <img
                        src="https://diffusmag.de/wp-content/uploads/Snapinsta.app_438099196_18443668189009287_1623133747236782719_n_1080.jpg"
                        width={500}
                        height={500}
                        alt="Image"
                        className="aspect-square object-cover cursor-pointer hover:opacity-80"
                    />  <img
                        src="https://scentbeauty.com/cdn/shop/files/Sabrina_Banner_Part_2.png?v=1715761335&width=3840"
                        width={500}
                        height={500}
                        alt="Image"
                        className="aspect-square object-cover cursor-pointer hover:opacity-80"
                    />

                </div>
            </div>

        </div>
    )
}
export default ProfilePage 