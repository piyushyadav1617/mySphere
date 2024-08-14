import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { PropsWithChildren } from "react"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

const SettingsDropdown = ({ children }: PropsWithChildren) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent sideOffset={10} side="bottom" className="w-44 p-1 flex flex-col gap-1">
                <div className="hover:bg-primary-foreground cursor-pointer flex items-center justify-between p-2 rounded-md">
                    <span>Dark Mode</span> <Switch />
                </div>
                <Separator />
                <div className="hover:bg-primary-foreground cursor-pointer flex items-center justify-between p-2 rounded-md">
                    <button>
                        Logout
                    </button>
                </div>
            </PopoverContent>
        </Popover>

    )
}
export default SettingsDropdown;