import lunr from "lunr";
function initLunr(chunks) {
  const index = lunr(function () {
    this.ref('id');
    this.field('content');

    chunks.forEach((chunk, i) => {
      this.add({ id: String(i), content: chunk });
    });
  });

  return index;
}

// Search the question
export function findResponse(chunks, question) {
  const index = initLunr(chunks);
  const result = index.search(question);
  // Map search results back to the original chunks
  const mapped = result.map(r => ({ ref: r.ref, score: r.score, chunk: chunks[Number(r.ref)] }));
  return mapped;
}