class Model {
  constructor({ onTextChanged, oneMemeChanged, onMemesChanged }) {
    this.memes = []
    this.onTextChanged = onTextChanged;
    this.onMemeChanged = oneMemeChanged;
    this.onMemesChanged = onMemesChanged;
 };

 addText = (textAbove, textBelow) => {
  this.textAbove = textAbove;
  this.textBelow = textBelow;

  this.onTextChanged(this.textAbove, this.textBelow);
 };

 getMeme = (memeName) => {
  const memeNames = this.memes
  let memeUrl = null;
  memeNames.data.memes.forEach((meme) => {
    if(meme.name === memeName) {
      memeUrl = meme.url;
    };
    return memeUrl;
  });
  this.onMemeChanged(memeUrl);
 }

 setMeme = (memes) => {
  this.memes = memes;
  this.onMemesChanged(this.memes);
 };
};