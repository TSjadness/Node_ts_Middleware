import { Error, Sequelize } from "sequelize";

export const sequelize = new Sequelize('dvdrental', 'postgres', 'futebol2015', {
    host: "localhost",
    dialect: "postgres",
    logging: false,
    define: {
        freezeTableName: true,
        timestamps: false,
    },
});

export default () => {
    sequelize.authenticate()
        .then(() => {
            console.log("Sucesso: conexao  realizada ");
        }).catch((error: Error) => {
            console.log("Erro: conexao nao realizada "+ error);
        })
    module.exports = sequelize;
};