import cors from "cors"
import { Application } from "express"
import morgan from "morgan"
import * as searchController from "./controller/searchController"

export const register = ( app: Application ) => {
    app.use(morgan("combined"))
    app.use(cors())

    /**
     * @apiName search
     * @apiGroup Search
     * @apiVersion 0.0.1
     * @api {get} /search Search a hightlights and suggestions
     * @apiParam {String} q Text to be search
     * @apiParam {Number} max Max register to be returned
     * @apiParam {Number} offset The skip number for pagination
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "hightlights":[
     *              {
     *                   "title":"Pop & Art",
     *                   "url":"http://g1.globo.com/pop-arte/index.html",
     *                   "logo":"http://s.glbimg.com/bu/i/fc/5fb2e18d-a47f-4bb8-9a7e-b66871cf53c0.png",
     *                   "queries":[
     *                      "música",
     *                      "art",
     *                      "pop",
     *                      "arte",
     *                      "cultura",
     *                      "shows"
     *                  ]
     *              },
     *              {
     *                  "title":"Política",
     *                  "url":"http://g1.globo.com/politica/index.html",
     *                  "logo":"http://s.glbimg.com/bu/i/fc/5fb2e18d-a47f-4bb8-9a7e-b66871cf53c0.png",
     *                  "queries":[
     *                      "eleições",
     *                      "política",
     *                      "dilma",
     *                      "aécio",
     *                      "apuração"
     *                  ]
     *              },
     *              {
     *              "title":"Neymar",
     *              "url":"http://globoesporte.globo.com/pop-arte/index.html",
     *              "logo":"http://s.glbimg.com//es/sde/f/2014/06/11/8f43a73e5a1046e40507df53aade4cb4_80x80.jpeg",
     *              "queries":[
     *                  "futebol",
     *                  "neymar",
     *                  "barcelona",
     *                  "brasil"
     *              ]
     *              },
     *              {
     *              "title":"iPhone",
     *              "url":"http://www.techtudo.com.br/tudo-sobre/iphone-6.html",
     *              "logo":"http://s2.glbimg.com/MtxbxzJKdWKkG1GIq3K1ljOz-8Q=/90x90/s2.glbimg.com/39EyVUsSanEBBcoP
     *                HDGLx5paorU=/91x118:1437x1004/494x325/s.glbimg.com/po/tt2/f/original/2014/09/09/iphone_6_1.jpg",
     *              "queries":[
     *                  "iphone",
     *                  "celular",
     *                  "apple",
     *                  "smartphone"
     *              ]
     *              },
     *      ],
     *      "suggestions":[
     *          "futebol brasileiro",
     *          "futebol americano",
     *          "futebol",
     *          "musica",
     *          "musica de anderson freire",
     *          "musica que neymar pediu",
     *          "politica entre dilma e aecio",
     *          "politica",
     *          "politica macroeconomica",
     *          "neymar",
     *          "neymar no barcelona",
     *          "gol do neymar",
     *          "iphone memoria",
     *          "iphone plus",
     *          "iphone 6"
     *      ]
     *    }
     */
    app.route("/search").get( searchController.search )
}
