<template>
	<header
		class="shrink-0 border-b border-border bg-surface/90 backdrop-blur z-40"
	>
		<div class="h-16 px-4 md:px-6 flex items-center justify-between gap-4">
			<!-- Left: menu (mobile) + logo -->
			<div class="flex items-center gap-3">
				<button
					id="btn-sidebar-open"
					type="button"
					aria-label="Open documents panel"
					class="md:hidden -ml-1 p-2 rounded-lg text-ink-soft hover:bg-paper active:scale-95 transition"
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
						<path d="M3 6h18M3 12h18M3 18h18" />
					</svg>
				</button>

				<a href="#" class="flex items-center gap-2 shrink-0">
					<span
						class="relative inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white"
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
							<path
								d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
							/>
							<path d="M14 3v5h5" />
						</svg>
						<span
							class="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-[3px] bg-highlight"
						></span>
					</span>
					<span
						class="font-display font-semibold text-lg tracking-tight text-ink hidden sm:inline"
						>askmypdf</span
					>
				</a>
			</div>

			<!-- Center: primary nav (desktop) -->
			<nav class="hidden lg:flex items-center gap-1 text-sm font-medium">
				<a href="#" class="px-3 py-2 rounded-lg text-ink bg-paper">Workspace</a>
				<a
					href="#"
					class="px-3 py-2 rounded-lg text-ink-soft hover:text-ink hover:bg-paper transition"
					>History</a
				>
				<a
					href="#"
					class="px-3 py-2 rounded-lg text-ink-soft hover:text-ink hover:bg-paper transition"
					>Shared with me</a
				>
			</nav>

			<!-- Right: search, upload, notifications, avatar -->
			<div class="flex items-center gap-1.5 md:gap-2">
				<button
					type="button"
					aria-label="Search"
					class="hidden sm:inline-flex p-2.5 rounded-lg text-ink-soft hover:bg-paper hover:text-ink transition"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<circle cx="11" cy="11" r="7" />
						<path d="m21 21-4.3-4.3" />
					</svg>
				</button>

				<button
					id="btn-upload-open"
					type="button"
					class="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium px-3 md:px-4 py-2.5 rounded-lg transition active:scale-[.98]"
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
						<path d="M12 5v14M5 12h14" />
					</svg>
					<span class="hidden sm:inline">Upload PDF</span>
				</button>

				<button
					type="button"
					aria-label="Notifications"
					class="relative p-2.5 rounded-lg text-ink-soft hover:bg-paper hover:text-ink transition"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
						<path d="M13.73 21a2 2 0 0 1-3.46 0" />
					</svg>
					<span
						class="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-highlight"
					></span>
				</button>

				<!-- Component: UserMenu -->
        <UserMenu/>
			</div>
		</div>

		<!-- Mobile section tabs: Documents / Doc viewer / Chat -->
		<div class="md:hidden flex border-t border-border">
			<button
				data-mobile-tab="doc"
				class="mobile-tab flex-1 py-2.5 text-sm font-medium text-primary border-b-2 border-primary"
			>
				Document
			</button>
			<button
				data-mobile-tab="chat"
				class="mobile-tab flex-1 py-2.5 text-sm font-medium text-ink-faint border-b-2 border-transparent"
			>
				Chat
			</button>
		</div>
	</header>
</template>

<script setup>
  import UserMenu from '@/components/UserMenu.vue';
</script>
