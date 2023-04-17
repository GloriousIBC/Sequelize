const db = require('./models/index') //const db = require('./models/') ละได้
const express = require('express')
const app =express()
const cors = require('cors')
const managerRoutes = require('./routes/Manager')
const branchRoutes = require('./routes/Branch')
const accountRoutes = require('./routes/Account')
const customerRoutes = require('./routes/Customer')

app.use(cors())

app.use(express.json())
app.use(express.urlencodeed({ extended: false }))

app.use('./managers', managerRoutes)
app.use('./branches', branchRoutes)
app.use('./accounts', accountRoutes)
app.use('./customers', customerRoutes)


db.Sequelize.sync({ force: false }).then(() => {
    app.listen(8000, () => {
        console.log("Server is running at port")
    })
})