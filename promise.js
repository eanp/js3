import fetch from 'cross-fetch';

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

// async function fetchingApi(){
//     try{
//         let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         console.log(response)
//     } catch(error) {
//         console.log('fetching error - ',error)
//     } finally{
//         console.log('api telah dipanggil')
//     }
// }

// fetchingApi()

// const fetchingApiPromise = fetch('https://jsonplaceholder.typicode.com/todos/1');

// fetchingApiPromise.then(response=> {
//     console.log(response)
// }).catch(error=>{
//     console.log(error)
// })


// let janji = new Promise(
//     (resolve,reject) => {
//         resolve('Berhasil')
//         reject('Gagal')
//     }
// )

// let varpromise = new Promise( (resolve,reject)=>{})

// janji
//     .then((result)=>{console.log(`success - `,result)})
//     .catch((error)=>{console.log(`error - `,error)})

// let janjiasync = async () => {
//     let response = await janji
//     console.log(response)
// }

// janjiasync()