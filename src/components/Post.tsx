import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { Comment } from './Comment.js'
import { Avatar } from './Avatar.js'
import { FormEvent, useState, ChangeEvent } from 'react'

interface Author {
    name: string,
    role: string,
    avatarUrl: string
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}



export function Post({ post }: PostProps) {
    
    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt,{
        locale: ptBR,
        addSuffix: true,
    })

    const [newCommentText, setNewCommentText] = useState('');
    
    const [comments, setComments] = useState([
        "Que Post legal."
    ]) 
// função para criar um novo comentário
    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        // const newCommentText = event.target.comment.value;
        
        setComments([...comments, newCommentText ]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
          return comment !== commentToDelete;
        })
    
        setComments(commentsWithoutDeletedOne);
    }

    const WhenNewCommentTextIsEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header className={styles.postHeader}>
                <div className={styles.author}>
                <Avatar hasBorder src={post.author.avatarUrl} />
                <div className={styles.authorInfo}>
                    <strong>{post.author.name}</strong>
                    <span>{post.author.role}</span>
                </div>
                </div>
            <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
            </time>
            </header>
     
            <div className={styles.content}>
                {post.content.map(line => {
                if (line.type === 'paragraph') {
                    return <p key={line.content}>{line.content}</p>;
                } else if (line.type === 'link') {
                    return <p key={line.content}><a href="#">{line.content}</a></p>
                }
                })}
            </div>
            <form  
                onSubmit={handleCreateNewComment} 
                className={styles.commentArea}
            >
                <strong>Deixe seu feedback</strong>
                
                <textarea 
                    name='comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    placeholder='Deixe seu comentário'           
                />
                <footer>
                    <button 
                        type='submit'
                        disabled={WhenNewCommentTextIsEmpty}
                    >
                        Publicar
                    </button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
                
            </div>
      
    </article>
    )
}