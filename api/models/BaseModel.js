import knex from "../knex";
import { Model } from "objection";

Model.knex(knex);

class BaseModel extends Model {
  $beforeInsert() {
    const now = new Date();
    this.created_at = now;
    this.updated_at = now;
  }

  $beforeUpdate() {
    const now = new Date();
    this.updated_at = now;
  }
}

export default BaseModel;
