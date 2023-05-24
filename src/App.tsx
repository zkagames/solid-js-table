
import { MainPage, PageHeader} from './style';
import { API } from './server/server';
import { tableConfig } from './table-config';
import { Table } from './components/table/table';

export const App = () => {

  const cards = API.getMonthlyCards();

  return (
      <MainPage>
        <PageHeader>Table with {cards.length} rows</PageHeader>
        <Table data ={cards} tableConfig={tableConfig}/>
      </MainPage>
  );
};