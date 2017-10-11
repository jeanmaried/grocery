//Lab

const store2 = new GroceryStore([
    ['apples', 73],
    ['pears', 12],
    ['oranges', 97],
    ['grapes', 387],
    ['grapes', 88],
    ['pears', 33],
    ['apples', 75],
    ['grapes', 23],
    ['oranges', 86],
    ['kiwis', 201]
  ]);
  
  function GroceryStore(inventory) {
    this.state = {
      inventory,
      originalList: {},
      currentList: {},
      counted: false
    };
  
  }
  
  GroceryStore.prototype.countFruit = function() {
    if (this.counted) return this;
    this.counted = true;
  
    this.state.originalList = this.state.inventory.reduce((totalList, item) => {
      if (totalList[item[0]]) {
        totalList[item[0]] += item[1];
      } else {
        totalList[item[0]] = item[1];
      }
      return totalList;
    }, {});
  
    console.log(this.state.originalList);
  
    if (!Object.keys(this.state.currentList).length) {
      console.log(!Object.keys(this.state.currentList).length);
      return (this.state.currentList = this.state.originalList);
    }
    return this;
  };
  
  GroceryStore.prototype.stockUp = function(count) {
    if (!this.counted) {
      this.countFruit();
    }
  
    const { currentList } = this.state;
    console.log(currentList);
    console.log(Object.keys(currentList));
    this.state.currentList = Object.keys(
      currentList
    ).reduce((restockList, fruit) => {
      console.log(restockList);
      restockList[fruit] = currentList[fruit] + count;
      //apples = 148 + 5 ==>  apples: 153
      //currentList.apple OR currentList[apple]
      return restockList;
    }, {});
  
    return this;
  };
  
  GroceryStore.prototype.explain = function() {
    if (!this.counted) this.countFruit();
  
    return Object.keys(this.state.currentList)
      .map(fruit => `${this.state.currentList[fruit]} ${fruit}`)
      .join(', ');
  };
  
  console.log(store2.countFruit());
  console.log(store2.stockUp(5));
  console.log(store2.explain());
  
  