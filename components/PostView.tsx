import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function PostView({post, index}) {
    return (
            <Link href={'/blog/' + post.slug} passHref key={index}>
                <div className="card mb-3 pointer" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{post.frontMatter.title}</h5>
                                <p className="card-text">{post.frontMatter.description}</p>
                                <p className="card-text">
                                    <small className="text-muted">{post.frontMatter.date}</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 m-auto">
                            <Image
                                src={post.frontMatter.thumbnailUrl}
                                className="img-fluid mt-1 rounded-start"
                                alt="thumbnail"
                                width={500}
                                height={400}
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </Link>
        )
}