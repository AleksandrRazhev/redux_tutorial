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
	
	const ADD_CUSTOMER = "ADD_CUSTOMER";		для избежания ошибок лучше задавать action type в виде переменной, а не в виде строки
	export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });		из редьюсера экспортируется функция, которая принимает payload и передает его в нужный action type
______________________________________________________________________________________________________________________________________________	
5. React и Redux.Action creators. Redux thunk и асинхронные действия
	https://www.youtube.com/watch?v=CtrWoX_KDjE&list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6&index=5
	
	npm i redux-thunk - middleware для работы с асинхронным кодом
	для подключения redux-thunk потребуется импортировать applyMiddleware из redux
______________________________________________________________________________________________________________________________________________
6. Redux и React. Redux saga асинхронные actions
	https://www.youtube.com/watch?v=ylhHYtTyVGE&list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6&index=6
	
	Redux saga - более продвинутая библиотека для работы с асинхронным кодом, чем redux thunk
	
	Основные понятия:
		Worker - функция, внутри которой находится асинхронная логика
		Wotcher (наблюдатель) - функция генератор, в которой указывается тип action и worker. Когда action c указанным типом будет вызван, будет отрабатывать указанный worker
		Effects - набор встроенных в redux-saga функций, которые помогают делать запросы, вызывать dispatch, следить за воркерами
	
	Работа с redux saga основана на генераторах
	yield - команда, имеющая некоторый аналог return в генераторах
	метод .next() при каждом вызове генератора возвращает объект { value: 4, done: false }, где value - итерация цикла, done - булево значение
	когда все значения проитерированы метод .next() всегда возвращает { value: undefined, done: true }
	
	npm i redux-saga
	
	import { put } from "redux-saga/effects";
		put - это функция, похожая на dispatch, для асинхронных actions
		
	takeEvery - первым параметром принимает type action, а вторым - worker
		yield takeEvery(ASYNC_INCREMENT_COUNTER, incrementWorker);
		
	import { put, takeEvery, call } from "redux-saga/effects";
		call возвращает данные, которые возвращает promise
	
	import { all } from "redux-saga/effects";
		all - глобальный watcher, который следит за другими watchers (похож по действию на combineReducers)
		yield all([countWatcher(), fetchUsersWatcher()]);		параметром принимает массив
______________________________________________________________________________________________________________________________________________
7. React & Redux & TypeScript ПОЛНЫЙ КУРС 2021
	https://www.youtube.com/watch?v=ETWABFYv0GM&list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6&index=9
	
	npm i @types/react-redux redux react-redux redux-thunk axios
	
	типы action можно вынести в тип enum
		enum UserActionTypes {
		  FETCH_USERS = "FETCH_USERS",
		  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
		  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
		}
	
	rsc - сокращение, применяется когда нужно развернуть компонент в пустом файле
	
	const UserList: React.FC = () => {}		React.FC - возвращает функциональный компонент реакт
	
	export type RootState = ReturnType<typeof rootReducer>;		экспортирует тип редьюсера
	
	const {} = userTypedSelector((state) => state.user);			при нажатии CTRL+SPACE получим переменные, доступные для деструктуризации
	
	все рецепты хуков можно прочитать в документации
	
	const response = await axios.get(
	        "https://jsonplaceholder.typicode.com/todos",
        	{ params: { _page: page, _limit: limit } }		в объекте params axios принимает строки, добавляемые к url
      	);
______________________________________________________________________________________________________________________________________________
1. Redux Toolkit. Сделай redux код проще!
	https://www.youtube.com/watch?v=cFWpwtkto1s
	
	redux toolkit - надстройка над redux от разработчиков самого redux
	
	redux toolkit позволяет сократить количество кода и рутинных действий и сосредоточиться на логике работы с состояниями
	по умолчанию в rtk встроены инструмменты разработчика и redux-thunk
	
	состояние иммутабильное, его нельзя изменять через метод .push()
	
	npm i redux react-redux
	
	добавить id в todo
______________________________________________________________________________________________________________________________________________
2. Redux Toolkit. CreateSlice. Сделай redux код проще!
https://www.youtube.com/watch?v=gNu-Zsn-k7w



https://www.youtube.com/watch?v=gNu-Zsn-k7w


