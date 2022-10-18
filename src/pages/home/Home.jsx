import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Chart from "../../components/chart/Chart"
import Featured from "../../components/featured/Featured"
import Tables from "../../components/table/Tables"
const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
              <Widget type="client"/>
              <Widget type="newAccount"/>
              <Widget type="collection"/>
              <Widget type="nonPaying"/>
          </div>
          <div className="charts">
            <Featured />
            <Chart/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Tables />
          </div>
        </div>
    
    </div>
  )
}

export default Home
