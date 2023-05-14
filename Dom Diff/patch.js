let allPatches;
let index = 0;

function patch(node, patches) {
  console.log(patches);
  allPatches = patches;
  walk(node);
}

function walk(node) {
  let currentPatch = allPatches[index++];
  let childNodes = node.childNodes;
  childNodes.forEach((child) => walk(child));
  if (currentPatch) {
    doPatch(node, currentPatch);
  }
}

function doPatch(node, patches) {
  patches.forEach((patch) => {
    switch (patch.type) {
      case "ATTR":
        for (let key in patch.attrs) {
          let value = patch.attrs[key];
          if (value) {
            setAttr(node, key, value);
          } else {
            node.removeAttribute(key);
          }
        }
        break;
      case "TEXT":
        node.textContent = patch.text;
        break;
      case "REPLACE":
        let newNode =
          patch.newTree instanceof Element
            ? render(patch.newTree)
            : document.createTextNode(patch.newTree);
        node.parentNode.replaceChild(newNode, node);
        break;
      case "REMOVE":
        node.parentNode.removeChild(node);
        break;
      default:
        break;
    }
  });
}

function setAttr(node, key, value) {
  console.log(node, key, value);
  switch (key) {
    case "value":
      if (
        node.tagName.toUpperCase() === "INPUT" ||
        node.tagName.toUpperCase() === "TEXTAREA"
      ) {
        node.value = value;
      } else {
        node.setAttribute(key, value);
      }
      break;
    case "style":
      node.style.cssText = value;
      break;
    default:
      node.setAttribute(key, value);
      break;
  }
}
export { patch };
