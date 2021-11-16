const connection = require('./connectionMongo');
const { ObjectId } = require('mongodb');

const add = async (name, brand) => {
  try {
    const db = await connection();
    const result = await db.collection('products').insertOne({ name, brand });

    return { id: result.insertId, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const db = await connection();
    const rows = await db.collection('products').find().toArray();
    return rows;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const db = await connection();
    const result = await db.collection('products').findOne({ _id: ObjectId(id)});
    if (!result.length) return null
    return result[0];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    const db = await connection();
    await db.collection('products').updateOne({ _id: ObjectId(id)}, { $set: { name, brand }})
    return { id, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    if (!product) return null;
    const db = await connection();
    await db.collection('products').deleteOne({ _id: ObjectId(id)});
    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };