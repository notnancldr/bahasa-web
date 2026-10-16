import { useEffect, useMemo, useState } from 'react';
import { ReleaseRepositoryImpl } from '../../data/repositories/release.repository.impl';
import { DeckItem } from '../../domain/entities/deck-item.entity';

const releaseRepo = new ReleaseRepositoryImpl();

export type FilterCategory = 'all' | 'starter' | 'github_release';

export const useReleases = () => {
  const [deckItems, setDeckItems] = useState<DeckItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let isMounted = true;
    const loadDecks = async () => {
      try {
        setLoading(true);
        const items = await releaseRepo.getAllDeckItems();
        if (isMounted) {
          setDeckItems(items);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadDecks();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredDecks = useMemo(() => {
    return deckItems.filter((item) => {
      const matchesFilter =
        filter === 'all' ||
        (filter === 'starter' && item.sourceType === 'starter') ||
        (filter === 'github_release' && item.sourceType === 'github_release');

      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [deckItems, filter, searchQuery]);

  return {
    deckItems: filteredDecks,
    totalCount: deckItems.length,
    loading,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
  };
};

