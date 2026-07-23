<template>
  <section id="panel-chat" class="mobile-panel hidden md:flex w-full md:w-95 xl:w-100 shrink-0 border-l border-border bg-surface flex-col">

    <div v-if="props.file" class="shrink-0 px-5 h-14 flex flex-col justify-center border-b border-border">
      <p class="text-sm font-semibold text-ink">Ask about this document</p>
      <p class="text-xs text-ink-faint truncate"> {{ props.file?.name }} </p>
    </div>

    <!-- Message thread -->
    <div class="flex-1 overflow-y-auto px-4 py-5 space-y-4">

      <div class="flex justify-end fade-up">
        <div class="max-w-[85%] bg-primary text-white text-sm leading-relaxed rounded-2xl rounded-tr-sm px-4 py-2.5">
          What was the total revenue in Q3?
        </div>
      </div>

      <div class="flex justify-start fade-up">
        <div class="max-w-[88%] space-y-2">
          <div class="bg-paper text-ink text-sm leading-relaxed rounded-2xl rounded-tl-sm px-4 py-3 border border-border">
            Total revenue in Q3 reached
            <span class="font-semibold">$4.2M</span>, an increase of
            <span class="font-semibold">18% year-over-year</span>, mainly
            driven by growth in the enterprise segment
            <button class="citation-pin inline-flex items-center justify-center w-4 h-4 align-middle rounded-full bg-highlight text-white text-[10px] font-mono font-semibold ml-0.5 hover:bg-highlight-dark transition">1</button>.
          </div>
          <div class="flex items-center gap-2 px-1">
            <span class="text-[11px] font-mono text-ink-faint">Source: page 4</span>
            <span class="text-ink-faint">&middot;</span>
            <button class="text-[11px] text-ink-faint hover:text-primary transition">Copy</button>
            <button class="text-[11px] text-ink-faint hover:text-primary transition">Good answer</button>
          </div>
        </div>
      </div>

      <div class="flex justify-end fade-up">
        <div class="max-w-[85%] bg-primary text-white text-sm leading-relaxed rounded-2xl rounded-tr-sm px-4 py-2.5">
          Can you summarize the key risks section too?
        </div>
      </div>

      <!-- Typing indicator -->
      <div class="flex justify-start">
        <div class="bg-paper border border-border rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-ink-faint animate-bounce [animation-delay:-0.2s]"></span>
          <span class="w-1.5 h-1.5 rounded-full bg-ink-faint animate-bounce [animation-delay:-0.1s]"></span>
          <span class="w-1.5 h-1.5 rounded-full bg-ink-faint animate-bounce"></span>
        </div>
      </div>
    </div>

    <!-- Suggested questions -->
    <div class="shrink-0 px-4 pb-2 flex flex-wrap gap-1.5">
      <button class="text-xs font-medium text-primary-dark bg-primary-soft/70 hover:bg-primary-soft px-3 py-1.5 rounded-full transition">Summarize this document</button>
      <button class="text-xs font-medium text-primary-dark bg-primary-soft/70 hover:bg-primary-soft px-3 py-1.5 rounded-full transition">List all dates mentioned</button>
    </div>

    <!-- Composer -->
    <form class="shrink-0 p-3.5 border-t border-border">
      <div class="flex items-end gap-2 bg-paper border border-border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary/50 transition">
        <textarea rows="1" placeholder="Ask a question about this document…"
          class="flex-1 resize-none bg-transparent text-sm leading-relaxed placeholder:text-ink-faint focus:outline-none py-1 max-h-28"></textarea>
        <button type="submit" aria-label="Send question"
          class="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white hover:bg-primary-dark transition active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        </button>
      </div>
      <p class="text-[11px] text-ink-faint mt-1.5 px-1">Answers are grounded in this document — every claim links back to a source page.</p>
    </form>
  </section>
</template>

<script setup>

const props = defineProps({
  file: Object
})


</script>
