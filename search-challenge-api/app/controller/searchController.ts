import { Request, Response} from "express"
import winston from "winston"
import * as searchService from "../service/searchService"

export const search = async (req: Request, res: Response) => {
    try {
        const {q, max, offset} = req.query
        winston.info(`Buscando '${q}'`)
        const result = await searchService.search(q, parseInt(max || 10, 10), parseInt(offset || 0, 10) )
        res.json(result)
    } catch (error) {
        winston.error(error)
        res.status(500).json(error)
    }
}
