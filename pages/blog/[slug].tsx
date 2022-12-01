import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Button from '../../components/Button'

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
    <div className='w-full bg-[#22272e]'>
      <div className='container-xl'>
        <div className='blog-view'>
          <h1 className='h1-post'>{title}</h1>
          <p className="post-description mt-3 mb-16">{description}</p>
          <img src={thumbnailUrl}></img>
        </div>
      </div>
      <div className='w-full bg-[#ececec]'>
        <div className='post-container'>
          <div className=''>
          <MDXRemote {...mdxSource} components={{ Button, SyntaxHighlighter }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostPage