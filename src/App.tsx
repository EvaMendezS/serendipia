import {
  useMemo,
  useState,
} from 'react';

import {
  DiscoveryDetail,
} from './features/discover/components/DiscoveryDetail';

import {
  DiscoveryWheel,
} from './features/discover/components/DiscoveryWheel';

import {
  LibraryView,
} from './features/library/components/LibraryView';

import {
  AppShell,
} from './shared/components/AppShell';

import {
  BottomNav,
  type AppSection,
} from './shared/components/BottomNav';

import {
  discoveries,
} from './data/discoveries';

import {
  useDiscoveryStore,
} from './store/useDiscoveryStore';

import type {
  Discovery,
} from './types/discovery';

export function App() {
  const [section, setSection] =
    useState<AppSection>('discover');

  const [activeDiscovery, setActiveDiscovery] =
    useState<Discovery | null>(null);

  const {
    viewedIds,
  } = useDiscoveryStore();

  const availableDiscoveries =
    useMemo(
      () =>
        discoveries.filter(
          (item) =>
            !viewedIds.includes(item.id),
        ),
      [viewedIds],
    );

  function handleDiscover(
    discovery: Discovery,
  ) {
    setActiveDiscovery(discovery);
  }

  function handleCloseDiscovery() {
    setActiveDiscovery(null);
  }

  return (
    <AppShell>
      {activeDiscovery ? (
        <DiscoveryDetail
          discovery={activeDiscovery}
          onClose={handleCloseDiscovery}
        />
      ) : (
        <>
          {section === 'discover' && (
            <DiscoveryWheel
              discoveries={
                availableDiscoveries.length
                  ? availableDiscoveries
                  : discoveries
              }
              onDiscover={handleDiscover}
            />
          )}

          {section === 'library' && (
            <LibraryView
              discoveries={discoveries}
              onOpen={handleDiscover}
            />
          )}

          <BottomNav
            activeSection={section}
            onChange={setSection}
          />
        </>
      )}
    </AppShell>
  );
}
