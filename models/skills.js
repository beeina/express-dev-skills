const skills = [
    {id: 12345, skill: "Active Listening", done: true},
    {id: 12789, skill: "Patience", done: false},
    {id: 12654, skill: "Problem Solving", done: false}
];

module.exports = {
    getAll,
    getOne, 
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // URL params are strings - convert to a number 
    id = parseInt(id);
    // The Array.prototype.find iterator method is 
    //ideal for finding objects within an array
    return skills.find((skill) => skill.id === id)};
