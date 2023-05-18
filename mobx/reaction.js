let nowFn = null
let counter = 0
class Reaction {
  constructor(){
    this.id = ++counter
    this.start = {}
  }
  collect(){
    if(nowFn){
      this.start[this.id] = this.start[this.id] || []
      this.start[this.id].push(nowFn)
    }
  }

  run(){
    if(this.start[this.id]){
      this.start[this.id].forEach(fn => fn())
    }
  }
  static start(handler){
    nowFn = handler
  }
  static end(){
    nowFn = null
  }
}