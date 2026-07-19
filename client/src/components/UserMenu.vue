<template>
	<!-- Component: UserMenu -->
	<div class="relative">
		<button
			id="btn-user-menu"
			type="button"
			class="flex items-center gap-2 pl-1.5 pr-1 sm:pr-2.5 py-1 rounded-lg hover:bg-paper transition"
		>
			<img
				src="https://i.pravatar.cc/64?img=47"
				alt=""
				class="w-8 h-8 rounded-full object-cover ring-2 ring-surface"
			/>
			<span class="hidden sm:inline text-sm font-medium text-ink"
				>Naina R.</span
			>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="hidden sm:inline w-4 h-4 text-ink-faint"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="m6 9 6 6 6-6" />
			</svg>
		</button>
		<div
			id="user-menu"
			class="hidden absolute right-0 mt-2 w-56 bg-surface border border-border rounded-xl shadow-panel py-1.5 z-50"
		>
			<div class="px-3.5 py-2.5 border-b border-border">
				<p class="text-sm font-medium text-ink">Naina Ramanantsoa</p>
				<p class="text-xs text-ink-faint">naina@studio.mg</p>
			</div>
			<a
				href="#"
				class="flex items-center gap-2.5 px-3.5 py-2 text-sm text-ink-soft hover:bg-paper hover:text-ink transition"
				>Profile settings</a
			>
			<a
				href="#"
				class="flex items-center gap-2.5 px-3.5 py-2 text-sm text-ink-soft hover:bg-paper hover:text-ink transition"
				>Usage &amp; plan</a
			>
			<a
				href="#"
				class="flex items-center gap-2.5 px-3.5 py-2 text-sm text-ink-soft hover:bg-paper hover:text-ink transition"
				>Help &amp; docs</a
			>
			<div class="my-1 border-t border-border"></div>
			<a
				href="#"
				class="flex items-center gap-2.5 px-3.5 py-2 text-sm text-danger hover:bg-danger-soft transition"
				>Sign out</a
			>
		</div>
	</div>
</template>
