/* code from functions/todos-update.js */
// See https://github.com/fauna/faunadb-js

require('dotenv').config();
let faunadb = require('faunadb');
import getId from './utils/getId';

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
})

exports.handler = (event, context, callback) => {
  const data = JSON.parse(event.body)
  const id = getId(event.path)
  console.log(`Function 'todo-update' invoked. update id: ${id}`)
  return client.query(q.Update(q.Ref(`classes/todos/${id}`), {data}))
  .then((response) => {
    console.log("success", response)
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(response,null,2)
    })
  }).catch((error) => {
    console.log("error", error)
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    })
  })
}