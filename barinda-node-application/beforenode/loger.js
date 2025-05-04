
const person = () => {
const list  = [
    { id:1,name:"barinda", location:"muhanga" },
    { id:2,name:"adorente", location:"Nyanza" },
    { id:3,name:"sandrine", location:"Rubavu" }
];
return list.map((user) => {
  console.log(user);
});

}
// person();

 module.exports.person = person();