function AllData(){
  const [data, setData] = React.useState('');

  React.useEffect( () => {
    //fetch all accounts from API
    fetch('/account/all')
      .then( response => response.json())
      .then( data => {
        console.log(data);
        setData(JSON.stringify(data));
      });
  }, []);
  return (
  
   <>
              
  {/* {ctx.users.map((ctx,i) => <Card 
    key={i}        
    bgcolor="warning"
    txtcolor="black"
    header={ctx.name}
    text={
      "Email: " + ctx.email }
    text1={
      "Password: " +  ctx.password
   }
    body={"Balance: $" + ctx.balance}/>
       
  )}  */}
  <h5> {data} </h5>
  </>
  );
}
