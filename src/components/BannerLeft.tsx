import './BannerLeft.css'
import logo from "../assets/WMG.jpg"

export default function BannerLeft() {
 return (
  <div className="left-banner">
    <img className="logo" src={logo} alt="Logo Wish Me Gift" />
    <h1>Wish Me Gift</h1>
  </div>
 )
}