import { ThumbsUp, Trash } from 'phosphor-react';
import Avatar from './Avatar';
import styles from './Comment.module.css';

const Comment = ({content, onDeleteComment}) => {
  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/jguigo.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Melo</strong>
              <time title='11 de maio às 08:13' dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'><Trash size={24}/></button>
          </header>
          <p>{content}</p>
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