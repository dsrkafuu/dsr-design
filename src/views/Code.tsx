import styles from './Code.module.scss';
import CodeGrid from '../components/CodeGrid';
import prismCode from '../examples/prism.js?raw';

function Code() {
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
