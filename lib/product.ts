export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "LitWatch",
  slug: "litwatch",
  tagline: "Never miss the papers that matter - ignore the rest.",
  description: "LitWatch monitors arXiv, PubMed, and preprints for new work on your exact research question, filters out the noise, and pushes concise summaries of only the few papers that matter.",
  toolTitle: "Literature Monitor",
  resultLabel: "New Mentions",
  ctaLabel: "Start Watching",
  features: [
  "Track new papers on your topic across major repositories",
  "Get a digest of the most relevant recent research",
  "Spot emerging trends and key authors",
  "Set up alerts without complex query syntax"
],
  inputs: [
  {
    "key": "research_topic",
    "label": "Research Topic or Keywords",
    "type": "text",
    "placeholder": "e.g. retrieval-augmented generation evaluation"
  },
  {
    "key": "discipline",
    "label": "Field / Discipline",
    "type": "text",
    "placeholder": "e.g. NLP, bioinformatics"
  },
  {
    "key": "alert_frequency",
    "label": "Monitoring Frequency",
    "type": "select",
    "options": [
      "Daily",
      "Weekly",
      "Monthly"
    ]
  }
] as InputField[],
  systemPrompt: "You are LitWatch, a research literature-monitoring assistant. Given a research topic or keywords, a discipline, and a desired monitoring frequency, help the user set up an effective literature watch. Always structure your response as: (1) 3-5 ready-to-use search queries, (2) 3 sample recent papers (title, venue, one-line relevance) as an illustration, (3) 2-3 emerging trends to watch, and (4) a recommended alert setup. In demo (mock) mode, return a realistic sample monitoring plan following exactly this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "1 topic, limited alerts"
  },
  {
    "tier": "Pro",
    "price": "$9/mo",
    "desc": "Full coverage + export"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const topic = (inputs['research_topic'] || '').trim()
  const disc = (inputs['discipline'] || '').trim()
  const freq = inputs['alert_frequency'] || 'Weekly'
  if (!topic) return 'Enter a research topic or keywords to set up monitoring.'
  let out = 'LITERATURE WATCH PLAN - ' + topic + '\n\n'
  out += 'Ready-to-use search queries:\n'
  out += '  - "' + topic + '" filetype:pdf\n'
  out += '  - "' + topic + '" site:arxiv.org\n'
  out += '  - "' + topic + ' AND ' + (disc || 'review') + '"\n\n'
  out += 'Sample recent papers (illustrative):\n'
  out += '  1. "Advances in ' + topic + '" - ' + (disc || 'arXiv') + ', 2026\n'
  out += '  2. "A benchmark for ' + topic + '" - NeurIPS, 2025\n'
  out += '  3. "Survey of ' + topic + '" - CSUR, 2025\n\n'
  out += 'Emerging trends to watch:\n'
  out += '  - Multimodal evaluation methods\n'
  out += '  - Efficiency-first architectures\n\n'
  out += 'Recommended alert setup: ' + freq + ' digest, top-3 relevance threshold.\n'
  out += '\n--- (Mock demo. Pro unlocks live arXiv/PubMed tracking + alerts.)'
  return out
}
}
