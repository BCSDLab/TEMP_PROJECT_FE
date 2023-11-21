import { fetchTrendings } from 'api/shop';
import { useQuery } from '@tanstack/react-query';

const useTrendingList = () => {
  const {
    isLoading, isError, data,
  } = useQuery({ queryKey: ['trending'], queryFn: fetchTrendings });
  const trendings = data?.data.trendings;
  return {
    isLoading, isError, data: trendings,
  };
};

export default useTrendingList;
