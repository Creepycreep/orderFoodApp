class foodService {
  _apiBase = 'https://my-json-server.typicode.com/creepycreep/fakepizza'

  getFood = async (url: string) => {
    let result = await fetch(url);
    return await result.json();
  }

  getAllFood = async () => {
    const data = await this.getFood(`${this._apiBase}/db`);
    return this._transformData(data)
  }

  _transformData = (res: any) => {
    const data = Object.keys(res).map((category: string) => {
      return {
        category: category,
        foodList: res[category]
      }
    })
    return data;
  }

}

export default foodService