import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import CreditCardOffOutlinedIcon from '@mui/icons-material/CreditCardOffOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
const Widget = ({type}) => {
  let data;
  //temporary
  let amount = Math.round(Math.random(10000)*1000);
  let diff = Math.round(Math.random(10000)*100);
  switch(type){
    case "client":
      data = {
        title:'CLIENT',
        isMoney: false,
        link: 'See all Client',
        icon: <Diversity3Icon className='icon'/>
      };
      break;
    case "newAccount":
      data = {
        title:'NEW ACCOUNT',
        isMoney: false,
        link: 'See all New Accounts',
        icon: <PersonAddOutlinedIcon className='icon'/>
      };
      break;
    case "collection":
      data = {
        title:'COLLECTION',
        isMoney: true,
        link: 'See all payments',
        icon: <LocalAtmOutlinedIcon className='icon'/>
      };
      break;
    case "nonPaying":
      data = {
        title:'NON-PAYING',
        isMoney: false,
        link: 'See all non-paying Accounts',
        icon: <CreditCardOffOutlinedIcon className='icon'/>
      };
      break;
    default:
      break;
  }

  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && '\u20B1'} {amount}</span>
            <span className="link">{data.link}</span>
        </div>  

        <div className="right">
            <div className="percentage positive">
              <KeyboardArrowUpIcon />
              {diff}
            </div>
            {data.icon}
        </div>    
    </div>
  )
}

export default Widget
