
import "./App.css";
import Checkbox from "./components/Checkbox";
import logo from "./assets/WMG.jpg"
export default function App() {


    return (
        <div className="logo-container">
            <img
                src={logo}
                alt="logo"

            />
        <div className="container">
            <div className="row">
                <Checkbox />
                <span>Réserver</span>
            </div>



        </div>
            </div>
    );
}
