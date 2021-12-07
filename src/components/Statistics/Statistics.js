import PropTypes from 'prop-types';
import css from './Statistic.module.css'


export default function Statistics({title, stats}) {
    // console.log(typeof stats);
    return (<div className={`${css.statistics} ${css.container}`}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statList}>
      {stats.map(statsItem => {
        return (
          <li
            className={css.statsListItem}
            key={statsItem.id}
            style={{ backgroundColor: getColor() }}
          >
            <span className={css.label}>{statsItem.label}</span>
            <span className={css.percentage}>{statsItem.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </div>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };

  function getColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }