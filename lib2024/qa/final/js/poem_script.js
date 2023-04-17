const outputdiv = document.getElementsByClassName("letter")[0]; // Select the element with class "letter" and store it in outputdiv

// Define the text to be displayed
const txt = "Dear Grandpa,<nl> I recently came across a book titled Stolen Words,which tells the story of the loss of Indigenous language in Canada, and it immediately made me think of you. It reminded me of the words that were taken from you during the darkest moments of your life. I still remember when I was studying the Cultural Revolution in my Chinese history textbook and I asked Grandma if she knew what it was. She told me that while it may have been a romantic notion for her, it was a tragedy for you. <nl> You were once an elementary school teacher in the city, but the Cultural Revolution changed your destiny. You were forced to relocate to a remote village where Grandma now lives. It was there that you lost the company of words and books, but it was also where you found Grandma. Although you never expressed your love for her openly in front of me, I could see it in your heart. After eight long years of working as a construction worker, you chose to stay in the village for Grandma, giving up the opportunity to return to the city where you once lived. <nl>You never spoke about the darkest moments of your life. But after talking with Grandma, I began to understand why you rarely smiled, and why you never picked up a book to read. Yet, every time I read aloud from books, you would sit next to me, patiently listening. Unlike my parents, you were always there, lending me your ear. Your presence gave me strength, and in return, the words from books seemed to heal you. If I had known that your precious years were stolen from you, I would have read to you more, in an attempt to recover all the lost words.<nl>I miss you dearly. Even though you are no longer with us, I still think of you whenever I come across something that might have brought you solace. I want to read all the books that could help ease your pain and chase away your nightmares.<nl> With all my love,<nl>Po Yee" ;

setTimeout(function() {
  const splitted = txt.split("<nl>"); // Split the text into an array of strings using "<nl>" as the delimiter

  splitted.forEach(function () {
    const p = document.createElement("p"); // Create a new <p> element for each string in the array
    outputdiv.appendChild(p); // Append the newly created <p> element to the outputdiv
  });

  const paras = outputdiv.querySelectorAll("p"); // Select all <p> elements within the outputdiv and store them in the paras array

  let i = 0; // Initialize a counter for characters in each string
  let currentPara = 0; // Initialize a counter for the current <p> element in paras array

  const intervalId = setInterval(function () {
    paras[currentPara].innerHTML += splitted[currentPara][i]; // Append the next character in the current string to the current <p> element
    i++; // Increment the character counter

    if (i === splitted[currentPara].length) {
      currentPara++; // If all characters in the current string have been displayed, move to the next <p> element
      i = 0; // Reset the character counter

      if (currentPara === splitted.length) {
        clearInterval(intervalId); // If all strings have been displayed, clear the interval
      }
    }
  }, 50); // Display interval in milliseconds (e.g. 50ms = 0.05s)
}, 5000); // Delay in milliseconds before starting the display (e.g. 5000ms = 5s)



