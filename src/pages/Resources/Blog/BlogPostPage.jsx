import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, ArrowLeft, BookOpen, Share2 } from 'lucide-react';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { Badge } from '../../../components/common/Badge';
import { PlaceholderBox } from '../../../components/common/PlaceholderBox';
import { Button } from '../../../components/buttons/Button';
import { BLOG_POSTS } from '../../../data/resources';
import { updatePageMeta } from '../../../utils/seo';

export const BlogPostPage = () => {
  const { slug } = useParams();

  const post = BLOG_POSTS.find((p) => p.slug === slug) || {
    title: '[BLOG_POST_TITLE]',
    excerpt: '[BLOG_POST_EXCERPT]',
    category: '[CATEGORY]',
    date: '[DATE]',
    image: '',
    slug: slug || 'article',
  };

  useEffect(() => {
    updatePageMeta({
      title: `${post.title} — Durgam Soft Blog`,
      description: post.excerpt || 'Article from Durgam Soft Pvt. Ltd.',
    });
  }, [post.title, post.excerpt]);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb
        items={[
          { label: 'Resources', to: '/resources' },
          { label: 'Blog', to: '/resources/blog' },
          { label: post.title },
        ]}
      />

      <article className="py-12 md:py-16">
        <div className="container-custom max-w-4xl">
          {/* Post Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="orange">{post.category}</Badge>
              <div className="flex items-center gap-1.5 text-xs text-brand-secondary-text">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Published on {post.date}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="mt-4 text-lg text-brand-secondary-text leading-relaxed">{post.excerpt}</p>
          </div>

          {/* Featured Image Placeholder */}
          <div className="mb-12">
            <PlaceholderBox
              label="[ARTICLE_HERO_IMAGE_PLACEHOLDER]"
              sublabel="High-resolution editorial media asset"
              heightClass="h-72 sm:h-96"
              icon={<BookOpen className="w-12 h-12 text-slate-300" />}
            />
          </div>

          {/* Article Body Content Placeholders */}
          <div className="prose prose-slate max-w-none space-y-6 text-brand-secondary-text leading-relaxed border-b border-brand-border pb-12 mb-8">
            <h2 className="text-2xl font-bold text-brand-navy">[SECTION_SUBHEADING_1]</h2>
            <p>[PARAGRAPH_CONTENT_PLACEHOLDER_1]</p>
            <p>[PARAGRAPH_CONTENT_PLACEHOLDER_2]</p>

            <div className="p-6 rounded-xl bg-brand-light-gray border-l-4 border-brand-orange my-8">
              <p className="text-base italic text-brand-navy font-medium">
                "[KEY_TAKEAWAY_QUOTE_PLACEHOLDER]"
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-navy">[SECTION_SUBHEADING_2]</h2>
            <p>[PARAGRAPH_CONTENT_PLACEHOLDER_3]</p>
          </div>

          {/* Footer of Article */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button variant="secondary" size="md" to="/resources/blog" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Button>

            <div className="flex items-center gap-3 text-xs text-brand-secondary-text">
              <Share2 className="w-4 h-4 text-slate-400" />
              <span>[SHARE_ARTICLE_PLACEHOLDER]</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
