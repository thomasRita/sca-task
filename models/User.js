import db from '../db'
import logger from '../services/logger'

/**
 * export
 */
class User {
     /**
   * Create A User
   * @param {object} data
   * @returns {object} new record
   */
  async create(data) {
      const createQuery = `INSERT INTO
      users("firstname", "lastname", "email", "isAdmin", "password")
      VALUES($1, $2, $3, $4, $5)
      returning *`;
      const values = [
          data.firstname,
          data.lastname,
          data.email,
          data.isAdmin,
          data.password,
      ]

      try {
          const { rows } = await db.query(createQuery, values)
          return rows[0]
      } catch (error) {
          logger.error(error)
          return error
      }
  }

  /**
   * Get User by a field
   * @param {String} field - the field
   * @param {String} value - the value
   * @returns {object} record object
   */
  async getByField(field, value) {
    const text = `SELECT * FROM users WHERE "${field}" = $1`;
    try {
      const { rows } = await db.query(text, [value]);
      return rows[0];
    } catch (error) {
      return error;
    }
  }

}

export default User