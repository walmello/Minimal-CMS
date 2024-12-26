export default {
  "name": "events",
  "label": "Events",
  "editor": {
    "preview": false
  },
  "folder": "src/events/entries",
  "create": true,
  "slug": "{{slug}}",
  "format": "json",
  "fields": [
    {
      "name": "title",
      "label": "Title",
      "widget": "string"
    },
    {
      "label": "Featured",
      "name": "featured",
      "widget": "boolean",
      "default": false
    },
    {
      "name": "description",
      "label": "Description",
      "widget": "text"
    },
    {
      "label": "Cover Image",
      "name": "image",
      "widget": "image",
      "required": false
    },
    {
      "name": "location",
      "label": "Location",
      "widget": "string"
    },
    {
      "name": "dateTime",
      "label": "Datetime",
      "widget": "datetime"
    }
  ]
}
