import React, {useState} from 'react'
import Menu from './menu'
import "../TabMenu/tab.css";

const Tabs = () => {

    const [items, setItems] = useState(Menu);

    const filterMenu = (category) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === category;
        });

        setItems(updatedItems);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading"> Order Your Favourite Dish </h1>
            <hr/>
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button  className="btn btn-warning" onClick={() => filterMenu('breakfast')}>Breakfast</button>
                    <button className="btn btn-warning" onClick={() => filterMenu('lunch')} >Lunch</button>
                     <button className="btn btn-warning" onClick={() => filterMenu('evening')} >Evening </button>
                    <button className="btn btn-warning" onClick={() => filterMenu('dinner')} >Dinner</button>
                     <button className="btn btn-warning" onClick={() => setItems(Menu)} >All </button>
                </div>
            </div>

            {/* Our Menu Items List will come here  */}
            
            <div className="menu-items container-fluid mt-5">
                <div className='row'>
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            
                            {
                                
                                items.map((elem) => {
                                    const { id, name, image, description, price, category } = elem;
                                    return (
                                        
                                         <div className="Item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5" key={id}>
                                            <div className="row Item-inside">
                                            {/* only for image  */}
                                            <div className='col-12 col-md-12 col-lg-4 img-div'>
                                                    <img src= {image} alt="menu-img" className='img-fluid' />  
                                            </div>
                                            
                                            {/* for the rest of the data  */}
                                            <div className="col-12 col-md-12 col-lg-8 ">
                                                <div className="main-title pt-4 pb-3">
                                                    <h1>{name}</h1>
                                                    <p>{description}</p>
                                                </div>
                                                <div className="menu-price-book">
                                                    <div className="price-book-divide d-flex justify-content-between align-items-center">
                                                        <h2>Price : {price}</h2>
                                                        <a href="#">
                                                            <button className="btn btn-primary">Order Now</button>
                                                        </a>
                                                    </div>
                                                    <p>*Prices may vary on selected date.</p>        

                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                      
                                    )
                            })
                    }
                        </div>
                    </div>
                </div>
        </div>
    </>
    )
}

export default Tabs
