import http from '@/http-service'

class StudentService {
  getAll() {
    return http.get('/students')
  }

  create(data) {
    return http.post('/students', data)
  }

  update(id, data) {
    return http.put(`/students/${id}`, data)
  }

  remove(id) {
    return http.delete(`/students/${id}`)
  }
}

export default new StudentService()
