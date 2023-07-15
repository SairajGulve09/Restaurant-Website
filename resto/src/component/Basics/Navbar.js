import React from 'react'

const Navbar = ({filterItem , menuList}) => {
  return (
    <>
      <nav className='navbar'>
      {/* <img className='logo' src="https://static.vecteezy.com/system/resources/previews/010/411/845/original/restaurant-logo-design-template-free-vector.jpg"/> */}
      <div className="btn-group">

        {
            menuList.map((currElem) => {
                return(
                    <button className="btn-group__item" onClick={() => filterItem(currElem)}>{currElem}</button>

                );
            })
        }

        {/* <button className="btn-group__item" onClick={() => filterItem("breakfast")}>Breakfast</button>
        <button className="btn-group__item" onClick={() => filterItem("lunch")}>Lunch</button>
        <button className="btn-group__item" onClick={() => filterItem("evening")}>Evening</button>
        <button className="btn-group__item" onClick={() => filterItem("dinner")}>Dinner</button>
        <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button> */}

      </div>
    </nav>
    </>
  )
}

export default Navbar
