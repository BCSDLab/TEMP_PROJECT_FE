import { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteScrapShop, postScrapShop } from 'api/scrap';

const useScrap = (placeId: string, initialScrapId: number | null) => {
  const [scrapId, setScrapId] = useState<number | null>(initialScrapId);
  const queryClient = useQueryClient();
  const { mutate: postScrap, isPending: postPending } = useMutation({
    mutationKey: ['bookMark'],
    mutationFn: postScrapShop,
    onSuccess: (res) => {
      setScrapId(res.data.id);
      queryClient.invalidateQueries({ queryKey: ['scraps'] });
    },
  });

  const { mutate: deleteScrap, isPending: deletePending } = useMutation({
    mutationFn: deleteScrapShop,
  });

  const toggleScrap = () => {
    if (scrapId) {
      deleteScrap(scrapId);
      setScrapId(null);
    } else {
      postScrap(placeId);
    }
  };

  const isPending = postPending || deletePending;

  return { scrapId, toggleScrap, isPending };
};

export default useScrap;
