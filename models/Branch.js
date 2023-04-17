module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Branch',{
        name: {
            type: DataTypes.STRING(255),
        },
        size: {
            type: DataTypes.STRING(2)
        }
    },{
        tableName: "branches",
        timestamps : false,
    })

    model.associate = model => {
        model.belongsTo(models.Manager, { foreignkey: 'manager_id'})
        model.hasMany(models.Account, { foreignkey: 'branch_id'})
    }
    

    return model
}