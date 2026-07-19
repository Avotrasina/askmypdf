<template>
  <!-- Component: DocumentSidebar -->
  <aside id="sidebar"
    class="fixed md:static inset-y-0 left-0 z-50 md:z-auto w-[280px] shrink-0 -translate-x-full md:translate-x-0 transition-transform duration-200 bg-surface md:bg-paper border-r border-border flex flex-col">

    <div class="flex items-center justify-between px-4 h-14 border-b border-border md:hidden">
      <span class="font-display font-semibold text-ink">Documents</span>
      <button id="btn-sidebar-close" aria-label="Close" class="p-2 -mr-2 text-ink-soft">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
    </div>

    <div class="p-3.5 space-y-3">
      <button id="btn-upload-open-2" type="button"
        class="w-full flex items-center justify-center gap-2 border border-dashed border-primary/40 text-primary hover:bg-primary-soft/60 text-sm font-medium py-2.5 rounded-lg transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
        New document
      </button>

      <label class="relative block">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-ink-faint absolute left-3 top-1/2 -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        <input type="text" placeholder="Search documents"
          class="w-full text-sm bg-surface border border-border rounded-lg pl-9 pr-3 py-2 placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50" />
      </label>
    </div>

    <p class="px-4 pt-1 pb-2 text-xs font-medium uppercase tracking-wide text-ink-faint">Your library</p>

    <!-- Document List Item  -->
     <DocumentListItem />

    <div class="px-4 py-3 border-t border-border">
      <div class="flex items-center justify-between text-xs text-ink-faint mb-1.5">
        <span>Storage</span><span>340 MB / 1 GB</span>
      </div>
      <div class="h-1.5 rounded-full bg-border overflow-hidden">
        <div class="h-full w-[34%] rounded-full bg-primary"></div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import DocumentListItem from './DocumentListItem.vue';


</script>

