let person = { 
  name: 'John Doe', 
  age: 19, 
  gender: 'Perempuan' 
};

console.log(person.name); // John Doe

person.favoriteLanguage = 'Javascript';
person.experience = 7;

person.age = 17;

delete person.experience;

console.log(person);

