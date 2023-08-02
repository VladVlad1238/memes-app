class Controller {
  constructor() {
    this.model = new Model({
      onTextChanged: this.handleModelTextChanged,
      oneMemeChanged: this.handleModelMemesListChanged,
      onMemesChanged: this.handleModelMemeChanged
    })
    this.view = new View({
      onNewText: this.handleViewTextChanged,
      onNewMeme: this.handleViewNewMeme
    })

    this.api = new API()
  } 

  init() {
    this.api.fetchMemes().then((memes) => {
      this.model.setMeme(memes);
    });
  }

  handleModelTextChanged = (textAbove, textBelow) => {
    this.view.renderText(textAbove, textBelow)
  }

  handleViewTextChanged = (aboveTextValue, belowTextValue) => {
    this.model.addText(aboveTextValue, belowTextValue)
  }

  handleModelMemesListChanged = (memes) => {
    this.view.renderMemesList(memes)
  }

  handleModelMemeChanged = (memeUrl) => {
    this.view.renderMemePicture(memeUrl)
  }

  handleViewNewMeme = (memes, memeName) => {
    this.model.getMeme(memes, memeName)
  }
}