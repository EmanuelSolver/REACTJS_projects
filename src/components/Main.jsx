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

const Contentbody = ()=>{
    return(
        <div style={{float:'left', width:"70%", padding: "35px"}}>
    
          {
            obj.map((item, index)=>{
                return (
                    <>
                
                     <h3>{item.blogNames}</h3>
                     <p>{item.content}. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias alias distinctio autem pariatur explicabo quisquam itaque dolores ipsam ullam, repellat, minus dolor culpa quos reprehenderit doloribus animi debitis assumenda incidunt!</p>
                    </>
                   
                ) 
            })
          }
        </div>
    )
}

export default Contentbody;