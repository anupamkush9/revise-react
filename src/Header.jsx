import { useState } from 'react';

function Header(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1> Header </h1>
            <p>You clicked {count} times</p>
					<button onClick={() => setCount(count + 1)}>
					Click me
			</button>
        </div>
    )
}

export default Header;