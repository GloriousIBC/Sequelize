//const db = require('../models')
const { sequelize, Sequelize } = require('../models')

const op = Sequelize.Op

const getAllManagers = async (req, res) => {
    const allManagers = await db.Manager.findAll({
        where: {experience : {
            [Op.gte] : 3
        }}
    })
    res.status(200).send(allManager)
}

const getManagerbyId = async (req, res) => {
    const targetId = req.params.id
    const targetManger = await db.Manager.findOne({where : { id : targetId}})
    res.status(200).send(targetManager)
}

const createManager = async (req, res) => {
    const { name, experience } = req.body
    const nameManger = await db.Manager.create({
        name: name,
        experience: experience
    })
    res.status(201).send(nameManager)
}

const updateManager = async (req, res) => {
    const targetId = req.params.id
    const { name, experience } = req.body
    await db.Manager.update({
        name: name,
        experience: experience
    },{
        where: {id:targetId}
    })
    res.status(200).send({message: `Manager ID: ${targetID} has been updated.`})
}

const deleteManager = async (req, res) => {
    const targetId = req.params.id
    await db.Manager.destroy({
        where: {id:targetId}
    })
    res.status(204).send()
}

module.exports = {
    getAllManagers,
    getManagerbyId,
    createManager,
    updateManager,
    deleteManager
}