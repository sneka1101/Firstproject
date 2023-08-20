import React from 'react'
import {MenuList} from "../helpers/MenuList";
import Menuitem from '../Components/Menuitem';
import '../styles/Menu.css';



function Menu() {
    return (
      <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
          {MenuList.map((menuitem, key) => {
            return (
              <Menuitem
                key={key}
                image={menuitem.image}
                name={menuitem.name}
                price={menuitem.price}
              />
            );
          })}
        </div>
      </div>
    );
  }
export default Menu;