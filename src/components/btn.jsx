import React from 'react';

const btn = (props) => {
    const {className,name,style}=props
  return (
    <div>
      <button className={className} style={style}> {name} </button>
    </div>
  );
}

export default btn;
