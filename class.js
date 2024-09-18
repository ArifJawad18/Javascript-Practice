const products=[
     {id:1,name:'lenovo', price:65000},
     {id:1,name:'dell', price:22000},
     {id:1,name:'hp', price:40000},
     {id:1,name:'mac', price:74000},

 ]
//  similar 
class Product{
     country ='Bangladesh';
     constructor(name){
          this.name = name; 
     }

     speak(talk){
          console.log(`talking about ${talk}`)
     }

}

const lenovo = new Product('de el dell')
console.log(lenovo)
lenovo.speak('ok done')