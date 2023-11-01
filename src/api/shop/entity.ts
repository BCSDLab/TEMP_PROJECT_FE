export interface FilterShopsParams {
  options_friend: 0 | 1;
  options_nearby: 0 | 1;
  options_scrap: 0 | 1;
  location?: Coords;
}

export interface FilterShopsResponse {
  geometry: {
    location: Coords;
  };
  name: string;
  photo: string;
  placeId: string;
}

export type FilterShopsListResponse = FilterShopsResponse[];

export interface FetchTrendingsResponse {
  trendings: string[];
}

export interface SearchQueryParams {
  searchText: string;
}

export interface ShopsParams {
  keyword: string;
  location: Coords;
}

export interface FetchShopsResponse {
  shopQueryResponseList: Shop[];
}

export interface Shop {
  placeId: string;
  name: string;
  formattedAddress: string;
  lat: number;
  lng: number;
  openNow: boolean;
  totalRating: number | null;
  ratingCount: number | null;
  photoToken: string;
  dist: number;
  category: string; // 추후 카테고리 확인 필요
}

export interface FetchShopResponse {
  shopId: number;
  placeId: string;
  name: string;
  formattedAddress: string;
  lat: number;
  lng: number;
  formattedPhoneNumber: string;
  openNow: boolean;
  totalRating: number;
  ratingCount: number;
  category: string;
  todayPeriod: [number, number];
  periods: [any, Object];
  scrap: any;
  photos: string[];
}

export interface Coords {
  lat: number | undefined;
  lng: number | undefined;
}
