import { combineReducers } from 'redux'
import { history } from 'js/redux/middleware/history'
import { reducer as formReducer } from 'redux-form'
import router from './router'
import auth from './auth'

export default combineReducers({
	auth: auth,
	form: formReducer,
	router: router(history)
})
