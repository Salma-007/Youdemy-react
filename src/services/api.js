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
    createCategory: (data) => api.post("/v1/categories", data),
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
    getCourse: (id) => api.get(`/v1/courses/${id}`),
    createCourse: (data) => api.post("/v1/courses", data)
    .then(response => response)
    .catch(error => {
      console.error("Backend error:", error.response?.data);
      throw error;
    }),
    updateCourse: (id, data) => api.put(`/v1/courses/${id}`, data),
    deleteCourse: (id) => api.delete(`/v1/courses/${id}`),
  };

export const stats = {
  getCourseStats: () => api.get("v2/stats/courses"),
  getCategoryStats: () => api.get("v2/stats/categories"),
  getTagStats: () => api.get("v2/stats/tags"),
}