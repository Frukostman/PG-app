import { Table } from './components/Table/Table';
import { DataInput } from './components/DataInput/DataInput';


import './App.css'

const title = 'Table title'


function App() {

  return (
    <>
        <div className="App">
            <h1>PG/app</h1>
            
            <DataInput/>

            <Table tableTitle={title} />     

        </div>
    </>
  )
}

export default App
