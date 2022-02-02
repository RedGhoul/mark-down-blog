import Link from 'next/link'
import Image from 'next/image'
export default function Post({ post }) {

    return (
        <div className='card'>
            <Image src={post.frontMatter.cover_image}
                alt="sss" layout="responsive" width={300}
                height={300} />
            <div className='post-date'>
                {post.frontMatter.date}
            </div>
            <h3>{post.frontMatter.title}</h3>
            <p>{post.frontMatter.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>
                <a className='btn'>Read More</a>
            </Link>
        </div>
    )
}
