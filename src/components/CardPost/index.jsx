import { Avatar } from '../Avatar';
import Image from 'next/image'

export const CardPost = ({ post }) => {
    return (
        <article>
            <header>
                <figure>
                    <Image src={post.cover} alt={`Capa do post: ${post.title}`} width={438} height={132} />
                </figure>
            </header>
            <section>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer>
                <Avatar 
                imageSrc={post.author.avatar}
                name={post.author.username}/>
            </footer>
        </article>
    )
}