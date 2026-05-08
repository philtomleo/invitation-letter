import { createContext, useContext } from 'react';
import type { InvitationConfig } from '../data/invitations';

const InvitationContext = createContext<InvitationConfig | null>(null);

export function InvitationProvider({
  invitation,
  children,
}: {
  invitation: InvitationConfig;
  children: React.ReactNode;
}) {
  return <InvitationContext.Provider value={invitation}>{children}</InvitationContext.Provider>;
}

export function useInvitation() {
  const value = useContext(InvitationContext);

  if (!value) {
    throw new Error('useInvitation must be used within InvitationProvider');
  }

  return value;
}
