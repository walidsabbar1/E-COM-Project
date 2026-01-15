/**
 * Breadcrumb Component
 * Navigation breadcrumb trail
 */
import styles from './Breadcrumb.module.css';

export default function Breadcrumb({ items }) {
  return (
    <div className={styles.breadcrumbContainer}>
      <div className={styles.breadcrumb}>
        {items.map((item, index) => (
          <span key={index}>
            <span className={item.active ? styles.active : ''}>{item.label}</span>
            {index < items.length - 1 && <span className={styles.separator}>›</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
