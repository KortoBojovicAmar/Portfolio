import './index.scss';
import Sidebar from '../Sidebar';
import SidebarMobile from '../SidebarMobile';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="App">
        <Sidebar />
        <SidebarMobile />
        <div className="page">
          <Outlet />
        </div>
      </div>
    )
};

export default Layout;