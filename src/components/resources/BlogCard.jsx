import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { Badge } from '../common/Badge';
import { PlaceholderBox } from '../common/PlaceholderBox';

export const BlogCard = ({ post }) => {
  return (
    <article className="rounded-xl bg-white border border-brand-border overflow-hidden flex flex-col justify-between hover:border-brand-orange/40 hover:shadow-md transition-all duration-200 group">
      <div>
        {/* Blog Image Placeholder */}
        <PlaceholderBox
          label="[ARTICLE_COVER_IMAGE]"
          heightClass="h-48"
          className="rounded-none border-0 border-b border-dashed border-slate-200"
          icon={<BookOpen className="w-8 h-8 text-slate-300" />}
        />

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="orange">{post.category}</Badge>
            <div className="flex items-center gap-1.5 text-xs text-brand-secondary-text">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.date}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-brand-secondary-text leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <Link
          to={`/resources/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors"
        >
          <span>Read Article</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};
