import React from 'react';
import Mod from './Mod.js'
import {Table} from 'reactstrap';
const Test1 = () => {
  return(
    <div>
      <Table>
      <tr>
      <th><p>data</p></th>
      <th><p>model</p></th>
      <th><p>number</p></th>
      </tr>
        <tr>
        <td><input type="date" placeholder="data" /></td>
          <td>
            <Mod />
          </td>
          <td><input type="number" /></td>
        </tr>
      </Table>
    </div>
  )
}

export default Test1;
