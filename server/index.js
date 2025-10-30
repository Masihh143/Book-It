import express from 'express';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';


const app = express();

app.use(express.json());

// app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("✅ Book-It API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});