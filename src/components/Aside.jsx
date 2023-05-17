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

const Aside =()=>{
    return(
      <div style={{padding: "35px"}}>
        <h2 style={{textAlign: "center"}}>Highlights</h2>
  
        {
          obj.map((item, index)=>{
              return <h4>{item.blogNames}</h4>
                 
          })
        }
      </div>
      
    )
  }

export default Aside;