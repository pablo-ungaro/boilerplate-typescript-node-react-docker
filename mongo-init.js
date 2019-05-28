db.createUser(
    {
        user: "search-challenge-user",
        pwd: "search-challenge-pass",
        roles:[
            {
                role: "readWrite",
                db:   "search-challenge"
            }
        ]
    }
);

db.hightlights.insertMany([
    {
         "title":"Pop & Art",
         "url":"http://g1.globo.com/pop-arte/index.html",
         "logo":"http://s.glbimg.com/bu/i/fc/5fb2e18d-a47f-4bb8-9a7e-b66871cf53c0.png",
         "queries":[
            "música",
            "pop",
            "art",
            "arte",
            "cultura",
            "shows"
         ],
         "queriesNormalized":[
            "musica",
            "pop",
            "art",
            "arte",
            "cultura",
            "shows"
         ]
    },
    {
         "title":"Política",
         "url":"http://g1.globo.com/politica/index.html",
         "logo":"http://s.glbimg.com/bu/i/fc/5fb2e18d-a47f-4bb8-9a7e-b66871cf53c0.png",
         "queries":[
            "eleições",
            "política",
            "dilma",
            "aécio",
            "apuração"
         ],
         "queriesNormalized":[
            "eleicoes",
            "politica",
            "dilma",
            "aecio",
            "apuracao"
         ]
    },
    {
       "title":"Neymar",
       "url":"http://globoesporte.globo.com/pop-arte/index.html",
       "logo":"http://s.glbimg.com//es/sde/f/2014/06/11/8f43a73e5a1046e40507df53aade4cb4_80x80.jpeg",
       "queries":[
          "futebol",
          "neymar",
          "barcelona",
          "brasil"
       ],
       "queriesNormalized":[
        "futebol",
        "neymar",
        "barcelona",
        "brasil"
       ]
    },
    {
       "title":"iPhone",
       "url":"http://www.techtudo.com.br/tudo-sobre/iphone-6.html",
       "logo":"http://s2.glbimg.com/MtxbxzJKdWKkG1GIq3K1ljOz-8Q=/90x90/s2.glbimg.com/39EyVUsSanEBBcoPHDGLx5paorU=/91x118:1437x1004/494x325/s.glbimg.com/po/tt2/f/original/2014/09/09/iphone_6_1.jpg",
       "queries":[
          "iphone",
          "celular",
          "apple",
          "smartphone"
       ],
       "queriesNormalized":[
        "iphone",
        "celular",
        "apple",
        "smartphone"
       ]
    }
]);

db.suggestions.insertMany([
    {
        "text" : "futebol brasileiro"
    },
    {
        "text" : "futebol americano"
    },
    {
        "text" : "futebol"
    },
    {
        "text" : "musica"
    },
    {
        "text" : "musica de anderson freire"
    },
    {
        "text" : "musica que neymar pediu"
    },
    {
        "text" : "politica entre dilma e aecio"
    },
    {
        "text" : "politica"
    },
    {
        "text" : "politica macroeconomica"
    },
    {
        "text" : "neymar"
    },
    {
        "text" : "neymar no barcelona"
    },
    {
        "text" : "gol do neymar"
    },
    {
        "text" : "iphone memoria"
    },
    {
        "text" : "iphone plus"
    },
    {
        "text" : "iphone 6"
    }]);