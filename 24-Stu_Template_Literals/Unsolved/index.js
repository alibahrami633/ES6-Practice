const music = {
  // code here
  genre: "pop",
  year: "2019"
};

// write code between the <div> tags to output the data from the music object above
const songSnippet = `
  <div class="song">
    Genre is: ${music.genre} <br />
    Year is: ${music.year}
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;
