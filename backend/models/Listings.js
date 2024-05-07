module.exports = (sequelize, DataTypes) => {

    const Listings = sequelize.define("Listings", {
        sku: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        itemName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sizeOz: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sizeMl: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        strength: {
            type: DataTypes.STRING,
            allowNull: true
        },
        shade: {
            type: DataTypes.STRING,
            allowNull: true
        },
        formulation: {
            type: DataTypes.STRING,
            allowNull: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        upc: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        batch: {
            type: DataTypes.STRING,
            allowNull: true
        },
        condition: {
            type: DataTypes.STRING,
            allowNull: true
        },
        verified: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    }, {
        timestamps: false
    });

    return Listings;
}