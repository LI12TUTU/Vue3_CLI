const program = require("commander")
const { createProjectAction, add2CpnAction } = require("./actions")

const createCommands = () => {
  // 创建项目
  program
    // 创建终端命令
    .command("create <project> [others...]")
    // .description("clone a repository into a folder")
    .description("create your project")
    // 执行命令
    .action(createProjectAction)
  
  // 添加Vue2组件
  program
    .command("add2Cpn <name>")
    .description("add vue2 component")
    .action((name) => {
      const destPath = program.opts().dest
      add2CpnAction(name, destPath)
    })

}

module.exports = createCommands