module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Manager',{
        name: {
            type: DataTypes.STRING(255),
        },
        experience: {
            type: DataTypes.INTEGER
        }
    },{
        tableName: "managers",
        timestamps : false,
    })

    model.associate = model => {
        model.hasOne(models.Branch, { foreignkey: 'manager_id'})
    }

    return model
}