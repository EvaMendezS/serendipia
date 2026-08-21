import {
  useMemo,
  useState,
} from 'react';

import {
  discoveries,
} from './data/discoveries';

import {
  DiscoveryDetail,
  type DiscoveryLearningMode,
} from './features/discover/components/DiscoveryDetail';

import {
  DiscoveryWheel,
} from './features/discover/components/DiscoveryWheel';

import {
  ExploreView,
} from './features/explore/components/ExploreView';

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
  useDiscoveryStore,
} from './store/useDiscoveryStore';

import type {
  Discovery,
} from './types/discovery';

type ActiveDiscovery = {
  discovery: Discovery;

  initialMode:
    DiscoveryLearningMode;
};

export function App() {
  const [
    section,
    setSection,
  ] =
    useState<AppSection>(
      'discover',
    );

  const [
    activeDiscovery,
    setActiveDiscovery,
  ] =
    useState<
      ActiveDiscovery | null
    >(null);

  const viewedIds =
    useDiscoveryStore(
      (state) =>
        state.viewedIds,
    );

  const availableDiscoveries =
    useMemo(() => {
      const unseen =
        discoveries.filter(
          (discovery) =>
            !viewedIds.includes(
              discovery.id,
            ),
        );

      return unseen.length > 0
        ? unseen
        : discoveries;
    }, [
      viewedIds,
    ]);

  function openDiscovery(
    discovery: Discovery,
    mode:
      DiscoveryLearningMode =
      'choice',
  ) {
    setActiveDiscovery({
      discovery,

      initialMode:
        mode,
    });
  }

  function closeDiscovery() {
    setActiveDiscovery(
      null,
    );
  }

  function changeSection(
    nextSection:
      AppSection,
  ) {
    setActiveDiscovery(
      null,
    );

    setSection(
      nextSection,
    );
  }

  function renderSection() {
    switch (section) {
      case 'discover':
        return (
          <DiscoveryWheel
            discoveries={
              availableDiscoveries
            }
            allDiscoveries={
              discoveries
            }
            onDiscover={
              openDiscovery
            }
            onExplore={() =>
              setSection(
                'explore',
              )
            }
          />
        );

      case 'explore':
        return (
          <ExploreView
            discoveries={
              discoveries
            }
            onOpen={(
              discovery,
            ) =>
              openDiscovery(
                discovery,
                'choice',
              )
            }
          />
        );

      case 'library':
        return (
          <LibraryView
            discoveries={
              discoveries
            }
            onOpen={(
              discovery,
            ) =>
              openDiscovery(
                discovery,
                'choice',
              )
            }
          />
        );

      default:
        return null;
    }
  }

  return (
    <AppShell>
      {activeDiscovery ? (
        <DiscoveryDetail
          discovery={
            activeDiscovery
              .discovery
          }
          initialMode={
            activeDiscovery
              .initialMode
          }
          onClose={
            closeDiscovery
          }
        />
      ) : (
        <>
          {renderSection()}

          <BottomNav
            activeSection={
              section
            }
            onChange={
              changeSection
            }
          />
        </>
      )}
    </AppShell>
  );
}