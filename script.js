//search functionality
   mysearch.addEventListener('keyup',function(){
    let textEntered=mysearch.value;
    console.log(textEntered);
        async function getData(){
            try{
                let url=`http://makeup-api.herokuapp.com/`;              
                let res=await fetch(url);
                console.log(res);
                let result=await res.json();
                console.log(result);
                showdata(result);
            }catch(error){
                console.log(error);
            }
            
        }
        getData(); 
    
    })