import {Grid} from  '@mui/material'
import './App.css' 
import MyForm from './components/MyForm'
import MyTable from './components/MyTable'

function App() {

  return (
    <>
        <Grid container spacing={2}>
          <Grid  items xs={12} md={4} lg={6}>
            <MyForm />
          </Grid>
          <Grid  items xs={12} md={4} lg={6}>
            <MyTable />
          </Grid>
        </Grid>
    </>
  )
}

export default App
