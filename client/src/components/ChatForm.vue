<template>
	<!-- Composer -->
	<form
		@submit.prevent="askQuestion"
		class="shrink-0 p-3.5 border-t border-border"
	>
		<div
			class="flex items-end gap-2 bg-paper border border-border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary/50 transition"
		>
			<textarea
				v-model="userMessage"
				rows="1"
				placeholder="Ask a question about this document…"
				class="flex-1 resize-none bg-transparent text-sm leading-relaxed placeholder:text-ink-faint focus:outline-none py-1 max-h-28"
			></textarea>
			<button
				type="submit"
				aria-label="Send question"
				:class="[
					'shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg text-white transition active:scale-95 transition-1',
					{
						'bg-primary hover:bg-primary-dark': isUserMessageValid,
						'bg-primary-soft': !isUserMessageValid,
					}
				]"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-4 h-4"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="m22 2-7 20-4-9-9-4Z" />
					<path d="M22 2 11 13" />
				</svg>
			</button>
		</div>
		<p class="text-[11px] text-ink-faint mt-1.5 px-1">
			Answers are grounded in this document — every claim links back to a source
			page.
		</p>
	</form>
</template>

<script setup>
import { computed, ref } from "vue";

const userMessage = ref("");
const isUserMessageValid = computed(() => {
	return Boolean(userMessage.value);
});

function askQuestion() {
  if (!isUserMessageValid.value) return;
}
</script>
