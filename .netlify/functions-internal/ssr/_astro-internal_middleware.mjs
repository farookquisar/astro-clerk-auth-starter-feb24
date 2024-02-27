import clerkClient from '@clerk/clerk-sdk-node';
import './chunks/astro_QtZ16UFS.mjs';
import 'clsx';

const publishableKey = {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.PUBLIC_CLERK_PUBLISHABLE_KEY;
const secretKey = {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.CLERK_SECRET_KEY;
const protectedPageUrls = ["/dashboard"];
async function onRequest$1({ request, redirect }, next) {
  const url = new URL(request.url);
  if (!protectedPageUrls.some((path) => url.pathname.startsWith(path))) {
    return next();
  }
  const { isSignedIn } = await clerkClient.authenticateRequest({ request, publishableKey, secretKey });
  if (!isSignedIn) {
    return redirect("/");
  }
  return next();
}

function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    const handler = defineMiddleware((context, next) => {
      return next();
    });
    return handler;
  }
  return defineMiddleware((context, next) => {
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async () => {
        if (i < length - 1) {
          return applyHandle(i + 1, handleContext);
        } else {
          return next();
        }
      });
      return result;
    }
  });
}

function defineMiddleware(fn) {
  return fn;
}

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
