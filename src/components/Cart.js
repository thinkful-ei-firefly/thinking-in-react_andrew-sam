import React from 'react';
import PartTotal from './PartTotal';
import Total from './Total';

function Cart(props) {
  return (
    <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>
      <PartTotal selected = {props.selected}/>
      <Total selected = {props.selected}/>
    </section>
  )   
}

export default Cart