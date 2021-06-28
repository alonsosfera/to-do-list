import React from 'react'
import { EditButton, DeleteButton, Tdcheckbox, Td } from './styles';

const TRow = ({ el, deleteData, setEditedData }) => {
  return (
    <tr>
      <Tdcheckbox><input type='checkbox' /></Tdcheckbox>
      <Td>{el.description}</Td>
      <Td>
        <EditButton onClick={() => setEditedData(el)} >Edit</EditButton>
        <DeleteButton onClick={() => deleteData(el.id)} >Delete</DeleteButton>
      </Td>
    </tr>
  )
};

export default TRow
