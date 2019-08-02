import React from 'react';



function Custom(props) {
  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      {/* { features } */}
      <PartSelector features={props.features}/>
    </section>
  )   
}

export default Custom