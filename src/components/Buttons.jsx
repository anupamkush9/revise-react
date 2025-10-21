import React from 'react'

const Buttons = ({handleClick}) => {
    const buttons = [
        "C",
        "0", ".", "=", "+",
        "1", "2", "3", "-",
        "4", "5", "6", "*",
        "7", "8", "9", "/"
    ];
    return (
        <div className="d-grid gap-2">
            <div className="row g-2">
                {buttons.map((btn) => (
                    <div className="col-3" key={btn}>
                        <button
                            className="btn btn-secondary w-100"
                            onClick={() => handleClick(btn)}
                        >
                            {btn}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Buttons