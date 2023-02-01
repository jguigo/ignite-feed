import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/jguigo.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Melo</strong>
              <time title='11 de maio às 08:13' dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'><Trash size={24}/></button>
          </header>
          <p>Muito bom Fulano, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comment