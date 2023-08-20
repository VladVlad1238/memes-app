class View {
  constructor({ onNewText, onNewMeme}) {
    this.memsSelectNode = document.querySelector('#mem-select');
    this.topTextInputNode = document.querySelector('#top-text-input');
    this.bottomTextInputNode = document.querySelector('#bottom-text-input');
    this.topTextOutputNode = document.querySelector('#top-text');
    this.memesImageNode = document.querySelector('#mems__img');
    this.buttomTextOutputNode = document.querySelector('#bottom-text');
    this.clearButton = document.querySelector('#clear-button');

    this.onNewText = onNewText;
    this.onNewMeme = onNewMeme;

    this.memsSelectNode.addEventListener('change', this._handleSelectInput);

    this.topTextInputNode.addEventListener('input', this.handleNewText);
    this.bottomTextInputNode.addEventListener('input', this.handleNewText);

    this.clearButton.addEventListener('click', this._resetInput);
  }

  handleNewText = () => {
    const aboveTextValue = this.topTextInputNode.value;
    const belowTextValue = this.bottomTextInputNode.value;

    this.onNewText(aboveTextValue, belowTextValue);
  };

  renderText = (aboveTextValue, belowTextValue) => {
    this.topTextOutputNode.textContent = aboveTextValue;
    this.buttomTextOutputNode.textContent = belowTextValue;
  };

  renderMemesList = (memes) => {
    memes.data.memes.forEach((meme) => {
      this.memsSelectNode.innerHTML += `<option value="${meme.name}">${meme.name}</option>`;
      this.memesImageNode.setAttribute('src', meme.url);
    });
  };

  renderMemePicture = (memeUrl) => {
    this.memesImageNode.setAttribute('src', `${memeUrl}`);
  };

  _handleSelectInput = () => {
    const memeName = this.memsSelectNode.value;
    this.onNewMeme(memeName);
  }

  _resetInput = () => {
    this.topTextInputNode.value = "";
    this.bottomTextInputNode.value = "";
    this.topTextInputNode.focus();
  };
};