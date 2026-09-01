"use client";

import { useEffect, useRef } from "react";

/**
 * Mounts a Shopify Buy Button ("Add to cart" + slide-out cart) for a single
 * product. Renders button-only — the surrounding card supplies the name,
 * price, and blurb. Products with variants also get Shopify's option picker.
 *
 * The storefront access token below is Shopify's public browser token,
 * intended to ship in client-side code.
 */

const SDK_URL =
  "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
const SHOP_DOMAIN = "ny1ezg-np.myshopify.com";
const STOREFRONT_TOKEN = "f02f7905fb1ba2a13cf1222e45759cf6";

/* Matches .btn-primary in globals.css — brick red, --radius-lg corners. */
const buttonStyles = {
  "background-color": "#c0392b",
  ":hover": { "background-color": "#a8281c" },
  ":focus": { "background-color": "#a8281c" },
  "border-radius": "12px",
  "font-weight": "600",
  "font-size": "16px",
  "padding-top": "13px",
  "padding-bottom": "13px",
};

const componentOptions = {
  product: {
    contents: { img: false, title: false, price: false },
    text: { button: "Add to cart" },
    styles: {
      product: {
        "margin-left": "0",
        "margin-bottom": "0",
        "max-width": "100%",
        "text-align": "left",
      },
      button: { ...buttonStyles, width: "100%" },
    },
  },
  modalProduct: {
    contents: {
      img: false,
      imgWithCarousel: true,
      button: false,
      buttonWithQuantity: true,
    },
    text: { button: "Add to cart" },
    styles: { button: buttonStyles },
  },
  cart: {
    text: { total: "Subtotal", button: "Checkout" },
    styles: { button: buttonStyles },
  },
  toggle: {
    styles: {
      toggle: {
        "background-color": "#c0392b",
        ":hover": { "background-color": "#a8281c" },
        ":focus": { "background-color": "#a8281c" },
      },
    },
  },
};

interface ShopifyUI {
  createComponent(type: "product", config: object): void;
}

interface ShopifySDK {
  buildClient(config: {
    domain: string;
    storefrontAccessToken: string;
  }): object;
  UI: { onReady(client: object): Promise<ShopifyUI> };
}

declare global {
  interface Window {
    ShopifyBuy?: ShopifySDK;
  }
}

function loadSdk(): Promise<ShopifySDK> {
  if (window.ShopifyBuy?.UI) return Promise.resolve(window.ShopifyBuy);
  return new Promise((resolve, reject) => {
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${SDK_URL}"]`,
    );
    if (!script) {
      script = document.createElement("script");
      script.async = true;
      script.src = SDK_URL;
      document.head.appendChild(script);
    }
    script.addEventListener("load", () => {
      if (window.ShopifyBuy) {
        resolve(window.ShopifyBuy);
      } else {
        reject(new Error("Shopify Buy SDK loaded without ShopifyBuy global"));
      }
    });
    script.addEventListener("error", () =>
      reject(new Error("Shopify Buy SDK failed to load")),
    );
  });
}

/* One shared client + cart across every button on the page. */
let uiPromise: Promise<ShopifyUI> | null = null;

function getUI(): Promise<ShopifyUI> {
  if (!uiPromise) {
    uiPromise = loadSdk().then((sdk) =>
      sdk.UI.onReady(
        sdk.buildClient({
          domain: SHOP_DOMAIN,
          storefrontAccessToken: STOREFRONT_TOKEN,
        }),
      ),
    );
  }
  return uiPromise;
}

export default function ShopifyBuyButton({ productId }: { productId: string }) {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    let cancelled = false;

    getUI()
      .then((ui) => {
        if (cancelled || node.hasChildNodes()) return;
        ui.createComponent("product", {
          id: productId,
          node,
          moneyFormat: "${{amount}}",
          options: componentOptions,
        });
      })
      .catch((err) => console.error(err));

    return () => {
      cancelled = true;
      node.replaceChildren();
    };
  }, [productId]);

  return <div ref={nodeRef} />;
}
