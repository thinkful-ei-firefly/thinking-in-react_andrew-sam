import React from 'react';
import PartSelector from './PartSelector';



function Custom(props) {
  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      {/* { features } */}
      <PartSelector features={props.features} selected={props.selected}/>
    </section>
  )   
}

export default Custom