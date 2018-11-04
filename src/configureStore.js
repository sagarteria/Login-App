import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools';

const configureStore = () => {
    const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(thunk)
  )(createStore)

  const store = createStoreWithMiddleware(rootReducer)
  return store
}

export default configureStore

