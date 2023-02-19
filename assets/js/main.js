////TASK 1
let btn= document.getElementById('btn1')
btn.onclick=() => { 
    let value=document.getElementById('inp1').value
    if(document.body.style.backgroundColor=== value){  
        document.body.style.backgroundColor='white'
    }
    else{
        document.body.style.backgroundColor=value
    }
}

////TASK 2
let minus=document.getElementById('min')
let plus=document.getElementById('pul')
let number=document.getElementById("number")
number.innerHTML=0

minus.onclick=() => {
 number.innerHTML--;
    // let value= Number(document.getElementById('number').value)
    // value--;
    // document.getElementById('number').value=`${toString(value)}`
}

plus.onclick=()=>{
  number.innerHTML++
    // let value= Number(document.getElementById('number').value)
    // value--;
    // document.getElementById('number').value=`${toString(value)}`
}


////TASK 3
let calculate=document.getElementById('calculate')
let sum=document.getElementById('sum')
let multiply=1;

calculate.onclick=()=>{
    let x=Number(document.getElementById('x').value)
    let y=Number(document.getElementById('y').value)
    
   for (let i=x; i < y; i++) {
     multiply*=i
   }
   
   sum.innerHTML=multiply;
}

