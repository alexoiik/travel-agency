// Syncfusion.
import { SidebarComponent } from "@syncfusion/ej2-react-navigations"
// React.
import { Outlet } from "react-router"
// Components.
import { MobileSidebar, NavItems } from "../../components"

const AdminLayout = () => {
    return (
        <div className='admin-layout'>
            {/* Mobile Sidebar */}
            <MobileSidebar />

            {/* Dekstop Navbar */}
            <aside className="w-full max-w-[270px] hidden lg:block">
                <SidebarComponent width={270} enableGestures={false}>
                    <NavItems />
                </SidebarComponent>
            </aside>

            {/* Childer Content */}
            <aside className="children">
                <Outlet />
            </aside>
        </div>
    )
}

export default AdminLayout