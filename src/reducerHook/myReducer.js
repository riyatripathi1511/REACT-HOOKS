
//this reuducer function accepts two arguements -> 
//state
// and your action
//action(increment,decrement-(action-type))

export const myReducer = (state = { count: 0 }, action) => {
    
  switch (action.type) {
      case "increseByOne":
          return { ...state, count: state.count + 1 };
      case "decreseByOne":
          return { ...state, count: state.count - 1 };
      case "increseByFive":
          return { ...state, count: state.count + 5 };
      case "decreseByFive":
          return { ...state, count: state.count - 5 };

      default:
          break;
  }
}

  //if some new variable assigning to a variable then it called mutable
  //if not then it is called immutable

