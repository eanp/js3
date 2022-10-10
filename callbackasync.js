
// cb  asynchronous
// before
// function p1() {
//     console.log('p1 done')
//   }
//   function p2() {
//     console.log('p2 done')
//   }
//   function p3() {
//     console.log('p3 done')
//   }
//   p1()
//   p2()
//   p3()

// cb  asynchronous
// after
//  function p1() {
//     console.log('p1 done')
//   }
//   function p2() {
//     //setTimeout or delay for asynchronous simulation 
//     setTimeout(
//         function() {
//           console.log('p2 done')
//         },3000
//     )
//   }
//   function p3() {
//     console.log('p3 done')
//   }
//   p1()
//   p2()
//   p3()

function p1() {
    console.log('p1 done')
   }
   
   function p2(callback) {
    setTimeout(
     function() {
      console.log('p2 done')
       callback()
     },3000
     )
   }
   
   function p3() {
     console.log('p3 done')
   }
   p1()
   p2(p3)