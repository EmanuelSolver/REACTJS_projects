import './main.css'


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
        <div className="Content" style={{float:"left", width:"65%", padding: "35px"}}>
    
          {
            obj.map((item, index)=>{
                return (
                    <>
                        <h3 key={index}>{item.blogNames}</h3>
                        <p key={index}>{item.content}.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias alias distinctio autem pariatur explicabo quisquam itaque dolores ipsam ullam, repellat, minus dolor culpa quos reprehenderit doloribus animi debitis assumenda incidunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor voluptas numquam inventore nam ducimus voluptates expedita quibusdam reiciendis excepturi saepe distinctio neque, dolorum sint quisquam a odit aliquid explicabo doloremque.</p>
                        
                    </>
                     
                ) 
            })
          }
        </div>
    )
}

export default Contentbody;