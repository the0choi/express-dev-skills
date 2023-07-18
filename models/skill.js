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
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
	
function getAll() {
    return skills;
}