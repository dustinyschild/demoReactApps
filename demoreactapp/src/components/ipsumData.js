import React from 'react'

const IpsumItem = (data) => {
  console.log(data[0]);
  return (
    <div>
      {
        data.data.map(para => {
          return (
            <p>{ para }</p>
          )
        })
      }
    </div>
  )
}

export default IpsumItem;