/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
//storing objects in the quotes array
const quotes = [
{quote:"You can do it, you can do everything. You can't do it when you don't try it.", source:"teacher of my middle school", citation:"middle school song", year:"2012"},
{quote:"Even before you’ve earned it, treat yourself and your career with the level of respect that you hope to one day deserve.", source:"Catherine O’Hara, actress"},
{quote:"I only use my iPhone as a camera. I don’t even know my number. I don’t belong to this modern world and I’m out of it, but I don’t want in.", source:"Joni Mitchell, singer-songwriter"},
{quote:"I don’t know what to say. I’m just a kid from Nanaimo who had a good band teacher and good parents, and I don’t know how I ended up here.", source:"Diana Krall, singer and pianist"},
{quote:"It’s the ordinary things that seem important to me.", source:"Alex Colville, late painter"},
{quote:"The only thing we have to fear is fear itself.", source:"Franklin D. Roosevelt",citation:"1933 inaugural address of Franklin D. Roosevelt", year:"1933"}
];



/***
 * `getRandomQuote` function
***/
 
 function getRandomQuote(){
  // Generate a random number
  const randomIndex = Math.floor(Math.random() * quotes.length);
  
  // Retrieve and return a random quote object
  return quotes[randomIndex];
 }




/***
 * `printQuote` function
***/
function printQuote() {
  // Step 1: Create a variable that calls the getRandomQuote() function
  const randomQuote = getRandomQuote();

  // Step 2: Create a variable that initiates your HTML string
  let htmlString = `<p class="quote">${randomQuote.quote}</p>`;
  htmlString += `<p class="source">${randomQuote.source}`;

  // Step 3: Check if the citation property exists
  if (randomQuote.citation) {
    htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  }

  // Step 4: Check if the year property exists
  if (randomQuote.year) {
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  }

  // Step 5: Concatenate the closing </p> tag
  htmlString += `</p>`;

  // Step 6: Set the innerHTML of the quote-box div
  document.getElementById('quote-box').innerHTML = htmlString;
}



/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener('click', function() {
  printQuote(); // Call the printQuote function when the button is clicked
});