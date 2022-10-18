import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tables = () => {

    const rows= [
        {
            id: 1,
            clientId: '2022-0001',
            name: 'Potchie',
            area: 'A1',
            amount: '1002'
        },
        {
            id: 2,
            clientId: '2022-0002',
            name: 'Pot',
            area: 'A3',
            amount: '500'
        },
        {
            id: 3,
            clientId: '2022-0003',
            name: 'chie',
            area: 'A2',
            amount: '54000'
        },
        {
            id: 4,
            clientId: '2022-0004',
            name: 'Archie',
            area: 'SA1',
            amount: '11000'
        },
        {
            id: 5,
            clientId: '2022-0005',
            name: 'Potpot',
            area: 'A6',
            amount: '1000'
        }

    ]
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Client ID</TableCell>
            <TableCell className='tableCell'>Name</TableCell>
            <TableCell className='tableCell'>Area</TableCell>
            <TableCell className='tableCell'>Area</TableCell>
            <TableCell className='tableCell'>Area</TableCell>
            <TableCell className='tableCell'>Area</TableCell>
            <TableCell className='tableCell'>Area</TableCell>
            <TableCell className='tableCell'>Area</TableCell>
            <TableCell className='tableCell'>Area</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>{row.clientId}</TableCell>
              <TableCell className='tableCell'>
                  <div className="cellWrapper">
                    <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg" alt="" className="image" />
                    {row.name}
                  </div>
              </TableCell>
              <TableCell className='tableCell'>{row.area}</TableCell>
              <TableCell className='tableCell'>{row.area}</TableCell>
              <TableCell className='tableCell'>{row.area}</TableCell>
              <TableCell className='tableCell'>{row.area}</TableCell>
              <TableCell className='tableCell'>{row.area}</TableCell>
              <TableCell className='tableCell'>{row.area}</TableCell>
              <TableCell className='tableCell'>{row.area}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Tables
