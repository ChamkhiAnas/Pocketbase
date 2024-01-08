/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y1pfhe6j7yzx4xn")

  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y1pfhe6j7yzx4xn")

  collection.createRule = "@request.auth.id = \"4vq1dguz4izbu57\""
  collection.updateRule = "@request.auth.id = \"4vq1dguz4izbu57\""
  collection.deleteRule = "@request.auth.id = \"4vq1dguz4izbu57\""

  return dao.saveCollection(collection)
})
