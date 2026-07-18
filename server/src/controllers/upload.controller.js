import { makeSearch } from "../services/search.service.js";

export async function handleUpload(req, res, next) {
  const uploadedFile = req.file;
  const question = `${req.body.question}`;
  
  // Validate the question
  if (!question || !uploadedFile) {
    return res.status(400).json({ message: "question or document is missing" });
  }

  // Valitate the mimetype
  const mimetype = uploadedFile.mimetype;
  if (mimetype !== "application/pdf") {
    return res.status(400).json({ message: "File type should be PDF only" });
  }

  // Search the response in the document
  const relevantChunk = await makeSearch(uploadedFile, question);


  return res.json((result));
}