function main(param1,param2,callBack){ 
    console.log(param1, param2) 
    callBack()  
  }

  function myCallback(){ 
    console.log ('hello callback')
  }
  
  main(1,2,myCallback)

// cb  synchronous
// before
function calculate(x,y){
    result = x + y
    return result
  }
  calculate(3,2) // 5

//  after
function calculate2(param1,param2,callback){
    //default operation
    result = param1 + param2
    
    // callback is function ?
    if (typeof callback == 'function'){
     result= callback(param1,param2)
    }
    
    return result
  }
  
  //execute
  a=calculate2(2000,4000, function(x,y){return "$ " + (x + y) }) 
  b=calculate2(7000,2000, function(x,y){return "Rp " + (x * y) }) 
  // console.log(a) // $ 6000
  // console.log(b) // $ 14000