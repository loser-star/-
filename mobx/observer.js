function observer(target) {
  // ...
  let cwm = target.prototype.componentWillMount
  target.prototype.componentWillMount = function(){
    cwm && cwm.call(this)
    autorun(()=>{
      this.render()
      this.forceUpdate()
    }
    )
  }
}