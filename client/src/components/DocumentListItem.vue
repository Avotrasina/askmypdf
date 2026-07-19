<template>
    <!-- Component: DocumentListItem (repeat per document) -->
    <div class="flex-1 overflow-y-auto px-2 pb-3 space-y-1">
      <button class="doc-item w-full text-left px-3 py-2.5 rounded-lg bg-primary-soft/70 border-l-2 border-primary flex items-start gap-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-0.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5"/></svg>
        <span class="min-w-0 flex-1">
          <span class="block text-sm font-medium text-ink truncate">Q3-Financial-Report.pdf</span>
          <span class="flex items-center gap-1.5 text-xs text-ink-faint mt-0.5">
            <span class="inline-flex items-center gap-1 text-primary-dark font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11L4 12"/></svg>
              Ready
            </span>
            <span>&middot;</span> 22 pages
          </span>
        </span>
      </button>
      <button class="doc-item w-full text-left px-3 py-2.5 rounded-lg hover:bg-paper flex items-start gap-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-0.5 text-ink-faint shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5"/></svg>
        <span class="min-w-0 flex-1">
          <span class="block text-sm font-medium text-ink truncate">Employee-Handbook-2026.pdf</span>
          <span class="flex items-center gap-1.5 text-xs text-ink-faint mt-0.5">
            <span class="inline-flex items-center gap-1 text-highlight-dark font-medium">
              <svg class="w-3 h-3 animate-spin text-highlight-dark" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"/><path class="opacity-90" d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
              Parsing
            </span>
            <span>&middot;</span> 48 pages
          </span>
        </span>
      </button>
      <button class="doc-item w-full text-left px-3 py-2.5 rounded-lg hover:bg-paper flex items-start gap-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-0.5 text-ink-faint shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5"/></svg>
        <span class="min-w-0 flex-1">
          <span class="block text-sm font-medium text-ink truncate">Lease-Agreement-Draft.pdf</span>
          <span class="flex items-center gap-1.5 text-xs text-ink-faint mt-0.5">
            <span class="inline-flex items-center gap-1 text-primary-dark font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11L4 12"/></svg>
              Ready
            </span>
            <span>&middot;</span> 8 pages
          </span>
        </span>
      </button>

      <button class="doc-item w-full text-left px-3 py-2.5 rounded-lg hover:bg-paper flex items-start gap-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-0.5 text-danger shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5"/></svg>
        <span class="min-w-0 flex-1">
          <span class="block text-sm font-medium text-ink truncate">Research-Paper-Diffusion.pdf</span>
          <span class="flex items-center gap-1.5 text-xs text-ink-faint mt-0.5">
            <span class="inline-flex items-center gap-1 text-danger font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg>
              Couldn't parse
            </span>
          </span>
        </span>
      </button>

    </div>
</template>

<script setup>

</script>

