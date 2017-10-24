const listFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
      case 'SET_LIST_FILTER':
        return action.filter
      default:
        return state
    }
  }
  
  export default listFilter