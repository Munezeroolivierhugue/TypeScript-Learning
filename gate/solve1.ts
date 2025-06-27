class Counter {
  static count: number = 0;

  increment() {
    Counter.count++;
  }

  static getCount() {
    return this.count;
  }
}