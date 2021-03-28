const app = require('./app')
const PORT = require('./PORT.config')

app.listen(PORT, () => console.log(`🔥 SERVER RUNNING ON PORT ${PORT} 🔥`))