import { Link, Outlet, NavLink } from "react-router-dom"
import { Home, Search, MessageCircleMore, Heart, CircleUser, Settings, Camera, CirclePlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
// import { SearchComponent } from "./search"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import SettingsDropdown from "./settingDropdown"
import { CreatePost } from "./createPost"

const Navigation = () => {
    const [expanded, setExpanded] = useState(true);
    const [searchExpanded, setSearchExpanded] = useState(false);
    const [notifExpanded, setNotifiExpanded] = useState(false);

    useEffect(() => {
        if (expanded) {
            setSearchExpanded(false);
            setNotifiExpanded(false);
        }
    }, [expanded])
    return (
        <div className="lg:flex lg:flex-row">
            <header className="lg:hidden sticky top-0 w-full z-10 h-14 flex items-center justify-between px-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">

                <h1 className="text-2xl font-semibold tracking-tight"><Link to="/">MySphere</Link></h1>
                <div className="flex gap-2">
                    <Button variant={"ghost"} size={"icon"}>
                        <Search
                            className={`h-6 w-6`}
                        />
                    </Button>
                    <Button variant={"ghost"} size={"icon"}>
                        <Heart
                            className={`h-6 w-6`}
                        />
                    </Button>
                </div>
            </header>
            <aside className={`hidden lg:block z-20 flex-shrink-0 h-screen ${expanded ? "border-r" : ""} px-4 py-8 sticky top-0 left-0 bg-background`}>
                <div className="mb-8 p-2">
                    <Link to="/">
                        <h1 className={`${expanded ? "block" : "hidden"} mx-auto text-2xl font-semibold tracking-tight`}>MySphere</h1>
                        <Camera className={`${expanded ? "hidden" : " block opacity-100 h-8 w-8"} mx-auto `} />
                    </Link>
                </div>
                <nav>
                    <ul className="space-y-2">
                        <li>
                            <Button asChild variant={"ghost"} className={`${expanded ? "w-full" : "w-fit"} group flex justify-start  text-lg font-normal rounded-lg py-6`}
                                onClick={() => (setExpanded(true))}
                            >
                                <NavLink to="/">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Home
                                                    className={`h-6 w-6 group-hover:scale-110 transition-all`}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Home</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                    <span className={`${expanded ? "w-fit opacity-100 ml-6" : "w-0  opacity-0 overflow-hidden"} transition-all`}> Home</span>


                                </NavLink>
                            </Button>
                        </li>
                        <li>

                            <Button variant={"ghost"} className={`${expanded ? "w-full" : "w-fit"} group flex justify-start  text-lg font-normal rounded-lg py-6`}
                                onClick={() => {
                                    if (expanded) {
                                        setExpanded(false);
                                        setSearchExpanded(true);
                                    } else if (notifExpanded) {
                                        setExpanded(false);
                                        setNotifiExpanded(false);
                                        setSearchExpanded(true);
                                    } if (searchExpanded) {
                                        setSearchExpanded(false);
                                        setNotifiExpanded(false)
                                        setExpanded(true);
                                    }
                                }}>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Search
                                                className={`h-6 w-6 group-hover:scale-110 transition-all`}
                                            />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Search</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                                <span className={`${expanded ? "w-fit opacity-100 ml-6" : "w-0  opacity-0 overflow-hidden"} transition-all`}>Search</span>

                            </Button>

                        </li>
                        <li>
                            <Button asChild variant={"ghost"} className={`${expanded ? "w-full" : "w-fit"} group flex justify-start  text-lg font-normal rounded-lg py-6`}
                                onClick={() => (setExpanded(true))}
                            >
                                <NavLink to="/messages">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <MessageCircleMore
                                                    className={`h-6 w-6 group-hover:scale-110 transition-all`}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Message</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                    <span className={`${expanded ? "w-fit opacity-100 ml-6" : "w-0 opacity-0 overflow-hidden"} transition-all`}>Messages</span>
                                </NavLink>
                            </Button>
                        </li>
                        <li>
                            <Button variant={"ghost"} className={`${expanded ? "w-full" : "w-fit"} group flex justify-start  text-lg font-normal rounded-lg py-6`}
                                onClick={() => {
                                    if (expanded) {
                                        setExpanded(false);
                                        setNotifiExpanded(true);
                                    } else if (searchExpanded) {
                                        setExpanded(false);
                                        setSearchExpanded(false);
                                        setNotifiExpanded(true);
                                    } if (notifExpanded) {
                                        setNotifiExpanded(false);
                                        setSearchExpanded(false)
                                        setExpanded(true);
                                    }
                                }}
                            >
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Heart
                                                className={`h-6 w-6 group-hover:scale-110 transition-all`}
                                            />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Notifications</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                                <span className={`${expanded ? "w-fit opacity-100 ml-6" : "w-0  opacity-0 overflow-hidden"} transition-all`}>Notifications</span>


                            </Button>
                        </li>
                        <li>
                            <CreatePost>
                                <Button variant={"ghost"} className={`${expanded ? "w-full" : "w-fit"} group flex justify-start  text-lg font-normal rounded-lg py-6`}
                                    
                                >
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <CirclePlus
                                                    className={`h-6 w-6 group-hover:scale-110 transition-all`}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Create</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                    <span className={`${expanded ? "w-fit opacity-100 ml-6" : "w-0  opacity-0 overflow-hidden"} transition-all`}>Create</span>

                                </Button>
                            </CreatePost>
                        </li>
                        <li>
                            <Button asChild variant={"ghost"} className={`${expanded ? "w-full" : "w-fit"} group flex justify-start  text-lg font-normal rounded-lg py-6`}
                                onClick={() => (setExpanded(true))}
                            >
                                <NavLink to="/sabrinacarpenter">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <CircleUser
                                                    className={`h-6 w-6 group-hover:scale-110 transition-all`}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Profile</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                    <span className={`${expanded ? "w-fit opacity-100 ml-6" : "w-0  opacity-0 overflow-hidden"} transition-all`}> Profile</span>

                                </NavLink>
                            </Button>
                        </li>
                        <li>
                            <SettingsDropdown>
                                <Button variant={"ghost"} className={`${expanded ? "w-full" : "w-fit"} group flex justify-start  text-lg font-normal rounded-lg py-6`}
                                >
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Settings
                                                    className={`h-6 w-6 group-hover:scale-110 transition-all`}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Settings</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                    <span className={`${expanded ? "w-fit opacity-100 ml-6" : "w-0  opacity-0 overflow-hidden"} transition-all`}>More</span>

                                </Button>
                            </SettingsDropdown>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* the search component */}
            <div className={`${searchExpanded && !expanded ? "translate-x-0 " : "-translate-x-[22rem] hidden"} w-80 transition-all px-4 py-8 hidden lg:block z-10 flex-shrink-0 h-screen fixed top-0 left-[72px] border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 `}>
                <div className="">
                    <h1 className={`w-fit text-2xl`}>Search</h1>

                    <Input type="text" placeholder="Search" className={`p-x-4 my-8  outline-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-primary-foreground`} />
                </div>
                <div className="overflow-y-auto py-4">

                </div>

            </div>

            {/* the Notification component */}
            <div className={`${notifExpanded && !searchExpanded && !expanded ? "translate-x-0 " : "-translate-x-[22rem] hidden"} w-80 transition-all px-4 py-8 hidden lg:block z-10 flex-shrink-0 h-screen fixed top-0 left-[72px] border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 `}>
                <div className="">
                    <h1 className={`w-fit text-2xl`}>Notifications</h1>
                </div>
                <div className="overflow-y-auto py-4">
                    <div className="h-fit p-2 rounded-lg hover:bg-primary-foreground flex flex-row tex-sm cursor-pointer">
                        <div className="flex gap-2">
                            <Avatar className="border h-10 w-10">
                                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4PnzC50nS6p-Amu_gSiNpAoulvk0YM0Zug&s" />
                                <AvatarFallback>AC</AvatarFallback>
                            </Avatar>
                            <p>
                                A random notification with random emojis 🎂❤️
                            </p>
                        </div>


                    </div>
                </div>

            </div>

            <Outlet />

            <footer className="lg:hidden border-t fixed bottom-0 bg-background w-full px-4">
                <nav>
                    <ul className="flex items-center justify-around h-16 p-0">
                        <li>
                            <Button asChild variant={"ghost"} size={"icon"}>
                                <NavLink to="/">
                                    <Home
                                        className={`h-6 w-6`}
                                    />
                                </NavLink>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant={"ghost"} size={"icon"}>
                                <NavLink to="/messages">
                                    <MessageCircleMore
                                        className={`h-6 w-6`}
                                    />
                                </NavLink>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant={"ghost"} size={"icon"}>
                                <NavLink to="/sabrinacarpenter">
                                    <CircleUser
                                        className={`h-6 w-6`}
                                    />
                                </NavLink>
                            </Button>
                        </li>
                        <li>
                            <Button variant={"ghost"} size={"icon"}>
                                <Settings
                                    className={`h-6 w-6`}
                                />
                            </Button>
                        </li>

                    </ul>
                </nav>


            </footer>
        </div >
    )
}

export default Navigation