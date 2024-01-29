const Adjective=()=>{
    let a = "Crazy";
    let b = "Awsome";
    let c ="Great";
    let run =Math.random()*3
    let num=Math.floor(run)
    if(num===1){
      return a;
    }
    else if(num===2){
    return b;
    }
    else{
    return c ; 
    }
}
Adjective()
const shopName=()=>{
    let a = "Store";
    let b = "Foods";
    let c ="Salon";
    let run =Math.random()*3
    let num=Math.floor(run)
    if(num===1){
    return a;
    }
    else if(num===2){
    return b;
    }
    else{
    return c;  
    }
}
shopName()
const anotherWord=()=>{
    let a = "Pvt.";
    let b = "Limited.";
    let c ="Hub.";
    let run =Math.random()*3
    let num=Math.floor(run)

    if(num==1){
    return a;
    }
    else if(num===2){
    return b;
    }
    else{
        return c;
    }
}
anotherWord()

const nameGenerater=()=>{
    // console.log(`${ Adjective()} ${shopName()} ${anotherWord()}`)
    // document.write(`${ Adjective()} ${shopName()} ${anotherWord()}`)
    const result=`${ Adjective()} ${shopName()} ${anotherWord()}`
    document.getElementById("result").textContent = result;
}







