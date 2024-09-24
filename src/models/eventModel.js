import { model, Schema, Types } from "mongoose";

const eventSchema = new Schema({
  place: { type: Types.ObjectId, ref: "place", required: true },
  date: { type: Date, required: true },
  name: { type: String, required: true },
  photo: { type: String },
  description: { type: String, required: true },
  attendees: [{ type: Types.ObjectId, ref: "user" }],
  minimunAge: { type: Number, required: true },
  organizer: { type: Types.ObjectId, ref: "user", required: true },
});

const Event = model("event", eventSchema);

export default Event;
