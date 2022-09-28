import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Product = db.define('produk',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama_produk: DataTypes.STRING,
    keterangan: DataTypes.TEXT,
    harga: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
}, {
    freezeTableName: true
});

export default Product;

(async()=>{
    await db.sync();
})();