import mongoose from 'mongoose';

const PortfolioSchema = new mongoose.Schema({
  hero: {
    name: String,
    title: String,
    bio: String,
    image: String
  },
  projects: [{
    id: String,
    title: String,
    category: String,
    desc: String,
    tags: [String],
    image: String,
    link: String,
    featured: Boolean
  }],
  stats: [{
    label: String,
    value: String,
    sub: String
  }],
  experience: [{
    title: String,
    company: String,
    duration: String,
    desc: String,
    logo: String
  }],
  leadership: [{
    title: String,
    org: String,
    duration: String,
    desc: String,
    logo: String
  }],
  resumeUrl: String,
  competencies: [{
    title: String,
    desc: String,
    icon: String,
    accent: String
  }],
  contact: {
    email: String,
    headline: String,
    subtext: String,
    linkedin: String,
    github: String,
    twitter: String,
    medium: String
  },
  manifesto: {
    lines: [String]
  }
}, { timestamps: true });

export default mongoose.model('Portfolio', PortfolioSchema);

