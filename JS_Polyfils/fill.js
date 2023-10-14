const arr = ['hello', "how", "are", "you"]


Array.prototype.MyFill = function (Element, Start = 0, end = this.length) {

    if (Start < 0) {
        Start = this.length + Start;
      }
    
      if (end < 0) {
        end = this.length + end;
      }
    console.log(this, Element)
    for (let i = Start; i < end; i++) {
        this[i] = Element
    }
    return this
}

const updated = arr.MyFill("ok", -2, 4)
console.log(updated)