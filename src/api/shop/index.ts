import {
  Coords, FetchShopsResponse, FetchTrendingsResponse, FilterShopsParams,
  FilterShopsListResponse, ShopsParams, FetchShopResponse,
} from './entity';
import shopApi from './shopApiClient';

export const fetchTrendings = () => shopApi.get<FetchTrendingsResponse>('/trending');

export const fetchShop = async (placeId: string) => {
  const { data } = await shopApi.get<FetchShopResponse>(`/shops/${placeId}`);
  return data;
};

export const getfilterShops = (params: FilterShopsParams, location: Coords) => {
  const url = `/shops/maps?options_friend=${params.options_friend}&options_nearby=${params.options_nearby}&options_scrap=${params.options_scrap}`;
  const requestBody = {
    lat: location.lat,
    lng: location.lng,
  };
  return shopApi.post<FilterShopsListResponse>(url, requestBody);
};

export const fetchShops = (params: ShopsParams) => {
  const { location, keyword } = params;
  const url = `/shops?keyword=${keyword}`;
  const requestBody = {
    lat: location?.lat,
    lng: location?.lng,
  };
  return shopApi.post<FetchShopsResponse>(url, requestBody);
};
