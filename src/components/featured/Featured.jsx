import './featured.scss'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon />
      </div>
      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={70} text='70%' strokeWidth={5}/>
        </div>
        <p className="title">Total Sales today</p>
        <p className="amount">{'\u20B1'} 240</p>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, vel!</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <div className="itemAmount">{'\u20B1'} 12.4k</div>
              <KeyboardArrowDownIcon className='icon'/>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <div className="itemAmount">{'\u20B1'} 12.4k</div>
              <KeyboardArrowDownIcon className='icon'/>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <div className="itemAmount">{'\u20B1'} 12.4k</div>
              <KeyboardArrowDownIcon className='icon'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Featured