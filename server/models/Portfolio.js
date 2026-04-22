const mongoose = require('mongoose');

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
  affiliations: [mongoose.Schema.Types.Mixed],
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

module.exports = mongoose.model('Portfolio', PortfolioSchema);
