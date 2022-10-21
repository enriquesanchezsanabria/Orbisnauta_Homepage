
import root from '__GENERATED__/root.svelte';
import { respond } from '/Users/BIG TOWER1/Desktop/orbisnauta_web/on_web_dev_1/on_web1 v107 t4/.svelte-kit/runtime/server/index.js';
import { set_paths, assets, base } from '/Users/BIG TOWER1/Desktop/orbisnauta_web/on_web_dev_1/on_web1 v107 t4/.svelte-kit/runtime/paths.js';
import { set_prerendering } from '/Users/BIG TOWER1/Desktop/orbisnauta_web/on_web_dev_1/on_web1 v107 t4/.svelte-kit/runtime/env.js';

const template = ({ head, body, assets, nonce }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css\">\n\t\t<!--<link rel=\"stylesheet\" href=\"./node_modules/bootstrap/dist/css/bootstrap.min.css\">-->\n\t\t<script async defer data-domains=\"orbisnauta.com\" data-website-id=\"80b9a7b7-2084-4aaa-909a-b55b24c671c2\" src=\"http://localhost:3000/umami.js\"></script>\n\t\t   <!-- Hotjar Tracking Code for https://www.orbisnauta.com/ -->\n\t\t   <script>\n\t\t\t(function(h,o,t,j,a,r){\n\t\t\th.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n\t\t\th._hjSettings={hjid:3117160,hjsv:6};\n\t\t\ta=o.getElementsByTagName('head')[0];\n\t\t\tr=o.createElement('script');r.async=1;\n\t\t\tr.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n\t\t\ta.appendChild(r);\n\t\t\t})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n\t  </script>\n\n  \t<title>Immersive Content and Metaverse Development Agency - Full Stack XR Development - Virtual Reality and Augmented Reality Services - Orbisnauta</title>\n\n\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\n\t<script src=\"node_modules/jquery/dist/jquery.slim.min.js\"></script>\n\t<script src=\"node_modules/popper.js/dist/umd/popper.min.js\"></script>\n\t<script src=\"./node_modules/bootstrap/dist/js/bootstrap.min.js\"></script>\n\n\t<body>\n\t\t<div>" + body + "</div>\n\t</body>\n</html>\n";

let read = null;

set_paths({"base":"","assets":""});

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_prerendering(settings.prerendering);
	read = settings.read;
}

export class Server {
	constructor(manifest) {
		this.options = {
			csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
			dev: false,
			floc: false,
			get_stack: error => String(error), // for security
			handle_error: (error, event) => {
				this.options.hooks.handleError({
					error,
					event,

					// TODO remove for 1.0
					// @ts-expect-error
					get request() {
						throw new Error('request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details');
					}
				});
				error.stack = this.options.get_stack(error);
			},
			hooks: null,
			hydrate: true,
			manifest,
			method_override: {"parameter":"_method","allowed":[]},
			paths: { base, assets },
			prefix: assets + '/_app/immutable/',
			prerender: {
				default: true,
				enabled: true
			},
			read,
			root,
			service_worker: null,
			router: true,
			template,
			template_contains_nonce: false,
			trailing_slash: "never"
		};
	}

	async respond(request, options = {}) {
		if (!(request instanceof Request)) {
			throw new Error('The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details');
		}

		if (!this.options.hooks) {
			const module = await import("./hooks.js");
			this.options.hooks = {
				getSession: module.getSession || (() => ({})),
				handle: module.handle || (({ event, resolve }) => resolve(event)),
				handleError: module.handleError || (({ error }) => console.error(error.stack)),
				externalFetch: module.externalFetch || fetch
			};
		}

		return respond(request, this.options, options);
	}
}
