/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let id = 1
  let all = []

  return class Task {
    constructor(input) {
      this.listId = input.listId
      this.description = input.description
      this.priority = input.priority
      this.id = id++
      all.push(this)

    }

    static all() {
      return all
    }

  }

})()
