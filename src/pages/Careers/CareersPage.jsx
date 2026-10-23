import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Lightbulb,
  Send,
  Mail,
  Phone,
  Check,
} from 'lucide-react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { Button } from '../../components/buttons/Button';
import { updatePageMeta } from '../../utils/seo';
import { CAREERS_PAGE_DATA } from '../../data/careers';

export const CareersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: CAREERS_PAGE_DATA.positions[0].title,
    experience: '',
    resumeLink: '',
    coverNote: '',
  });

  const applySectionRef = useRef(null);

  useEffect(() => {
    updatePageMeta({
      title: 'Careers — Join Our Engineering & Growth Team | Durgam Soft',
      description:
        'Explore open roles in Flutter mobile engineering, field marketing, digital marketing, and leadership at Durgam Soft Pvt. Ltd. in Hyderabad.',
    });
  }, []);

  const handleApplyClick = (roleTitle) => {
    setFormData((prev) => ({ ...prev, position: roleTitle }));
    if (applySectionRef.current) {
      applySectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const categories = ['All', 'Engineering & Tech', 'Marketing & Sales'];

  const filteredPositions =
    selectedCategory === 'All'
      ? CAREERS_PAGE_DATA.positions
      : CAREERS_PAGE_DATA.positions.filter(
          (pos) => pos.department === selectedCategory
        );

  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-[#E8683E]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#E8683E]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#E8683E]" />;
      case 'Award':
      default:
        return <Award className="w-5 h-5 text-[#E8683E]" />;
    }
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen font-sans text-slate-900 antialiased">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={[{ label: 'Careers' }]} />

      {/* ======================================================== */}
      {/* 1. Endless Possibilities & Culture Section               */}
      {/* ======================================================== */}
      <section className="py-8 md:py-12 bg-white border-b border-stone-200/60">
        <div className="container-custom max-w-6xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E8683E] block mb-1.5">
              JOIN THE TEAM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight uppercase">
              ENDLESS <span className="text-[#E8683E]">POSSIBILITIES</span>
            </h2>
            <div className="w-14 h-1 bg-[#E8683E] rounded-full mx-auto mt-3 mb-4" />
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At Durgam Soft, we are always on the lookout for talented and passionate individuals to
              join our team. If you are looking for a dynamic work environment where innovation and
              creativity are valued, you&rsquo;ve come to the right place.
            </p>
          </div>

          {/* 5 Culture Pillars Grid + Direct Connect Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {CAREERS_PAGE_DATA.culturePillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-6 sm:p-7 rounded-3xl bg-[#FAF7F2] border border-stone-200/90 shadow-2xs hover:shadow-xl hover:-translate-y-1.5 hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-stone-200 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#E8683E] group-hover:text-white transition-all duration-300 shadow-2xs">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white text-slate-600 border border-stone-200">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-black tracking-tight mb-1.5 group-hover:text-[#E8683E] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}

            {/* 6th Card: Direct Connect Talent Prompt */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#1A1A1A] text-white shadow-md flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E8683E] block mb-2">
                  DIRECT CONTACT
                </span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2">
                  Don&rsquo;t See an Exact Match?
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-5">
                  We are always eager to connect with curious developers, sales leaders, and marketing specialists. Send your profile directly to our recruitment inbox.
                </p>
              </div>

              <div>
                <a
                  href={`mailto:${CAREERS_PAGE_DATA.contactHR.email}?subject=General%20Career%20Application`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E8683E] hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>careers@durgamsoft.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. Current Openings Section: Techasoft-Style 3-Col Cards */}
      {/* ======================================================== */}
      <section
        id="open-positions"
        className="py-8 md:py-12 bg-[#FAF7F2] border-b border-stone-200/80"
      >
        <div className="container-custom max-w-6xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E8683E] block mb-1.5">
              DISCOVER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight uppercase">
              CURRENT <span className="text-[#E8683E]">OPENINGS</span>
            </h2>
            <div className="w-14 h-1 bg-[#E8683E] rounded-full mx-auto mt-3 mb-3" />
            <p className="text-sm sm:text-base text-slate-600">
              Browse verified full-time positions and internship opportunities across software development, sales, and marketing.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-black text-white shadow-md scale-102'
                    : 'bg-white text-slate-700 hover:bg-stone-100 hover:text-black border border-stone-200'
                }`}
              >
                {cat}{' '}
                <span className="ml-1 opacity-75">
                  (
                  {cat === 'All'
                    ? CAREERS_PAGE_DATA.positions.length
                    : CAREERS_PAGE_DATA.positions.filter(
                        (p) => p.department === cat
                      ).length}
                  )
                </span>
              </button>
            ))}
          </div>

          {/* Techasoft-Style Openings Card Grid (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {filteredPositions.map((job) => (
              <div
                key={job.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-2xl hover:-translate-y-1.5 hover:border-[#E8683E]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Icon + Department + Experience */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-orange-50 border border-orange-100/80 flex items-center justify-center text-[#E8683E] group-hover:scale-110 group-hover:bg-[#E8683E] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-stone-100 text-slate-700 border border-stone-200">
                      {job.experience}
                    </span>
                  </div>

                  {/* Department Pill */}
                  <div className="mb-1.5">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#E8683E]">
                      {job.department}
                    </span>
                  </div>

                  {/* Job Title (Links directly to Job Details page) */}
                  <h3 className="text-xl font-black text-black tracking-tight mb-2.5 group-hover:text-[#E8683E] transition-colors leading-snug">
                    <Link to={`/careers/${job.id}`}>
                      {job.title}
                    </Link>
                  </h3>

                  {/* Location & Compensation Meta */}
                  <div className="space-y-1.5 mb-3 text-xs font-medium text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E8683E] shrink-0" />
                      <span className="truncate">{job.locations.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-black bg-[#FAF7F2] px-3 py-1 rounded-lg border border-stone-200 w-fit">
                      <span className="text-slate-500 font-normal">Salary:</span>
                      <span className="text-[#E8683E]">{job.salary}</span>
                    </div>
                  </div>

                  {/* Overview snippet */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-5">
                    {job.overview}
                  </p>
                </div>

                {/* Card Footer: "View More Details" Button & Quick Apply */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <Link
                    to={`/careers/${job.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black hover:bg-[#E8683E] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all duration-200 group/btn"
                  >
                    <span>More Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleApplyClick(job.title)}
                    className="text-xs font-bold text-slate-500 hover:text-[#E8683E] transition-colors py-2 px-2 cursor-pointer"
                  >
                    Quick Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. "COME WORK WITH US" Quick Application Form            */}
      {/* ======================================================== */}
      <section
        ref={applySectionRef}
        id="apply-now"
        className="py-8 md:py-12 bg-white border-b border-stone-200"
      >
        <div className="container-custom max-w-6xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E8683E] block mb-1.5">
              START YOUR JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight uppercase">
              COME WORK <span className="text-[#E8683E]">WITH US</span>
            </h2>
            <div className="w-14 h-1 bg-[#E8683E] rounded-full mx-auto mt-3 mb-3" />
            <p className="text-sm sm:text-base text-slate-600">
              Don&rsquo;t be shy! Submit your application below or write directly to our HR team. We review every profile promptly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
            {/* Left Column: Application Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E8683E] block mb-1">
                      Direct Application
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight">
                      Submit Your Application
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      No LinkedIn required. Share your details, resume link, or portfolio.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="text-center py-12 my-auto">
                      <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 animate-bounce">
                        <Check className="w-7 h-7 stroke-[3]" />
                      </div>
                      <h4 className="text-xl font-black text-black mb-1.5">
                        Application Received!
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        Thank you for applying to Durgam Soft for{' '}
                        <strong>{formData.position}</strong>. Our HR team will review your application and contact you at{' '}
                        <span className="text-black font-semibold">{formData.email}</span> within 48 hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-5 px-5 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-xs font-bold text-slate-700 transition-colors"
                      >
                        Submit Another Application
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-3.5">
                      {/* Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleFormChange('name')}
                            placeholder="Your full name"
                            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm text-slate-900 bg-white hover:border-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-500/15 focus:border-[#E8683E] focus:shadow-sm transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleFormChange('email')}
                            placeholder="your.email@example.com"
                            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm text-slate-900 bg-white hover:border-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-500/15 focus:border-[#E8683E] focus:shadow-sm transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone & Position */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleFormChange('phone')}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm text-slate-900 bg-white hover:border-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-500/15 focus:border-[#E8683E] focus:shadow-sm transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Role Applying For *
                          </label>
                          <select
                            value={formData.position}
                            onChange={handleFormChange('position')}
                            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm text-slate-900 bg-white hover:border-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-500/15 focus:border-[#E8683E] focus:shadow-sm transition-all"
                          >
                            {CAREERS_PAGE_DATA.positions.map((p) => (
                              <option key={p.id} value={p.title}>
                                {p.title} ({p.experience})
                              </option>
                            ))}
                            <option value="General Engineering Application">
                              Other / General Engineering Application
                            </option>
                            <option value="General Sales & Marketing Application">
                              Other / General Sales &amp; Marketing Application
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* Experience & Resume Link */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Relevant Experience *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.experience}
                            onChange={handleFormChange('experience')}
                            placeholder="e.g. 1.5 Years or Fresher"
                            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm text-slate-900 bg-white hover:border-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-500/15 focus:border-[#E8683E] focus:shadow-sm transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Resume / Drive / Portfolio Link *
                          </label>
                          <input
                            type="url"
                            required
                            value={formData.resumeLink}
                            onChange={handleFormChange('resumeLink')}
                            placeholder="Google Drive / GitHub / URL"
                            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm text-slate-900 bg-white hover:border-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-500/15 focus:border-[#E8683E] focus:shadow-sm transition-all"
                          />
                        </div>
                      </div>

                      {/* Cover Note */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Brief Cover Note / Why You&rsquo;re a Fit
                        </label>
                        <textarea
                          rows={2}
                          value={formData.coverNote}
                          onChange={handleFormChange('coverNote')}
                          placeholder="Tell us a bit about your background, key projects, and why you want to join Durgam Soft..."
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm text-slate-900 bg-white hover:border-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-500/15 focus:border-[#E8683E] focus:shadow-sm transition-all resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full gap-2 py-3.5 rounded-xl font-bold text-sm bg-[#E8683E] hover:bg-orange-600 text-white shadow-md hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Application</span>
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Direct HR & Application Channels (Zero Blue) */}
            <div className="lg:col-span-5 space-y-4">
              {/* HR Contact Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8683E] block mb-1.5">
                  DIRECT RECRUITMENT DESK
                </span>
                <h4 className="text-xl font-black text-black tracking-tight mb-2.5">
                  Prefer to Email Us Directly?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  You can also directly email your resume and cover letter to our recruitment team. Please mention the role you are applying for in the email subject.
                </p>

                <div className="space-y-3">
                  {/* Email Tile */}
                  <a
                    href={`mailto:${CAREERS_PAGE_DATA.contactHR.email}?subject=Job%20Application`}
                    className="p-3.5 rounded-2xl bg-orange-50 hover:bg-orange-100/80 border border-orange-200/80 transition-all duration-200 flex items-center gap-3 group block cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white text-[#E8683E] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        RECRUITMENT EMAIL
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-black group-hover:text-[#E8683E] transition-colors break-words block">
                        {CAREERS_PAGE_DATA.contactHR.email}
                      </span>
                    </div>
                  </a>

                  {/* Phone Tile */}
                  <a
                    href={`tel:${CAREERS_PAGE_DATA.contactHR.phone.replace(/\s+/g, '')}`}
                    className="p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-orange-50 border border-stone-200 transition-all duration-200 flex items-center gap-3 group block cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white text-[#E8683E] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        HR &amp; CAREERS LINE
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-black group-hover:text-[#E8683E] transition-colors whitespace-nowrap block">
                        {CAREERS_PAGE_DATA.contactHR.phone}
                      </span>
                    </div>
                  </a>

                  {/* Office Location Tile */}
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white text-slate-700 flex items-center justify-center shrink-0 shadow-2xs">
                      <MapPin className="w-4 h-4 text-stone-600" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        OFFICE LOCATION
                      </span>
                      <span className="text-xs font-bold text-slate-800 block">
                        {CAREERS_PAGE_DATA.contactHR.office}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Friendly Note */}
                <div className="mt-4 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900 leading-relaxed flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Hiring Note:</strong> {CAREERS_PAGE_DATA.contactHR.note}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
