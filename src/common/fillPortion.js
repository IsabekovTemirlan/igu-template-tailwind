export const fillPortion = (portionArr, data, id) => {
  
  for (let i = 0; i < data.length; i += 3) {
    portionArr[id] = [data[i], data[i + 1], data[i + 2]]
    id++
  }
}