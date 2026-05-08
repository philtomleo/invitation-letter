import { getInvitationConfig, type InvitationVariantSlug } from '../data/invitations';

function isVariantSlug(value: string): value is InvitationVariantSlug {
  return value === 'engagement' || value === 'wedding';
}

export function getVariantFromLocation(locationLike = window.location): InvitationVariantSlug {
  const hashValue = locationLike.hash.replace(/^#\/?/, '').split('/')[0];
  if (isVariantSlug(hashValue)) {
    return hashValue;
  }

  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  let pathname = locationLike.pathname;

  if (basePath && pathname.startsWith(basePath)) {
    pathname = pathname.slice(basePath.length);
  }

  const segment = pathname.replace(/^\/+|\/+$/g, '').split('/')[0];
  if (isVariantSlug(segment)) {
    return segment;
  }

  return 'engagement';
}

export function getInvitationFromLocation(locationLike = window.location) {
  return getInvitationConfig(getVariantFromLocation(locationLike));
}
