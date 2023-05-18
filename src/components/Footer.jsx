const Footer = ()=>{
    return (
      <div style={{display: "flex", position: "fixed", width:"100%", bottom:"0px", justifyContent:"space-between", backgroundColor:'pink'}}>
        <p><strong>Designed by @Njiru_Emanuel</strong></p>
        <p>Created on {new Date().toLocaleDateString()}</p>
      </div>
    )
  }

export default Footer;