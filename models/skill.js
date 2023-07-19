const skills = [
    {
        id: 1,  
        name: 'JavaScript',
        proficiency: 'Beginner',
        yearsOfExperience: 1,
    },
    {
        id: 2,  
        name: 'Python',
        proficiency: 'Intermediate',
        yearsOfExperience: 2,
    },
    {
        id: 3,  
        name: 'HTML',
        proficiency: 'Beginner',
        yearsOfExperience: 1,
    },
    {
        id: 4,  
        name: 'CSS',
        proficiency: 'Beginner',
        yearsOfExperience: 1,
    }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
	
function getAll() {
    return skills;
}