import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function PostView({ post, index }) {
    return (
        <div className="mb-24 lg:flex">
            <div className="card-body lg:w-1/3 md:pr-10">
                <p className='text-base mt-5 uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-800'>{post.frontMatter.date}</p>
                <Link href={'/blog/' + post.slug} passHref key={index}>
                    <h4 className="pb-4">{post.frontMatter.title}</h4>
                </Link>
                <p className='blog-taste-text mb-5'>{post.frontMatter.description}</p>

            </div>
            <div className="lg:w-2/3">
                <Link href={'/blog/' + post.slug} passHref key={index}>
                    <img src={post.frontMatter.thumbnailUrl}
                    ></img>
                </Link>
            </div>
        </div>
    )
}