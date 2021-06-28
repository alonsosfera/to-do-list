import React from 'react'

const TRow = ({ el, deleteData, setEditedData }) => {
  return (
      <tr>
        <td><input type='checkbox' /></td>
        <td>{el.description}</td>
        <td>
          <button onClick={() => setEditedData(el)} >Edit</button>
          <button onClick={() => deleteData(el.id)} >Delete</button>
        </td>
      </tr>
  )
};

export default TRow
