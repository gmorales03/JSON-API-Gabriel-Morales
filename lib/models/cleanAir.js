import mongoose from "../db/connection.js";

const cleanAir = new mongoose.Schema({
       "status": "success",
        "data": {
            "city": "String",
            "state": "String",
            "country": "String",
            "location": {
                "type": "String",
                "coordinates": [ , 
                ]
            },
            "current": {
                "pollution": {
                    "ts": Number,
                    "aqius": Number,
                    "mainus": "String",
                    "aqicn": Number,
                    "maincn": "String"
                },
                "weather": {
                    "ts": Number,
                    "tp": Number,
                    "pr": Number,
                    "hu": Number,
                    "ws": Number 
                }
            }
        }
    })

export default mongoose.model("cleanAir", cleanAir);








