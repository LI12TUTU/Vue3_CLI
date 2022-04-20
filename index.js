#!/usr/bin/env node
const { program } = require("commander")
const helpOptions = require("./lib/core/help")
const createCommands = require("./lib/core/create")

// 版本号
const version = require("./package.json").version
program.version(version)
// 默认指令 --version -V
// 覆盖-V为-v
// program.version(version, "-v, --version")

// 帮助选项和其他选项
helpOptions()
// 创建终端命令
createCommands()

// 解析命令后的参数
// 需要先解析再获取命令行参数
program.name("create")
program.parse(process.argv)

