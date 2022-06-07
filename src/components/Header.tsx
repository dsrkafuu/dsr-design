import styles from './Header.module.scss';
import { For, Show } from 'solid-js';
import { NavLink } from 'solid-app-router';
import clsx from 'clsx';
import routes from '../routes';
import ISwitch from '../icons/ISwitch';

function Header() {
  /**
   * 切换主题
   */
  const handleSwitchTheme = () => {
    const theme = document.body.getAttribute('data-theme');
    if (theme && theme === 'dark') {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
  };

  return (
    <div class={styles.header}>
      <div class={styles.nav}>
        <NavLink class={styles.title} href={routes[0].path}>
          <h1 class={styles.titleInner}>DSRDESIGN</h1>
        </NavLink>
        <nav class={styles.menu}>
          <For each={routes}>
            {({ path, meta }) => (
              <Show when={!meta.hide}>
                <NavLink class={styles.menuItem} href={path} end>
                  {meta.name}
                </NavLink>
              </Show>
            )}
          </For>
        </nav>
        <div class={clsx(styles.menu, styles.menu_right)}>
          <div
            class={clsx(styles.menuItem, styles.menuItem_icon)}
            onClick={handleSwitchTheme}
          >
            <ISwitch />
          </div>
          <a
            class={styles.menuItem}
            href='https://blog.dsrkafuu.net/'
            target='_blank'
            rel='noopener'
          >
            BLOG
          </a>
          <a
            class={styles.menuItem}
            href='https://github.com/dsrkafuu/dsr-design'
            target='_blank'
            rel='noopener'
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
