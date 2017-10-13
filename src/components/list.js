/*
list is responsible for creating a single list component
*/


const List = (() => {
  let id = 1
  let all = []

  return class List {
    constructor(title) {
      this.title = title
      this.id = id++
      all.push(this)
    }

    static all() {
      return all
    }

    



  }


})()

List.all = []
