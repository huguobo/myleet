// 发布订阅者模式 or  观察者模式？

// 发布者类
class Publisher {
  constructor(){
    this.observers = [];
  }
  add(observer){
    this.observers.push[observer];
  }

  remove(observer){
    this.observers = this.observers.filter(item => item!=observer)
  }

  notify(){
    this.observers.forEach((observer) => {
      observer.update(this) // 将实例化的发布类作为参数传入
    })
  }
}

// 定义订阅者类
class Observer {
  constructor() {
      console.log('Observer created')
  }

  update() {
      console.log('Observer.update invoked')
  }
}

// 实际的业务场景可以直接继承者两个类进行细化
// PM发布增加需求文档，rd接受并进行开发

class PMPuhlisher extends Publisher{
  constructor(){
    super()
    this.observers = [];
    this.prd = null;
  }

  getPrd() { 
    return this.prd 
  }

  setPrd(val) {
    this.prd = val
    this.notify()
  }


}

class DevObserver extends Observer{
  constructor(){
    super();
    this.prdQueue = [];
  }

  // 重写一个具体的update方法
  update(publisher) {
    console.log('DeveloperObserver.update invoked')
    // 更新需求文档
    this.prdQueue = this.prdQueue.push(publisher.getPrd())
    // 调用工作函数
    this.work()
  }

  work() {
    const workList = this.prdQueue;
    workList.forEach((item) => {
      console.log('working for', item);
    })
  }
}