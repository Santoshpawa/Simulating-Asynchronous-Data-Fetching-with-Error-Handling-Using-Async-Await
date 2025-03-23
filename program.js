function fetchData(){
    return new Promise((res,rej)=>{
        let x=Math.floor(Math.random()*10);
        setTimeout(()=>{

            if(x>=5)
                res("Data Fetched")
            else
                rej("Error in data fetching")
        },1000)
    })
}

fetchData().then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
})