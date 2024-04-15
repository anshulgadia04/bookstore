import React from 'react';

const DataTable = ({ data }) => {
  
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' , color:'white' }}>
      <thead>
        <tr style={{ border: '1px solid black' }}>
          <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Category</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Price</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Tittle</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Image</th>
        </tr>
      </thead>
      <tbody>
        {
          
          data.map((item)=>{
            return (
            <tr key={item._id} style={{ border: '1px solid black' }}>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.name}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.category}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.price}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.tittle}</td>
            <td style={{ border: '1px solid black', padding: '8px', alignItems:'center' }}><img className='w-14' src={item.image}/></td>
          </tr>
            )
          })
        }
      </tbody>
    </table>
  );
};

export default DataTable;
