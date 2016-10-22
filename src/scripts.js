// step 1 - to print sentence with most used words

let splitWords = [];

function mostUsedWords(text) {
	let noPunc = text.toLowerCase().replace(/[.,;'!?\n/]/g, "");
	splitWords = noPunc.split(" ");
	let wordCounts = [];
	for (let i = 0; i < splitWords.length; i++) {
	    wordCounts[splitWords[i]] = (wordCounts[splitWords[i]] || false) + 1;
	}
  function getSortedKeys(obj) {
	    let keys = [];
	    for(let key in obj) {
	    	keys.push(key);
	    }
	    return keys.sort(function(a,b){return obj[b]-obj[a]});
	}
    let sortedWordArry = getSortedKeys(wordCounts);
    document.querySelector("#top-three-words").innerHTML = `Out of ${Object.keys(wordCounts).length} unique words, the top three are: ${sortedWordArry[0]}, ${sortedWordArry[1]}, & ${sortedWordArry[3]}.`;

    // `Out of ${Object.keys(wordCounts).length} words, the top three are ${sortedWordArry[0]}, ${sortedWordArry[1]}, and ${sortedWordArry[3]}.`;
};

// step 2 - return an array of next words when given a word

function nextWordOptions(word) {
	// access splitWords
	// console.log(splitWords);
	// find the word in splitWords
	let wordOptions = [];
	for (i = 0; i<splitWords.length; i++) {
		// if the word is there,
		if (splitWords[i] === word) {
		// get the value of the next word (index + 1)
			// console.log(splitWords[i+1]);
		// push that word into a new array each time
		wordOptions.push(splitWords[i+1]);
		}
	}
		// return that array
    outputWordOptions = wordOptions.join(", ");

    if (outputWordOptions === '') {
      outputWordOptions = "Sorry, that word was not found in the text!";
    }
    document.querySelector('#next-word-options').innerHTML = outputWordOptions;
}

document.querySelector('#button').addEventListener("click", () => {
  inputWord = document.querySelector('#word-select').value;
  if (inputWord != '') {
    nextWordOptions(inputWord.toLowerCase());
  }
  document.querySelector('#word-select').value = '';
});


mostUsedWords("Then, if we may not tell our pleasure so, we will show it in a different way, and give you a pleasant journey home nks, dear josh Summer-Wind, said the Queen; we will remember the lessons you have each taught us, and when next we meet in Fern Dale, you shall tell us more.  And now, dear Trip, call them from the lake, for the moon is sinking fast, and we must hasten home And Ripple, safe again beneath her snow flake, gladly gave the chain to them; and told them how the pearls they now placed proudly on their breasts were formed of tears, which but for them might still be flowing.  Then the Spirits smiled most kindly on her, and would have put their arms about her, and have kissed her cheek, but she drew back, telling them that every touch of theirs was like a wound to her");
