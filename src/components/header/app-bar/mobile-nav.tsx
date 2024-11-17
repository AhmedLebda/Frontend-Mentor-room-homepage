import { useState } from "react";
import Nav from "./nav"

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { Menu, X } from "lucide-react";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false)
    return (
        <Drawer direction="top" open={isOpen} onOpenChange={setIsOpen} modal={false}>
            <DrawerTrigger aria-label="open menu">
                <Menu size={28} aria-hidden={true} />
                <span className="sr-only">Open menu</span>
            </DrawerTrigger>
            <DrawerContent className="fixed -top-24 bottom-auto max-h-[80vh] rounded-none xl:hidden" >
                <DrawerHeader className="px-4 flex items-center gap-8">
                    <button onClick={close} className="p-4" aria-label="close menu">
                        <X aria-hidden={true} />
                        <span className="sr-only">Close menu</span>
                    </button>
                    <Nav closeDrawer={close} />
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    )
}

export default MobileNav