function Home(){
  return (
    <Card 
      bgcolor="light"
      txtcolor="black"
      header="Welcome to BadBank" 
      title={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      body={<>
      To get started press on the  <a href="#/createaccount/" class="btnDeposit">Create Account</a> tab.
      Please note, in order to enjoy all the features do not refresh the page, doing so will erase all data collected in this session.
     
      
      </>}
      
      
    />    
  );  
}
