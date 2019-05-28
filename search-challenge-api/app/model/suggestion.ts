import mongoose from "mongoose"
import { prop, Typegoose } from "typegoose"

class Suggestion extends Typegoose {
  @prop() public text: string = ""
}

export default new Suggestion().getModelForClass(Suggestion)
