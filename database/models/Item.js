module.exports = function(sequelize, dataTypes) {
    let alias = "Item"

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        },
        shop_cart_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            defaultValue: null
        },
        product_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            defaultValue: null
        },
        quantity: {
            type: dataTypes.INTEGER(5), 
            allowNull: false
        },
        purchase_value: {
            type: dataTypes.DECIMAL(15,2), 
            allowNull: false
        },
        purchase_date: {
            type: dataTypes.DATETIME(),
            defaultValue: null
        }
    }

    let config = {
        tableName: "Items"
    }

    let Item = sequelize.define(alias, cols, config)

    return Item
}
