// Syncfusion.
import { SidebarComponent } from "@syncfusion/ej2-react-navigations"
// React.
import { Outlet, redirect } from "react-router"
// Components.
import { MobileSidebar, NavItems } from "../../components"
// Appwrite.
import { account } from "~/appwrite/client";
import { getExistingUser, storeUserData } from "~/appwrite/auth";

export async function clientLoader() {
    try {
        const user = await account.get();

        if (!user.$id) return redirect('/sign-in');

        const existingUser = await getExistingUser(user.$id);

        if (existingUser?.status === 'user') {
            return redirect('/');
        }

        return existingUser?.$id ? existingUser : await storeUserData();
    } catch (e) {
        console.log('Error in clientLoader', e)
        return redirect('/sign-in')
    }
}

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