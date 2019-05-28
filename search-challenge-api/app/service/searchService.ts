import Hightlight from "../model/hightlight"
import Suggestion from "../model/suggestion"

export const search = async (text: string = "", max: number = 10, offset: number = 0) => {
    const toSearch = { $regex: new RegExp(normalize(text)) }
    const hightlights = await Hightlight.find({ queriesNormalized: toSearch }, { queriesNormalized: false })
                                                .limit(max).skip(offset)
    const suggestions = await Suggestion.find({ text: toSearch }).limit(max).skip(offset)
    return { hightlights, suggestions }
}

const normalize = (text: string) => {
    let r = text.toLowerCase().trim()
    r = r.replace(new RegExp(/[àáâãäå]/g), "a")
    r = r.replace(new RegExp(/æ/g), "ae")
    r = r.replace(new RegExp(/ç/g), "c")
    r = r.replace(new RegExp(/[èéêë]/g), "e")
    r = r.replace(new RegExp(/[ìíîï]/g), "i")
    r = r.replace(new RegExp(/ñ/g), "n")
    r = r.replace(new RegExp(/[òóôõö]/g), "o")
    r = r.replace(new RegExp(/œ/g), "oe")
    r = r.replace(new RegExp(/[ùúûü]/g), "u")
    r = r.replace(new RegExp(/[ýÿ]/g), "y")
    r = r.replace(new RegExp(/[ç]/g), "c")
    return r
}
