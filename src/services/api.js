import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-Type": "application/json",
    },
    
})

export default api;

export const category = {
    getCategories: () => api.get("/v1/categories"),
    getCategory: (id) => api.get(`/v1/categories/${id}`),
    createCategory: (data) => api.post(`/v1/categories/${data}`),
    updateCategory: (id, data) => api.post(`/v1/categories/${id}`, data),
    deleteGategory: (id) => api.post(`/v1/categories/${id}`),
}

export const tag = {
    getTags: () => api.get("/v1/tags"),
    getTag: (id) => api.get(`/v1/tags/${id}`),
    createTag: (data) => api.post(`/v1/tags/${data}`),
    updateTag: (id, data) => api.post(`/v1/tags/${id}`, data),
    deleteTag: (id) => api.post(`/v1/tags/${id}`),
}

export const course = {
    getCourses: () => api.get("/v1/courses"), 
  };