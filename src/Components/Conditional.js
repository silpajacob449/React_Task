import React , {Component} from 'react';
import Chosenvalue from './Chosenvalue';

export default function Conditional(){
 
   const box = {
    color: 'purple',
    backgroundColor: 'yellow',
    fontWeight: 'bold',
    fontSize: '28px',
     padding: '30px'
   }
 
   const list = [
    {
        product: 'Soap',
        isActive: true
    },

    {
        product: 'shampoo',
        isActive: false
    },
    {
        product: 'Toothpaste',
        isActive: false
    },
    {
        product: 'Powder',
        isActive: false
    },
    {
        product: 'Detergent',
        isActive: true
    },
    {
        product: 'Oil',
        isActive: false
    },
    {
        product: 'Rice',
        isActive: false
    },
    {
        product: 'Milk',
        isActive: true
    },
    {
        product: 'Egg',
        isActive: false
    }
];
const ListTag = () => list.map(item => (<li data-Val= {item.isActive}> {item.product}</li>))

  
     
   
    return (
      <p>
        <Chosenvalue ></Chosenvalue>
        <div className="changeStyleBtn"><button onclick="changeStyle()" class="btn btn-primary">Change style</button></div>
            <div id="conditionalBtn" style={box}>You should not use class here. You should achieve using inline style only</div>
           <hr></hr>
           <ul className="products">
           <ListTag />
           </ul>
      </p>
    );

}
