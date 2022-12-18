import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import randomColorRGB from 'random-color-rgb'

export const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
  
        <ul className={styles.statList}>
          {stats.map(({id, label, percentage}, index) => (
            <li className={styles.item} key={id} style={{ background: randomColorRGB()
            }}>
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  };

  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };
