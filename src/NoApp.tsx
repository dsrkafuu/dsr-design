import styles from './NoApp.module.scss';

interface NoAppProps {
  width: number;
}

function NoApp(props: NoAppProps) {
  return (
    <div class={styles.noApp}>
      <div>站点最小显示宽度</div>
      <div class={styles.minWidth}>976px</div>
      <div>当前环境显示宽度</div>
      <div class={styles.curWidth}>{props.width}px</div>
    </div>
  );
}

export default NoApp;
