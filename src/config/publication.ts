export const publication = {
  release: {
    ready: false,
  },

  site: {
    url: 'COLE_AQUI_SITE_URL',
  },

  checkout: {
    url: 'COLE_AQUI_CHECKOUT_HOTMART',
  },

  tracking: {
    gtm: 'COLE_AQUI_GTM_ID',
    ga4: 'COLE_AQUI_GA4_ID',
    metaPixel: 'COLE_AQUI_META_PIXEL_ID',
    googleAds: 'COLE_AQUI_GOOGLE_ADS_ID',
    googleAdsConversionLabel: 'COLE_AQUI_GOOGLE_ADS_CONVERSION_LABEL',
    hotmartAnalyticsCode: 'COLE_AQUI_HOTMART_ANALYTICS_CODE',
  },

  legal: {
    privacy: 'COLE_AQUI_PRIVACY_URL',
    terms: 'COLE_AQUI_TERMS_URL',
  },

  support: {
    email: 'COLE_AQUI_SUPPORT_EMAIL',
    whatsapp: 'COLE_AQUI_SUPPORT_WHATSAPP',
    pageUrl: 'COLE_AQUI_SUPPORT_PAGE_URL',
  },
} as const;

export const isPublicationPlaceholder = (value: string) =>
  !value || value.startsWith('COLE_AQUI_');

export const hasPublicationValue = (value: string) =>
  !isPublicationPlaceholder(value) && value !== 'NAO_USADO';

export const getSupportHref = () => {
  if (hasPublicationValue(publication.support.pageUrl)) {
    return publication.support.pageUrl;
  }

  if (hasPublicationValue(publication.support.email)) {
    return `mailto:${publication.support.email}`;
  }

  if (hasPublicationValue(publication.support.whatsapp)) {
    return `https://wa.me/${publication.support.whatsapp.replace(/\D/g, '')}`;
  }

  return '';
};

const requiredForCommercialRelease = {
  SITE_URL: publication.site.url,
  CHECKOUT_HOTMART: publication.checkout.url,
  GTM_ID: publication.tracking.gtm,
  PRIVACY_URL: publication.legal.privacy,
  TERMS_URL: publication.legal.terms,
};

export const getMissingPublicationFields = () =>
  Object.entries(requiredForCommercialRelease)
    .filter(([, value]) => isPublicationPlaceholder(value))
    .map(([key]) => key);

export const assertPublicationReady = () => {
  if (!publication.release.ready) return;

  const missing = getMissingPublicationFields();

  if (missing.length > 0) {
    throw new Error(
      `PUBLICACAO BLOQUEADA: preencha em src/config/publication.ts: ${missing.join(', ')}`,
    );
  }
};
