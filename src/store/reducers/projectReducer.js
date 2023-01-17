/* eslint-disable no-console */
/* eslint-disable default-param-last */
const initialState = {
    projects: [
        { id: "1", title: "help me find peach", content: "qwerqwerqwerqwer" },
        {
            id: "2",
            title: "collect all the stars",
            content: "zxcvzxcvzxcvzxcv",
        },
        { id: "3", title: "egg hunt with yoshi", content: "asdfasdfasdfasdf" },
    ],
};

/**
 * Reducer that returns the state of the project.
 * @param state=initialState Used to Set the default state of this reducer.
 * @param action Used to Determine what type of action is being called.
 * @return The state object.
 *
 * @doc-author dsrcr
 */
const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log("Created project", action.project);
            break;

        default:
            break;
    }
    return state;
};

export default projectReducer;
