class Publisher {
  subscribers
  constructor() {
    this.subscribers = {};
  }

  publish(type, data) {
    const fns = this.subscribers[type];
    if (fns && fns.length > 0) {
      fns.forEach(fn => fn(data));
    }
  }
  subscribe(type, fn) {
    if (!this.subscribers[type]) {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  }
  unsubscribe(type, fn) {
    if (arguments.length === 1) {
      this.subscribers[type] = [];
    }
    if (arguments.length === 2) {
      this.subscribers[type] = this.subscribers[type].filter(func => func !== fn);
    }
  }
}

class Subscriber {
  publisher
  constructor(publisher) {
    this.publisher = publisher;
  }
  addSubscribe(type, fn){
    this.publisher(type, fn);
  }
  removeSubscribe(type, fn) {
    this.publisher(type, fn)
  }

}

const publisher = new Publisher();
const subscriber1 = new Subscriber(publisher);

subscriber1.addSubscribe('loginSuccess', (data) => { console.log('loginSuccess', data)});

publisher.publish('loginSuccess', { user: 'huguobo' });