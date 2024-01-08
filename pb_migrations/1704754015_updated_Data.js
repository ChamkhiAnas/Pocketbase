/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y1pfhe6j7yzx4xn")

  collection.name = "data"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y1pfhe6j7yzx4xn")

  collection.name = "Data"

  return dao.saveCollection(collection)
})
