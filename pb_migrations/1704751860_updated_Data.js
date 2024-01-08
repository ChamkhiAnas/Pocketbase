/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y1pfhe6j7yzx4xn")

  // remove
  collection.schema.removeField("haoj3okn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cprco5ca",
    "name": "end_of_state",
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
    "id": "haoj3okn",
    "name": "end_of_state",
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
  collection.schema.removeField("cprco5ca")

  return dao.saveCollection(collection)
})
