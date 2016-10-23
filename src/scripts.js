// step 1 - to print sentence with most used words

let splitWords = [];

function mostUsedWords(text) {
	let noPunc = text.toLowerCase().replace(/[().,:;'"$!?]/g, "");
	let noReturns = noPunc.replace(/\r?\n|\r/g," ");
	noReturns = noReturns.replace(/\s\s+/g, " ");
	splitWords = noReturns.split(" ");
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
    document.querySelector("#text-options").className = "visible";
		document.querySelector("#top-three-words").innerHTML = `There are ${Object.keys(wordCounts).length} unique words in the text above. <br />Here are the top three:<ul> <li> ${sortedWordArry[0]}</li> <li>${sortedWordArry[1]}</li> <li>${sortedWordArry[3]}</li></ul>`;
};

// step 2 - return an array of next words when given a word

function nextWordOptions(word) {
	let wordOptions = [];
	for (i = 0; i<splitWords.length; i++) {
		if (splitWords[i] === word) {
		wordOptions.push(splitWords[i+1]);
		}
	}
    outputWordOptions = wordOptions.join(", ");
    if (outputWordOptions === '') {
      outputWordOptions = "Sorry, that word was not found in the text!";
    }
    document.querySelector('#next-word-options').innerHTML = outputWordOptions;
}

document.querySelector('#text-input-button').addEventListener("click", () => {
	textInput = document.querySelector("#text-input").value;
	mostUsedWords(textInput);
});

document.querySelector('#word-input-button').addEventListener("click", () => {
  inputWord = document.querySelector('#word-select').value;
  if (inputWord != '') {
    nextWordOptions(inputWord.toLowerCase());
  }
	document.querySelector("#word-options").className = "visible";
  document.querySelector('#word-select').value = '';
});
