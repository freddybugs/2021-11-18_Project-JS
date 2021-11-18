// Exo 2.1.1
console.log("Script_1: Exo 2.1.1 - Bonjour :");
console.log("Bonjour Monde");

console.log("---------------");

// Exo 2.1.2
console.log("Script_1: Exo 2.1.2 - Salut :");
let hello = ""
hello = prompt("Ton prénom ?");

console.log("Bonjour, " + hello + "!")

console.log("---------------");

// Exo 2.2.1
console.log("Script_2: Exo 2.2.1 - Calculs rapides :");
let nbr = ""
nbr = prompt("Choisi un chiffre factorielle : ");

console.log("Tu as choisi: " + nbr)

function fact(nbr) 
{
  // Si nbr = 0 la factorielle retournera 1
  if (nbr === 0)
  {
     return 1;
  }
  // appelez à nouveau la procédure récursive
  return nbr * fact(nbr-1);
}
console.log("Le restultat est : ",fact(nbr));

console.log("---------------");

// Exo 2.2.2
console.log("Script_3: Exo 2.2.2 - Pyramide de Mario :");
let floor = ""
floor = prompt("Choisi la hauteur de ta pyramide : ");
console.log("Tu as choisi ", floor, " étages pour ta pyramide:")

floor = parseInt(floor);
let hastag = ""
let space = " "

for(var cont = 0; cont < floor; cont++){
  hastag += "#"
  console.log((space.repeat(floor-cont)) + hastag)
}


console.log("---------------");


// Exo 2.3.1
console.log("Script_4: Exo 2.3.1 - Startup Nation :");
const e = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


// nés dans année 70
function isSeventy(elem){
  if (elem.year >= 1970 && elem.year < 1980)
  return elem.year
}

const seventy = e.filter(isSeventy);
console.log("Nés dans les années 70 : ", seventy);


console.log("---------------");

// Nom et prénom

const firstLast = e.map(x => x.first + " " + x.last)
console.log(firstLast);

console.log("---------------");


// Age Aujourd'hui

const ageToday = e.map(x => x.first + " " + x.last + " as/aurait " + (age = 2021 - x.year) + " ans aujourd'hui ")
console.log(ageToday);

console.log("---------------");

// Ordre Alphabetique du Nom de famille

const ordre = e.sort(function (a, b) {
  let lastA = a.last.toUpperCase(); // ignore upper and lowercase
  let lastB = b.last.toUpperCase(); // ignore upper and lowercase
  if (lastA < lastB) {
    return -1;
  }
  if (lastA > lastB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log("Nom de famille par ordre alphabetique : ",ordre)


console.log("---------------");

// Exo 2.3.2
console.log("Script_4: Exo 2.3.2 - Bibliothécaire :");

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Sortie au moin 1 fois?

function rent(elem) {
  return elem.rented >= 1;
}
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ? : " + (books.every(rent)));


console.log("---------------");


// Livre avec + de sortie?

renteds=[]
books.forEach(book => renteds.push(book.rented))
console.log("Le livre le plus emprunté est : " + (books[renteds.indexOf(Math.max(...renteds))].title))

console.log("---------------");

// Livre avec le - de sortie?

renteds=[]
books.forEach(book => renteds.push(book.rented))
console.log("Le livre le moins emprunté est : " + (books[renteds.indexOf(Math.min(...renteds))].title))

console.log("---------------");

// Livre avec ID 873495

ids = []
books.forEach(book => ids.push(book.id))
console.log("Le livre avec l'ID n.873495 est : ",(books[ids.indexOf(873495)].title))


console.log("---------------");

// Supp Livre id 133712

console.log("Total (avant suppression) : ",books.length)
console.log("Livre à supprimer : ",books.splice([ids.indexOf(133712)],1))
console.log("Total (après suppression) : ",books.length, books)


console.log("---------------");

// Ordre alphab Livres
const ordreBooks = books.sort(function (a, b) {
  let titleA = a.title.toUpperCase(); // ignore upper and lowercase
  let titleB = b.title.toUpperCase(); // ignore upper and lowercase
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log("Livre par ordre alphabetique : ",ordreBooks)