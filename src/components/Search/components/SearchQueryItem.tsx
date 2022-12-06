import styles from 'pages/Search/Search.module.scss';
import { ReactComponent as MapIcon } from 'assets/svg/search/map.svg';
import { ReactComponent as DefaultImage } from 'assets/svg/search/default-image.svg';

interface Props {
  address: string,
  dist: number,
  placeId: string,
  placeName: string,
  score: number,
  shopId: number,
  x: string,
  y: string,
}

interface Shop {
  data: Props
}

function SearchQueryItem(shop : Shop) {
  const { data } = shop;
  const { placeName, address } = data;

  return (
    <div className={styles['search-item']}>

      <DefaultImage title="가게 이미지 없음" />
      <div className={styles['search-item__content']}>
        <section className={styles['search-item__info']}>
          <h1 className={styles['search-item__info--title']}>{placeName}</h1>
          <h2 className={styles['search-item__info--address']}>{address}</h2>
        </section>
        <section className={styles['search-item__status']}>
          <div className={styles['search-item__status-wrapper']}>
            <div>
              <div className={styles['search-item__status--business']}>
                <span className={styles['search-item__status--in-business']}>영업 중</span>
                {' '}
                - 21:00에 영업 종료
              </div>
              <div className={styles['search-item__status--distance']}>내 위치로부터 23m</div>
            </div>
            <MapIcon className={styles['search-item__status--map']} />
          </div>
        </section>
      </div>

    </div>
  );
}

export default SearchQueryItem;
