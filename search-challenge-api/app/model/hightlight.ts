import mongoose from "mongoose"
import { prop, Typegoose } from "typegoose"

class Hightlight extends Typegoose {
  @prop() public title: string = ""
  @prop() public url: string = ""
  @prop() public logo: string = ""
  @prop() public queries: string[] = []
}

export default new Hightlight().getModelForClass(Hightlight)
