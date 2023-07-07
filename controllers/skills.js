// controllers/skills.js

module.exports = {
  index, 
  show,
  new: newSkill,
  create,
  delete: deleteSkill
};

//conntion is to name the model in uppercase and singular
const skill = require("../models/skills");


function index(req, res) {
  res.render('skills/index', {
    skills: skill.getAll(),
    title: "All Skills"
  });
}


function show(req, res) {
  res.render('skills/show', {
    skill: skill.getOne(req.params.id),
    title: "Skill Details"
  });
}

function newSkill(req, res) {
  res.render("skills/new", {title: "New Skill"});
}

function create(req,res) {
  console.log(req.body);
  skill.create(req.body);
  
  res.redirect("/skills");
}

function deleteSkill (req,res) {
  skill.deleteOne(req.params.id);
  res.redirect("/skills");
}