import React from 'react';




function Part(props) {
  return (
  props.features[props.id].map((item, index) => {
    const selectedClass = item.name === props.selected[props.id].name ? 'feature__selected' : '';
    const featureClass = 'feature__option ' + selectedClass;
    return <li key={index} className="feature__item">
      <div className={featureClass}
        
        onClick={e => props.handleSelect(props.id, item)}>
          { item.name }
          ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(item.cost) })
      </div>
    </li>
  })   
  );
}

export default Part