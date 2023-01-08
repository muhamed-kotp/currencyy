// fetch('../data.json')
// .then(e=>e.json())
// .then((data)=>{
//     data.forEach(element => {

//         let myData = 
//         `
//         <div class="col">
//         <div class="card " style="width: 18rem;">
//              <img src="${element.src}" class="card-img-top" alt="...">
//              <div class="card-body" style="color: ${element.color};">
//                  <h3 class="card-title">${element.name}</h3>
//                  <h5 class="card-text">Price : ${element.price} </h5>
//                  <h5 class="card-text">Color : ${element.color} </h5>
//                  <h5 class="card-text">Model : ${element.model} </h5>
//              </div>
//         </div> 
//         </div> 
//         `
//         let myRow = document.querySelector('.row') ; 
//         myRow.innerHTML += myData ;
//     });
// })

// let myBtn = document.querySelector('.btn')
// let myCont = document.querySelector('.container')
// console.log(myBtn);
// myBtn.addEventListener('click',()=>{
//     myCont.classList.toggle("tst")
// })

fetch('../Unconfirmed 760644.json').then(e=>e.json()).then(data=>{

    for (let key in data) {
        let myCountries = 
        `
        <option id="from" value="${key}" >${key} : ${data[key]} </option>
        `
        let myFOrmSelect = document.querySelector('.fo-sel1')

        let myCountries2 = 
        `
        <option id="from" value="${key}" >${key} : ${data[key]}</option>
        `
        let myFor2 =document.querySelector('.fo-sel2 ')

        myFOrmSelect.innerHTML += myCountries ; 
        myFor2.innerHTML += myCountries2 ; 
    }

    let myBtn = document.querySelector('.btn')
    let myFOrmSelect1 = document.querySelector('.fo-sel1')
    let myFormSelect2 = document.querySelector('.fo-sel2')
    let myAmount = document.querySelector('.entry')
    let myResult = document.querySelector('.result')


    myBtn.addEventListener("click", ()=>{
        let total = 1 ; 
    fetch(`https://v6.exchangerate-api.com/v6/eab396fccb86bceba6bb417b/latest/${myFOrmSelect1.value}`)
   .then(e=>e.json())
   .then(data=>{
    
       total =  data.conversion_rates[`${myFormSelect2.value}`] * myAmount.value
       myResult.value  = total
   }
        )
})
    })





// myBtn.addEventListener ('click', ()=>{
//     console.log(myFOrmSelect1.value);

// })


// myBtn.addEventListener("click",()=>{
//     fetch(`https://v6.exchangerate-api.com/v6/eab396fccb86bceba6bb417b/latest/${myFOrmSelect1.value}`)
//     .then(e=>e.json)
//     .then(data=>
//         console.log(data))

// })


// fetch(`https://v6.exchangerate-api.com/v6/eab396fccb86bceba6bb417b/latest/${all}`)
// `${myFOrmSelect1.value}`





