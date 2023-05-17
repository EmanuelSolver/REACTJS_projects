// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'



const obj = [{
  blogNames : 'Health',
  content : 'Everyone deserves a healthy living'
},
{
  blogNames : 'Environment',
  content : 'Everyone deserves clean environment'
},
{
  blogNames : 'Weather',
  content : 'Weather is one of the things that boost productivity'
},
{
  blogNames : 'Education',
  content : 'Improvement of livelihood is anchored on good education'
}
];


function App() {
  return (
    <div style={{display: "flex", flexDirection:"column", width:"70%"}}>  

        <h2 style={{textAlign: "center"}}>Productivity and Its Boosters</h2>
 
        <Part myimage="./vite.svg" blogName= "Health" content="Everyone deserves a healthy living"/>
        <Part myimage="./react.svg" blogName= "Environment" content="Everyone deserves clean environment"/>
        <Part myimage="./vite.svg" blogName= "Weather" content="Weather is one of the things that boost productivity"/>
        <Part myimage="./react.svg" blogName= "Education" content="Improvement of livelihood is anchored on good education"/>
        <Footer />
        <Aside style={{display:""}} />
    </div> 

  )
}

const Part = ({blogName, content, myimage}) =>{
  return (
    <div >
        <img src={myimage} alt="vite" />
        <h3>{blogName}</h3>
        <p>{content}</p>
    </div> 
  )
}

const Footer = ()=>{
  return (
    <div style={{display:"flex", justifyContent:"space-between", backgroundColor:'pink'}}>
      <p>Designed by @Njiru_Emanuel</p>
      <p>Created on {new Date().toLocaleDateString()}</p>
    </div>
  )
}

const Aside =()=>{
  return(
    <div style={{float:'right'}}>
      <h2 style={{textAlign:"center"}}>Highlights</h2>

      {
        obj.map((item, index)=>{
            return <h3>{item.blogNames}</h3>;
            
          
        })
      }
    </div>
    
  )
}

export default App
