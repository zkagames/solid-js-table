import { TableRow } from "./components/table/table-types";
import { FullDay } from "./style";

export const tableConfig = {
    columns: [
        {
            id: 'day', displayName: 'Day',    
        },  
        {
            id: 'id', displayName: 'Random String',    
        },      
        {
            id: 'inTime', displayName: 'In',    
        },
        {
            id: 'outTime', displayName: 'Out',    
        },
        {
            id: 'isFull', displayName: "Full Day",
            render: (row : TableRow) => {   
                const isFull = Boolean(row['isFull']);
                return <FullDay isFull={isFull}>{isFull ? 'Yes' : 'No'}</FullDay>
              }
        }, 
    ]
}