const { promisify } = require("util")
const path = require("path")

const open = require("open")
const download = promisify(require("download-git-repo"))

const { vueRepo } = require("../config/repo-config")
const { commandSpawn } = require("../utils/terminal")
const { compile } = require("../utils/compile")
const { writeTempToFile } = require("../utils/writeTempToFile")

const createProjectAction = async (project) => {
  console.log("create your vue project~~")

  try {
    // clone模板
    await download(vueRepo, project, { clone: true })
    // 创建git仓库
    await commandSpawn("git", ["init"], { cwd: `./${project}`})
    // 判断当前操作系统是否为windows系统，windows系统执行npm.cmd命令
    // where命令查找当前命令所在
    const command = process.platform === "win32" ? "npm.cmd" : "npm"
    // 执行npm install
    await commandSpawn(command, ["install"], { cwd: `./${project}`})
    // 执行npm run prettier
    // windows git检出代码时会把换行成CRLF,格式化成LF
    await commandSpawn(command, ["run", "prettier"], { cwd: `./${project}`})
    // 执行npm run serve
    commandSpawn(command, ["run", "serve"], { cwd: `./${project}`})
    // 打开浏览器
    open("http://localhost:8080/")
  } catch(err) {
    console.log(`your vue project create error`)
    console.log(err.message)
    return
  }

  console.log("your vue project create success")
}

const add2CpnAction = async (name, destPath) => {
  try {
    // 编译ejs模板
    const result = await compile("vue2-component.ejs", { name, lowerName: name.toLowerCase() })
    // 拼接写入路径
    const targetPath = path.resolve(destPath, `${name}.vue`)
    // 写入文件
    writeTempToFile(targetPath, result)
  } catch(err) {
    console.log("add component error")
    console.log(err)
  }
}

module.exports = {
  createProjectAction,
  add2CpnAction
}