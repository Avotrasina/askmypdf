<template>
	<!-- Component: DocumentViewer -->
	<main
		id="panel-doc"
		class="mobile-panel flex-1 min-w-0 min-h-0 flex flex-col md:flex bg-paper overflow-hidden"
	>
		<div
			class="shrink-0 flex items-center justify-between gap-3 px-4 md:px-6 h-14 border-b border-border bg-surface/60"
		>
			<div class="min-w-0">
				<h1 class="text-sm font-semibold text-ink truncate">
					Q3-Financial-Report.pdf
				</h1>
				<p class="text-xs text-ink-faint font-mono">Page 4 of 22</p>
			</div>
			<div class="flex items-center gap-1 shrink-0">
				<button
					aria-label="Zoom out"
					class="p-2 rounded-lg text-ink-soft hover:bg-paper hover:text-ink transition"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-4.5 h-4.5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="11" cy="11" r="7" />
						<path d="m21 21-4.3-4.3M8 11h6" />
					</svg>
				</button>
				<span
					class="text-xs font-mono text-ink-soft w-10 text-center select-none"
					>100%</span
				>
				<button
					aria-label="Zoom in"
					class="p-2 rounded-lg text-ink-soft hover:bg-paper hover:text-ink transition"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-4.5 h-4.5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="11" cy="11" r="7" />
						<path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
					</svg>
				</button>
				<div class="w-px h-5 bg-border mx-1"></div>
				<button
					aria-label="Download"
					class="p-2 rounded-lg text-ink-soft hover:bg-paper hover:text-ink transition"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-4.5 h-4.5"
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
				</button>
			</div>
		</div>

		<!-- Parsing banner (shown while a document is being processed) -->
		<div
			class="shrink-0 hidden md:flex items-center gap-2.5 px-6 py-2 bg-highlight-soft/70 border-b border-highlight/30 text-sm text-highlight-dark"
		>
			<svg
				class="w-3.5 h-3.5 animate-spin shrink-0"
				viewBox="0 0 24 24"
				fill="none"
			>
				<circle
					class="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					stroke-width="3"
				/>
				<path
					class="opacity-90"
					d="M22 12a10 10 0 0 1-10 10"
					stroke="currentColor"
					stroke-width="3"
					stroke-linecap="round"
				/>
			</svg>
			<span
				><span class="font-medium">Employee-Handbook-2026.pdf</span> is being
				parsed &mdash; extracting text and building the answer index. This can
				take a minute.</span
			>
		</div>

		<!-- Page canvas -->
		<div
			class="flex-1 min-h-0 overflow-y-auto px-4 md:px-10 py-6 md:py-10 flex justify-center"
		>
			<div
				class="w-full max-w-[560px] bg-surface rounded-sm shadow-page px-8 py-10 md:px-12 md:py-14"
			>
				<p class="font-display text-lg font-semibold text-ink mb-1">
					Q3 2026 Financial Summary
				</p>
				<p class="text-xs font-mono text-ink-faint mb-8">
					Section 2 &mdash; Revenue Overview
				</p>

				<div class="space-y-2.5 mb-6">
					<div class="h-2.5 rounded-full bg-border w-full"></div>
					<div class="h-2.5 rounded-full bg-border w-[92%]"></div>
					<div class="h-2.5 rounded-full bg-border w-[97%]"></div>
					<div class="h-2.5 rounded-full bg-border w-[60%]"></div>
				</div>

				<!-- Signature element: cited excerpt, highlighted + tagged with a
             numbered pin that matches the citation shown in the chat panel. -->
				<div
					class="relative citation-glow bg-highlight-soft/80 border border-highlight/50 rounded-md px-4 py-3 mb-6"
				>
					<span
						class="absolute -top-2.5 -left-2.5 w-5 h-5 rounded-full bg-highlight text-white text-[11px] font-mono font-semibold flex items-center justify-center shadow-page"
						>1</span
					>
					<p class="text-sm leading-relaxed text-ink">
						"Total revenue for Q3 reached
						<span class="font-semibold">$4.2M</span>, up
						<span class="font-semibold">18% year-over-year</span>, driven
						primarily by expansion in the enterprise segment."
					</p>
				</div>

				<div class="space-y-2.5">
					<div class="h-2.5 rounded-full bg-border w-full"></div>
					<div class="h-2.5 rounded-full bg-border w-[88%]"></div>
					<div class="h-2.5 rounded-full bg-border w-[95%]"></div>
					<div class="h-2.5 rounded-full bg-border w-[70%]"></div>
					<div class="h-2.5 rounded-full bg-border w-[40%]"></div>
				</div>
			</div>
		</div>

		<!-- Page navigation -->
		<div
			class="shrink-0 flex items-center justify-center gap-4 py-3 border-t border-border bg-surface/60"
		>
			<button
				aria-label="Previous page"
				class="p-2 rounded-lg text-ink-soft hover:bg-paper hover:text-ink transition"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-4.5 h-4.5"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="m15 18-6-6 6-6" />
				</svg>
			</button>
			<span class="text-xs font-mono text-ink-soft">04 / 22</span>
			<button
				aria-label="Next page"
				class="p-2 rounded-lg text-ink-soft hover:bg-paper hover:text-ink transition"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-4.5 h-4.5"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="m9 18 6-6-6-6" />
				</svg>
			</button>
		</div>
	</main>
</template>

<script setup></script>
