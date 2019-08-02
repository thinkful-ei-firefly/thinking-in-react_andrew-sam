import React from 'react';
import Part from './Part';


function PartSelector(props) {
  return (
    Object.keys(props.features)
    .map(key => {
      return (
        <div className="feature" key={key}>
        <div className="feature__name">{key}</div>
          <ul className="feature__list">
            <Part 
              features={props.features} 
              id={key} 
              selected={props.selected}
              handleSelect={props.handleSelect}
            />
          </ul>
        </div>
      )
}) 
  )   
}

export default PartSelector