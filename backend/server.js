require("dotenv").config()
// const axios = require("axios")
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY

const Anthropic = require("@anthropic-ai/sdk")
const express = require("express")
const cors = require("cors")
const multer = require("multer")
const fs = require("fs")
const pdfParse = require("pdf-parse")
const app = express()
const anthropic = new Anthropic({
    apiKey: process.env.CLAUDE_API_KEY
})
let cleanedText=""
    const detectedRisks = []


const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }

})

const uploads = multer({ storage })

// Allow frontend requests
app.use(cors())

// Test route
app.get("/", (req, res) => {
    res.send("Backend Running Successfully")
})

app.post("/uploads", uploads.single("file"), async (req, res) => {

    try {
        // Read uploaded PDF from uploads folder
        const dataBuffer = fs.readFileSync(req.file.path)

        // Extract text from PDF
        const pdfData = await pdfParse(dataBuffer)

         cleanedText = pdfData.text
            .replace(/\s+/g, " ")
            .trim()


        // Detect risks


        if (cleanedText.toLowerCase().includes("waiting period")) {

            detectedRisks.push({
                type: "Waiting Period",
                level: "Medium Risk"
            })

        }
        if (cleanedText.toLowerCase().includes("room rent")) {

            detectedRisks.push({
                type: "Room Rent Limit",
                level: "High Risk"
            })

        }

        if (cleanedText.toLowerCase().includes("pre-existing")) {

            detectedRisks.push({
                type: "Pre-existing Disease Clause",
                level: "High Risk"
            })

        }

        if (cleanedText.toLowerCase().includes("co-pay")) {

            detectedRisks.push({
                type: "Co-pay Clause",
                level: "Medium Risk"
            })

        }



        
    }catch(e){
        console.log("error happend here", e)
    }
    
    try{
        const response = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1000,
    messages: [
      {
        role: "user",
        content:`

You are an AI medical insurance risk analyzer.

Analyze this insurance policy and generate:

1. Simple policy summary
2. Important risks
3. Hidden clauses
4. Waiting periods
5. Exclusions

Policy Document:

${cleanedText.slice(0, 4000)}

            `
        }

    ]

})

const summary = response.content[0].text
    

        // Send data to frontend
     res.json({

    summary: summary,

    risks: detectedRisks

})

    } catch (error) {

        console.log(error ,"error happend in server side ")

        res.status(500).json({
            error: "Failed to analyze policy"
        })

    }

})


// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000")
})