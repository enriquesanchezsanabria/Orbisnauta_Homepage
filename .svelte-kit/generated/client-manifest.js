export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\__layout-esp.svelte"),
	() => import("..\\..\\src\\routes\\contact.svelte"),
	() => import("..\\..\\src\\routes\\contact_es@esp.svelte"),
	() => import("..\\..\\src\\routes\\es@esp.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte")
];

export const dictionary = {
	"": [[0, 6], [1]],
	"contact": [[0, 3], [1]],
	"contact_es@esp": [[2, 4], [1]],
	"es@esp": [[2, 5], [1]]
};