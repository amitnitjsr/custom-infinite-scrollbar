import * as types from './ActionTypes';

export const addNewTask = (data) => {
    const { title, time } = data;
    return (dispatch, getState) => {
        const { taskList } = getState().task;
        const lastData = taskList[taskList.length - 1];
        const newData = [
            ...taskList,
            {
                'id': lastData.id + 1,
                'title': title || '',
                'time': time
            }
        ]
        return dispatch({ type: types.CREATE_NEW_TASK, payload: newData });
    }
}


export const deleteTask = (data) => {
    const { id } = data;
    return (dispatch, getState) => {
        const { taskList } = getState().task;
        const newData = taskList.filter((data) => data.id !== id);
        return dispatch({ type: types.DELETE_TASK, payload: newData });
    }
}

export const editTask = (data) => {
    const { id, title, time } = data;
    return (dispatch, getState) => {
        const { taskList } = getState().task;
        const newData = taskList.filter(data => {
            if (data.id === id) {
                if (title) data.title = title;
                data.time = time;
            }
            return data;
        })
        return dispatch({ type: types.EDIT_TASK, payload: newData });
    }
}
