import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderHead, h as renderComponent } from '../astro_QtZ16UFS.mjs';
import 'clsx';
/* empty css                              */
import { createClerkClient } from '@clerk/clerk-sdk-node';

const $$Astro$4 = createAstro();
const $$SignedIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SignedIn;
  const { classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-auth-signed-in${addAttribute(`hidden ${classes ?? ""}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/fqmac/FRKQSR/APPS/NEXTJS_PRACTICES/FEB24/astro-clerk-auth-starter-feb24/src/components/auth/SignedIn.astro", void 0);

const $$Astro$3 = createAstro();
const $$UserButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$UserButton;
  return renderTemplate`${maybeRenderHead()}<div id="auth-user-button"></div> `;
}, "/Users/fqmac/FRKQSR/APPS/NEXTJS_PRACTICES/FEB24/astro-clerk-auth-starter-feb24/src/components/auth/UserButton.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro + Clerk</title>${renderHead()}</head> <body class="min-h-screen flex flex-col"> <header class="flex items-center h-20 gap-4 px-4 border-b border-black border-solid sm:px-8 border-opacity-20 md:px-20"> <a href="/" class="flex items-center h-20 gap-2 sm:gap-4 font-bold">
Astro + Clerk
</a> <div class="grow"></div> ${renderComponent($$result, "SignedIn", $$SignedIn, { "classes": "flex flex-row gap-4" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "UserButton", $$UserButton, {})} ` })} </header> <main class="grow"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="flex items-center h-20 gap-1 px-8 md:px-20"> <nav class="flex justify-end grow gap-6"> <a href="https://github.com/clerkinc/clerk-next-app" target="_blank"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9 0.25C4.16562 0.25 0.25 4.16562 0.25 9C0.25 12.8719 2.75469 16.1422 6.23281 17.3016C6.67031 17.3781 6.83437 17.1156 6.83437 16.8859C6.83437 16.6781 6.82344 15.9891 6.82344 15.2563C4.625 15.6609 4.05625 14.7203 3.88125 14.2281C3.78281 13.9766 3.35625 13.2 2.98438 12.9922C2.67812 12.8281 2.24063 12.4234 2.97344 12.4125C3.6625 12.4016 4.15469 13.0469 4.31875 13.3094C5.10625 14.6328 6.36406 14.2609 6.86719 14.0312C6.94375 13.4625 7.17344 13.0797 7.425 12.8609C5.47813 12.6422 3.44375 11.8875 3.44375 8.54062C3.44375 7.58906 3.78281 6.80156 4.34062 6.18906C4.25313 5.97031 3.94687 5.07344 4.42812 3.87031C4.42812 3.87031 5.16094 3.64063 6.83437 4.76719C7.53438 4.57031 8.27813 4.47187 9.02188 4.47187C9.76563 4.47187 10.5094 4.57031 11.2094 4.76719C12.8828 3.62969 13.6156 3.87031 13.6156 3.87031C14.0969 5.07344 13.7906 5.97031 13.7031 6.18906C14.2609 6.80156 14.6 7.57812 14.6 8.54062C14.6 11.8984 12.5547 12.6422 10.6078 12.8609C10.925 13.1344 11.1984 13.6594 11.1984 14.4797C11.1984 15.65 11.1875 16.5906 11.1875 16.8859C11.1875 17.1156 11.3516 17.3891 11.7891 17.3016C13.5261 16.7152 15.0355 15.5988 16.1048 14.1096C17.1741 12.6204 17.7495 10.8333 17.75 9C17.75 4.16562 13.8344 0.25 9 0.25Z" fill="black"></path> </svg> </a> <a href="https://discord.maykbrito.dev" target="_blank"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.25 7.25C1.25 5.1498 1.25 4.0997 1.65873 3.29754C2.01825 2.59193 2.59193 2.01825 3.29754 1.65873C4.0997 1.25 5.1498 1.25 7.25 1.25H12.75C14.8502 1.25 15.9003 1.25 16.7025 1.65873C17.4081 2.01825 17.9817 2.59193 18.3413 3.29754C18.75 4.0997 18.75 5.1498 18.75 7.25V12.75C18.75 14.8502 18.75 15.9003 18.3413 16.7025C17.9817 17.4081 17.4081 17.9817 16.7025 18.3413C15.9003 18.75 14.8502 18.75 12.75 18.75H7.25C5.1498 18.75 4.0997 18.75 3.29754 18.3413C2.59193 17.9817 2.01825 17.4081 1.65873 16.7025C1.25 15.9003 1.25 14.8502 1.25 12.75V7.25Z" fill="url(#paint0_linear_158_4828)"></path> <path d="M15.172 6.26667C14.2259 5.46667 13.0906 5.06667 11.8922 5L11.703 5.2C12.7752 5.46667 13.7213 6 14.6044 6.73333C13.5321 6.13333 12.3337 5.73333 11.0722 5.6C10.6938 5.53333 10.3784 5.53333 10 5.53333C9.62156 5.53333 9.30619 5.53333 8.92775 5.6C7.66628 5.73333 6.46789 6.13333 5.39564 6.73333C6.27867 6 7.22477 5.46667 8.29702 5.2L8.1078 5C6.9094 5.06667 5.77408 5.46667 4.82798 6.26667C3.75573 8.4 3.18807 10.8 3.125 13.2667C4.0711 14.3333 5.39564 15 6.78326 15C6.78326 15 7.22477 14.4667 7.54014 14C6.72018 13.8 5.9633 13.3333 5.45872 12.6C5.90023 12.8667 6.34174 13.1333 6.78326 13.3333C7.35092 13.6 7.91858 13.7333 8.48624 13.8667C8.99083 13.9333 9.49541 14 10 14C10.5046 14 11.0092 13.9333 11.5138 13.8667C12.0814 13.7333 12.6491 13.6 13.2167 13.3333C13.6583 13.1333 14.0998 12.8667 14.5413 12.6C14.0367 13.3333 13.2798 13.8 12.4599 14C12.7752 14.4667 13.2167 15 13.2167 15C14.6044 15 15.9289 14.3333 16.875 13.2667C16.8119 10.8 16.2443 8.4 15.172 6.26667ZM7.91858 12.0667C7.28784 12.0667 6.72018 11.4667 6.72018 10.7333C6.72018 10 7.28784 9.4 7.91858 9.4C8.54931 9.4 9.11697 10 9.11697 10.7333C9.11697 11.4667 8.54931 12.0667 7.91858 12.0667ZM12.0814 12.0667C11.4507 12.0667 10.883 11.4667 10.883 10.7333C10.883 10 11.4507 9.4 12.0814 9.4C12.7122 9.4 13.2798 10 13.2798 10.7333C13.2798 11.4667 12.7122 12.0667 12.0814 12.0667Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_158_4828" x1="10" y1="1.25" x2="10" y2="18.75" gradientUnits="userSpaceOnUse"> <stop stop-color="#687EC9"></stop> <stop offset="1" stop-color="#5971C3"></stop> </linearGradient> </defs> </svg> </a> </nav> </footer> </body></html>`;
}, "/Users/fqmac/FRKQSR/APPS/NEXTJS_PRACTICES/FEB24/astro-clerk-auth-starter-feb24/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$UserDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$UserDetails;
  const { user } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white overflow-hidden sm:rounded-lg" style="box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08)"> <div class="flex p-8"> <h3 class="text-xl leading-6 font-semibold text-gray-900 my-auto">User</h3> </div> <div class="pb-6 max-h-96"> <dl> <div class="px-8 py-2"> <dt class="text-sm font-semibold">User ID</dt> <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2 flex gap-2"> ${user.id} </dd> </div> ${user.firstName ? renderTemplate`<div class="px-8 py-2"> <dt class="text-sm font-semibold mb-1">First Name</dt> <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2"> ${user.firstName} </dd> </div>` : null} ${user.lastName ? renderTemplate`<div class="px-8 py-2"> <dt class="text-sm font-semibold mb-1">Last Name</dt> <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2"> ${user.lastName} </dd> </div>` : null} <div class="px-8 py-2"> <dt class="text-sm font-semibold mb-1">Email addresses</dt> <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2"> ${user.emailAddresses.map(
    (email) => renderTemplate`<div class="flex gap-2 mb-1"> ${email.emailAddress} ${user.primaryEmailAddressId === email.id && renderTemplate`<span class="text-xs bg-primary-50 text-primary-700 rounded-2xl px-2 font-medium pt-[2px]">
Primary
</span>`} </div>`
  )} </dd> </div> ${user.imageUrl ? renderTemplate`<div class="px-8 py-2"> <dt class="text-sm font-semibold mb-1">Profile Image</dt> <dd class="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2"> <img${addAttribute(user.imageUrl, "src")} class="rounded-full w-12 h-12"> </dd> </div>` : null} </dl> </div> </div>`;
}, "/Users/fqmac/FRKQSR/APPS/NEXTJS_PRACTICES/FEB24/astro-clerk-auth-starter-feb24/src/components/UserDetails.astro", void 0);

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const publishableKey = {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.PUBLIC_CLERK_PUBLISHABLE_KEY;
  const secretKey = {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.CLERK_SECRET_KEY;
  const request = Astro2.request;
  const clerk = createClerkClient({ publishableKey, secretKey });
  const { toAuth } = await clerk.authenticateRequest({ request, publishableKey, secretKey });
  const auth = toAuth();
  const user = await clerk.users.getUser(auth.userId);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-8 pt-6 pb-20 md:px-20"> <div class="grid gap-4 mt-8 lg:grid-cols-3"> ${renderComponent($$result2, "UserDetails", $$UserDetails, { "user": user })} </div> </div> ` })} `;
}, "/Users/fqmac/FRKQSR/APPS/NEXTJS_PRACTICES/FEB24/astro-clerk-auth-starter-feb24/src/pages/dashboard.astro", void 0);
const $$file = "/Users/fqmac/FRKQSR/APPS/NEXTJS_PRACTICES/FEB24/astro-clerk-auth-starter-feb24/src/pages/dashboard.astro";
const $$url = "/dashboard";

const dashboard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SignedIn as $, $$Layout as a, dashboard as d };
