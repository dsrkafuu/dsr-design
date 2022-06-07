import clsx from 'clsx';
import styles from './ColorGrid.module.scss';

interface ColorGridProps {
  text: string;
  color: string;
  font?: string;
  mica?: boolean;
  class?: string;
}

function ColorGrid(props: ColorGridProps) {
  return (
    <div
      class={clsx(styles.colorGrid, props.class)}
      style={{
        color: props.font || 'var(--color-font)',
        'backdrop-filter': props.mica ? 'saturate(200%) blur(24px)' : 'none',
      }}
    >
      <div
        class={styles.display}
        style={{ 'background-color': props.color }}
      ></div>
      <div class={styles.wrapper}>
        <div class={styles.text}>{props.text}</div>
        <div class={styles.code}>{props.color}</div>
      </div>
    </div>
  );
}

export default ColorGrid;
