
import root from '__GENERATED__/root.svelte';
import { respond } from '/Users/BIG TOWER1/Desktop/orbisnauta_web/on_web_dev_1/on_web1 v1068 traduccion portfolio y centrado/.svelte-kit/runtime/server/index.js';
import { set_paths, assets, base } from '/Users/BIG TOWER1/Desktop/orbisnauta_web/on_web_dev_1/on_web1 v1068 traduccion portfolio y centrado/.svelte-kit/runtime/paths.js';
import { set_prerendering } from '/Users/BIG TOWER1/Desktop/orbisnauta_web/on_web_dev_1/on_web1 v1068 traduccion portfolio y centrado/.svelte-kit/runtime/env.js';

const template = ({ head, body, assets, nonce }) => "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<!-- Google tag (gtag.js) -->\n\t\t<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-QFSSJ00BWD\"></script>\n\t\t<!-- Google Tag Manager -->\n\t\t<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n\t\tnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n\t\tj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n\t\t'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n\t\t})(window,document,'script','dataLayer','GTM-MH582KW');</script>\n\t\t<!-- End Google Tag Manager -->\n\n\t\t<meta charset=\"utf-8\">\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n\t\t<link rel=\"icon\" href=\"images/favicon.png\">\n\t\t<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3\" crossorigin=\"anonymous\">\n\t\t<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css\">\n\t\t\n\t\t\n\t\t<!-- Hotjar Tracking Code for https://www.orbisnauta.com/ -->\n\t\t<script>\n\t\t(function(h,o,t,j,a,r){\n\t\th.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n\t\th._hjSettings={hjid:3117160,hjsv:6};\n\t\ta=o.getElementsByTagName('head')[0];\n\t\tr=o.createElement('script');r.async=1;\n\t\tr.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n\t\ta.appendChild(r);\n\t\t})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n\t\t</script>\n\n\t\t" + head + "\n\n\t</head>\n\n\t<body>\n\t\t<!-- Google Tag Manager (noscript) -->\n\t\t<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-MH582KW\"\n\t\theight=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\n\t\t<!-- End Google Tag Manager (noscript) -->\n\n\t\t<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p\" crossorigin=\"anonymous\"></script>\n\n\t\t<div>" + body + "</div>\n\t</body>\n\t\n</html>\n";

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
