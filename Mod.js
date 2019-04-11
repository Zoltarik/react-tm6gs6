import React from 'react';

const Mod = () => {
  var modeng = ["123", "455"]
    var modEngTemp = 
        modeng.map((modeng) =>
        <option>{modeng}</option>
        );
  
  return(
    <div>
      {modEngTemp}
    </div>
  )
}

export default Mod