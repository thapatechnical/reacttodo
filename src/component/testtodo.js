import React, {useState, useEffect} from 'react'
import "../App.css";
import todo from "../images/todo.svg";


const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    console.log(list);
    if (list) {
        console.log(JSON.parse(localStorage.getItem('lists')));
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return []
    }
};

const Testtodo = () => {

    const [inputData, setInputData] = useState('');

    const [items, setItems] = useState(getLocalItems());

    const addItem = () => {
        if (!inputData) {
            
        } else {
            setItems([...items, inputData]);
            setInputData('');
        }
        
    }

    const deleteItem = (id) => {
        console.log('deleted');
        const updatedItems = items.filter((elem, ind) => {
            return id !== ind;
        })
        setItems(updatedItems);
    }


    // remove all the data 
    const remvoveAll = () => {
        setItems([]);
    }

    // add data to localStorage
    useEffect(() => {
        // localStorage.setItem('thapaName', 'vinod');
        localStorage.setItem('lists', JSON.stringify(items));
    }, [items]);

    return (
       <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todoLogo" />
                        <figcaption>Add your list here ✌ </figcaption>
                        {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                    </figure>
                    <div className="addItems">
                        <input type="text" className="form-control" placeholder="✍️ Add item..."
                            value={inputData }
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <i className="fa fa-plus add-btn" title="Add item" onClick={addItem}></i>
                    </div>

                    <div className="showItems">
                        {
                            items.map((elem, ind) => {
                                return (
                                    <div className="eachItem" key={ind}>
                                        <h3> {elem} </h3>
                                        <div className='todo-btn'>
                                            {/* <i className="far fa-edit add-btn" title="Edit item" onClick={() => deleteItem(ind)}></i> */}
                                            <i className="far fa-trash-alt add-btn" title="Delete item" onClick={() => deleteItem(ind)}></i>
                                        </div>
                                       
                                    </div>
                                )
                            })
                        }
                        
                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" target="_blank" onClick={remvoveAll}><span>CHECK LIST </span></button>
                    </div>

                </div>
         </div>   
      </>
    )
}

export default Testtodo
