import "./App.css";
import Checkbox from "./components/Checkbox";
import logo from "./assets/WMG.jpg"
import Breadcrumb from "./components/Breadcrumb.tsx";
import LeftBanner from "./components/BannerLeft.tsx";

export default function App() {


    return (
        <>
            <header>
                <LeftBanner>
                    <div className="logo-container">
                        <img
                            src={logo}
                            alt="logo"
                        />
                    </div>
                </LeftBanner>
                <div className="logo-container">
                    <img
                        src={logo}
                        alt="logo"
                    />
                </div>
            </header>
            <main>
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
                <div className="container">
                    <div className="row">
                        <Checkbox/>
                        <span>Réserver</span>
                    </div>
                </div>
            </main>
        </>
    );


}