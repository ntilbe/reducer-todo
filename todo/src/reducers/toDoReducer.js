export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }

  export const toDoReducer = (state, action) => {
    console.log(state, action)
      switch (action.type) {
          case 'ADD_TODO': 
          return (
            [...state,
            {item: action.payload,
            id: new Date(),
            completed: false}]

          )     
          case 'MARK_COMPLETED':
          return (
            state.map( item => {
              if(item.id === action.payload.id) {
                return {
                  ...item,
                  completed: !item.completed
                } 
              } else {
                return item
              }
            })
          )
          case 'CLEAR_COMPLETED':
          return (
            state.filter( item => item.completed === false)
          )
      }

  }