const ALLOWED_ATTRIBUTION_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

export const withCheckoutAttribution = (
  checkoutUrl: string,
  currentUrl: string,
) => {
  try {
    const checkout = new URL(checkoutUrl);
    const current = new URL(currentUrl);

    ALLOWED_ATTRIBUTION_PARAMS.forEach((key) => {
      const value = current.searchParams.get(key);
      if (value) checkout.searchParams.set(key, value);
    });

    return checkout.toString();
  } catch {
    return checkoutUrl;
  }
};
