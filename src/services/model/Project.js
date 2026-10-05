import http from '@/http-service'

class ProjectService {
  getAll() {
    return http.get('/projects')
  }

  create(data) {
    return http.post('/projects', data)
  }

  update(id, data) {
    return http.put(`/projects/${id}`, data)
  }

  remove(id) {
    return http.delete(`/projects/${id}`)
  }
}

export default new ProjectService()
