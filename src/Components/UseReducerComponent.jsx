import React, { useReducer } from 'react'

var initialState = {
    count : 0
}
function reducer(state,action){
    switch(action.type){
        case 'like':
            return {count : state.count+1};
        case 'dislike':
            return {count : state.count-1}
    }
}
export default function UseReducerComponent() {
    const [state , disPatcher] = useReducer(reducer,initialState);
    function handleLike(){
        disPatcher({
            type:'like'
        })
    }
    function handleDislike(){
        disPatcher({
            type: 'dislike'
        })
    }
  return (
    <div>
        <h1>likes count {state.count}</h1>
      <button onClick={handleLike}>like</button>
      <button onClick={handleDislike}>dislike</button>
    </div>
  )
}
