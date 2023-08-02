class Model {
  constructor({ onTextChanged, oneMemeChanged, onMemesChanged }) {
    this.memes = []
    this.onTextChanged = onTextChanged;
    this.onMemeChanged = oneMemeChanged
    this.onMemesChanged = onMemesChanged 
    console.log(this.memes)
 };

 addText = (textAbove, textBelow) => {
  this.textAbove = textAbove;
  this.textBelow = textBelow;

  this.onTextChanged(this.textAbove, this.textBelow);
 };

 getMeme = (memeName) => {
  const memesName = this.memes
  let memeUrl = null;
  memesName.data.memes.forEach((meme) => {
    if(meme.name === memeName) {
      memeUrl = meme.url
    }
    return memeUrl
  })
  this.onMemeChanged(memeUrl)
 }

 setMeme = (memes) => {
  this.memes = memes
  this.onMemesChanged(this.memes)
 }
};