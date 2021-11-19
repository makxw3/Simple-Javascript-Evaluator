const { generate } = require("escodegen")
const { parse } = require("acorn")
const { readFileSync } = require("fs")
const Evaluator = require("./evaluator")

const src = readFileSync("./sample.js")
const ast = parse(src, { ecmaVersion: 2021 })
const ev = new Evaluator()

ev.eval(ast)