import { useState } from 'react';

function Header(){
    const [count,setCount] = useState(0);
    return (
        <div>
            <h2>Header </h2>
            <button onClick={()=>setCount(count + 1)}>counter button</button>
            {count == 0 ? <h5> value is {count} </h5>: 
            count == 1? <h5> value is {count}</h5>:
            count == 2? <h5> value is {count}</h5>:
            count ==3 ? <h5>value is {count}</h5>:
            <h5>more than 3</h5>
            }
        </div>
    )
}

export default Header;