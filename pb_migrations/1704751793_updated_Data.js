/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y1pfhe6j7yzx4xn")

  // remove
  collection.schema.removeField("atl2mtqw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c2jn1pco",
    "name": "begining_of_state",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y1pfhe6j7yzx4xn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "atl2mtqw",
    "name": "beginning_of_state",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("c2jn1pco")

  return dao.saveCollection(collection)
})
