import React from 'react';


// function Greet(){
//     return(
//         <h1>Hello World</h1>
//     )
// }

// const Greet = (props) => {
// return(
// <h1>Hello {props.name} From Functional Component</h1>
// )
// }

const Greet = props => {
    const {name} = props
return(
<h1>Hello {name} From Functional Component</h1>
)
}



export default Greet