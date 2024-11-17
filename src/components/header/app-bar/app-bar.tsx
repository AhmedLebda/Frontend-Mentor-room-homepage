import MobileNav from "./mobile-nav"
import Nav from "./nav"


const AppBar = () => {

    return (
        <div className="flex items-center sm:justify-between absolute gap-12 top-8 px-4 sm:px-8  w-full max-w-screen-sm text-white z-50">

            <div className="xl:hidden">
                <MobileNav />
            </div>

            <a href="#" className="font-medium text-3xl flex-1 xl:grow-0 text-center">room</a>

            <div className="hidden xl:block">
                <Nav />
            </div>

        </div>
    )
}

export default AppBar