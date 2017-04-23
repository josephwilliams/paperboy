import fetch from 'node-fetch';
import thunks from 'thunks';


fetch('https://github.com/')
	.then(res => res.text())
	.then(body => console.log(body));


	const asyncThunkTest = () => {
  return async (dispatch, getState) => {
    dispatch({ type: 'fruit', name: 'banana', value: 'yellow' })

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const json = await response.json()
      dispatch({ type: 'json', name: 'posts', value: json })
    } catch (e) {
      dispatch({ type: 'error', name: 'error', value: e.message })
    }

    dispatch({ type: 'vegetable', name: 'carrot', value: 'orange' })
    console.log('state: ', getState())
  }
}
