import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   //const [count, setCount] = useState(0)
  
//   return (
//     <>
//      {/* calling our child component */}
//       <MyComp myimage="./vite.svg" myname="Emanuel" statement="I'm developing a new App" position='software Engineer'/>
//       <MyComp myimage="./react.svg" myname="Pentagon" statement="working in a new project" position='program manager'/>
      
//     </>
//   )
// }

// //creating a new component
// const MyComp = ({statement, position, myname, myimage})=>{
//   return(
//     <div>
//       <p>Hey, {statement}</p>
//       <h2>I'm a {position} at theJitu</h2>
//       <img src={myimage} alt="vite" />
//       <button style={{backgroundColor:'greenyellow', color: '#000'}}>{myname}</button>
//     </div>
//   );
 
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return( <>  
//       <h1>My name is {this.props.myname}</h1>
//     </>)
//   }
// }

function App() {
  return (
    <div style={{backgroundColor:"grey"}}>  
        <h2 style={{textAlign: "center"}}>Productivity and Its Boosters</h2>

        <Part myimage="./vite.svg" blogName= "Health" content="Everyone deserves a healthy living"/>
        <Part myimage="./react.svg" blogName= "Environment" content="Everyone deserves clean environment"/>
        <Part myimage="./vite.svg" blogName= "Weather" content="Weather is one of the things that boost productivity"/>
        <Part myimage="./react.svg" blogName= "Education" content="Improvement of livelihood is anchored on good education"/>
        <p>Designed by @Njiru_Emanuel</p>
        <p>Created on {new Date().toLocaleDateString()}</p>
        {/* <List /> */}
    </div>
  )
}

const Part = ({blogName, content, myimage}) =>{
  return (
    <div>
        <img src={myimage} alt="vite" />
        <h3>{blogName}</h3>
        <p>{content}</p>
    </div> 
  )
}

const titles = ["Health","Environments","Weather"];

// const List = () =>{
//   return(
//     <div style={{display: "flex"}}>
//       <h3>Highlights</h3>
//       <ul>
//         titles.map(titles =>(title){
//           <li>See {title}</li>
//         })
//       </ul>
//     </div>
    

//   )
// }

<App />

export default App
