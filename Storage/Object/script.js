const myObject = [
    {firstname: "Mohammad", lastname: "Nili", isMale: true},
    {firstname: "Nima", lastname: "Siah", isMale: true},
    {firstname: "Niloo", lastname: "Nili", isMale: false},
]

const soloObject = {firstname: "Mohammad", lastname: "Nili", isMale: true};

localStorage.setItem('soloPersonInfo',JSON.stringify(soloObject));
localStorage.setItem('PersonInfo',JSON.stringify(myObject));