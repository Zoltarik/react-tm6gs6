import React from 'react';
import Mod from './Mod.js'
const Test1 = () => {
  return(
    <div>
      <table>
        <tr>
        <td><p>data</p><input type="date" placeholder="data" /></td>
          <td>
            <p>Mod</p>
            <Mod />
          </td>
          <td><p>Nom</p><input type="number" /></td>
        </tr>
      </table>
    </div>
  )
}

export default Test1;
