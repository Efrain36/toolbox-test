const parseCsvToResponse = (csvData, fileName) => {
  const lines = csvData.split('\n').slice(1)

  const result = {
    file: fileName,
    lines: lines.map(line => {
      const values = line.split(',')
      if (isValidLine(values, fileName)) {
        const [_, text, number, hex] = values
        return { text, number: parseInt(number), hex }
      }
      return null
    }).filter(line => line)
  }

  return result
}

const isHexadecimal = num => /^[0-9A-F]+$/ig.test(num)
const isNumber = num => /^[0-9]+$/ig.test(num)
const isText = text => /^[A-Za-z]+$/ig.test(text)

const isValidLine = (line, fileName) => {
  if (line.length !== 4) return false

  const [file, text, number, hex] = line

  return isText(text) && isNumber(number) && isHexadecimal(hex) && fileName && file
}

module.exports = { parseCsvToResponse }
