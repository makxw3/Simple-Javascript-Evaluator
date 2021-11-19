const { generate } = require("escodegen")
const { parse } = require("acorn")

const src = "let a = 10;"
console.log(`src: ${src}`)
const ast = parse(src, { ecmaVersion: 2021 })
console.log(`ast: ${ast}`)
const rSrc = generate(ast)
console.log(`rSrc: ${rSrc}`)