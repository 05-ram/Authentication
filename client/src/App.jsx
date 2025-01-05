import { RouterProvider } from 'react-router-dom'
import './App.css'
import RouterData from './routes';

function App() {
  const route = RouterData()
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App;

//17.10
