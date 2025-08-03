import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class Experience extends Model {}

Experience.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
  },
  startDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.JSON,
  },
  technologies: {
    type: DataTypes.JSON,
  },
  isCurrent: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  sequelize,
  modelName: 'Experience',
  tableName: 'experiences',
  timestamps: false, // The original schema doesn't have createdAt/updatedAt
});

export default Experience;
