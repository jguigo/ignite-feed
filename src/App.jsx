import Header from './components/Header';
import { Post } from './Post';

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Guilherme Melo"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, optio ad? Quaerat error eius porro dolores eos consectetur repellat saepe dolorem ipsam, nostrum, iusto perferendis ratione facilis repellendus quisquam quae."
      />
      <Post
        author="Larissa Mendes"
        content="pipipipppopopopo BURGILpipipipppopopopo BURGILpipipipppopopopo BURGILpipipipppopopopo BURGILpipipipppopopopo BURGIL"
      />
    </div>
  );
}
