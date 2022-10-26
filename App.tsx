import * as React from 'react';
import './style.css';


const name1 = "Toaster"
const id1= "T01234"
const datePurchased1 = "26/10/22"
const price1 = "5.00"

function Product(props){
  return(
    <div>
      {props.name} {props.id} {props.datePurchased} £{props.price}
    </div>
  )
}

function toString(nm,id,date,pr){
  return nm+ ", "+ id + ", " + date + ", " + pr;
}

function clickHandler(){
  window.alert(toString(name1,id1,datePurchased1,price1))
}

export default function App() {
  return(
    <div>
      <Product name={name1} id={id1} datePurchased={datePurchased1} price={price1}/>
      <button onClick={clickHandler}>
        Show Product
      </button>
    </div>
  )
}
