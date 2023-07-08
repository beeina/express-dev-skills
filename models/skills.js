const skills = [
    {id: 12345, skill: "Active Listening", done: true},
    {id: 12789, skill: "Patience", done: false},
    {id: 12654, skill: "Problem Solving", done: false}
];

module.exports = {
    getAll,
    getOne, 
    create, 
    deleteOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id)};

    function create(skill) {
      // add the id
      skill.id = Date.now() % 1000000;
      skill.done = false;
      skills.push(skill);
  }
  
  function deleteOne(id) {
      // All properties attached to req.params are strings
      id = parseInt(id);
      //find the index based on the id of 
      const idx = skills.findIndex(skill => skill.id === id);
      skills.splice(idx, 1);
  }
