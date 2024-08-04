/* fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
*/

function loadData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => loadData(data));
}
function loadData(data) {
  for (const user of data) {
    console.log(user.email);
  }
}
