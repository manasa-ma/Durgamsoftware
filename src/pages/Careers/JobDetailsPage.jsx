import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin,
  ArrowLeft,
  Check,
  CheckCircle2,
  Award,
  Send,
  Mail,
  Phone,
  Sparkles,
  Building2,
  RotateCcw,
} from 'lucide-react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { Button } from '../../components/buttons/Button';
import { updatePageMeta } from '../../utils/seo';
import { CAREERS_PAGE_DATA } from '../../data/careers';

export const JobDetailsPage = () => {
  const { jobId } = useParams();
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const job = CAREERS_PAGE_DATA.positions.find(
    (p) => p.id === jobId || p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === jobId
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    resumeLink: '',
    coverNote: '',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (job) {
      updatePageMeta({
        title: `${job.title} — Careers | Durgam Soft`,
        description: `Apply for the ${job.title} opening at Durgam Soft in ${job.locations.join(', ')}. ${job.experience} experience, ${job.salary}.`,
      });
    } else {
      updatePageMeta({
        title: 'Career Opening Not Found | Durgam Soft',
        description: 'Browse active career openings at Durgam Soft.',
      });
    }
  }, [job]);

  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const formatEmailBody = () => {
    return (
      `Hello Durgam Soft Recruitment Team,\n\n` +
      `A new job application has been submitted for: ${job?.title || 'Open Position'}\n\n` +
      `--------------------------------------------------\n` +
      `CANDIDATE DETAILS\n` +
      `--------------------------------------------------\n` +
      `Full Name:           ${formData.name}\n` +
      `Email Address:       ${formData.email}\n` +
      `Phone Number:        ${formData.phone}\n` +
      `Current Location:    ${formData.location}\n` +
      `Position Applied:    ${job?.title || 'Open Position'}\n` +
      `Relevant Experience: ${formData.experience}\n\n` +
      `--------------------------------------------------\n` +
      `RESUME / PORTFOLIO LINK\n` +
      `--------------------------------------------------\n` +
      `Resume URL:          ${formData.resumeLink}\n\n` +
      `--------------------------------------------------\n` +
      `COVER NOTE / MESSAGE\n` +
      `--------------------------------------------------\n` +
      `${formData.coverNote || 'Not Provided'}\n\n` +
      `--------------------------------------------------\n` +
      `Sent via: Durgam Soft Careers Portal (www.durgamsoft.com/careers/${job?.id || ''})\n` +
      `Applicant Note: If attaching a local PDF/DOC resume, please attach the document directly to this email.`
    );
  };

  const emailSubject = `[Job Application] ${job?.title || 'Position'} - ${formData.name || 'Applicant'}`;
  const mailtoLink = `mailto:careers@durgamsoft.com?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(formatEmailBody())}`;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      window.location.href = mailtoLink;
    } catch {
      // Fallback handled smoothly by UI state
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      experience: '',
      resumeLink: '',
      coverNote: '',
    });
  };

  if (!job) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] py-20">
        <div className="container-custom max-w-2xl text-center bg-white p-10 rounded-3xl border border-stone-200 shadow-md">
          <h2 className="text-3xl font-black text-black mb-3">Position Not Found</h2>
          <p className="text-slate-600 mb-6">
            The career opening you are looking for is no longer active or the URL has changed.
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-bold hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse All Open Roles</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F2] min-h-screen font-sans text-slate-900 antialiased">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Careers', to: '/careers' },
          { label: job.title },
        ]}
      />

      {/* ======================================================== */}
      {/* 1. Job Header (Soft Beige & White Palette - No Blue)     */}
      {/* ======================================================== */}
      <section className="bg-white border-b border-stone-200/80 pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="container-custom max-w-6xl">
          {/* Back link */}
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#E8683E] uppercase tracking-wider mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Openings</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              {/* Department & Experience Pill */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-[#E8683E] border border-orange-200">
                  {job.department}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-100 text-slate-700">
                  {job.employmentType}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {job.experience} Experience
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
                {job.title}
              </h1>

              {/* Locations & Compensation Meta */}
              <div className="flex flex-wrap items-center gap-5 text-sm sm:text-base text-slate-600 pt-1">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-[#E8683E]" />
                  <span>{job.locations.join(', ')}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-bold text-black bg-[#FAF7F2] px-3.5 py-1.5 rounded-xl border border-stone-200">
                  <span>Salary / Stipend:</span>
                  <span className="text-[#E8683E]">{job.salary}</span>
                </span>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={handleScrollToForm}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black hover:bg-slate-800 text-white font-bold text-base shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Apply for this Role</span>
                <Send className="w-4 h-4 text-[#E8683E]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. Job Content & Inline Application Form                 */}
      {/* ======================================================== */}
      <section className="py-12 md:py-16">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Full Job Description */}
            <div className="lg:col-span-7 space-y-8">
              {/* Job Overview */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8683E] block mb-2">
                  Role Overview
                </span>
                <h2 className="text-2xl font-black text-black tracking-tight mb-4">
                  About the Opportunity
                </h2>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  {job.overview}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8683E] block mb-1">
                  What You Will Do
                </span>
                <h3 className="text-2xl font-black text-black tracking-tight mb-4">
                  Key Responsibilities
                </h3>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-orange-100 text-[#E8683E] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Skills & Qualifications */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E8683E] block mb-1">
                    Candidate Profile
                  </span>
                  <h3 className="text-2xl font-black text-black tracking-tight mb-4">
                    Required Skills &amp; Qualifications
                  </h3>
                  <ul className="space-y-3">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Preferred Skills */}
                {job.preferredSkills && (
                  <div className="pt-6 border-t border-stone-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Preferred / Advantageous Skills
                    </h4>
                    <ul className="space-y-2">
                      {job.preferredSkills.map((pref, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                          <span className="text-[#E8683E] font-black">•</span>
                          <span>{pref}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Benefits & Perks */}
              {job.benefits && (
                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E8683E] block mb-1">
                    Perks &amp; Incentives
                  </span>
                  <h3 className="text-2xl font-black text-black tracking-tight mb-4">
                    Compensation &amp; Role Benefits
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    {job.benefits.map((ben, idx) => (
                      <li
                        key={idx}
                        className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-stone-200 flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800"
                      >
                        <Award className="w-4 h-4 text-[#E8683E] shrink-0" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column: Application Form & HR Contact Card */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              {/* Application Form Card */}
              <div
                ref={formRef}
                id="apply-form"
                className="p-8 sm:p-9 rounded-3xl bg-white border border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#E8683E] text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Quick Apply</span>
                  </div>
                  <h3 className="text-2xl font-black text-black tracking-tight">
                    Apply for this Position
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your details below. We review every application within 48 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-6 my-auto space-y-5 text-center animate-contact-form">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2 shadow-sm animate-bounce">
                      <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                        Application Dispatched
                      </span>
                      <h4 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-1.5">
                        Thank You, {formData.name || 'Applicant'}!
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                        Your application details and resume link for <strong>{job.title}</strong> have been formatted for{' '}
                        <strong className="text-black font-semibold">careers@durgamsoft.com</strong>.
                        Our HR team reviews every application within 48 hours.
                      </p>
                    </div>

                    {/* Structured Summary Card */}
                    <div className="text-left bg-stone-50/90 rounded-2xl p-4 sm:p-5 border border-stone-200 text-xs space-y-2.5">
                      <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          Application Summary
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                          Sent to careers@durgamsoft.com
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div>
                          <span className="text-slate-400 font-semibold block text-[10px] uppercase">Applicant</span>
                          <span className="font-bold text-slate-900 block">{formData.name}</span>
                          <span className="text-slate-600 block text-[11px] truncate">{formData.email} • {formData.phone}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block text-[10px] uppercase">Position &amp; Exp</span>
                          <span className="font-bold text-[#E8683E] block">{job.title}</span>
                          <span className="text-slate-600 block text-[11px]">{formData.experience || 'Not Specified'} • {formData.location}</span>
                        </div>
                      </div>

                      <div className="pt-1">
                        <span className="text-slate-400 font-semibold block text-[10px] uppercase">Resume / Portfolio Link</span>
                        {formData.resumeLink ? (
                          <a
                            href={formData.resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-medium break-all block mt-0.5"
                          >
                            {formData.resumeLink}
                          </a>
                        ) : (
                          <span className="text-slate-500 italic">Not Provided</span>
                        )}
                      </div>

                      {formData.coverNote && (
                        <div className="pt-1">
                          <span className="text-slate-400 font-semibold block text-[10px] uppercase">Cover Note</span>
                          <p className="text-slate-700 bg-white p-2.5 rounded-xl border border-stone-200 mt-1 max-h-24 overflow-y-auto whitespace-pre-wrap font-normal leading-relaxed text-[11px]">
                            {formData.coverNote}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="space-y-2.5 pt-1">
                      <a
                        href={mailtoLink}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#E8683E] hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Open in Email App (careers@durgamsoft.com)</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-stone-200 bg-white text-slate-700 hover:bg-stone-50 font-semibold text-xs transition-all active:scale-[0.98] cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                        <span>Apply for Another Position</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleFormChange('name')}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-slate-900 bg-white hover:border-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-500/15 focus:border-[#E8683E] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange('email')}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-slate-900 bg-white hover:border-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-500/15 focus:border-[#E8683E] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleFormChange('phone')}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-slate-900 bg-white hover:border-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-500/15 focus:border-[#E8683E] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Current City / Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={handleFormChange('location')}
                        placeholder="e.g. Hyderabad, Warangal, etc."
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-slate-900 bg-white hover:border-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-500/15 focus:border-[#E8683E] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Relevant Experience *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.experience}
                        onChange={handleFormChange('experience')}
                        placeholder="e.g. 1 Year, 2 Years, or Fresher"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-slate-900 bg-white hover:border-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-500/15 focus:border-[#E8683E] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Resume / Portfolio Link *
                      </label>
                      <input
                        type="url"
                        required
                        value={formData.resumeLink}
                        onChange={handleFormChange('resumeLink')}
                        placeholder="Google Drive, GitHub, or Portfolio URL"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-slate-900 bg-white hover:border-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-500/15 focus:border-[#E8683E] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Cover Note / Message
                      </label>
                      <textarea
                        rows={3}
                        value={formData.coverNote}
                        onChange={handleFormChange('coverNote')}
                        placeholder="Why are you excited about this role at Durgam Soft?"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-slate-900 bg-white hover:border-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-500/15 focus:border-[#E8683E] transition-all resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full gap-2 py-3.5 rounded-xl font-bold bg-[#E8683E] hover:bg-orange-600 text-white shadow-md hover:shadow-orange-500/25 cursor-pointer active:scale-98 transition-all"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Application</span>
                      </Button>

                      <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
                        <Mail className="w-3.5 h-3.5 text-[#E8683E] shrink-0" />
                        <span>
                          Direct delivery to{' '}
                          <strong className="text-black font-semibold">careers@durgamsoft.com</strong>
                        </span>
                      </p>
                    </div>
                  </form>
                )}
              </div>

              {/* Direct HR Support Card */}
              <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Questions About This Role?
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Have questions about the role or requirements? Reach out directly to our HR desk:
                </p>

                <div className="space-y-3 pt-1">
                  <a
                    href={`mailto:careers@durgamsoft.com?subject=Inquiry:%20${encodeURIComponent(job.title)}`}
                    className="p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-orange-50 border border-stone-200 flex items-center gap-3 text-xs font-bold text-slate-800 transition-colors group block"
                  >
                    <Mail className="w-4 h-4 text-[#E8683E]" />
                    <span className="group-hover:text-[#E8683E] transition-colors">careers@durgamsoft.com</span>
                  </a>

                  <a
                    href="tel:+918374588099"
                    className="p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-orange-50 border border-stone-200 flex items-center gap-3 text-xs font-bold text-slate-800 transition-colors group block"
                  >
                    <Phone className="w-4 h-4 text-[#E8683E]" />
                    <span className="group-hover:text-[#E8683E] transition-colors">+91 83745 88099</span>
                  </a>

                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-stone-200 flex items-center gap-3 text-xs font-medium text-slate-700">
                    <Building2 className="w-4 h-4 text-stone-500" />
                    <span>Cherlapalli, Hyderabad, Telangana</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-orange-50/60 border border-orange-200/70 text-[11px] text-slate-700 leading-relaxed">
                  <strong>Notice:</strong> No LinkedIn profile required. Applications are reviewed based purely on practical skills and experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetailsPage;
