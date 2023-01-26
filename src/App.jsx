import Header from './components/Header';
import { Post } from './Post';

import './global.css';

import styles from './App.module.css';
import Sidebar from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Guilherme Melo"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, optio ad? Quaerat error eius porro dolores eos consectetur repellat saepe dolorem ipsam, nostrum, iusto perferendis ratione facilis repellendus quisquam quae."
          />
          <Post
            author="Larissa Mendes"
            content="pipipipppopopopo BURGILpipipipppopopopo BURGILpipipipppopopopo BURGILpipipipppopopopo BURGILpipipipppopopopo BURGIL"
          />
        </main>
      </div>
    </div>
  );
}
