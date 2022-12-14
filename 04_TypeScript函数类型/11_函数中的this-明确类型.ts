// 在设置了配置选项compilerOptions, 将noImplicitThis设置为true, 表示不允许模糊(隐式)的this存在

// 1.对象内函数中的this
const obj = {
  name: "coderzxx",
  studying: function() {
    // 默认情况下,this是any类型
    console.log(this.name, "studying")
  }
}

obj.studying()

// 2.普通函数里的this
function foo(this: { name: string }, info: { name: string }) {
  console.log(this, info)
}

foo.call({ name: "coderzxx" }, { name: "111"})

export {}

