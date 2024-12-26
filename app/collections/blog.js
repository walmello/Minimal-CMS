export default {
  "name": "blog",
  "label": "Blog",
  "editor": {
    "preview": false
  },
  "folder": "src/blog/entries",
  "create": true,
  "slug": "{{slug}}",
  "format": "json",
  "fields": [
    {
      "label": "Title",
      "name": "title",
      "widget": "string"
    },
    {
      "label": "Description",
      "name": "description",
      "widget": "text"
    },
    {
      "label": "Tags",
      "name": "tags",
      "widget": "list",
      "allow_add": true,
      "required": false
    },
    {
      "label": "Featured",
      "name": "featured",
      "widget": "boolean",
      "default": false
    },
    {
      "label": "Options",
      "name": "options",
      "widget": "object",
      "collapsed": true,
      "fields": [
        {
          "label": "Publish Date",
          "name": "date",
          "widget": "datetime"
        },
        {
          "label": "Order",
          "name": "order",
          "widget": "number",
          "value_type": "int",
          "default": 0
        }
      ]
    },
    {
      "label": "Cover Image",
      "name": "image",
      "widget": "image",
      "required": false
    },
    {
      "label": "Body",
      "name": "body",
      "widget": "markdown"
    }
  ]
}
