import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class ContactMessage extends Model {}

ContactMessage.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  isRead: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  sequelize,
  modelName: 'ContactMessage',
  tableName: 'contact_messages',
  updatedAt: false, // The original schema only has createdAt
});

export default ContactMessage;
