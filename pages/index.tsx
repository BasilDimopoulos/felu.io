import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import LandingSection from '../components/LandingSection'
import PostView from '../components/PostView'
import BookPlayer from '../components/BookPlayer'

export default function Home({ posts }) {
  return (
    <div className='bg-white'>
      <LandingSection />
      <BookPlayer />
      <div className='p-8 lg:p-24 mt-10'>
        <div className='container-xl'>
          <p className='sub-text text-gray-900'>Read</p>
          <h2>The Blog</h2>
          <div className='border-top'></div>
        </div>

        <div className='container-xl'>
          {posts.map((post, index) => (
            <PostView post={post} index={index} key={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })
  return {
    props: {
      posts
    }
  }
}