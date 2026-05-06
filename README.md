# Insurance Risk Analyzer

AI-powered medical insurance policy analysis platform that simplifies complex policy documents into understandable summaries, risk insights, and important clauses.

---

# Problem Statement

Medical insurance policies are often lengthy, complex, and filled with legal terminology that most users struggle to understand. Important details such as waiting periods, exclusions, co-payments, claim limits, and hidden conditions are usually overlooked until claim rejection occurs.

This project aims to simplify medical insurance policies using AI by extracting important clauses, identifying potential risks, and generating user-friendly summaries from uploaded policy documents.

---

# Project Goal

Build an AI-powered system that:

* Accepts insurance policy PDFs
* Extracts and processes policy text
* Simplifies legal language
* Highlights risky clauses
* Helps users understand policies before purchase

---

# Key Features

## Current MVP Features

* PDF upload system
* PDF text extraction
* Backend document processing
* Cleaned text preprocessing
* Dynamic frontend rendering
* AI-ready backend architecture
* Mock AI-generated policy summary

---

# Future Features

* AI-generated summaries using Gemini/OpenAI
* Risk clause detection
* Waiting period analysis
* Coverage comparison
* RAG-based intelligent querying
* Vector database integration
* Policy comparison engine
* Personalized recommendations
* Claim rejection probability analysis

---

# Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Axios
* Vite

## Backend

* Node.js
* Express.js
* Multer
* pdf-parse
* CORS

## AI / NLP

* Gemini API / OpenAI API
* RAG Architecture (planned)
* Embeddings (planned)
* Vector Database (planned)

---

# Current Architecture

```txt
User Uploads PDF
        ↓
React Frontend
        ↓
Axios API Request
        ↓
Express Backend
        ↓
Multer File Upload
        ↓
PDF Extraction using pdf-parse
        ↓
Text Cleaning & Preprocessing
        ↓
AI Summary Layer
        ↓
Frontend Dashboard Rendering
```

---

# Why This Project Is Different

Unlike general AI tools such as ChatGPT or Gemini:

* This platform is domain-specific for insurance analysis
* Focuses on risk clause extraction
* Optimized for medical insurance policies
* Structured specifically for policy understanding
* Designed for document intelligence workflows
* Future RAG architecture will improve accuracy using policy-specific retrieval

General-purpose LLMs only respond to prompts.
This project creates a specialized insurance analysis pipeline.

---

# Real World Impact

This solution can help:

* Individuals purchasing medical insurance
* Families comparing policies
* Insurance consultants
* Claim analysts
* Senior citizens understanding coverage limitations

Potential benefits:

* Better policy decisions
* Reduced claim rejection surprises
* Increased transparency
* Improved insurance literacy

---

# Folder Structure

```txt
insurance-risk-analyzer/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── .gitignore
```

---

# Backend Workflow

## 1. File Upload

Users upload medical insurance policy PDFs.

## 2. Multer Processing

Backend stores uploaded PDF files temporarily.

## 3. PDF Parsing

The pdf-parse library extracts readable text from the PDF.

## 4. Text Cleaning

Extra spaces and formatting noise are removed.

## 5. AI Processing Layer

Extracted policy text is prepared for:

* summarization
* clause detection
* risk analysis
* future RAG retrieval

## 6. Frontend Rendering

Processed response is displayed dynamically on dashboard.

---

# Frontend Features

* File upload UI
* Dynamic dashboard
* React state management
* API integration
* Responsive Tailwind layout
* Policy summary cards
* Risk analysis section

---

# Challenges Faced During Development

* File upload path handling
* Multer storage configuration
* PDF parsing issues
* AI SDK compatibility problems
* Gemini model endpoint instability
* API quota limitations
* Async backend handling

---

# Important Learnings

This project helped understand:

* Full-stack architecture
* React state management
* Backend API handling
* File uploads with Multer
* PDF processing pipelines
* AI integration workflows
* LLM infrastructure challenges
* Importance of preprocessing in AI systems
* Why RAG systems are needed for large documents

---

# Future RAG Architecture

Planned architecture:

```txt
PDF Upload
    ↓
Text Extraction
    ↓
Chunking
    ↓
Embeddings Generation
    ↓
Vector Database Storage
    ↓
Semantic Retrieval
    ↓
Relevant Context Injection
    ↓
LLM Response Generation
```

This approach improves:

* AI accuracy
* cost efficiency
* scalability
* contextual understanding

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Backend Setup

```bash
cd backend
npm install
node server.js
```

---

# Environment Variables

Create a `.env` file inside backend:

```env
GEMINI_API_KEY=your_api_key
```

---

# Current Status

## Completed

* Frontend UI
* Backend setup
* PDF uploads
* Text extraction
* Dynamic rendering
* API architecture
* Mock AI response system

## In Progress

* Live LLM integration
* Risk clause engine
* RAG implementation

---

# Project Vision

The long-term goal is to build a reliable AI-powered insurance intelligence platform that helps users make safer and more informed insurance decisions.

---

# Author

Priyanshu Sharma

Full Stack Developer | AI-Powered Product Builder
