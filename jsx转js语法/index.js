
let esprima = require('esprima')
const sourceCode = `<h1 id="title"><span>hello</span>world</h1>`

let ast = esprima.parseModule(sourceCode, {jsx: true,tokens:true})
console.log(ast);

/**
 * 
 * esprima转换需要2个步骤
 * 1把源代码进行分词，生成tokens
 * 把token数组转换成AST
 * Module {
  type: 'Program',
  body: [
    ExpressionStatement {
      type: 'ExpressionStatement',
      expression: [JSXElement]
    }
  ],
  sourceType: 'module',
  tokens: [
    { type: 'Punctuator', value: '<' },
    { type: 'JSXIdentifier', value: 'h1' },
    { type: 'JSXIdentifier', value: 'id' },
    { type: 'Punctuator', value: '=' },
    { type: 'String', value: '"title"' },
    { type: 'Punctuator', value: '>' },
    { type: 'Punctuator', value: '<' },
    { type: 'JSXIdentifier', value: 'span' },
    { type: 'Punctuator', value: '>' },
    { type: 'JSXText', value: 'hello' },
    { type: 'Punctuator', value: '<' },
    { type: 'Punctuator', value: '/' },
    { type: 'JSXIdentifier', value: 'span' },
    { type: 'Punctuator', value: '>' },
    { type: 'JSXText', value: 'world' },
    { type: 'Punctuator', value: '<' },
    { type: 'Punctuator', value: '/' },
    { type: 'JSXIdentifier', value: 'h1' },
    { type: 'Punctuator', value: '>' }
  ]
}
 */