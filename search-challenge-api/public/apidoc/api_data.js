define({ "api": [
  {
    "name": "search",
    "group": "Search",
    "version": "0.0.1",
    "type": "get",
    "url": "/search",
    "title": "Search a hightlights and suggestions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>Text to be search</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "max",
            "description": "<p>Max register to be returned</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>The skip number for pagination</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"hightlights\":[\n          {\n               \"title\":\"Pop & Art\",\n               \"url\":\"http://g1.globo.com/pop-arte/index.html\",\n               \"logo\":\"http://s.glbimg.com/bu/i/fc/5fb2e18d-a47f-4bb8-9a7e-b66871cf53c0.png\",\n               \"queries\":[\n                  \"música\",\n                  \"art\",\n                  \"pop\",\n                  \"arte\",\n                  \"cultura\",\n                  \"shows\"\n              ]\n          },\n          {\n              \"title\":\"Política\",\n              \"url\":\"http://g1.globo.com/politica/index.html\",\n              \"logo\":\"http://s.glbimg.com/bu/i/fc/5fb2e18d-a47f-4bb8-9a7e-b66871cf53c0.png\",\n              \"queries\":[\n                  \"eleições\",\n                  \"política\",\n                  \"dilma\",\n                  \"aécio\",\n                  \"apuração\"\n              ]\n          },\n          {\n          \"title\":\"Neymar\",\n          \"url\":\"http://globoesporte.globo.com/pop-arte/index.html\",\n          \"logo\":\"http://s.glbimg.com//es/sde/f/2014/06/11/8f43a73e5a1046e40507df53aade4cb4_80x80.jpeg\",\n          \"queries\":[\n              \"futebol\",\n              \"neymar\",\n              \"barcelona\",\n              \"brasil\"\n          ]\n          },\n          {\n          \"title\":\"iPhone\",\n          \"url\":\"http://www.techtudo.com.br/tudo-sobre/iphone-6.html\",\n          \"logo\":\"http://s2.glbimg.com/MtxbxzJKdWKkG1GIq3K1ljOz-8Q=/90x90/s2.glbimg.com/39EyVUsSanEBBcoPHDGLx5paorU=/91x118:1437x1004/494x325/s.glbimg.com/po/tt2/f/original/2014/09/09/iphone_6_1.jpg\",\n          \"queries\":[\n              \"iphone\",\n              \"celular\",\n              \"apple\",\n              \"smartphone\"\n          ]\n          },\n  ],\n  \"suggestions\":[\n      \"futebol brasileiro\",\n      \"futebol americano\",\n      \"futebol\",\n      \"musica\",\n      \"musica de anderson freire\",\n      \"musica que neymar pediu\",\n      \"politica entre dilma e aecio\",\n      \"politica\",\n      \"politica macroeconomica\",\n      \"neymar\",\n      \"neymar no barcelona\",\n      \"gol do neymar\",\n      \"iphone memoria\",\n      \"iphone plus\",\n      \"iphone 6\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/routes.ts",
    "groupTitle": "Search"
  }
] });
