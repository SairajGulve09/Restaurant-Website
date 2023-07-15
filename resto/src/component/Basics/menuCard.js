import React from 'react'

const menuCard = ({menuData}) => {
  return (
    <>
    <section className='main-card--container'>
    {
        menuData.map((currElem) => {

            const {id,name,category,image,description} = currElem;
            //this is called "this structuring " using this there is no need of writting currElem.category, currElem.image
            //we can directly write category or image

            return(

                <>

    <div className="card-container">
        <div className='card'>
          <div className="card-body">
            <span className='card-number card-circle subtle'>{id}</span>
            <span className='card-author subtle'>{category}</span>
            <h2 className='card-title'>{name}</h2>
            <span className="card-description subtle">
            {description}
            </span>
            <div className="card-read">Read</div>
          </div>

          <img src={image} className='card-media'/>
          <span className="card-tag subtle">Order Now</span>
        </div>
      </div>
                
                </>

            )
        })
    }
      </section>
    </>
  )
}

export default menuCard

