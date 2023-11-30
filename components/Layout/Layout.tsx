import { Inter } from '@next/font/google';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { TopNavbar } from '../Navbar/Topbar';
const inter = Inter({ subsets: ['latin'] });

type LayoutProps = { children: React.ReactElement };

const Layout = (props: LayoutProps) => {
    return (
        <div>
            <TopNavbar />
            <Navbar />
            <div className="flex flex-col">{props.children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
