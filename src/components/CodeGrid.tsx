import styles from './CodeGrid.module.scss';
import { createMemo } from 'solid-js';

interface CodeGridProps {
  code: string | string[];
}

function CodeGrid(props: CodeGridProps) {
  // merge into a string if it's an array
  const dispCode = createMemo(() => {
    if (typeof props.code === 'string') {
      return props.code;
    } else {
      return props.code.join('\n');
    }
  });

  return (
    <div class={styles.jsGrid}>
      <pre class={styles.jsGridInner}>
        <code class='language-js prism-light'>{dispCode()}</code>
      </pre>
    </div>
  );
}

export default CodeGrid;
