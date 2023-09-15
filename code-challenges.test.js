// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibonacciFunc",() => {
  it("takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.", () => {
    const fibonacciLength1 = 6
    const fibonacciLength2 = 10
    expect(fibonnaciFunc(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonnaciFunc(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

//GOOD FAILURE
//ReferenceError: fibonnaciFunc is not defined
 
// b) Create the function that makes the test pass.

// Pseudo code:
// name: fibonnaciFunc
// input: number
// output: an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.
// process: using conditionals, make sure if the number is less than two, you return a string asking for a greater number. Then, for a length of 2, return [1, 1], then create a variable called fibonnaci sequence that will hold the start of the function which is [1,1]. Then, create a for loop where you add the first number to the second number, creating a variable that stores this so that then you can push the next number to the fibonnacci sequence variable you created. 

const fibonnaciFunc = (number) => {
  if (number === 2) {
    return [1, 1]
  } else if (number > 2) {
      const fibonacciSequence = [1, 1];
      for (let i = 2; i < number; i++) {
        const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
      }
      return fibonacciSequence;
  } else {
    return "Please enter a length greater than 2"
  }
}

// console.log(fibonnaciFunc(1))
// console.log(fibonnaciFunc(fibonacciLength2))

//TEST PASSED


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("sortedValues", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest.", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    expect(sortedValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(sortedValues(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})


//GOOD ERROR
//ReferenceError: sortedValues is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// name: sortedValues
// input: object that is storing several numbers 
// output: array of the numbers in order from least to greatest 
// process: create a function that uses Object.values to get the values of the object back and sorts through them, make a variable that can hold the values once you use object.values to get them. Use the .sort built in method to sort the values from smallest to largest. 

const sortedValues = (object) => {
  const values = Object.values(object)
  values.sort((a,b) => a-b)
  return values 
}

// console.log(sortedValues(studyMinutesWeek2))

//TEST PASSED


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

describe("accumulatingSum", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    const accountTransactions2 = [250, -89, 100, -96]
    const accountTransactions3 = []
    expect(accumulatingSum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accumulatingSum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accumulatingSum(accountTransactions3)).toEqual([])
  })
})

//GOOD ERROR
//ReferenceError: accumulatingSum is not defined

// b) Create the function that makes the test pass.
// Pseudo code:
// name: accumulatingSum
// input: an array of numbers
// output: an array of the numbers, but accumulating sum 
// process: create conditional statement that if the array is empty it returns an empty array, then create a for loop that iterates through the array and adds the previous number to the next number, create a variable that can hold the runningSum. 

const accumulatingSum = (array) => {
  if (array.length === 0){
    return []
  } else {
    let runningSum = 0
    for (let i = 0; i < array.length; i++) {
      runningSum += array[i]
      array[i] = runningSum
    }
    return array
  }
}

// console.log(accumulatingSum(accountTransactions2))

// TEST PASSED