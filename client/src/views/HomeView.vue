<template>
	<div class="h-screen min-h-0 flex flex-col overflow-hidden bg-paper">
		<!-- Header -->
		<Header @toogle-modal="toogleModal" />
		<div class="relative flex-1 min-h-0 flex overflow-hidden">
			<!-- Sidebar backdrop (mobile) -->
			<div
				id="sidebar-backdrop"
				class="hidden md:hidden fixed inset-0 bg-ink/30 z-40"
			></div>
			<!-- Document Sidebar -->
			<DocumentSidebar />

			<!-- Document Viewer -->
			<DocumentViewer />

			<!-- Chat Panel -->
			<ChatPanel :file="file" />

			<!-- Upload Modal -->
			<UploadModal
				@toogle-modal="toogleModal"
				@upload-file="uploadFile"
				v-if="isUploadModalOpen"
			/>
		</div>
	</div>
</template>

<script setup>
import ChatPanel from "@/components/ChatPanel.vue";
import DocumentSidebar from "@/components/DocumentSidebar.vue";
import DocumentViewer from "@/components/DocumentViewer.vue";
import Header from "@/components/Header.vue";
import UploadModal from "@/components/UploadModal.vue";
import { ref } from "vue";

const isUploadModalOpen = ref(false);
const file = ref(null);

function toogleModal(isOpen) {
	isUploadModalOpen.value = isOpen;
}

function uploadFile(selectedFile) {
	file.value = selectedFile.value;
}
</script>
