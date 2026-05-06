import { useState } from "react"
import axios from "axios"


function App() {

  const [selectedFile, setSelectedFile] = useState(null)
  const [question, setQuestion] = useState("")
  const [extractedText, setExtractedText] = useState("")

  const handleAnalyze = () => {

    // Check if file is uploaded
    if (!selectedFile) {

      alert("Please upload a PDF file.")

      return
    }

    // Check if question is empty
    if (!question.trim()) {

      alert("Please enter your question.")

      return
    }

    const formData = new FormData()

    formData.append("file", selectedFile)

    axios.post(
      "http://localhost:5000/uploads",
      formData
    )
      .then((response) => {
        setExtractedText(response.data.summary)
      })
      .catch((error) => {
        console.log(error)
      })

  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* header */}
      <div>
        <h1 className="text-4xl font-bold text-black">
          AI Medical Insurance Risk Analyzer
        </h1>

        <p className="text-gray-600 mt-2">
          Upload insurance policies and detect hidden risks.
        </p>
      </div>

      {/* Main Layout */}

      <div className="grid grid-cols-3 gap-6 mt-8">

        {/* Left Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Upload Policy
            </h2>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">

              <p className="text-gray-500 mb-4">
                Drag & Drop your insurance PDF here
              </p>

              <label className="bg-black text-white px-5 py-2 rounded-lg cursor-pointer">

                Upload PDF

                <input
                  type="file"
                  accept=".pdf"
                  className="hidden"

                  onChange={(e) => {
                    setSelectedFile(e.target.files[0])
                  }}
                />

              </label>

            </div>

            {/* Selected File Name */}
            {
              selectedFile && (

                <p className="mt-4 text-sm text-gray-600">
                  Selected File: {selectedFile.name}
                </p>

              )
            }


            {/* Question Section */}
            <div className="mt-6">

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ask About Your Policy
              </label>

              <textarea
                placeholder="Example: Does this policy cover cancer treatment?"

                className="w-full border border-gray-300 rounded-lg p-3"

                rows={4}

                value={question}

                onChange={(e) => {
                  setQuestion(e.target.value)
                }}
              />


              <button
                className="w-full mt-4 bg-black text-white py-2 rounded-lg"

                onClick={handleAnalyze}
              >
                Analyze Policy
              </button>

            </div>
          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}

        {/* 
  Right Side Dashboard Container

  Future Responsibilities:
  - AI Generated Outputs
  - Policy Analysis Results
  - Risk Detection Results
  - Comparison Insights
*/}
        <div className="col-span-2 bg-white p-6 rounded-2xl shadow-md">

          <div>

            {/* ================= POLICY SUMMARY CARD ================= */}

            {/* 
      Policy Summary Section

      Future:
      - Dynamic AI summary data
      - LLM generated insights
      - Summary loading states
    */}
            <div className="bg-white p-6 rounded-2xl shadow-md">

              {/* Summary Header Row */}
              <div className="flex justify-between items-center mb-4">

                {/* Summary Title */}
                <h2 className="text-2xl font-semibold">
                  Policy Summary
                </h2>

                {/* 
          Risk Badge

          Future:
          - Dynamic risk level
          - Low / Medium / High
        */}
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  Medium Risk
                </span>

              </div>

              {/* AI Summary Output */}
              <div className="space-y-3 text-gray-700">

                <p className="whitespace-pre-line text-gray-700">

                  {
                    extractedText
                      ? extractedText
                      : "Uploaded policy text will appear here..."
                  }

                </p>

              </div>
            </div>

            {/* ================= RISK CLAUSE SECTION ================= */}

            {/* 
      AI Detected Risk Clauses

      Future:
      - Dynamic risk cards
      - Risk classification
      - Claim rejection warnings
      - Financial impact analysis
    */}
            <div className="bg-white p-6 rounded-2xl shadow-md mt-6">

              {/* Section Title */}
              <h2 className="text-2xl font-semibold mb-4">
                Detected Risk Clauses
              </h2>

              {/* Risk Cards Container */}
              <div className="space-y-4">

                {/* ================= HIGH RISK CARD ================= */}

                {/* 
          High Severity Risk Card

          Future:
          - Dynamic red risk rendering
          - AI generated clause
        */}
                <div className="border border-red-200 bg-red-50 rounded-xl p-4">

                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-2">

                    {/* Risk Title */}
                    <h3 className="font-semibold text-red-700">
                      High Risk Clause
                    </h3>

                    {/* Risk Type Label */}
                    <span className="text-sm text-red-600">
                      Claim Rejection Risk
                    </span>

                  </div>

                  {/* Risk Description */}
                  <p className="text-gray-700">
                    Diabetes-related complications are excluded during the first 24 months.
                  </p>

                </div>

                {/* ================= MEDIUM RISK CARD ================= */}

                {/* 
          Medium Severity Risk Card

          Future:
          - Financial impact analysis
          - Dynamic AI explanations
        */}
                <div className="border border-yellow-200 bg-yellow-50 rounded-xl p-4">

                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-2">

                    {/* Risk Title */}
                    <h3 className="font-semibold text-yellow-700">
                      Medium Risk Clause
                    </h3>

                    {/* Risk Category */}
                    <span className="text-sm text-yellow-600">
                      Financial Impact
                    </span>

                  </div>

                  {/* Risk Description */}
                  <p className="text-gray-700">
                    Room rent capped at ₹5000/day may increase out-of-pocket expenses.
                  </p>

                </div>

              </div>
            </div>

            {/* ================= POLICY COMPARISON TABLE ================= */}

            {/* 
      Policy Comparison Section

      Future:
      - Multiple policy uploads
      - Dynamic comparison rendering
      - Comparison AI insights
    */}
            <div className="bg-white p-6 rounded-2xl shadow-md mt-6 overflow-x-auto">

              {/* Section Title */}
              <h2 className="text-2xl font-semibold mb-4">
                Policy Comparison
              </h2>

              {/* Comparison Table */}
              <table className="w-full border-collapse">

                {/* Table Header */}
                <thead>

                  <tr className="bg-gray-100 text-left">

                    <th className="p-3">Feature</th>
                    <th className="p-3">Policy A</th>
                    <th className="p-3">Policy B</th>

                  </tr>

                </thead>

                {/* Table Body */}
                <tbody>

                  {/* Waiting Period Row */}
                  <tr className="border-t">

                    <td className="p-3">Waiting Period</td>
                    <td className="p-3">24 Months</td>
                    <td className="p-3">12 Months</td>

                  </tr>

                  {/* Room Rent Row */}
                  <tr className="border-t">

                    <td className="p-3">Room Rent Limit</td>
                    <td className="p-3">₹5000/day</td>
                    <td className="p-3">No Limit</td>

                  </tr>

                  {/* Co-pay Row */}
                  <tr className="border-t">

                    <td className="p-3">Co-pay</td>
                    <td className="p-3">20%</td>
                    <td className="p-3">0%</td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default App