import styles from './MarkerHtml.module.scss';

export function MarkerHtml(defaultImg:string, name:string, index:number = 0) {
  return `
    <div class=${styles.marker}>
      <div class=${styles.bubble}>
        <div class=${styles.bubble__photo}>
          <img src=${defaultImg} alt="" />
        </div>
        <div class=${styles.bubble__index}>
          ${index}
        </div>
        <div class=${styles.bubble__name}>
          ${name}
        </div>
      </div>
      <div class=${styles.dummy} />
    </div>
  `;
}

export function ClickedMarkerHtml(defaultImg:string, name:string, index:number) {
  return `
    <div class=${styles['marker--clicked']}>
      <div class=${styles['bubble--clicked']}>
        <div class=${styles.bubble__photo}>
          <img src=${defaultImg} alt="" />
        </div>
        <div class=${styles.bubble__index}>
          ${index}
        </div>
        <div class=${styles.bubble__name}>
          ${name}
        </div>
      </div>
      <div class=${styles['dummy--clicked']} />
    </div>
  `;
}
