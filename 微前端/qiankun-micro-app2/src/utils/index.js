export function redirectPopup(container) {
  console.log("container", container);
  // 子应用中需要挂载到子应用的弹窗的className，用作标记
  const addPopup = "el-dropdown-menu micro-app-popup";
  const editPopup = "el-dialog__wrapper story-para-edit-popup";
  const whiteList = [addPopup, editPopup];

  // 保存原有document.body.appendChild方法
  let originFn = document.body.appendChild.bind(document.body);

  // 重写appendChild方法
  document.body.appendChild = (dom) => {
    // 根据标记，来区分是否用新的挂载方式
    console.log("dom", dom);
    if (window.__POWERED_BY_QIANKUN__ && whiteList.includes(dom.className)) {
      container.getElementById("#app").appendChild(dom);
    } else {
      originFn(dom);
    }
  };
}
