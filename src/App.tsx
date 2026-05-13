
import './App.css'
import logo from './assets/WMG.jpg'
import Breadcrumb from "./components/Breadcrumb.tsx";


const App = () => {

  return (
      <div className="App">
      <img src={logo} alt="logo" style={{ width: '200px', height: 'auto' }} />

       <Breadcrumb
           items={[
           {label: 'Home', href: '/'},
           {label: 'Ma Liste', href: '/list'},
               {
                   label: 'cadeau',
                   href: ""
               },

       ]}
       />
      </div>
  )


}

export default App
