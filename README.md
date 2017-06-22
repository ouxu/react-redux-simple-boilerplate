### React-Redux simple boilerplate
> 没那么复杂的 react-redux 脚手架。


### Usage
> 1、git clone  
> 2、安装依赖：$ npm install  
> 3、启动服务：$ npm start  
> 4、生成文件：$ npm run build  


### 使用无 Redux 版
```bash

```
### Features
* 开发环境单文件打包
* 生产环境分块打包
* Less代替Css
* 内置 react-redux demo
* Standard 代码风格检测✨
* Visualizer 打包文件分析✨

### 依赖
* UI框架：React & React-Dom
* 路由：React-Router 2
* 状态管理：React-Redux
* JS：ES6 (添加 ES7 部分支持)
* 样式：Less/Css
* 网络请求：Fetch
* 打包构建：Webpack2 Babel
* 包管理：Npm/Yarn

### Webpack2
* 打包 css (extract-text-webpack-plugin)
* 自动处理浏览器前缀 (autoprefixer)
* 自动生成 html (html-webpack-plugin)
* 打包前清除上次文件 (clean-webpack-plugin)

### Redux Demo
在这就直接贴部分代码

+ action  
	+ aciton

		```javascript
		const getDemoSucc = (data) => {
		    return {
		        type: GET_DEMO_SUCC,
		        payload: {
		            data
		        }
		    }
		};
		
		const getDemoErr = () => {
		    return {
		        type: GET_DEMO_ERR,
		    }
		};
		
		```
	+ 用 Promise 触发 aciton

		```javascript
		export function getDemo(params) {
		    return (dispatch) =>{
		        //a example with fetch
		        fetch('url').then((res)=>{
		            return res.json()
		        }).then((json)=>{
		            //do something with json
		            dispatch(getDemoSucc(data))
		
		        }).catch(()=>{
		            dispatch(getDemoErr())
		        })
		    }
		}
		```
	+ 用 async 触发 aciton
	
		```javascript
		export function getDemo(params) {
		    return async (dispatch) =>{
		        try {
		            //do something with params
		            dispatch(getDemoSucc(data))
		        } catch(e) {
		            dispatch(getDemoErr())
		        }
		    }
		}
		```

+ store 
	+ react-redux 
		
		```javascript
		import {createStore, applyMiddleware, compose} from 'redux';
		import thunkMiddleware from 'redux-thunk';
		import createLogger from 'redux-log';
		import rootReducer from '../reducers';
		
		const configStore =(initialState)=>{
		    const log = createLogger();
		    const middleWare = [thunkMiddleware, log];
		    const store = compose(
		        applyMiddleware(...middleWare),
		        window.devToolsExtension ? window.devToolsExtension() : f => f
		    )(createStore)(rootReducer, initialState);
		    //热替换
		    if (module.hot) {
		        module.hot.accept('../reducers', ()=> {
		            const nextReducer = require('../reducers');
		            store.replaceReducer(nextReducer);
		        });
		    }
		    return store;
		};
		
		export default configStore;
		```

+ reducer 
	+ index 

		```javascript
		import {combineReducers} from 'redux';

		import demo from './demo.reducer'
		const rootReducer = combineReducers({
		    demo,
		});
		
		export default rootReducer;
		``` 
	+ demo.reducer
		
		```javascript
		import {GET_DEMO_ERR,GET_DEMO_SUCC} from "../actions/type";
		const init_state = {
		    data: {
		    } //放默认值
		};
		
		export default function demo(state = init_state, action) {
		    switch (action.type) {
		        case GET_DEMO_SUCC:
		            return {
		                ...state,
		                data: action.payload
		            };
		        case GET_DEMO_ERR:
		            return {
		                ...state,
		                data: {}
		            };
		        default:
		            return state
		    }
		}
	
		```

+ container
	+ use React-redux

		```javascript
		import React, {Component} from "react";
		
		import {connect} from "react-redux";
		import {bindActionCreators} from "redux";
		import {getDemo} from '../actions'
		
		import ReduxDemo from '../components/demo';

		class DemoContainer extends Component {
		    render() {
		        const {demo:{data}, action:{getDemo}} = this.props;
		        return (
		            <ReduxDemo
		                data={data}
		                getDemo={getDemo}
		            />
		        );
		    }
		}
		const mapStateToProps = (state) => {
		    return {
		        demo: state.demo
		    };
		
		}
		const mapDispatchToProps = (dispatch) => {
		    const actions = {getDemo};
		    return {
		        action: bindActionCreators(actions, dispatch)
		    };
		};
		
		export default connect(mapStateToProps, mapDispatchToProps)(DemoContainer);
		
			
		```
	 
	+ use ES7 Decorator 装饰器
 
		```javascript
		
		@connect(mapStateToProps,mapDispatchToProps)
		class DemoContainer extends Component {
		    render() {
		        const {demo:{data}, action:{getDemo}} = this.props;
		        return (
		            <ReduxDemo
		                data={data}
		                getDemo={getDemo}
		            />
		        );
		    }
		}
		
		```
    
---

Example:[基于 React 开发的 Online Judge 系统](https://github.com/ouxu/NEUQ-OJ)[持续开发中]

Author: NEUQer/ouxu
