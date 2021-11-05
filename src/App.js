import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import './app.css'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App" style={{width:"98%"}}>
     <Topbar />
     <div className="container">
        <Sidebar />
        <Home />
     </div>
    </div>
  );
}

export default App;
