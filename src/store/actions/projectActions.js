/* eslint-disable import/prefer-default-export */
export const createProject = (project) => {
    return (dispatch, getState) => {
        // async call
        dispatch({ type: "CREATE_PROJECT", project });
    };
};
