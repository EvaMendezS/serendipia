import {
  create,
} from 'zustand';

import {
  persist,
} from 'zustand/middleware';

type DiscoveryState = {
  viewedIds: string[];
  savedIds: string[];
  markViewed: (id: string) => void;
  toggleSaved: (id: string) => void;
};

export const useDiscoveryStore =
  create<DiscoveryState>()(
    persist(
      (set) => ({
        viewedIds: [],
        savedIds: [],

        markViewed: (id) =>
          set((state) => ({
            viewedIds:
              state.viewedIds.includes(id)
                ? state.viewedIds
                : [...state.viewedIds, id],
          })),

        toggleSaved: (id) =>
          set((state) => ({
            savedIds:
              state.savedIds.includes(id)
                ? state.savedIds.filter(
                    (savedId) =>
                      savedId !== id,
                  )
                : [...state.savedIds, id],
          })),
      }),
      {
        name: 'descubre-storage',
      },
    ),
  );
