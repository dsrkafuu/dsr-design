import styles from './App.module.scss';
import { createEffect, createSignal, onCleanup, Show } from 'solid-js';
import routes, { useRoute } from './routes';
import NoApp from './NoApp';
import Header from './components/Header';
import Footer from './components/Footer';
import { throttle } from './package/utils';
import { useRoutes } from 'solid-app-router';

function App() {
  const Routes = useRoutes(routes);

  const route = useRoute();
  createEffect(() => {
    const r = route();
    let title = 'DSRDESIGN';
    if (r && r.path !== '/') {
      title = r.meta.name + ' | ' + title;
    }
    document.title = title;
  });

  const [appWidth, setAppWidth] = createSignal(window.innerWidth);
  const handleResize = throttle(() => {
    setAppWidth(window.innerWidth);
  });
  window.addEventListener('resize', handleResize);
  onCleanup(() => {
    window.removeEventListener('resize', handleResize);
  });

  return (
    <Show when={appWidth() >= 976} fallback={<NoApp width={appWidth()} />}>
      <Header />
      <main class={styles.main}>
        <Routes />
      </main>
      <Footer />
    </Show>
  );
}

export default App;
