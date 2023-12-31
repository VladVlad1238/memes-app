class API {
  constructor() {
    this.baseUrl = 'https://api.imgflip.com';
  }

  async fetchMemes() {
    try {
      const promise = await fetch(`${this.baseUrl}/get_memes`)
      const response = await promise.json()
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

