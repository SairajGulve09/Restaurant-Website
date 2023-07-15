import React, { useState } from 'react'
import Menu from './menuApi';
import MenuCard from './menuCard'
import Navbar from './Navbar';
import Footer from './footer';

const uniqueList = [...new Set(Menu.map((currElem) => {
  return currElem.category;
})
),
"All",
];
//by using only "Menu.map()" we get all the categories but repetation is also there
//so to get all different categories we have to use "new Set" 
// now we get all the different categories but they are in the form of object
//so we have to convert ir into elements of an array
//so to convert given set to the array we have to add "[]" 
//now we get the array but still there is an objetc in the array
//(...) to get all elements(categories) int he form of element of array we have to use "Spread operator (...)"


const Resturent = () => {

  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {

    if(category==="All"){
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((currElem) =>{
      return currElem.category === category;
    });

    setMenuData(updatedList);
  };
  
  return (
    <>

    
      <Navbar filterItem = {filterItem} menuList = {menuList} />
      <MenuCard menuData /* kahi pn naav deu shakto '=' chya left la */ = {menuData}/>
      <Footer/>
    </>
  );
};

export default Resturent
