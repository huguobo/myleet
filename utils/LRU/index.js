
// 利用 es6 Map 数据结构 TODO 本质上数据结构应该维护为一个链表？
class LRUCache {
	constructor(n) {
		this.capacity = n;
		this.data = new Map();
	}

	put(key, value) {
		if(this.capacity === this.data.size) {
			const firstKey = [...this.data.keys()][0]; // MAP.keys 返回值为 iterator，可以用... 或者 Array.from() 转换为数组
			this.data.delete(firstKey);
		}
		this.data.set(key, value);
	}

	get(key, defaultVal) {
		if (!this.data.has(key)) {
			return defaultVal || null;
		}
		const value = this.data.get(key);
		this.data.delete(key);
		this.data.set(key, value);
		return value || defaultVal;
	} 
}