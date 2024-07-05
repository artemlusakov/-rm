import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {WorksPeople} from './Arr/ArrDataWorks'
import {columns} from "./Elements/ColumnsDataTable";

const styleDataTablBox = { 
    height: 400, 
    width: '100%'
}

export default function DataTable() {
    return (
        <Box sx={styleDataTablBox}>
            <DataGrid
                rows={WorksPeople}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}