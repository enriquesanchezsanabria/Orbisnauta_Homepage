export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\contact.svelte"),
	() => import("..\\..\\src\\routes\\contact_es.svelte"),
	() => import("..\\..\\src\\routes\\es.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\reel.svelte"),
	() => import("..\\..\\src\\routes\\reel_es.svelte"),
	() => import("..\\..\\src\\routes\\services.svelte"),
	() => import("..\\..\\src\\routes\\services_es.svelte")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"contact": [[0, 2], [1]],
	"contact_es": [[0, 3], [1]],
	"es": [[0, 4], [1]],
	"reel": [[0, 6], [1]],
	"reel_es": [[0, 7], [1]],
	"services": [[0, 8], [1]],
	"services_es": [[0, 9], [1]]
};