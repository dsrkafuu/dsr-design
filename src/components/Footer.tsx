import ISolid from '../icons/ISolid';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div class={styles.footer}>
      <div class={styles.footerInner}>
        <div>
          Copyright &copy; 2021-{new Date().getFullYear()}&nbsp;|&nbsp;
          <a
            class={styles.footerLink}
            href='https://dsrkafuu.net/'
            target='_blank'
            rel='noopener'
          >
            DSRKafuU
          </a>
        </div>
        <a
          class={styles.footerIcon}
          href='https://www.solidjs.com/'
          target='_blank'
          rel='noopener'
        >
          <ISolid />
        </a>
        <div>
          <a
            class={styles.footerLink}
            href='https://github.com/dsrkafuu/dsr-design'
            target='_blank'
            rel='noopener'
          >
            DSRDESIGN
          </a>
          &nbsp;|&nbsp;Apache-2.0
        </div>
      </div>
    </div>
  );
}

export default Footer;
