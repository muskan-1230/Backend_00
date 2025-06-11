import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"; // for cryptography tokens 
// jwt is a bearer token (like a key)
import bcrypt from "bcrypt";   // core node library  // for encryption of passwords

const userSchema = new Schema(
   {
       username : {
           type: String,
           required: true,
           unique: true,
           lowercase: true,
           trim: true,
           index: true,  // when searching is needed in the databse 
       },
       email : {
           type: String,
           required: true,
           unique: true,
           lowercase: true,
           trim: true,
       },
       fullname : {
           type: String,
           required: true,
           trim: true,
           index: true,
       },
       avatar : {
           type: String,   // cloudinary url
           required: true,
       },
       coverImage: {
           type: String,
       },
       watchHistory: [
           {
           type: Schema.Types.ObjectId,
           ref: "Video"
       }
       ],
       password: {
           type: String,
           required :[true,'Password is required']
       },
       refreshToken:{
           type: String,
       }
   },
   {
    timestamps: true,   // gives created at and updated at 
   }
)

userSchema.pre("save", async function (next) { // not to use arrow functions beacuse we need proper refernece for this and arrow functions me reference ni hota this keyword ka 
    if(!this.isModified("password")){
        return next();
    }                 // to efficently use this , if nothing is modified then no need to use pre hook 
    this.password = bcrypt.hash(this.password, 10)
    next()
} )                   // pre hook - to run just before saving of data 

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)  // (given by user and the encrpted one )
}

userSchema.methods.generateAccessToken = function(){
    jwt.sign(
        {
        _id: this.id,
        email : this.email,
        username : this.username,
        fullName : this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            EXPIRESiN : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    jwt.sign(
        {
        _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            EXPIRESiN : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User",userSchema)