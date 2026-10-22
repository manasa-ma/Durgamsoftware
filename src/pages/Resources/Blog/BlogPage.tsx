import React, { useEffect, useState } from 'react';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { SectionHeader } from '../../../components/common/SectionHeader';
import { BlogGrid } from '../../../components/resources/BlogGrid';
import { BLOG_POSTS } from '../../../data/resources';
import { updatePageMeta } from '../../../utils/seo';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    updatePageMeta({
      title: 'Blog — Product Updates & Technology Insights | Durgam Soft',
      description:
        'Official blog of Durgam Soft Pvt. Ltd. Read our articles on billing software, point-of-sale innovations, and software engineering.',
    });
  }, []);

  const categories = ['All', '[CATEGORY_1]', '[CATEGORY_2]', '[CATEGORY_3]'];

  const filteredPosts =
    selectedCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb
        items={[
          { label: 'Resources', to: '/resources' },
          { label: 'Blog' },
        ]}
      />

      <section className="bg-brand-light-gray py-14 md:py-20 border-b border-brand-border">
        <div className="container-custom">
          <SectionHeader
            badge="Official Blog"
            title="Durgam Soft Blog & Editorial"
            subtitle="Explore our articles, technical guides, and industry analyses on software engineering and billing systems."
            align="center"
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'bg-white text-brand-secondary-text border border-brand-border hover:bg-brand-light-gray'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-brand-border">
        <div className="container-custom">
          <BlogGrid posts={filteredPosts} />
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
