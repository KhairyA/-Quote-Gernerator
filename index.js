var r = 0;
function Quote() {
  var x = Math.ceil(Math.random() * 26);
  if (x == r) {
    x += 1;
    r = x;
  } else {
    r = x;
  }
  if (x == 1)
    var data = (document.getElementById("demo").innerHTML =
      "Be yourself; everyone else is already taken.<br> Oscar Wilde");
  else if (x == 2)
    var data = (document.getElementById("demo").innerHTML =
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.<br> Marilyn Monroe");
  else if (x == 3)
    var data = (document.getElementById("demo").innerHTML =
      "So many books, so little time.<br> Frank Zappa");
  else if (x == 4)
    var data = (document.getElementById("demo").innerHTML =
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.<br>Albert Einstein");
  else if (x == 5)
    var data = (document.getElementById("demo").innerHTML =
      "A room without books is like a body without a soul.<br> Marcus Tullius Cicero");
  else if (x == 6)
    var data = (document.getElementById("demo").innerHTML =
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.<br>Bernard M. Baruch");
  else if (x == 7)
    var data = (document.getElementById("demo").innerHTML =
      "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.<br> William W. Purkey");
  else if (x == 8)
    var data = (document.getElementById("demo").innerHTML =
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.<br> Dr. Seuss");
  else if (x == 9)
    var data = (document.getElementById("demo").innerHTML =
      "You only live once, but if you do it right, once is enough.<br> Mae West");
  else if (x == 10)
    var data = (document.getElementById("demo").innerHTML =
      "Be the change that you wish to see in the world.<br>Mahatma Gandhi");
  else if (x == 11)
    var data = (document.getElementById("demo").innerHTML =
      "In three words I can sum up everything I've learned about life: it goes on.<br> Robert Frost");
  else if (x == 12)
    var data = (document.getElementById("demo").innerHTML =
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.<br>J.K. Rowling, Harry Potter and the Goblet of Fire");
  else if (x == 13)
    var data = (document.getElementById("demo").innerHTML =
      "Dont walk in front of me… I may not follow Dont walk behind me… I may not lead Walk beside me… just be my friend.<br>Albert Camus");
  else if (x == 14)
    var data = (document.getElementById("demo").innerHTML =
      "If you tell the truth, you don't have to remember anything.<br>Mark Twain");
  else if (x == 15)
    var data = (document.getElementById("demo").innerHTML =
      'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . . <br>C.S. Lewis, The Four Loves');
  else if (x == 16)
    var data = (document.getElementById("demo").innerHTML =
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.<br> Maya Angelou");
  else if (x == 17)
    var data = (document.getElementById("demo").innerHTML =
      "A friend is someone who knows all about you and still loves you.<br>Elbert Hubbard");
  else if (x == 18)
    var data = (document.getElementById("demo").innerHTML =
      "To live is the rarest thing in the world. Most people exist, that is all.<br> Oscar Wilde");
  else if (x == 19)
    var data = (document.getElementById("demo").innerHTML =
      "Always forgive your enemies; nothing annoys them so much.<br>Oscar Wilde");
  else if (x == 20)
    var data = (document.getElementById("demo").innerHTML =
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.<br>Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches");
  else if (x == 21)
    var data = (document.getElementById("demo").innerHTML =
      "Live as if you were to die tomorrow. Learn as if you were to live forever.<br> Mahatma Gandhi");
  else if (x == 22)
    var data = (document.getElementById("demo").innerHTML =
      "We accept the love we think we deserve.<br> Stephen Chbosky, The Perks of Being a Wallflower");
  else if (x == 23)
    var data = (document.getElementById("demo").innerHTML =
      "Without music, life would be a mistake.<br>Friedrich Nietzsche, Twilight of the Idols");
  else if (x == 24)
    var data = (document.getElementById("demo").innerHTML =
      "I am so clever that sometimes I don't understand a single word of what I am saying.<br>Oscar Wilde, The Happy Prince and Other Stories");
  else if (x == 25)
    var data = (document.getElementById("demo").innerHTML =
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.<br>Ralph Waldo Emerson");
  else if (x == 26)
    var data = (document.getElementById("demo").innerHTML =
      "Insanity is doing the same thing, over and over again, but expecting different results.<br> Narcotics Anonymous");
}
