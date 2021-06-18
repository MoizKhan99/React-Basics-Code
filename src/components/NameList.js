import react from 'react'

// function NameList(){
//     var num = [1,2,3,4]

//     return(
//         <div>
//             {num.map(number => <h1>{number*number}</h1>)}
//         </div>
//     )
// }

// function NameList(){
//     var num = [1,2,3,4]
//     var square = num.map(number => <h1>{number*number}</h1>)

//     return(
//         <div>
//             {square}
//         </div>
//     )
// }

// function NameList(){
//     var names = ["Sabih","Anas","Moiz","Raza"];
//     var square = names.map(name => <h1>{name}</h1>)

//     return(
//         <div>
//             {square}
//         </div>
//     )
// }

// function NameList(){
//     var personList = [
//         {
//             id: 1,
//             name: "Sabih",
//             skill: "Costume Agent",
//         },

//         {
//             id: 2,
//             name: "Anas",
//             skill: "Assistant Manager",
//         },

//         {
//             id: 3,
//             name: "Moiz",
//             skill:"Developer",
//         }

//     ]

//     const moiz = personList.map(persons =>(
//         <h1 key={persons.id}>I am {persons.name}, I am {persons.skill}</h1>
//     ))
 
//     return(
//         <div>
//             {moiz}
//         </div>
//     )
// }

function NameList(){
    var names = ["Sabih","Anas","Moiz","Raza"];
    var square = names.map((name, index) => <h1 key={index}>{index} {name}</h1>)

    return(
        <div>
            {square}
        </div>
    )
}



export default NameList;