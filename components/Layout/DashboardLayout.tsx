import { Inter } from '@next/font/google';
import DashboardNavbar from '../Navbar/DashboardNavbar';
import DashboardSidebar from '../Sidebar/DashboardSidebar';
const inter = Inter({ subsets: ['latin'] });

type DashboardLayoutProps = { children: React.ReactElement };

const DashboardLayout = (props: DashboardLayoutProps) => {
    return (
        <div className={inter.className}>
            <div className="flex">
                <DashboardSidebar />
                <div className="flex flex-col h-screen overflow-hidden overflow-y-auto w-full">
                    <div className="flex-1">{props.children}</div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
