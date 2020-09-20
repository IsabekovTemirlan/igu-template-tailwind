export const fillPortion = (porionArr, data, id) => {
  for (let i = 0; i < data.length; i += 3) {
    porionArr[id] = [data[i], data[i + 1], data[i + 2]]
    id++
  }
}