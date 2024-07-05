import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {WorksPeople} from './Arr/ArrDataWorks'

const columns: GridColDef<(typeof WorksPeople)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'Имя',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Фамилия',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Возраст',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Полное имя',
        description: 'Эту колонку нельзя отсортировать пожалуйса используйте другие колонки',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

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