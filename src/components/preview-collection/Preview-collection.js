import React from 'react';
import './Preview-collection.scss';


const PreviewCollection = ({title, items}) => {
  return (
    <div>
        <h1 className='title'>
            {title.toUpperCase()}
        </h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4).map(item => (
                    <div key = {item.id}>{item.name}</div>
                ))
            }
        </div>
    </div>
  )
}

export default PreviewCollection