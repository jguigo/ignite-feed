import Comment from './Comment';
import styles from './Post.module.css';

const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/jguigo.png" />
          <div className={styles.authorInfo}>
            <strong>Guilherme Melo</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='11 de maio às 08:13' dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala pessoal 👋</p>
        <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻</p>
        <p>Acesse e deixe seu feedback 👉{' '}<a href='#'>devonlane.design</a></p>
        <p>
          <a href='#'>#uiux</a>{' '}
          <a href='#'>#userexperience</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};

export default Post;
