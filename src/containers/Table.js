import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn, DeleteButton } from 'react-bootstrap-table';
import Home from './Home'


/*const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Nome</th>
        <th>Profissão</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
  <td>{row.name}</td>
  <td>{row.job}</td>
  <td>
    <button onClick={() => props.removeCharacter(index)}>Delete</button>
  </td>
</tr>
    )
  })

  return <tbody>{rows}</tbody>
}*/

class Table extends Component {
    
    constructor(props) {
       super(props); 
     
    }
    

   handleDeleteButtonClick = (onClick) => {
    // it's not necessary to implement this function if you have no any process before onClick
    console.log('This is my custom function for DeleteButton click event');
    this.removeCharacter(onClick);
    onClick();
  }

createCustomDeleteButton = (onClick) => {
    return (
      <DeleteButton
        btnText='Excluir'
        btnContextual='btn-wrong'
        className='my-custom-class'
        btnGlyphicon='glyphicon-edit'
        onClick={ e => this.handleDeleteButtonClick(onClick) }/>
    );
}

onAfterDeleteRow(rowKeys, rows) {
  
  alert('The rowkey you drop: ' + rowKeys);
}
    
    
    render (){
        const options = {
               deleteBtn: this.createCustomDeleteButton,
               afterDeleteRow: this.onAfterDeleteRow
        };
        
        const { characterData, removeCharacter } = this.props;
        
        const selectRow = {  mode: 'checkbox'  };
        
        return (
            <table>

        
 <BootstrapTable selectRow={ selectRow } data={characterData}  options={ options } striped hover deleteRow>
      <TableHeaderColumn isKey dataField='name'>Nome</TableHeaderColumn>
      <TableHeaderColumn dataField='job'>Profissão</TableHeaderColumn>
  </BootstrapTable>
      </table>

            )
    }
}

export default Table;