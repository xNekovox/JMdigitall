/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("bookings");
  const field = collection.fields.getByName("service_type");
  field.type = "select";
  field.values = ["Fotograf\u00eda Social", "Video Social", "Fotograf\u00eda Profesional", "Video Profesional", "Fotograf\u00eda de Producto", "Video de Producto", "Fotograf\u00eda Corporativa", "Video Corporativa", "Recuperaci\u00f3n de Video An\u00e1logo", "Paquete Personalizado"];
  return app.save(collection);
}, (app) => {
  try {
  const collection = app.findCollectionByNameOrId("bookings");
  const field = collection.fields.getByName("service_type");
  if (!field) { console.log("Field not found, skipping revert"); return; }
  field.type = "text";
  return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection or field not found, skipping revert");
      return;
    }
    throw e;
  }
})
