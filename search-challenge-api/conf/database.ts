import mongoose from "mongoose"

export const connect = (url: string) => {
    // shoud be exported by .ENV
    mongoose.connect(url, { useNewUrlParser: true })
}

export const disconnect = (done: any) => {
    mongoose.disconnect(done)
}
