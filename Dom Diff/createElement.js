class Element {
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
}
//  创建虚拟dom
function createElement(type, props, children) {
  return new Element(type, props, children);
}
// 设置属性
function setAttr(el, key, value) {
  switch (key) {
    case "value":
      if (
        el.tagName.toUpperCase() === "INPUT" ||
        el.tagName.toUpperCase() === "TEXTAREA"
      ) {
        el.value = value;
      } else {
        el.setAttribute(key, value);
      }
      break;
    case "style":
      el.style.cssText = value;
      break;
    default:
      el.setAttribute(key, value);
      break;
  }
}

//  render方法可以将vnode转化为真实dom
function render(vertualDom) {
  let el = document.createElement(vertualDom.type);
  for (let key in vertualDom.props) {
    setAttr(el, key, vertualDom.props[key]);
  }
  vertualDom.children.forEach((child) => {
    child =
      child instanceof Element ? render(child) : document.createTextNode(child);
    el.appendChild(child);
  });
  return el;
}

function renderDom(el, root) {
  root.appendChild(el);
}

export { createElement, render, renderDom };
