const quotes = [
    {
      text: "Everyone sees what you apper to bbe, few exprience what you really are.",
      author: " Nicclo Machiavell",
      color: "#FF6F61"
    },
    {
      text: "Success is not in what you have, but who you are.",
      author: "Bo Bennett",
      color: "#6B5B95"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
      color: "#88B04B"
    },
    {
      text: "wht worries you masters you.",
      author: "joan Locke",
      color: "#009B77"
    },
    {
        text: "the Fear of death follows from the fear of life A man who lives fully is prepred to die at any time.",
        author: "mark Twain",
        color: "#FF6F61"
      }
  ];

  let index = 0;

  function showQuote() {
    const quote = quotes[index];

    $(".quote-text").fadeOut(function () {
      $(this).text(`"${quote.text}"`).fadeIn();
    });

    $(".quote-author").fadeOut(function () {
      $(this).text(`- ${quote.author}`).fadeIn();
    });

    $(".quote-box").css("background", quote.color);

    // Move to next index
    index = (index + 1) % quotes.length;

    // Recursive setTimeout
    setTimeout(showQuote, 3000);
  }

  // Show the first quote
  showQuote();