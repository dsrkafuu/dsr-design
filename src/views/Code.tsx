import styles from './Code.module.scss';
import { onMount } from 'solid-js';
import CodeGrid from '../components/CodeGrid';
import prismCode from '../examples/prism.js?raw';

function Code() {
  onMount(() => {
    window.Prism.highlightAll();
  });

  return (
    <div>
      <CodeGrid code="import 'dsr-design/prism'" />
      <div class={styles.section}>
        <pre class={styles.code}>
          <code class='language-js'>{prismCode}</code>
        </pre>
      </div>
    </div>
  );
}

export default Code;
