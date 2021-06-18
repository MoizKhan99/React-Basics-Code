import react from 'react'


function FunctionClick(params) {

function onPress(){
    console.log("Click from function")
}

    return(
        <div>
            <button onClick={onPress}>Click</button>            
        </div>
    )
}

export default FunctionClick;