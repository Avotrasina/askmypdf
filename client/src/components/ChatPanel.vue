<template>
	<section
		id="panel-chat"
		class="mobile-panel hidden md:flex w-full md:w-95 xl:w-100 shrink-0 border-l border-border bg-surface flex-col min-h-0 overflow-hidden"
	>
		<div
			v-if="props.file"
			class="shrink-0 px-5 h-14 flex flex-col justify-center border-b border-border"
		>
			<p class="text-sm font-semibold text-ink">Ask about this document</p>
			<p class="text-xs text-ink-faint truncate">{{ props.file?.name }}</p>
		</div>

		<!-- Message thread -->
		<div
			class="flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-4 py-5 space-y-4"
		>
			<div v-for="(message, index) in messageList" :key="index">
				<div v-if="message.role === 'user'" class="flex justify-end fade-up">
					<div
						class="max-w-[85%] bg-primary text-white text-sm leading-relaxed rounded-2xl rounded-tr-sm px-4 py-2.5"
					>
						{{ message.content }}
					</div>
				</div>
				<div v-else class="flex justify-start fade-up">
					<div class="max-w-[88%] space-y-2">
						<div
							class="bg-paper text-ink text-sm leading-relaxed rounded-2xl rounded-tl-sm px-4 py-3 border border-border"
						>
							{{ message.content }}
						</div>
						<div class="flex items-center gap-2 px-1">
							<span class="text-[11px] font-mono text-ink-faint"
								>Source: page 4</span
							>
							<span class="text-ink-faint">&middot;</span>
							<button
								class="text-[11px] text-ink-faint hover:text-primary transition"
							>
								Copy
							</button>
							<button
								class="text-[11px] text-ink-faint hover:text-primary transition"
							>
								Good answer
							</button>
						</div>
					</div>
				</div>

				<!-- Typing indicator -->
				<div v-if="isLoading" class="flex justify-start">
					<div
						class="bg-paper border border-border rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5"
					>
						<span
							class="w-1.5 h-1.5 rounded-full bg-ink-faint animate-bounce [animation-delay:-0.2s]"
						></span>
						<span
							class="w-1.5 h-1.5 rounded-full bg-ink-faint animate-bounce [animation-delay:-0.1s]"
						></span>
						<span
							class="w-1.5 h-1.5 rounded-full bg-ink-faint animate-bounce"
						></span>
					</div>
				</div>
			</div>
		</div>

		<!-- Suggested questions -->
		<div class="hidden shrink-0 px-4 pb-2 flex flex-wrap gap-1.5">
			<button
				class="text-xs font-medium text-primary-dark bg-primary-soft/70 hover:bg-primary-soft px-3 py-1.5 rounded-full transition"
			>
				Summarize this document
			</button>
			<button
				class="text-xs font-medium text-primary-dark bg-primary-soft/70 hover:bg-primary-soft px-3 py-1.5 rounded-full transition"
			>
				List all dates mentioned
			</button>
		</div>

		<!-- Message form -->
		<ChatForm v-show="props.file" @send-question="getQuestion" />
	</section>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import ChatForm from "./ChatForm.vue";

const props = defineProps({
	file: Object,
});

const isLoading = ref(false);
const messageList = ref([]);
const userQuestion = ref([]);

function getQuestion(question) {
	userQuestion.value.push(question);
	messageList.value.push({
		content: userQuestion.value.at(-1),
		role: "user",
		date: String(new Date().getTime()),
	});

	messageList.value.push({
		content: "AI response",
		role: "AI",
		date: String(new Date().getTime()),
	});

	sortMessages();
	console.log(messageList.value);
}

async function sendMessage() {
  const response = await axios.post()
}


function sortMessages() {
	messageList.value.sort((m1, m2) => {
		return m1.date.localeCompare(m2.date);
	});
}
</script>
