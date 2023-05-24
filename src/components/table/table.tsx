
import { orderBy } from "lodash";
import { TableConfig, TableRow } from "./table-types"
import {TableHeader, TableHeaderCell, TableBody, TableCell , TableRowContainer, SortByContainer} from "./table.style"
import { createMemo, createSignal } from "solid-js";

type SortOrder = 'asc' | 'desc';

const flipSortOrder = (sortOrder:SortOrder)=>{
    return sortOrder ==='asc' ? 'desc' : 'asc';
}

export const Table = ({data, tableConfig}:{data: Array<TableRow>, tableConfig: TableConfig})=>{

    const [sortBy, setSortBy] = createSignal(tableConfig.columns[0].id);
    const [order, setOrder] = createSignal<SortOrder>('asc');

    const sortedData = createMemo(()=>{
        return orderBy(data, [sortBy()], [order()]);
    });


    return  <>
            <TableHeader>
                {(tableConfig.columns).map(column=>{
                    return <TableHeaderCell data-testid="table-header" width={column.width}
                        onClick={()=>
                            {
                                setSortBy(column.id);
                                setOrder(sortBy() === column.id ? flipSortOrder(order())  : order);
                            }
                            
                        }>
                       {column.displayName}

                       {sortBy() === column.id && <SortByContainer><span style={order()==='asc'? {} :{transform:'rotate(180deg)'}}>▲</span></SortByContainer>}
                       
                    </TableHeaderCell>
                    })}
            </TableHeader>

            <TableBody>
                    {sortedData().map((row,i)=>{   
                        return <TableRowContainer data-testid="table-row" isOdd={i%2==0}>
                            {(tableConfig.columns).map(column=>{
                          
                            return <TableCell width={column.width}> 
                                 {column.render ? column.render(row) : row[column.id]}              
                            </TableCell>
                            })}
                        </TableRowContainer>
                    })}
            </TableBody>
        </>

}