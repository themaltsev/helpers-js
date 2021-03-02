  let dataRelivant = dataSearch.sort((a, b) => a.views === b.views ? 0 : a.views > b.views || -1).reverse()

  console.log(dataRelivant);


dataSearch.sort((a,b) => b.views - a.views) 
