const project = {
  name: "CS GO 2",
  team: ["MAX III", "BobMarli", "CarXStreet"],
  status: "In Progress",
};

console.log("Исходный объект:", project);

Object.preventExtensions(project);
project.deadline = "08.09.2024";
console.log("После preventExtensions:", project);

Object.seal(project);
project.status = "Done!";
delete project.team;
console.log("После seal:", project);

Object.freeze(project);
project.name = "New Team is Ready";
console.log("После freeze:", project);
