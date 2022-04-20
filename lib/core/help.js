const program = require("commander")

const helpOptions = () => {
  program.option("-d, --dest <dest>", "a destination folder, eg: -d src/components", "src/components")
  program.option("-f, --framework <framework>", "your framework")

  // 监听对应的选项
  // program.on("--help", function () {
  //   console.log("");
  //   console.log("Other:")
  //   console.log("  other options~");
  // })
}

module.exports = helpOptions