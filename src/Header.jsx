import { useState } from 'react';

function Header(){
    const [display,setDisplay] = useState(true);
    return (
        <div>
            <h2>Header </h2>
            <button onClick={()=>setDisplay(!display)}>toggle button</button>
            {display ? <h5> toggle text </h5>: null}
        </div>
    )
}

export default Header;