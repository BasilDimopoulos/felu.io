import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Button from '../../components/Button.tsx'

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts',
    slug + '.mdx'), 'utf-8')
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)
  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

const PostPage = ({ frontMatter: { title, description, thumbnailUrl }, mdxSource }) => {
  return (
    <div>
      <div className="pt-20 post-background-header">
        <div className='flex flex-col items-center'>
          <h1 className='h1-post text-center'>{title}</h1>
          <p className="p-post-description text-center mt-6 mb-10">{description}</p>
          <img src={thumbnailUrl}></img>
        </div>
      </div>
      <div className='bg-white'>
        <MDXRemote {...mdxSource} components={{ Button, SyntaxHighlighter }} />
      </div>
    </div>
  )
}

export default PostPage