const initialState = {
  currentPage: 3,
  asdf: 3
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'a':
      return state

    default:
      return state
  }
}

export default reducer