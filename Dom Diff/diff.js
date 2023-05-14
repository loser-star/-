let Index = 0;
function diffAttr(oldAttrs, newAttrs) {
  // let count = 0
  // let attr = {}
  // for(let key in oldAttrs){
  //   if(oldAttrs[key] !== newAttrs[key]){
  //     count++
  //     attr[key] = newAttrs[key]
  //   }
  // }
  // for(let key in newAttrs){
  //   if(!oldAttrs.hasOwnProperty(key)){
  //     count++
  //     attr[key] = newAttrs[key]
  //   }
  // }
  // if(count > 0){
  //   patches[index] = attr
  // }

  let patch = {};
  for (let key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key];
    }
  }

  for (let key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      patch[key] = newAttrs[key];
    }
  }
  return patch;
}

function diffChildren(oldChildren, newChildren, patches) {
  oldChildren.forEach((child, idx) => {
    walk(child, newChildren[idx], ++Index, patches);
  });
}

function walk(oldTree, newTree, index, patches) {
  let currentPatch = [];
  // if(!newTree){
  //   currentPatch.push({type: 'REMOVE', index})
  // }else if(isString(oldTree) && isString(newTree)){
  //   if(oldTree !== newTree){
  //     currentPatch.push({type: 'TEXT', text: newTree})
  //   }
  // }else if(oldTree.type === newTree.type){
  //   let attr = diffAttr(oldTree.props, newTree.props)
  //   if(Object.keys(attr).length > 0){
  //     currentPatch.push({type: 'ATTR', attr})
  //   }
  //   diffChildren(oldTree.children, newTree.children, patches)
  // }else{
  //   currentPatch.push({type: 'REPLACE', newTree})
  // }
  // if(currentPatch.length > 0){
  //   patches[index] = currentPatch
  // }
  if (!newTree) {
    currentPatch.push({ type: "REMOVE", index });
  } else if (isString(oldTree) && isString(newTree)) {
    if (oldTree !== newTree) {
      currentPatch.push({ type: "TEXT", text: newTree });
    }
  } else if (oldTree.type === newTree.type) {
    let attrs = diffAttr(oldTree.props, newTree.props);
    console.log(attrs);
    if (Object.keys(attrs).length > 0) {
      currentPatch.push({ type: "ATTR", attrs });
    }
    diffChildren(oldTree.children, newTree.children, patches);
  } else {
    currentPatch.push({ type: "REPLACE", newTree });
  }

  if (currentPatch.length > 0) {
    console.log(index);
    patches[index] = currentPatch;
  }
}

function isString(obj) {
  return Object.prototype.toString.call(obj) === "[object String]";
}

function diff(oldTree, newTree) {
  // TODO
  let patches = {};
  let index = 0;
  walk(oldTree, newTree, index, patches);
  return patches;
}

export { diff };
