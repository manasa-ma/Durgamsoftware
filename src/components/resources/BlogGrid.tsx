import React from 'react';
import { BlogPost } from '../../types/blog';
import { BlogCard } from './BlogCard';

export interface BlogGridProps {
  posts: BlogPost[];
}

export const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, idx) => (
        <BlogCard key={post.slug || idx} post={post} />
      ))}
    </div>
  );
};
