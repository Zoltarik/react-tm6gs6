import React from 'react';

const Mod = () => {
  var modeng = [
    {
    id: "1",
    name: "123"
     },
    {
      id: "2",
      name: "456"
    }
    ]
    var modEngTemp = 
        modeng.map((modeng) =>
        <option value={modeng.id}>{modeng.name}</option>
        );
  
  return(
    <div>
    <select>
      {modEngTemp}
      </select>
    </div>
  )
}

export default Mod