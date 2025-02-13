This is a backend with javaScript Project  


### 🔍 Issues in Your Code & Fixes  

Your current setup looks mostly correct, but you're facing **MongoDB connection errors**.  
Let’s fix it step by step.  

---

## **🚀 Fix 1: Check `.env` File Format**
Make sure your `.env` file is **in the root directory** and structured properly:

```plaintext
PORT=6000
MONGODB_URI=mongodb+srv://vikaspatel07071999:latghat1234@cluster0.rc0vet2.mongodb.net/mydatabase?retryWrites=true&w=majority
DB_NAME=mydatabase
```

🔴 **Problem:** You're not defining `DB_NAME` inside `.env`.  
✅ **Fix:** Add `DB_NAME` to `.env` so `process.env.DB_NAME` is not `undefined`.

---

## **🚀 Fix 2: Load `.env` at the Start**
Modify `index.js` **to load `.env` at the very beginning**:  

```javascript
import mongoose from "mongoose";
import dotenv from "dotenv";

// ✅ Load environment variables first
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;  // ✅ Fix: Get DB_NAME from .env

// Debugging: Check if MONGODB_URI and DB_NAME are loaded correctly
console.log("🔍 MongoDB URI:", MONGODB_URI);
console.log("🔍 Database Name:", DB_NAME);

const connectDB = async () => {
  try {
    // ✅ Fix: Ensure MONGODB_URI and DB_NAME are used properly
    const connectionInstance = await mongoose.connect(`${MONGODB_URI}`, {
      dbName: DB_NAME,   // ✅ Fix: Pass DB_NAME separately
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Error: ", error);
    process.exit(1);
  }
};

export default connectDB;
```

---

## **🚀 Fix 3: Ensure `.env` is Loaded**
Before running the server, test if **`.env` is being read correctly**:  

```sh
node -e "require('dotenv').config(); console.log(process.env.MONGODB_URI)"
```

If **nothing is printed or `undefined` appears**, the `.env` file is either:  
- **Not at the root level** (move it up)
- **Not being loaded properly** (check for typos)

---

## **🚀 Fix 4: Add `.env` to `.gitignore`**
To **protect your MongoDB credentials**, add `.env` to `.gitignore`:  

```
# .gitignore
node_modules/
.env  # ✅ Ignore .env file
```

---

## **🔥 Final Steps**
1️⃣ **Move `.env` to the root** if it’s inside `src/`.  
2️⃣ **Ensure `.env` contains `DB_NAME`** (otherwise, it will be `undefined`).  
3️⃣ **Restart the server after changes**:  
   ```sh
   npx nodemon src/app.js
   ```

---

### **🚀 Summary**
✅ `.env` should be in the **root directory**.  
✅ Add `DB_NAME` inside `.env`.  
✅ Pass `dbName: DB_NAME` in `mongoose.connect()`.  
✅ Test with `console.log(process.env.MONGODB_URI)` before running the app.  

Now, **restart your server** and check if MongoDB connects! 🚀 Let me know if it still doesn't work.