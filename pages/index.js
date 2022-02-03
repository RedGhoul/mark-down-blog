import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import matter from "gray-matter";
import Post from '../components/Post';
export default function Home({ posts }) {
    return (
        <div>
            <Head>
                <title>Somethings</title>
            </Head>
            <div className="posts">
                {posts.map((post, index) => (
                    <Post post={post} key={index}></Post>
                ))}
            </div>

        </div>
    )
}
// this gets run on the server
export async function getStaticProps() {
    const files = fs.readdirSync(path.join('posts'));
    const posts = files.map(filename => {
        const slug = filename.replace('.md', '');
        // getting the content in the file
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        );
        const { data: frontMatter } = matter(markdownWithMeta);
        console.log(frontMatter)
        return {
            slug,
            frontMatter
        }
    });
    return {
        props: {
            posts: posts.sort((a, b) => {
                return new Date(b.frontMatter.date) -
                    new Date(a.frontMatter.date);
            })
        }
    }
}
