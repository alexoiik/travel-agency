// React.
import { Link, NavLink } from "react-router"
// Constants
import { sidebarItems } from "../constants"
// Utils.
import { cn } from "~/lib/utils"

const NavItems = ({ handleClick }: { handleClick?: () => void }) => {
    const user = {
        name: 'Alex',
        email: 'alexoik2001@gmail.com',
        imageUrl: '/assets/images/david.webp'
    }

    return (
        <section className="nav-items">
            {/* Logo */}
            <Link to='/' className="link-logo">
                <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
                <h1>Tourvisto</h1>
            </Link>

            {/* Navbar */}
            <div className="container">
                <nav>
                    {sidebarItems.map(({ id, icon, label, href }) => (
                        <NavLink to={href} key={id}>
                            {({ isActive }: { isActive: boolean }) => (
                                <div className={cn('group nav-item', {
                                    'bg-primary-100 text-white!': isActive
                                })} onClick={handleClick}>
                                    <img
                                        src={icon}
                                        alt={label}
                                        className={`group-hover:brightness-0 size-5 group-hover:invert ${isActive ? "brightness-0 invert" : "text-dark-200"}`}
                                    />
                                    {label}
                                </div>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Footer Section */}
                <footer className="nav-footer">
                    <img
                        src={user?.imageUrl || '/assets/images/devid.webp'}
                        alt={user?.name || 'Alex'}
                    />
                    <article>
                        <h2>{user?.name}</h2>
                        <p>{user?.email}</p>
                    </article>
                    <button onClick={() => {
                        console.log('logout')
                    }} className="cursor-pointer">
                        <img
                            src="/assets/icons/logout.svg"
                            alt="logout"
                            className="size-6"
                        />
                    </button>
                </footer>
            </div>
        </section>
    )
}

export default NavItems