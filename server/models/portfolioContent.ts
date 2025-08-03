import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class PortfolioContent extends Model {}

PortfolioContent.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  section: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.JSON,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  sequelize,
  modelName: 'PortfolioContent',
  tableName: 'portfolio_content',
});

export default PortfolioContent;
