import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const data = [
    {
      name: 'Area 1',
      collection: 4000,
      target: 4400,
      amt: 2400,
    },
    {
      name: 'Area 2',
      collection: 3000,
      target: 5398,
      amt: 2210,
    },
    {
      name: 'Area 3',
      collection: 2000,
      target: 19800,
      amt: 2290,
    },
    {
      name: 'Area 4',
      collection: 2780,
      target: 3908,
    },
    {
      name: 'Area 5',
      collection: 1890,
      target: 4800,
    },
    {
      name: 'Area 6',
      collection: 2390,
      target: 3800,
    },
    {
      name: 'SP 1',
      collection: 3490,
      target: 4300,
    },
    {
      name: 'SP 2',
      collection: 3490,
      target: 4300,
    },
    {
      name: 'SP 3',
      collection: 3490,
      target: 4300,
    },
  ];
  return (
    <div className='chart'>
      <div className="title">Sales Per Area</div>
        <ResponsiveContainer width="100%" aspect={2/1}>
        <AreaChart width={730} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorCol" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke='gray' />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
        <Tooltip />
        <Area type="monotone" dataKey="collection" stroke="#8884d8" fillOpacity={1} fill="url(#colorCol)" />
        <Area type="monotone" dataKey="target" stroke="#82ca9d" fillOpacity={1} fill="url(#colorTarget)" />
      </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart