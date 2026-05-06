require("dotenv").config()
// const axios = require("axios")
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const express = require("express")
const cors = require("cors")
const multer = require("multer")
const fs = require("fs")
const pdfParse = require("pdf-parse")
const app = express()

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }

})

const upload = multer({ storage })

// Allow frontend requests
app.use(cors())

// Test route
app.get("/", (req, res) => {
    res.send("Backend Running Successfully")
})

app.post("/uploads", upload.single("file"), async (req, res) => {

    try {

        // Read uploaded PDF from uploads folder
        const dataBuffer = fs.readFileSync(req.file.path)

        // Extract text from PDF
        const pdfData = await pdfParse(dataBuffer)

        const cleanedText = pdfData.text
            .replace(/\s+/g, " ")
            .trim()

        //         const geminiResponse = await axios.post(

        //             `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,

        //             {
        //                 contents: [
        //                     {
        //                         parts: [
        //                             {
        //                                 text: `
        //               You are an AI insurance analyst.

        //               Summarize this insurance policy in simple language.

        //               Policy:
        // ${cleanedText.slice(0, 3000)}
        //             `
        //                             }
        //                         ]
        //                     }
        //                 ]
        //             }

        //         )

        const summary = `
This medical insurance policy includes coverage for hospitalization and critical illness treatment.

Key Risks:
- 24 month waiting period for major illnesses
- Room rent limitations may increase personal expenses
- Pre-existing diseases covered after specific duration

Recommendation:
Review exclusions carefully before purchasing this policy.
`

        // Send extracted text back to frontend
        res.json({
            summary: summary
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            error: "Failed to extract PDF text"
        })

    }

})


// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000")
})