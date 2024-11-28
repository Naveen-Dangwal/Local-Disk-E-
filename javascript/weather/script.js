const key="d839906abd6b95e53efc5daa557fedf0";
//const city=document.querySelector('#city');
const city="delhi";
const url=`https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${key}`;
// const data=document.querySelector('#data');
// const btn=document.querySelector('#btn');



const getdata=async ()=>{
    const response=await fetch(`${url}`);
    let data1=await response.json();
    console.log(data1)
   //data.innerHTML=data1[0];
}

//btn.addEventListener("click",getdata);