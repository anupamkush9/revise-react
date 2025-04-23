import { useState } from "react";

function useToggle(val=true){
    const [value, setValue] = useState(val);

    function ToggleValue(val){
        if (typeof val != 'boolean'){
            console.log("if condition................")
            setValue(!value)
        }else{
            console.log("else condition................")
            setValue(val)
        }
    }

    return [value, ToggleValue]
}

export default useToggle;
