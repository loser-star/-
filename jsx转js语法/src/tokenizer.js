const leftParentheses = "leftParentheses";

function tokenizer(input) {
  let tokens = [];
  debugger;
  let state = start;
  for (const iterator of input) {
    state = state(iterator);
  }
  return tokens;
}

function start(char) {
  if (char === "<") {
    emit({ type: leftParentheses, value: "<" });
    return foundLeftParentheses;
  }
  return new Throw("unexpected char");
}
moodule.exports = {
  tokenizer,
};

const sourceCode = `<h1 id="title"><span>hello</span>world</h1>`;

tokenizer(sourceCode);
