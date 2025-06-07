// Defining a function for calculating the amount of ingredients for a certain number of cups of tea
function calculateChaiIngredients(numberOfCups){
  const Water = 200 * numberOfCups;
  const Milk = 50 * numberOfCups;
  const teaLeaves = 1 * numberOfCups;
  const sugar = 2 * numberOfCups;

  return `To make ${numberOfCups} cups of chai bora, you will need: ${Water} mls of water, ${Milk} mls of milk, ${teaLeaves} tablespoons of tea leaves and ${sugar} teaspoons of sugar. Please be careful not to burn yourself.`

}

// Using the number function is optimally better as it takes care of both integers and decimals.
// The trim function is helpful in deleting unnecessary cells of data not needed in the numberOfCups variable.
// Declaring numberOfCups outside the calculateChaiIngredients is vital to avoid scope issues.
let numberOfCups = Number(prompt('How many cups of chai bora, the best chai, would you like to make ?').trim());
let chai = calculateChaiIngredients(numberOfCups)
if (isNaN(numberOfCups)) {
  console.log('Please enter a valid value for number of cups, thank you and sorry for the inconvenience.')
  }
  else if(numberOfCups === 0){
    console.log(`How silly of you, you can't make zero cups of tea! Please try again.`)

  }

  else {
    console.log(chai)
  }
