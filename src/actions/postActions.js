import { FETCH_POSTS, NEW_POSTS, DELETE_POST } from './types';

export const fetchPosts = () => dispatch => {
    console.log("Fetch Posts");
        dispatch({
            type: FETCH_POSTS,
            payload: [{
                item: "Honda Civic",
                price: "25000"
            },{
                item: "Honda Accord",
                price: "30000"
            }]
        });
}

export const createPost = (formData) => dispatch => {
    dispatch({
        type: NEW_POSTS,
        payload: formData
    })
}

export const deletePost = (formData) => dispatch => {
    dispatch({
        type: DELETE_POST,
        payload: formData
    })
}


