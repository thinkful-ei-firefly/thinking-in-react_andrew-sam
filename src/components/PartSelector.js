import React from 'react';

const features = Object.keys(this.props.features)
.map(key => {
  // const options = this.props.features[key].map((item, index) => {
  //   const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
  //   const featureClass = 'feature__option ' + selectedClass;
  //   return <li key={index} className="feature__item">
  //     <div className={featureClass}
        
  //       onClick={e => this.updateFeature(key, item)}>
  //         { item.name }
  //         ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
  //           .format(item.cost) })
  //     </div>
  //   </li>
  // });

  return <div className="feature" key={key}>
    <div className="feature__name">{key}</div>
    <ul className="feature__list">
      {/* { options } */}
      <Part features={props.features}/>
    </ul>
  </div>
});  

function PartSelector(props) {
  return (
    Object.keys(props.features)
    .map(key => {
      return (
        <div className="feature" key={key}>
        <div className="feature__name">{key}</div>
          <ul className="feature__list">
            {/* { options } */}
            <Part features={props.features}/>
          </ul>
        </div>
      )
}) 
  )   
}

export default PartSelector