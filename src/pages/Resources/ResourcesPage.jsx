import React, { useEffect } from 'react';
import { BookOpen, ArrowRight, FileText, HelpCircle } from 'lucide-react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeader } from '../../components/common/SectionHeader';
import { BlogGrid } from '../../components/resources/BlogGrid';
import { Button } from '../../components/buttons/Button';
import { BLOG_POSTS } from '../../data/resources';
import { updatePageMeta } from '../../utils/seo';

export const ResourcesPage = () => {
  useEffect(() => {
    updatePageMeta({
      title: 'Resources & Knowledge Base — Durgam Soft',
      description:
        'Stay informed with technical insights, product tutorials, and industry research from Durgam Soft Pvt. Ltd.',
    });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: 'Resources' }]} />

      {/* Header */}
      <section className="bg-brand-light-gray py-14 md:py-20 border-b border-brand-border">
        <div className="container-custom">
          <SectionHeader
            badge="Knowledge Center"
            title="Durgam Soft Resources"
            subtitle="Stay informed with insights, updates, and useful information from Durgam Soft."
            align="center"
          />

          <div className="mt-8 flex justify-center">
            <Button variant="primary" size="lg" to="/resources/blog" className="gap-2">
              <BookOpen className="w-5 h-5" />
              <span>Read Our Blog</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Resource Categories Cards */}
      <section className="py-16 border-b border-brand-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-xl bg-white border border-brand-border hover:border-brand-orange hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-brand-light-orange flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5 text-brand-orange" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Company Blog</h3>
              <p className="text-xs text-brand-secondary-text mb-4">
                Articles covering POS technology, software development methodologies, and retail
                operations.
              </p>
              <Button
                variant="ghost"
                size="sm"
                to="/resources/blog"
                className="px-0 gap-1 text-brand-orange hover:bg-transparent"
              >
                <span>Browse Blog Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>

            <div className="p-6 rounded-xl bg-white border border-brand-border opacity-75">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-slate-500" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Product Documentation</h3>
              <p className="text-xs text-brand-secondary-text mb-4">
                [DOCUMENTATION_GUIDES_PLACEHOLDER]
              </p>
              <span className="text-xs font-semibold text-slate-400">Coming Soon</span>
            </div>

            <div className="p-6 rounded-xl bg-white border border-brand-border opacity-75">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                <HelpCircle className="w-5 h-5 text-slate-500" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Help Center & FAQ</h3>
              <p className="text-xs text-brand-secondary-text mb-4">
                [SUPPORT_ARTICLES_PLACEHOLDER]
              </p>
              <span className="text-xs font-semibold text-slate-400">Coming Soon</span>
            </div>
          </div>

          {/* Latest from Blog Preview */}
          <div>
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-brand-border">
              <h2 className="text-2xl font-bold text-brand-navy">Latest Articles</h2>
              <Button variant="secondary" size="sm" to="/resources/blog">
                View All Posts
              </Button>
            </div>

            <BlogGrid posts={BLOG_POSTS} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
