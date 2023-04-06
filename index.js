// function splitMessage(message, delimiter) {
//   let words;
// words = message.split(delimiter);
//   return words;
// }
// console.log(splitMessage('Mango  hurries to the train', ' '));
// console.log(splitMessage('Mango', ''));
// console.log(splitMessage('best_for_week', '_'));

// function makeArray(firstArray, secondArray, maxLength) {
// return firstArray.concat(secondArray).slice(0,maxLength);
// }
// makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);

// function calculateTotalPrice(order) {
//   let total = 0;
//   console.log(total);
// for (i = 0; i < order.length; i += 1) {
//   total += order[i];
// }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function findLongestWord(string) {
//   const arr = string.split(' ');
//   console.log(arr);
//   let maxEl = '';
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i].length > maxEl.length) {
//       maxEl = arr[i];
//       console.log(arr[i]);
//       console.log(arr[i].length);
//       console.log(maxEl);
//     }
//   }
//   return maxEl;
// }
// console.log(findLongestWord("May the force be with you"));

// function filterArray(numbers, value) {
//   const result = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] > value) {
//         result.push(numbers[i]);
//       }
//     }
//     return result;
//   }
//   filterArray([1, 2, 3, 4, 5], 3);

// const order = ["Earth", "Mars", "Venus"];
// for (const orderItem of order) {
//   console.log(orderItem);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const orderItem of order) {
//     total += orderItem;
//   }
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (let number of numbers) {
//         if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3)

// function getEvenNumbers(start, end) {
//   const evenNumbers = [];
//   for (i = start; i <= end; i +=1) {
//     console.log(i);
//     if (!(i%2)) {
//       evenNumbers.push(i);
//       console.log('pushed:',i);
//     }
//   }
// return evenNumbers;
// }

// function includes(array, value) {
//   for (let item of array) {
//     if (item === value) {
//       return true;
//     }
//   }
//   return false;
// }

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
//   // Change code below this line
//   const aptRating = apartment;
//   const aptDescr = apartment;
//   const aptPrice = apartment;
//   const aptTags = apartment;
//   // Change code above this line
//   tags[tags.length - 1]

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// for (const key in book) {
//   // Key
//   console.log(key, '-', book[key]);
//   // The value of the property with this key
//   // console.log(book[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (key in apartment) {
//   keys.push(key);
//   values.push(apartment[key])
// }
// console.log(keys, values);

// let arr = ["a", "b"]; // задачка
// arr.push(function() {
//   alert( this );
// });
// arr[2](); // ?

// function countProps(object) {
//   let propCount = 0;
//   const okeys = Object.keys(object);
//   console.log(okeys);
//     for (let key of okeys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// // for (const color of colors) {
// //   hexColors.push(color.hex);
// //   rgbColors.push(color.rgb);
// // }
// // console.log(hexColors, rgbColors);

// // // 24
// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// // 18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// // 18
// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//     return product.price;
//     }
//     else continue;
//   }
//   return null;
// }

// // 19
// function getAllPropValues(propName) {
//   const result = [];
//   for (const product of products) {
//     console.log(typeof product[propName]);
//     product[propName] != null ? result.push(product[propName]) : null;
//   }
//   return result;
// }
// console.log(getAllPropValues("name"))
// console.log(getAllPropValues("qweqeqweqe"))
// console.log(getAllPropValues('quantity'))

// // 20
// function calculateTotalPrice(productName) {
//   let result = 0;
//   for (const product of products) {
//     product.name === productName ? result += product.price * product.quantity : null;
//   }

//   return result;
// }
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Droid'));
// console.log(calculateTotalPrice('ytytyty'));

// // 21 // 22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//   yesterday : highYesterday
//   , today : highToday
//   , tomorrow : highTomorrow 
//   , icon : highIcon  = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(yesterday,today,tomorrow,meanTemperature);

// // 25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const {
//   today: {
//     low: lowToday
//     , high: highToday
//     , icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//   },
//   tomorrow: {
//     low: lowTomorrow
//     , high: highTomorrow
//     , icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//   }
// } = forecast;
// console.log(highToday);
// console.log(lowToday);

// // 26
// function calculateMeanTemperature(forecast) {
//   const {
//       today: {
//         low: todayLow
//         , high: todayHigh
//       },
//       tomorrow: {
//         low: tomorrowLow
//         , high: tomorrowHigh
//       }
//     } = forecast;
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// // 27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// // 28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// // 29
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

// // 30
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   return newTask = {
//     completed,
//     category,
//     priority,
//     ...data
//   }
// }

// // 31
// function add(...args) {
//   let result = 0;
//   for (const arg of args) {
//     result += arg;
//   }
//   return result;
// }

// // 32
// function addOverNum(first, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (arg > first) {
//     total += arg;
//     }
//   }
//   return total;
// }

// // 33
// function findMatches(first, ...others) {
//   const matches = []; 
//   for (const other of others) {
//     if (first.includes(other)) {
//       matches.push(other);
//     }
//   }
//   return matches;
// }

// // 34 // 35
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     const ind = this.books.indexOf(oldName);
//     this.books.splice(ind, 1, newName);
//     // return `Updating book ${oldName} to ${newName}`
//   }
// };
// console.log()

// // 36 // 37 // 38 // 39 // 40
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
// getPotions() {
//   return this.potions;
// },
// addPotion(potionName) {
//   this.potions.push(potionName);
// },
// removePotion(potionName) {
//   this.potions.splice(this.potions.indexOf(potionName), 1);
// },
// updatePotionName(oldName, newName) {
//   this.potions.splice(this.potions.indexOf(oldName), 1, newName);
// }
// };

// // // 41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//     {name:'wow',price: 0}
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name == newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//    this.potions.push(newPotion);
//     },
//     // if (this.potions.includes(newPotion)) {
//     //   return `Error! Potion ${newPotion} is already in your inventory!`;
//     // }

//   removePotion(potionName) {

//     for (const potion of this.potions) {
//       if (potion.name == potionName) {
//         this.potions.splice(this.potions.indexOf(potion), 1);
//         return undefined;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;

//     // const potionIndex = this.potions.indexOf(potionName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${potionName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name == oldName) {
//         potion.name = newName;
//         return undefined;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;


//     // const potionIndex = this.potions.indexOf(oldName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${oldName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1, newName);
//   },
//   // test() {
//   //   for (const potion of this.potions) {
//   //     if (potion.name == 'wow') {
//   //       potion.name = '111';
//   //     }
//   //   }
//   //   console.log(
//   //     Object.values(this.potions[0])
//   //     ,
//   //     this.indexOf(this.potions[0])
//   //   )
//   // }
// };

// // 3 практика 
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating'] - вместо hasOwnProperty

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

/* задача - дан массив книг, необходимо создать переменную, в которой будут те же ключи, 
каждому должен будет присвоен массив - список значений аналогичного ключа всех объектов массива книг
*/
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
// ];

// const data = {}
// const keys = Object.keys(books[0]);
// for (const key of keys) { 
//   data[key] = []
// }
// console.log(data);

// for (let key in data) {
//   console.log(key);
//   for (let book of books) {
//       data[key].push(book[key]);
//       console.log('Pushed:', book[key])
//   }
// }
// console.table(data);

/*
spread
*/
// ...arr1 - returns list of vslues of the array
// ...obj1 - returns distinct list - key and value
// function func1(firstArg, secondArg, ...otherArgs)
// // func1(1, 2, 3, 4, 5, 6)
// console.log(...books);

/*    Деструктуризация объекта
const {title: title1, author, rating: rating1 = 100} = book1
  -- возвращает в отдельные переменные свойства properties
  -- можно задавать свои имена переменным
  -- можно присваивать значения по умолчанию
*/

// for (let book of books) {
//   const {title, author} = book
//   console.log(title, author, book.rating);  // через book можно обратиться к любым свойствам объекта
// }

// for (let {title, author} of books) {
//   console.log(title, author, books[0].rating); // нет доступа к объекту, только к дкструктурированным свойствам
// }

/* Дейструктуризация массива
const rgb = [200, 255, 100];
const [red, green, blue] = rgb; -- 1й способ

let red, green, blue; -- 2й способ
[red, green, blue] = rgb;

const [red, ...colors] = rgb; -- частичная деструктуризация

const [, , blue] = rgb; -- Some elements can be skipped
*/



// ====================== 4 ======================


// 4 // 4
// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, makePizza, onOrderError) {
//         if (this.pizzas.includes(pizzaName)) {
//             return makePizza(pizzaName);
//         }
//         else {
//             return onOrderError(pizzaName);
//         }
//     },
//   };
//   // Change code above this line

//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }

//   // Callback for onError
//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }

//   // Method calls with callbacks
//   pizzaPalace.order("Smoked", makePizza, onOrderError);
//   pizzaPalace.order("Four meats", makePizza, onOrderError);
//   pizzaPalace.order("Big Mike", makePizza, onOrderError);
//   pizzaPalace.order("Vienna", makePizza, onOrderError);
// 4 - 5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
// orderedItems.forEach(function (price) {totalPrice += price;})
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// // 4 - 6
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   numbers.forEach(element => {
//     if (element > value) {
//       filteredNumbers.push(element);
//     }
//   });
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// 4 - 7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

// firstArray.forEach(element => {
//   if (secondArray.includes(element)) {
//     commonElements.push(element);
//   }
// });
//   return commonElements;
// }

// // 4 - 10
// // стрелочная функция без curled bracers
// // стрелочная функция может быть объявлена отдельно (logMessage), и вызываться в другом месте
// const numbers = [5, 10, 15, 20, 25];
// const logMessage = (number, index) =>  console.log(`Index ${index}, value ${number}`);
// numbers.forEach(logMessage);
// // принято 
// const calculateTotalPrice = orderedItems => {
//     let totalPrice = 0;
//     orderedItems.forEach(item => {
//       totalPrice += item;
//     });
//     return totalPrice;
//   }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// 4 - 11
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     return filteredNumbers;
//   }
//   console.log(filterArray([1, 2, 3, 4, 5], 3));

// // 4 - 12
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
//     firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
//     return commonElements;
//   }
//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// // 4 - 13
// function changeEven(numbers, value) {
//     const updatedNums = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] % 2 === 0) {
//             updatedNums.push(numbers[i] + value);
//         }
//         else {updatedNums.push(numbers[i]);}
//     }
//     return updatedNums;
// }
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// // 4 - 14
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

// // 4 - 15
// const books = [
//     { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.38, genres: ["adventure", "history"] },
//     { title: "Beside Still Waters", author: "Robert Sheckley", rating: 8.51, genres: ["fiction"] },
//     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 7.75, genres: ["unknown"] },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94, genres: ["horror", "mysticism"] },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67, genres: ["unknown"] },
//   ];

// //   const titles = books.map(book => book.title);
// // 4 - 16
// const genres = books.flatMap(book => book.genres);

//  console.log(genres);

//  // 4 - 17 + 18
//  const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ];
// const users = [];
//   const getUserNames = users => {
//     const newAr = users.map(user => {
//       return user.name;
//     })
//     return newAr
// } // принято
// // const getUserNames = users.map(user => user.name) // не принято
// // console.log(getUserNames);
// console.log(getUserNames({name:1, asd: 333},{name:2, asd:434}));

// // 4 - 19 filter
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(num => num % 2 == 0);
// const oddNumbers = numbers.filter(num => num % 2 > 0);
// 4 - 20
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((book, ind, arr) => arr.indexOf(book) === ind); // поиск уникальных

// console.log(allGenres); 
// console.log(uniqueGenres);

// 4 - 21
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", 
//     author: "Tanith Lee", 
//     rating: 7.94 
//   },
//   { title: "Enemy of God", 
//     author: "Bernard Cornwell", 
//     rating: 8.67 
//   },
// ];
// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author == AUTHOR);

// console.log(topRatedBooks); 
// console.log(booksByAuthor);
// // 4 - 22
const array422 = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]
// const getUsersWithEyeColor = (users, color) => {
//  return users.filter(user => user.eyeColor == color)

// };

// // 4 - 23
const array423 = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
];
// // const getUsersWithAge = (users, minAge, maxAge) => {
// //  return users.filter(user => user.age >= minAge && user.age <= maxAge)

// // };
// // console.table(getUsersWithAge(array423, 30, 40));

// // // 4 - 24
// // const getUsersWithFriend = (users, friendName) => {
// //    return users.filter(user => user.friends.includes(friendName))
// // };
// // console.table(getUsersWithFriend(array423, 'Sharron Pace'))
// // // 4 - 25 -- уникальные элементы
// // const getFriends = (users) => {
// //    return users.flatMap(user => user.friends).filter((el, indx, arr) => arr.indexOf(el) === indx);
// // };
// // console.table(getFriends(array423))
// // 4 - 26
// const getActiveUsers = (users) => {
//    return users.filter(user => user.isActive)
// };
// console.table(getActiveUsers(array423))

// // 4 - 28
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line
// const bookWithTitle = books.find(book => book.title == BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// // 4 - 29
// const getUserWithEmail = (users, email) => {
//    return users.find(user => user.email === email)
// };

// // // 4 - 30
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // // Change code below this line

// // const eachElementInFirstIsEven = firstArray.every(el => el%2 === 0);
// // const eachElementInFirstIsOdd = firstArray.every(el => el%2 !== 0);

// // const eachElementInSecondIsEven = secondArray.every(el => el%2 === 0);
// // const eachElementInSecondIsOdd = secondArray.every(el => el%2 !== 0);;

// // const eachElementInThirdIsEven = thirdArray.every(el => el%2 === 0);
// // const eachElementInThirdIsOdd = thirdArray.every(el => el%2 !== 0);

// //  4 - 32
// const anyElementInFirstIsEven = firstArray.some(el => el % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(el => el % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(el => el % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(el => el % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(el => el % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(el => el % 2 !== 0);


// // 4 - 31
// const isEveryUserActive = (users) => {
//    return users.every(({isActive}) => isActive);
// };

// // 4 - 33
// const isAnyUserActive = users => {
//    return users.some(({isActive}) => isActive);
// };

// // 4 - 34
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// const totalPlayTime = playtimes.reduce((accTime, time) => accTime + time, 0);
// const averagePlayTime = totalPlayTime / playtimes.length;

// // 4 - 35
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce((accTime, player) => accTime + player.playtime / player.gamesPlayed, 0);
// console.log(totalAveragePlaytimePerGame);

// // // 4 - 36, 37   users
// const users = array423;

// // const calculateTotalBalance = users => {
// //    return users.reduce((accBalance, user) => accBalance + user.balance, 0)

// // };
// // console.log(calculateTotalBalance(users));

// const getTotalFriendCount = users => {
//    return users.reduce((accCount, user) => accCount + user.friends.length, 0)
// };
//  console.log(getTotalFriendCount(users));

// // 4 - 38
//  const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
//  const authors = [
//    "Tanith Lee",
//    "Bernard Cornwell",
//    "Robert Sheckley",
//    "Fyodor Dostoevsky",
//  ];
// // //  const sortedDates = releaseDates.slice()
// // //  const ascendingReleaseDates = sortedDates.sort((a, b) => b - a);

// // //  const sortedAuthors = authors.slice()
// // //  const alphabeticalAuthors = sortedAuthors.sort();

// // // 4 - 39
// //   const ascendingReleaseDates = releaseDates.slice().sort((a, b) => a - b);
// //   const descendingReleaseDates = releaseDates.slice().sort((a, b) => b - a);
// // console.log(ascendingReleaseDates);
// // //  console.log(alphabeticalAuthors);
// // console.log(descendingReleaseDates);

// // 4 - 40
// const authorsInAlphabetOrder = authors.slice().sort((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = authors.slice().sort((a, b) => b.localeCompare(a));
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// // // 4 - 41
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const sortedByAuthorName = books.slice().sort((a, b) => a.author.localeCompare(b.author));
// const sortedByReversedAuthorName = books.slice().sort((a, b) => b.author.localeCompare(a.author));
// const sortedByAscendingRating = books.slice().sort((a, b) => a.rating - b.rating);
// const sortedByDescentingRating = books.slice().sort((a, b) => b.rating - a.rating);

// // 4 - 42
// const users = array423
// const sortByAscendingBalance = users => {
//    return users.slice().sort((a, b) => a.balance - b.balance)
// };
// // 4 - 43
// const sortByDescendingFriendCount = users => {
//    return [...users].sort((a,b) => b.friends.length - a.friends.length)
// };
// // 4 - 44
// const sortByName = users => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name))
// };

// // 4 - 45
// const MIN_BOOK_RATING = 8;
// const names = books.filter(book => book.rating >= MIN_BOOK_RATING).map(book => book.author).sort((a,b) => a.localeCompare(b));
// console.log(names);

// // 4 - 46
// const getNamesSortedByFriendCount = users => {
//    return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name)
// };
// // 4 - 47
// const getSortedFriends = users => 
// users.flatMap(user => user.friends)
// .filter((user, index, arr) => arr.indexOf(user) === index) // поиск уникальных
// .sort((a, b) => a.localeCompare(b));

// // 4 - 48
// const getTotalBalanceByGender = (users, gender) => 
// users.filter(user => user.gender === gender)
// .reduce((sum, user) => sum + user.balance , 0);
// console.log(getTotalBalanceByGender(users, 'female'));

/* 4 практика - map() Method
* Array.prototype.map()
* - возвращает массив такой е длины
*/
// const players = [
//     { id:'player-1', name: "Mango", score: 83, playtime: 1270, gamesPlayed: 4  },
//     { id:'player-2', name: "Poly", score: 59, playtime: 469, gamesPlayed: 2  },
//     { id:'player-3', name: "Ajax", score: 37, playtime: 690, gamesPlayed: 3  },
//     { id:'player-4', name: "Kiwi", score: 94, playtime: 241, gamesPlayed: 1 },
//     { id:'player-5', name: "Houston", score: 6, playtime: 6666, gamesPlayed: 14 },
// ]
// const updatedPlayers = players.map(player => (
//     {
//         ...player,
//         score: player.score * 1.1,
//     }
// ))
// console.table(updatedPlayers);
// // найти и изменить конкретного пользователя
// const playerIdToUpdate = 'player-4';
// // const updatedPlayers = players.map(player => {
// //     if (playerIdToUpdate === player.id) {
// //         console.log('нашли объект который нужно обновить');
// //         return {...player, score: player.score + 1000};//'обновленное значение'
// //     }
// //     return player;//'old value'
// // })

// // //shortcut
// // const updatedPlayers = players.map (player => playerIdToUpdate === playerIdToUpdate.id 
// // ? {...playerIdToUpdate, score: player.score + 1000}
// // : player
// // )
// // console.table(updatedPlayers);


/* REDUCE
    Does not change the original array.
    The method iterates over the original array element by element .
    Returns anything.
    Does anything.
*/
// const cart = [
//   {label: 'Apples', price: 100, quantity: 2},
//   {label: 'Tomatoes', price: 120, quantity: 6},
//   {label: 'Melon', price: 80, quantity: 4}
// ]
// const totalAmount = cart.reduce(
//   (accAmount, cart) => accAmount + cart.price * cart.quantity,
//   0,
// )
// console.log(totalAmount);

// const tweets = [
//   {id: '000', likes: 5, tags: ['js', 'node.js']},
//   {id: '001', likes: 2, tags: ['html', 'css']},
//   {id: '002', likes: 15, tags: ['html', 'js', 'node.js']},
//   {id: '003', likes: 8, tags: ['css', 'react']},
//   {id: '004', likes: 0, tags: ['js', 'node.js', 'react']},
// ]
// // const allTags = tweets.reduce((accTags, tweet) => {
// //   accTags.push(...tweet.tags);
// //   return accTags
// // }, [])

// // линтеры - проверялщики кода могут жаловаться на то что код выше меняет параметр функции
// // код ниже обеспечивает иммутабельность
// const allTags = tweets.reduce((accTags, tweet) => [...accTags, ...tweet.tags], [])
// console.log(allTags);

// // считаем кол-во тегов
// const tagStats = allTags.reduce((acc, tag) => {
//   if (acc[tag]) {
//     acc[tag] += 1;
//     return acc
//   }
//   acc[tag] = 1;
//   return acc;
// }, {});
// console.log(tagStats);

// // то же иммутабельно
// const tagStats = allTags.reduce((acc, tag) => {
//   if (acc[tag]) {

//     return {
//       ...acc,
//       [tag]: acc.tag + 1
//     }
//   }
//   return {
//     ...acc,
//     [tag]: 1
//   };
// }, {});

// // shortcut
// const tagStats = allTags.reduce((acc, tag) =>  ({ 
//   ...acc, 
//    [tag]: acc[tag] ? acc[tag] + 1 : 1})
// , {}
// );

// console.log(tagStats);

// 5 // 2
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// 5 // 3
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// пример из лекции Репеты
// const onGetPositionSuccess = function (position) {
//     console.log(position);
//     console.log(error)
// }
// const onGetPositionError = function (error) {
//     console.log(position);
//     console.log(error)
// }
// window.navigator.geolocation.getCurrentPosition (onGetPositionSuccess, onGetPositionError);

// console.log();
///

// // 5 - 4
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // // 5 - 6 + 7 + 8 + 9
// class Car {
//   constructor({brand, model, price} = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() { return this.price}
//   changePrice(newPrice) {this.price = newPrice}
// }
// // const car1 = new Car();

// // 5 - 10
// class Storage {
//   constructor(items) {
//     this.items = items
//   }
//   getItems() { return this.items}
//   addItem(newItem) { this.items.push(newItem)}
//   removeItem(itemToRemove) { 
//     this.items.splice(this.items.indexOf(itemToRemove), 1)
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// // 5 - 11
// class StringBuilder {
//   constructor(val) {this.value = val}
//   getValue() {return this.value}
//   padStart(val) {this.value = val + this.value}
//   padEnd(val) {this.value += val}
//   padBoth(val) {this.value = val + this.value + val}
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// // 5 - 12
// class Car {
// #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// getBrand() {
//   return this.#brand
// }
// changeBrand(newBrand) {
//   this.#brand = newBrand
// }
// }

// // 5 - 13
// class Storage {
//   #items = [];
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// // 5 - 14
// class StringBuilder {
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// // 5 - 15
// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }
//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// // 5 - 16 + 17
// class Car {
//   #price;
//   static #MAX_PRICE = 50000;

//   static checkPrice( price ) {
//    return  price <= Car.#MAX_PRICE ? "Success! Price is within acceptable limits" 
//     : "Error! Price exceeds the maximum"
//   }

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     newPrice <= Car.MAX_PRICE ?
//     this.#price = newPrice : null;
//   }
// }

// // const audi = new Car({ price: 35000 });
// // console.log(audi.price); // 35000
// // audi.price = 49000;
// // console.log(audi.price); // 49000
// // audi.price = 51000;
// // console.log(audi.price); // 49000

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// // console.log(audi)
// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// // console.log(bmw)
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// 5 - 18 + 19 + 20
class User {
  email;
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // accessLevel;
  // blacklistedEmails;
  static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" }
  constructor({accessLevel, email}) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = []
  }
  blacklist(email) {
    this.blacklistedEmails.push(email)
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email)
  }
}

// console.log(Admin.AccessLevel.BASIC);

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true