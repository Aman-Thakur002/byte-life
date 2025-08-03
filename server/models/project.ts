import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class Project extends Model {}

Project.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  technologies: {
    type: DataTypes.JSON,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
  projectUrl: {
    type: DataTypes.STRING,
  },
  githubUrl: {
    type: DataTypes.STRING,
  },
  featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  metrics: {
    type: DataTypes.JSON,
  },
}, {
  sequelize,
  modelName: 'Project',
  tableName: 'projects',
});

export default Project;
