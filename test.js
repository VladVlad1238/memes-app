const baseUrl = "https://api.imgflip.com"


fetchMemes = async () => {
  try {
    const resp = await fetch(`${baseUrl}/get_memes`);
    if(!resp.ok) {
      throw new Error('Error')
    }
  const {data : { memes } } = await resp.json()
  console.log(memes)

  } catch (error) {
    console.log(error)
  }
  
}
