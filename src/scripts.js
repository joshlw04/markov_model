// step 1 - to print sentence with most used words

// global variable for array of words needed in both steps of challenge
let splitWords = [];

mostUsedWords = (text) => {
	// remove punctuation, carriage returns, and tabs/spaces in inputed text
	let noPunc = text.toLowerCase().replace(/[().,:;'"$!?]/g, "");
	let noReturns = noPunc.replace(/\r?\n|\r/g," ");
	noReturns = noReturns.replace(/\s\s+/g, " ");
	splitWords = noReturns.split(" ");
	// add a counter for each word in the text
	let wordCounts = [];
	for (let i = 0; i < splitWords.length; i++) {
	    wordCounts[splitWords[i]] = (wordCounts[splitWords[i]] || false) + 1;
	}

  sortWords = (words) => {
		// new array to hold sorted words
    let sortedWords = [];
    for(let word in words) {
    	sortedWords.push(word);
    }
		// sort the words in order from most used
    return sortedWords.sort((a,b) => {
			return words[b] - words[a];
		});
	}

  let sortedWordArry = sortWords(wordCounts);
  document.querySelector("#text-options").className = "visible";
	document.querySelector("#top-three-words").innerHTML = `There are ${Object.keys(wordCounts).length} unique words in the text above. <br />Here are the top three:<ul> <li> ${sortedWordArry[0]}</li> <li>${sortedWordArry[1]}</li> <li>${sortedWordArry[2]}</li></ul>`;
};

// step 2 - return an array of next words when given a word

nextWordOptions = (word) => {
	console.log(`you entered ${word}`);
	let wordOptions = [];
	for (i = 0; i<splitWords.length; i++) {
		if (splitWords[i] === word) {
		wordOptions.push(splitWords[i+1]);
		}
	}
  outputWordOptions = wordOptions.join(", ");

  if (outputWordOptions === '') {
		document.querySelector("#word-option-headline").className = "hidden";
		document.querySelector('#next-word-options').innerHTML = "Sorry, that word was not found in the text!";
  } else {
	document.querySelector("#word-option-headline").className = "visible";
	document.querySelector('#next-word-options').className = "visible";
  document.querySelector('#next-word-options').innerHTML = outputWordOptions;
	}
}

document.querySelector('#text-input-button').addEventListener("click", () => {
	textInput = document.querySelector("#text-input").value;
	mostUsedWords(textInput);
});

document.querySelector('#word-input-button').addEventListener("click", () => {
  inputWord = document.querySelector('#word-select').value;
	if (inputWord != '') {
    nextWordOptions(inputWord.toLowerCase());
  } else if (inputWord === ''){
		document.querySelector('#next-word-options').className = "visible";
		document.querySelector("#word-option-headline").className = "hidden";
		document.querySelector('#next-word-options').textContent = "Please enter a word!";
	}
  document.querySelector('#word-select').value = '';
});
