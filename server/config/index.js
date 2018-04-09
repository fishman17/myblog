export default {
  user: {
    role: 'superAdmin',
    username: 'daimuyang',
    password: '123456',
    email: '734583898@qq.com',
    nickname: 'VueBlog',
    motto: 'Never too old to learn',
    avatar: 'avatar.png'
  },
  jwt: {
    secret: 'vueblog'
  },
  mongodb: {
    host: '127.0.0.1',
    database: 'vueblog',
    port: 27017,
    username: '',
    password: ''
  },
  production: {
    host: '198.13.32.165',
    domain: 'https://www.86886.wang'
    // domain: 'http://127.0.0.1:3000'
  },
  app: {
    host: '127.0.0.1',
    port: 3001,
    routerBaseApi: '/api'
  }
}
