import { parsePDF } from "./pdf-parse.service.js";
import { findResponse } from "./lunr.service.js";

export async function makeSearch(document, question) {
  //  Process pdf parse
  const chunks = await parsePDF(document);
  console.log(chunks);
  // Get the result
  const results = findResponse(chunks, question);

  // Get the 3 relevants
  const relevantResults = results.slice(0, 5);

  let bestPart = "";
  
  for (let res of relevantResults) {
    bestPart = bestPart + res.chunk;
  }

  return bestPart;

}