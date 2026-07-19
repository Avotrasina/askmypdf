<template>
  <!-- Header -->
  <Header />

  <!-- Main body -->
  <div class="relative flex-1 min-h-0 flex">

    <!-- Sidebar backdrop (mobile) -->
    <div id="sidebar-backdrop" class="hidden md:hidden fixed inset-0 bg-ink/30 z-40"></div>

    <!-- Document Sidebar -->
    <DocumentSidebar />

    <!-- Document Viewer -->
    <DocumentViewer/>

    <!-- Chat Panel -->
    <ChatPanel/>

  </div>
</template>

<script setup>

import ChatPanel from '@/components/ChatPanel.vue';
import DocumentSidebar from '@/components/DocumentSidebar.vue';
import DocumentViewer from '@/components/DocumentViewer.vue';
import Header from '@/components/Header.vue';

</script>