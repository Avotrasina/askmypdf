<template>
	<div class="flex justify-start">
		<div
			class="bg-paper border border-border rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5 shadow-sm"
		>
			<span class="dot dot-1"></span>
			<span class="dot dot-2"></span>
			<span class="dot dot-3"></span>
		</div>
	</div>
</template>

<style scoped>
.dot {
	width: 0.4rem;
	height: 0.4rem;
	border-radius: 9999px;
	background: rgba(113, 128, 150, 0.85);
	animation: pulse 1.2s ease-in-out infinite;
	transform-origin: center;
}

.dot-2 {
	animation-delay: 0.16s;
}

.dot-3 {
	animation-delay: 0.32s;
}

@keyframes pulse {
	0%,
	80%,
	100% {
		opacity: 0.35;
		transform: translateY(0) scale(0.9);
	}
	40% {
		opacity: 1;
		transform: translateY(-3px) scale(1);
	}
}
</style>
