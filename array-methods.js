const products = [
  { name: "laptop", price: 2000, brand: "lenovo", color: "silver" },
  { name: "laptop", price: 3400, brand: "apple", color: "golden" },
  { name: "laptop", price: 6200, brand: "hp", color: "silver" },
  { name: "laptop", price: 4200, brand: "dell", color: "black" },
];
const brands = products.map((product) => product.brand);
console.log(brands);

// forEach
products.forEach((product) => console.log(product));

//3. filter
const cheap = products.filter((product) => product.price <= 5000);
console.log(cheap);
