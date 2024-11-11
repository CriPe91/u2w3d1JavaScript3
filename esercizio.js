class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  isOverAge(userToCompare) {
    return this.age > userToCompare.age ? `l età di ${this.firstName} è maggiore di ${userToCompare.firstName}` : "l età è minore";
  }
}

const Cristian = new User("Cristian", "Petta", "30", "Roma");
const Antonio = new User("Antonio", "Amormino", "29", "Palermo");
const Davide = new User("Davide", "De pasquale", "26", "Barletta");

console.log(Cristian.isOverAge(Antonio));
console.log(Antonio.isOverAge(Davide));
console.log(Davide.isOverAge(Cristian));

class Pet {
  constructor(petName, ownerName, species = [], breed = []) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  isSameOwner(petToCompare) {
    return this.ownerName === petToCompare.ownerName;
    // ? `${this.ownerName} è uguale`: "non è uguale";
  }
}

const Pet1 = new Pet("Birillo", "Cristian", "cane", "labrador");
const Pet2 = new Pet("Pazzo", "Antonio", "gatto", "soriano");
const Pet3 = new Pet("kiki", "Dario", "coniglio", "nano");
const Pet4 = new Pet("flaffy", "Antonio", "coniglio", "nano");

console.log(Pet2.isSameOwner(Pet4));
console.log(Pet1.isSameOwner(Pet3));

const pets = [];
function petLista() {
  const petList = document.getElementById("petList");
  petList.innerHTML = "";
  pets.forEach((pet) => {
    const petLi = document.createElement("li");
    petLi.innerText = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie:${pet.species}, Razza: ${pet.breed}`;
    petList.appendChild(petLi);
  });
}

const form = document.getElementById("petForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nomeAnimale = document.getElementById("petName").value;
  const Proprietario = document.getElementById("ownerName").value;
  const specie = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;
  const newPet = new Pet(nomeAnimale, Proprietario, specie, breed);
  pets.push(newPet);
  petLista();
  console.log(pets);
  form.reset();
});
