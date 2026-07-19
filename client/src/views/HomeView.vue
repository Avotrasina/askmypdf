<template>
  <div>
    <!-- Header -->
    <Header @toogle-modal="toogleModal" />
    <div class="relative flex-1 min-h-0 flex">
      <!-- Sidebar backdrop (mobile) -->
      <div id="sidebar-backdrop" class="hidden md:hidden fixed inset-0 bg-ink/30 z-40"></div>
      <!-- Document Sidebar -->
      <DocumentSidebar />
      
      <!-- Document Viewer -->
      <DocumentViewer/>
    
      <!-- Chat Panel -->
      <ChatPanel/>
      
      <!-- Upload Modal -->
      <UploadModal @toogle-modal="toogleModal" v-if="isUploadModalOpen" />
    </div>    
  </div>
</template>

<script setup>

import ChatPanel from '@/components/ChatPanel.vue';
import DocumentSidebar from '@/components/DocumentSidebar.vue';
import DocumentViewer from '@/components/DocumentViewer.vue';
import Header from '@/components/Header.vue';
import UploadModal from '@/components/UploadModal.vue';
import { ref } from 'vue';

const isUploadModalOpen = ref(false);
function toogleModal(isOpen) {
  isUploadModalOpen.value = isOpen;
}

</script>