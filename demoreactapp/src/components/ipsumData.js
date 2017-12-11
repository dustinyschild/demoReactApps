import React from 'react'

const IpsumItem = (data) => {
  console.log(data[0]);
  return (
    <div>
      {
        data.data.map(paragraph => {
          return (
            <p>{ paragraph }</p>
          )
        })
      }
    </div>
  )
}

export default IpsumItem;