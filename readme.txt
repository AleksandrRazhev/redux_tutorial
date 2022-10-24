https://www.youtube.com/watch?v=5Qtqzeh5FeM&list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6

______________________________________________________________________________________________________________________________________________
2. Redux и React. State, reducer, action + redux hooks useDispatch и useSelector
	https://www.youtube.com/watch?v=Dzzeir85i3c&list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6&index=2

	react-redux предназначен для того, чтобы связать состояния redux с react-компонентами
	
	store - это объект, который содержит методы: получить состояние (get state), изменить состояние через dispatch, подписаться на изменения состояния
	
	createStore первым аргументом принимает reducer
	
	reducer - js функция, которая принимает 2 аргумента: state и action		const reducer = (state, action) => {};
	
	action - js объект, имеющий поле type
	
	данные в объекте action чаще всего передают в поле payload
	
	внутри reducer создается конструкция switch/case, которая отслеживает логику переданного action. По умолчанию эта конструкция обязательно должна возвращать состояние.
		т.е. если передан action с типом, который не обрабатывается ни в одном case, то возвращается неизмененное состояние
	
	состояние в redux считается неизменяемым, т.е. нужно каждый раз возвращать новый объект
		return { ...state, cash: state.cash + action.payload };		спред-оператор разворачивает объект state, затем заменяет значение поля state на state.cash + action.payload
	
	<Provider store={store}><Provider>		компонент, который импортируется из react-redux, который прокидывает в компоненты состояние.
	
	получить dispatch внутри компонента можно с помощью хука useDispatch()		const dispatch = useDispatch();
	
	получить состояние можно с помощью хука useSelector(), который аргументом принимает функцию, а эта функция принимает состояние
	
	функция prompt() вызывается для ввода строки пользователем			Number(prompt()) 

______________________________________________________________________________________________________________________________________________
3. Redux и React. Combine Reducers, redux devtools
	https://www.youtube.com/watch?v=ldgnmiPIftw&list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6&index=3
	
	combineReducers - функция для передачи нескольких редьюсеров в стор
	
	https://www.npmjs.com/package/redux-devtools-extension
	npm i redux-devtools-extension
	
	import { composeWithDevTools } from "redux-devtools-extension";
	export const store = createStore(rootReducer, composeWithDevTools());		composeWithDevTools передается вторым параметром в createStore
	
	https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
	
______________________________________________________________________________________________________________________________________________
4. React и Redux.Action creators. Работа с массивами. Рефакторинг
	https://www.youtube.com/watch?v=WLeK7vIEi5I&list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6&index=4	
	
	0.55
	
	
	
	
