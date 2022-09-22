
const config = {
  name: '张三',
  age: '13'
}

let bindToGlobal = (obj, key) => {
  if (typeof window[key] === 'undefined') {
    window[key] = {};
  }
}