<template>
  <div class="tailwind-isolation">
    <slot />
  </div>
</template>

<!-- <style>
/* Complete reset for the isolation container */
.tailwind-isolation {
  all: initial;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  background: inherit;
  font-family: inherit;
  line-height: inherit;
}

/* Deep reset for all child elements */
.tailwind-isolation * {
  all: unset;
  box-sizing: border-box;
  display: revert;
  color: revert;
  background: revert;
  font: revert;
  margin: revert;
  padding: revert;
  border: revert;
  position: revert;
  z-index: revert;
  opacity: revert;
  text-decoration: revert;
  list-style: revert;
}

/* Allow Tailwind utility classes to work */
.tailwind-isolation [class*="bg-"],
.tailwind-isolation [class*="text-"],
.tailwind-isolation [class*="border-"],
.tailwind-isolation [class*="p-"],
.tailwind-isolation [class*="m-"],
.tailwind-isolation [class*="flex"],
.tailwind-isolation [class*="grid"],
.tailwind-isolation [class*="w-"],
.tailwind-isolation [class*="h-"],
.tailwind-isolation [class*="rounded"],
.tailwind-isolation [class*="shadow"],
.tailwind-isolation [class*="opacity"],
.tailwind-isolation [class*="z-"],
.tailwind-isolation [class*="absolute"],
.tailwind-isolation [class*="relative"],
.tailwind-isolation [class*="fixed"],
.tailwind-isolation [class*="sticky"],
.tailwind-isolation [class*="block"],
.tailwind-isolation [class*="inline"],
.tailwind-isolation [class*="inline-block"],
.tailwind-isolation [class*="hidden"],
.tailwind-isolation [class*="visible"],
.tailwind-isolation [class*="font-"],
.tailwind-isolation [class*="text-"],
.tailwind-isolation [class*="leading-"],
.tailwind-isolation [class*="tracking-"],
.tailwind-isolation [class*="justify-"],
.tailwind-isolation [class*="items-"],
.tailwind-isolation [class*="gap-"],
.tailwind-isolation [class*="space-"],
.tailwind-isolation [class*="overflow"],
.tailwind-isolation [class*="cursor"],
.tailwind-isolation [class*="transition"],
.tailwind-isolation [class*="duration"],
.tailwind-isolation [class*="ease"],
.tailwind-isolation [class*="transform"],
.tailwind-isolation [class*="hover:"],
.tailwind-isolation [class*="focus:"],
.tailwind-isolation [class*="active:"],
.tailwind-isolation [class*="group"],
.tailwind-isolation [class*="container"] {
  all: revert;
}

/* Special handling for pseudo-elements */
.tailwind-isolation *::before,
.tailwind-isolation *::after {
  all: unset;
  content: revert;
  display: revert;
  position: revert;
}
</style> -->