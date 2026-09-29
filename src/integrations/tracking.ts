declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type CheckoutClickEvent = {
  event: 'cta_checkout_click';
  cta_location: string;
  cta_text: string;
  page_path: string;
};

export const pushTrackingEvent = (payload: CheckoutClickEvent) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
};
