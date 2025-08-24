import { useState } from "react";
import { Link } from "react-router-dom";

import './Sidebar2.css';
import {
  Shirt,
  LayoutList,
  User,
  Users,
  ScissorsSquare,
  Baby,
  Dumbbell,
  Brush,
} from "lucide-react";

const Sidebar2 = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: <Shirt size={18} />, label: "Shirts", path: "/shirts" },
    { icon: <LayoutList size={18} />, label: "Trousers", path: "/trousers" },
    { icon: <User size={18} />, label: "Suits", path: "/suits" },
    { icon: <ScissorsSquare size={18} />, label: "Knitting" , path: "/knitting"},
    { icon: <Users size={18} />, label: "Womenswear" , path: "/womenswear"},
    { icon: <User size={18} />, label: "Menswear", path: "/menwear" },
    { icon: <Baby size={18} />, label: "Kidswear", path: "/kidswear" },
    { icon: <Dumbbell size={18} />, label: "Sportswear", path: "/sportwear" },
    { icon: <Brush size={18} />, label: "Prints" , path: "/prints"},
    { icon: <Brush size={18} />, label: "Exclusive", path: "/exclusive" },
  ];

  return (
    <div className={`mainside ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <button onClick={() => setCollapsed(!collapsed)} className="toggle-btn text-white">
          {collapsed ? "☰" : "⨯"}
        </button>
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((item, indx) => (
          <li key={indx} className="sidebar-item">
          <Link to={item.path} className="sidebar-link text-white text-decoration-none">
    {item.icon}
    {!collapsed && <span className="item-label">{item.label}</span>}
  </Link>
          </li>
        ))}
      </ul>
      {!collapsed &&<div>
        <div>  <Link className=" link-underline link-underline-opacity-0" to="/notedetails"><h6 className='note-side p-4 m-1 border rounded-pill text-light mt-3'>FIND MODA ITALIA AT <br/>INTERNATIONAL TRADE FAIRS</h6></Link></div>
      </div>}
    </div>
  );
};

export default Sidebar2;
