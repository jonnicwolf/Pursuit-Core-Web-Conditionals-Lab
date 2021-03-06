/**
 * Takes in two values and returns if they are equal or not
 * @param {*} a - The first element.
 * @param {*} b - The second element.
 * @returns {boolean} - Is a equal to b.
 */
function isEqual(a, b) {
  return a === b ? true : false;
}

/**
 * Takes in two numbers and returns the larger number
 * The numbers are guaranteed to be unique
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The larger number.
 */
function findLarger(a, b) {
  if (a > b) {
    return a;
  } else return b;
}

/**
 * Takes in two numbers and returns the larger number
 * Returns the string "tie" if both numbers are the same
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string } - The larger number or string "tie"
 */
function findLargerOrTie(a, b) {
  if (a > b) {
    return a;
  } else if (a === b) {
    return "tie";
  } else {
    return b;
  }
}

/**
 * Takes in a number and returns whether that number is positive, negative, or equal to 0.
 * @param {number} a - The number.
 * @returns {string} - "Positive, Negative, "Zero""
 */
function positiveNegativeOrZero(num) {
  if (num > 0) {
    return "Positive";
  } else if (num === 0) {
    return "Zero";
  } else {
    return "Negative";
  }
}

/**
 * Takes in a language (e.g "english", "spanish", "german") and returns "Hello World" in that language.
 * Must work for at least english, spanish, and german.
 * It should default to English if no argument is passed in.
 * Translations: English -> "Hello World"
 *               Spanish -> "Hola Mundo"
 *               German -> "Hallo Welt"
 * @param {string} language - The language.
 * @returns {string} - "Hello World" in the desired language
 */
function aroundTheWorldGreeting(lang) {
  let tongue = "";
  switch (lang) {
    case "spanish":
      tongue = "Hola Mundo";
      break;
    case "german":
      tongue = "Hallo Welt";
      break;
    default:
      tongue = "Hello World";
  }
  return tongue;
}

/**
 * Takes in a language (e.g "english", "spanish", "german") and returns "Hello World" in that language.
 * Must work for at least english, spanish, and german.
 * It should default to English if no argument is passed in.
 * Translations: English -> "Hello World"
 *               Spanish -> "Hola Mundo"
 *               German -> "Hallo Welt"
 * Uses a switch statement in its implementation
 * @param {string} language - The language.
 * @returns {string} - "Hello World" in the desired language
 */
function aroundTheWorldGreetingWithSwitch(lang) {
  let tongue = lang;
  switch (lang) {
    case "spanish":
      tongue = "Hola Mundo";
      break;
    case "german":
      tongue = "Hallo Welt";
      break;
    default:
      tongue = "Hello World";
  }
  return tongue;
}

/**
 * Takes in a number and returns the letter grade corresponding to that number.
 * Letter grades consist of "A", "B", "C", "D", or "F"
 * 90 and above is an A
 * 80 and above is a B
 * 70 and above is a C
 * 60 and above is a D
 * Anything lower than 60 is an F
 * @param {number} grade - The numeric grade.
 * @returns {string} - The letter grade corresponding to the numeric grade.
 */
function calculateLetterGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else {
    return "F";
  }
}
calculateLetterGrade(60)

/**
 * Takes in two variables: animal ('cat', 'dog', etc.) and numberOfAnimals.
 * Use an if - else to statement to return the
 * number and animal (in either single or plural form)
 * Exp: "5 cats" or "1 dog"
 * Bonus: Make it handle a few collecting nouns like "sheep" and "geese"
 * @param {string} animal - The type of animal.
 * @param {number} numberOfAnimals - The number of animals.
 * @returns {string} - the number and animal (in either single or plural form)
 */

function animalCounts(animal, animalNum) {
  return animalNum > 2 ? `${animalNum} ${animal}s` : `${animalNum} ${animal}`;
}

/**
 * Takes in a number and returns whether that number is even or odd
 * @param {number} a - The number.
 * @returns {string} - "Even or Odd"
 */
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

/**
 * Takes in a number and returns whether that number is even or odd
 * Uses a ternary in its implementation
 * @param {number} a - The number.
 * @returns {string} - "Even or Odd"
 */
function evenOrOddWithTernary(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

/**
 * Takes in two numbers and returns the larger number
 * The numbers are guaranteed to be unique
 * Uses a ternary in its implementation
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The larger number.
 */
function findLargerTernary(a, b) {
  return a > b ? a : b;
}

module.exports = {
  isEqual,
  findLarger,
  findLargerOrTie,
  positiveNegativeOrZero,
  aroundTheWorldGreeting,
  aroundTheWorldGreetingWithSwitch,
  calculateLetterGrade,
  animalCounts,
  evenOrOdd,
  evenOrOddWithTernary,
  findLargerTernary,
};
