module.exports = (sequelizeConnection, Sequelize) => {
  const Entitas = sequelizeConnection.define("entitas", {
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tempat_lahir: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tgl_lahir: {
      type: Sequelize.DATEONLY,
    },
    alamat: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Entitas;
};
