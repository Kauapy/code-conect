import { Avatar } from '../Avatar';
import Image from 'next/image'
import styles from './cardpost.module.css'

export const CardPost = ({ post }) => {
    return (
        <article className={styles.card}>
            <header className={styles.header}>
                <figure>
                    <Image src={post.cover} alt={`Capa do post: ${post.title}`} width={438} height={132} />
                </figure>
            </header>
            <section className={styles.body}>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.text}>{post.body}</p>
            </section>
            <footer className={styles.footer}>
                <Avatar
                imageSrc={post.author.avatar}
                name={post.author.username}/>
            </footer>
        </article>
    )
}
