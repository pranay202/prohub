import axios from 'axios';

//backend server running PORT
const URL = 'http://localhost:8000';

export const createPost = async (post) => {
    try {
      return await axios.post(`${URL}/create`, post);
    } catch (error) {
        console.log("Error while calling createPost API",error);
    }
};

export const getAllPosts = async (param) => {
  try {
    let response = await axios.get(`${URL}/posts${param}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getAllPosts API",error);
  }
}

export const getPost = async (id) => {
  try {
    let response = await axios.get(`${URL}/post/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getPost API",error);
  }
}

export const updatePost = async (id, post) => {
  try {
    await axios.post(`${URL}/update/${id}`, post);
  } catch (error) {
    console.log("Error while calling updatePost API",error);
  }
}

export const deletePost = async (id) => {
  try {
    await axios.delete(`${URL}/delete/${id}`)
  } catch (error) {
    console.log("Error while calling deletePost API",error);
  }
}

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${URL}/file/upload`, data)
  } catch (error) {
    console.log("Error while calling uploading the image",error);
  }
}