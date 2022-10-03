import {useState} from "react"
import styled from '../App.module.scss'
import {data} from "../data.jsx"

export default function ContentWraper(){

  function ProductMenu(event){

    if(event.target.classList.contains(styled.content || styled.buttonNext || styled.buttonPrev  || styled.wraperButtons)) return;
    const dataProduct = data.find((element) => element.id == event.target.closest(`.${styled.product}`).id)

    setStateContent({data: 
      <div className={styled.windoWproduct}>
        <img src={dataProduct.imageId} />
        <div>
          <h1>{dataProduct.name}</h1>
          <p>{dataProduct.accomplishment}</p>
          <p>{dataProduct?.price}</p>
          <button>Buy</button>
        </div>
      </div>
    })

    setStateButtons({WraperButtons: null})

  }

  function updateProducts(number){ 
     
    setStateContent({

      data: data.filter(product => product.id <= number).map(product => 
      <div className={styled.product} id={product.id}>
        <img src={product.imageId} />
        <h1>{product.name}</h1>
        <p>{product.accomplishment}</p>
        <p>{product?.price}</p>
      </div>

      )})

  }

    const [state , setStateContent] = useState({ data: data.map(product => 

      <div className={styled.product} id={product.id}>
        <img src={product.imageId} />
        <h1>{product.name}</h1>
        <p>{product.accomplishment}</p>
        <p>{product?.price}</p>
      </div> 

      )})

    const [stateButtons , setStateButtons ] = useState({WraperButtons: 

    <div className={styled.wraperButtons}>
      <button className={styled.buttonNext} onClick={ () => updateProducts(15)}>←prev</button>
      <button className={styled.buttonPrev} onClick={ () => updateProducts(9)}>next→</button>
    </div> 

    })
      
    return (
      <div className={styled.content} onClick={(event) => ProductMenu(event)}>
        {state.data}
        {stateButtons.WraperButtons}
      </div>
    )
  
  }