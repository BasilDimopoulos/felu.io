import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import React, { useEffect } from 'react'

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

const PostPage = ({ frontMatter: { title, description, tags, thumbnailUrl }, mdxSource }) => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <div className='w-full bg-[#22272e]'>
      <div className='container-xl'>
        <div className='lg:p-24 p-8'>
          <div className='flex'>
            {tags.map(tag => (<p className='pr-5 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-red-500' key={tag}>{tag}</p>))}
            {/* <p>{tags}</p> */}
          </div>
          <h1 className='mt-2 w-full text-[32px] leading-[36px] md:text-[42px] md:leading-[48px] lg:text-[48px] lg:leading-[52px]'>{title}</h1>
          <p className="post-description mt-3 mb-16">{description}</p>
          <img src={thumbnailUrl}></img>
        </div>
      </div>
      <div className='w-full bg-[#ececec]'>
        <div className='post-container lg:p-24 p-8'>
          <div className=''>
            <MDXRemote {...mdxSource} components={{SyntaxHighlighter }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostPage