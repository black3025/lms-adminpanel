import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import MapIcon from '@mui/icons-material/Map';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">LMS</span>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className="title">USER</p>
          <li>
            <Diversity3Icon className='icon'/>
            <span>Clients</span>
          </li>
          <li>
            <PointOfSaleIcon className='icon'/>
            <span>Payments</span>
          </li>
          <li>
            <LocalAtmIcon className='icon'/>
            <span>Loans</span>
          </li>
          <p className="title">ADMIN</p>
          <li>
            <MapIcon className='icon'/>
            <span>Areas</span>
          </li>
          <li>
            <ManageAccountsIcon className='icon'/>
            <span>User</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <hr/>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
       
    </div>
  )
}

export default Sidebar