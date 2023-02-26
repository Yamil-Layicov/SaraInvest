import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../../datatablesource';
import Admin from '../dasborad/Admin';

const DataTable = () => {

  const actionColumn = [{field:'action',headerName:"Fəaliyyət",width:150,renderCell:()=>{
    return(
      <div className='cellAction'>
        <div className='viewButton'>Etrafli</div>
        <div className='deleteButton'>Sil</div>
      </div>
    )
  }}]

  return (
    <div>
      <Admin/>
      <div className='datatable'>
        <h4 style={{color:"gray"}}>Son əməliyyatlar</h4>
        <DataGrid
          className='datagrid'
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  )
}

export default DataTable