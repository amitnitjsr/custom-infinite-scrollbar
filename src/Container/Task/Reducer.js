import * as types from './ActionTypes';

const initialState = {
    taskList: [
        { id: 1, title: 'Added trails in users', time: true },
        { id: 1, title: 'Added trails in profile', time: true },
        { id: 1, title: 'Added trails in master', time: false },
        { id: 1, title: 'Added trails in json', time: true },
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_NEW_TASK:
        case types.DELETE_TASK:
        case types.EDIT_TASK:
            return {
                ...state,
                taskList: action.payload,
            }
        default:
            return state
    }
}