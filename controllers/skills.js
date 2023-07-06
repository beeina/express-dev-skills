// controllers/skills.js

module.exports = {
  index, 
  show
};

//conntion is to name the model in uppercase and singular
const skill = require("../models/skills");


function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
}


function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
  });
}
