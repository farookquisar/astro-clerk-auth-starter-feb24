import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderSlot, h as renderComponent, e as addAttribute } from '../astro_QtZ16UFS.mjs';
import { $ as $$SignedIn, a as $$Layout } from './dashboard_56_jUf8e.mjs';
import { clsx } from 'clsx';
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const $$Astro$2 = createAstro();
const $$SignedOut = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SignedOut;
  return renderTemplate`${maybeRenderHead()}<div data-auth-signed-out class="hidden"> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/fqmac/FRKQSR/APPS/NEXTJS_PRACTICES/FEB24/astro-clerk-auth-starter-feb24/src/components/auth/SignedOut.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const $$Astro$1 = createAstro();
const $$SignInButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SignInButton;
  const props = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Button", Button, { "data-auth-sign-in-button": true, ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "/Users/fqmac/FRKQSR/APPS/NEXTJS_PRACTICES/FEB24/astro-clerk-auth-starter-feb24/src/components/auth/SignInButton.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="grid lg:grid-cols-2"> <div class="px-8 py-20 md:px-20 lg:py-48"> <h1 class="text-5xl font-semibold text-black md:text-6xl gradient">
Auth starts here.
</h1> <p class="mt-2 text-lg">
A simple and powerful Astro template featuring authentication and
				user management powered by Clerk.
</p> <div class="flex gap-2 mt-8"> ${renderComponent($$result2, "SignedOut", $$SignedOut, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SignInButton", $$SignInButton, {}, { "default": ($$result4) => renderTemplate`
Sign In
` })} ` })} ${renderComponent($$result2, "SignedIn", $$SignedIn, {}, { "default": ($$result3) => renderTemplate` <a href="/dashboard"${addAttribute(buttonVariants({ variant: "outline" }), "class")}>
View Demo
</a> ` })} </div> </div> </article> ` })}`;
}, "/Users/fqmac/FRKQSR/APPS/NEXTJS_PRACTICES/FEB24/astro-clerk-auth-starter-feb24/src/pages/index.astro", void 0);

const $$file = "/Users/fqmac/FRKQSR/APPS/NEXTJS_PRACTICES/FEB24/astro-clerk-auth-starter-feb24/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
