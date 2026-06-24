
import "./App.css";
import "./assets/fonts/fonts.css"
import Header from './components/Header/Header.tsx';
import Checkbox from "./components/Checkbox";
import Breadcrumb from "./components/Breadcrumb.tsx";

export default function App() {

  return (
    <>
      <Header></Header>

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Ma Liste', href: '/list' },
          {
            label: 'cadeau',
            href: ""
          },
        ]}
      />

      <div className="container">
        <div className="row">
          <Checkbox />
          <p>Réserver</p>
        </div>
      </div>
    </>
  );
}
