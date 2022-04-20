const path = require("path")
const ejs = require("ejs")

const compile = (templateName, data) => {
  const templatePosition = `../templates/${templateName}`
  // __dirname lib/utils
  const templatePath = path.resolve(__dirname, templatePosition)

  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, {}, (err, result) => {
      if (err) {
        reject(err)
        return 
      }

      resolve(result)
    }) 
  })
}

module.exports = {
  compile
}
