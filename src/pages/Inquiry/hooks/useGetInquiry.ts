import getInquiry from 'api/inquiry/inquiry';
import { useQuery } from '@tanstack/react-query';
import { InquiryProps } from 'api/inquiry/entity';

const useGetInquiry = (inquiryProps: InquiryProps) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['inquiry'],
    queryFn: () => getInquiry(inquiryProps),
  });

  return {
    data, isLoading, refetch,
  };
};

export default useGetInquiry;
