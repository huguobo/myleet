// DOM事件代理 略

// 属性保护代理 ES6 Proxy

// 虚拟代理，图片预加载
class PreImage {
  constructor(node) {
    this.targetImage = node
  }
  setUrl(url) {
    this.targetImage.src = url;
  }
}

class ImageProxy {
  static URL = '展位图'
  constructor(preTarget){
    this.target = preTarget;
  }
  setUrl(url) {
    this.preTarget = ImageProxy.URL;
    // 创建一个虚拟节点，即代理
    const visualImage = new Image()
    visualImage.onload(()=>{
      this.preTarget.setUrl(url)
    })
    visualImage.src = url
  }
}

// 缓存代理，memoize 略