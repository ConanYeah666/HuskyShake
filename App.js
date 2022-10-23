import React from 'react';
import { AuthenticatedUserProvider } from './navigation/authenticatedUserProvider';
import RootNavigator from './navigation/rootNavigation';

/**
 * Wrap all providers here
 */

export default function Routes() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}