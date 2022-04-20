const fs = require("fs")
const path = require("path")

// 递归创建文件夹
const createDirSync = (destPath) => {
  // 目录是否存在
  if (fs.existsSync(destPath)) {
    return true
  } else {
    // 不存在 判断父目录是否存在
    if (createDirSync(path.dirname(destPath))) {
      // 创建文件夹
      fs.mkdirSync(destPath)
      // 返回true
      return true
    }
  }
}

const writeTempToFile = (destPath, template) => {
  if (createDirSync(path.dirname(destPath))) {
    return fs.promises.writeFile(destPath, template, { flag: "a+" })
  }
}

module.exports = {
  writeTempToFile
}