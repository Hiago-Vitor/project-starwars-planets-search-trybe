import React, { useContext, useEffect } from 'react';
function Table() {
  const headerList = [
    'Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate', 'Gravity',
    'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL',
  ];

  return (
    <table>
      <thead>
        <tr>
          { headerList.map((header) => <th key={ header }>{ header }</th>)}
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  );
}

export default Table;
