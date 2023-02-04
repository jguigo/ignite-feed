import Header from './components/Header';

import './global.css';

import styles from './App.module.css';
import Sidebar from './components/Sidebar';
import Post from './components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/jguigo.png",
      name: "Guilherme Melo",
      role: "Web Developer @ NuVidio"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. Ficou muito zika!"},
      { type: "paragraph", content: "Se puder deixar algum feedback... "},
      { type: "link", content: "jguigo.dev/muitobom"},
    ],
    publishedAt: new Date('2023-02-2 20:21:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/annalare.png",
      name: "Larissa Mendes",
      role: "Front-end developer @ 7az"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW da Rocketseat 🚀"},
      { type: "link", content: "annalare.dev/muitobom"},
    ],
    publishedAt: new Date('2023-01-30 19:21:00')
  },
]


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
