import http from '@/http-service'

class WorkService {
  getAll() {
    return http.get('/works')
  }

  create(data) {
    return http.post('/works', data)
  }

  update(id, data) {
    return http.put(`/works/${id}`, data)
  }

  remove(id) {
    return http.delete(`/works/${id}`)
  }
}

export default new WorkService()
