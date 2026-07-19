<template>
	<div
		id="upload-modal"
		class="flex fixed inset-0 z-60 items-center justify-center px-4"
	>
		<div id="upload-backdrop" class="absolute inset-0 bg-ink/40"></div>

		<div
			class="relative w-full max-w-md bg-surface rounded-2xl shadow-page p-6"
		>
			<div class="flex items-center justify-between mb-4">
				<h2 class="font-display text-lg font-semibold text-ink">
					Add a document
				</h2>
				<button
					id="btn-upload-close"
					aria-label="Close"
					class="p-1.5 -mr-1.5 rounded-lg text-ink-faint hover:bg-paper hover:text-ink transition"
          @click="$emit('toogle-modal', false)"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
					>
						<path d="M18 6 6 18M6 6l12 12" />
					</svg>
				</button>
			</div>

			<label
				id="dropzone"
				class="flex flex-col items-center justify-center text-center gap-2 border-2 border-dashed border-border hover:border-primary/50 rounded-xl px-6 py-10 cursor-pointer transition"
			>
				<input type="file" accept="application/pdf" class="hidden" />
				<span
					class="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary-soft text-primary mb-1"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5.5 h-5.5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M12 3v12m0 0-4-4m4 4 4-4" />
						<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
					</svg>
				</span>
				<span class="text-sm font-medium text-ink"
					>Drag &amp; drop a PDF here</span
				>
				<span class="text-xs text-ink-faint"
					>or click to browse &middot; max 25 MB</span
				>
			</label>

			<p class="text-xs text-ink-faint mt-4 text-center">
				Your document is parsed to extract its text, then indexed so answers
				stay grounded in the source pages.
			</p>
		</div>
	</div>
</template>


<script setup>


</script>
