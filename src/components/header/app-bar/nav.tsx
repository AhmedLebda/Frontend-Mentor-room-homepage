

const navLinks = ["home", "shop", "amount", "contact"]

interface NavProps {
    closeDrawer?: () => void;
}

const Nav = ({ closeDrawer }: NavProps) => {
    return (
        <nav>
            <ul className="flex gap-6">
                {navLinks.map(link => <li key={link}>
                    <a href="#" onClick={closeDrawer} className="capitalize font-medium hover:text-zinc-700">{link}</a>
                </li>)}
            </ul>
        </nav>
    )
}

export default Nav