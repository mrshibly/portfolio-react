export const portfolioData = {
  hero: {
    name: "Md. Mahmudur Rahman",
    badge: "AI Systems Architect & NASA Space Apps Winner",
    title: "AI Engineer & Python/FastAPI Specialist",
    tagline: "Architecting autonomous multi-agent systems, production RAG pipelines, and high-throughput backend infrastructure.",
    bio: "I am an AI Engineer specializing in autonomous multi-agent workflows, Large Language Model orchestration, and high-concurrency backend services. With over 7 years of combined experience across software engineering, technical leadership, and international coordination, I bridge the gap between cutting-edge AI research and production-grade automation.",
    location: "Dhaka, Bangladesh (GMT+6)",
    status: "Available for High-Impact AI & Engineering Roles",
    cvLink: "/mahmudur_rahman_cv.pdf",
    avatar: "/profile.png"
  },
  stats: [
    { label: "Systems Engineered", value: "25+", desc: "Production AI & Backends" },
    { label: "Agentic Automations", value: "150+", desc: "n8n & Swarm Pipelines" },
    { label: "Engineering Experience", value: "07+ Yrs", desc: "Software & Global Ops" },
    { label: "NASA & Global Awards", value: "03x", desc: "NASA Space Apps & Google" }
  ],
  affiliations: [
    "NASA Space Apps Global Nominee",
    "Google Hacking Contest Champion",
    "Betopia Group / Softvence",
    "BASIS Student Forum",
    "Daffodil International University",
    "Creative IT Institute",
    "Red Crescent Youth",
    "Cisco Networking Academy"
  ],
  projects: [
    {
      id: "song-automation-n8n",
      title: "Song-Automation-N8N",
      category: "Workflow Automation",
      tagline: "Enterprise asynchronous AI music, lyrics & video generation pipeline",
      desc: "An asynchronous pipeline orchestrating Salla store webhooks, Claude 3.5 Sonnet lyric generation, Suno V4 audio synthesis, Flux image generation, and a custom FastAPI/Whisper video rendering microservice with Telegram review gates.",
      tags: ["n8n", "FastAPI", "Whisper", "Claude 3.5", "Suno AI", "Webhooks"],
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/Song-Automation-N8N",
      featured: true,
      stars: 1,
      metrics: "Fully Autonomous Multi-Modal Generation",
      highlights: [
        "Asynchronous webhook consumer handling high-volume order events with retry queues",
        "Human-in-the-loop Telegram approval gate allowing instant operator review before final render",
        "Custom video rendering microservice synchronizing subtitle typography with Whisper audio stamps"
      ],
      mermaid: `flowchart TD
    classDef intake fill:#e1f5fe,stroke:#0288d1,stroke-width:2px;
    classDef ai fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px;
    classDef micro fill:#e8f5e9,stroke:#388e3c,stroke-width:2px;
    classDef hitl fill:#fff3e0,stroke:#f57c00,stroke-width:2px;
    classDef delivery fill:#ffebee,stroke:#c62828,stroke-width:2px;

    subgraph Intake ["1. Order Intake & DB Synchronization"]
        A["Salla Store Webhook"] --> B["Signature Verification & Parsing"]
        B --> C["Supabase Idempotency Check"]
        C --> D["Store Order in Database"]
    end

    subgraph AI_Orchestration ["2. Multi-Modal AI Generation"]
        D --> E["Claude 3.5 API\\n(Poetic Lyric Writing)"]
        E --> F["Suno V4 AI\\n(Music Synthesis Trigger)"]
        F --> G["Asynchronous Wait Node\\n(Polling KIE API)"]
        G --> H["Flux Schnell via Replicate\\n(Lyrics-Aware Cover Art)"]
    end

    subgraph Video_Service ["3. Python Rendering Microservice"]
        H --> I["FastAPI Microservice\\n(Async Background Processing)"]
        I --> J["Stable-Whisper AI\\n(Word-Level Timestamp Sync)"]
        J --> K["Arabic Reshaper & FFmpeg\\n(RTL Typography & H.264 Video)"]
    end

    subgraph Approval ["4. Human-in-the-Loop Gate"]
        K --> L["Telegram Approval Bot\\n(Interactive Inline Buttons)"]
        L -- "Reject / Retry" --> M["State Increment & Re-route"]
        M --> E
    end

    subgraph Delivery ["5. Automated Fulfillment"]
        L -- "Approve" --> N["Update Supabase Status"]
        N --> O["Karzoun WhatsApp API\\n(Direct Customer Delivery)"]
    end

    class A,B,C,D intake;
    class E,F,G,H ai;
    class I,J,K micro;
    class L,M hitl;
    class N,O delivery;`,
      architectureSteps: [
        { node: "Salla Webhook", desc: "Captures new customer song dedication and thematic order" },
        { node: "n8n Orchestrator", desc: "Dispatches Claude 3.5 for lyrics and Suno V4 for audio stems" },
        { node: "Telegram Approval Gate", desc: "Interactive bot sends audio preview to operator for 1-click QA" },
        { node: "Whisper + Video Service", desc: "FastAPI generates synchronized lyric typography video" }
      ]
    },
    {
      id: "phantomapi",
      title: "PhantomAPI",
      category: "AI Infrastructure",
      tagline: "OpenAI-compatible API gateway bridge powered by FastAPI & Playwright",
      desc: "A production reverse-engineered bridge transforming ChatGPT's web session interface into a full OpenAI-compatible API gateway. Built to enable zero-cost local LLM integration for n8n automations, multi-agent swarms, and client applications.",
      tags: ["FastAPI", "Playwright", "Python", "Docker", "SSE Streaming", "n8n"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/PhantomAPI",
      featured: true,
      stars: 8,
      metrics: "50,000+ Automated Invocations Executed",
      highlights: [
        "Headless browser pool manager with auto-reconnection and session keep-alive",
        "Full OpenAI v1/chat/completions specification compatibility including Server-Sent Events (SSE)",
        "Integrated rate limiting and proxy rotation to guarantee high availability"
      ],
      mermaid: `flowchart TD
    classDef client fill:#e1f5fe,stroke:#0288d1,stroke-width:2px;
    classDef gw fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px;
    classDef worker fill:#e8f5e9,stroke:#388e3c,stroke-width:2px;
    classDef stream fill:#fff3e0,stroke:#f57c00,stroke-width:2px;

    subgraph ClientLayer ["1. Client Requests"]
        C1["n8n Agent"] --> API["POST /v1/chat/completions"]
        C2["Custom AI App"] --> API
    end

    subgraph Gateway ["2. FastAPI Proxy & Token Manager"]
        API --> V["Pydantic Validation & Token Cache"]
        V --> Q["Async Request Queue"]
    end

    subgraph BrowserPool ["3. Playwright Headless Worker Pool"]
        Q --> P1["Worker Node #1 (Session Keep-Alive)"]
        Q --> P2["Worker Node #2 (Session Keep-Alive)"]
        P1 --> DOM["ChatGPT Web DOM Interface"]
        P2 --> DOM
    end

    subgraph StreamLayer ["4. SSE Real-Time Streaming"]
        DOM --> SSE["Token Mutation Observer"]
        SSE --> StreamOut["Server-Sent Events (SSE) Stream"]
        StreamOut --> C1
    end

    class C1,C2,API client;
    class V,Q gw;
    class P1,P2,DOM worker;
    class SSE,StreamOut stream;`,
      architectureSteps: [
        { node: "Client / Agent", desc: "Sends standard OpenAI POST /v1/chat/completions payload" },
        { node: "FastAPI Gateway", desc: "Validates schema, checks token cache, manages rate limits" },
        { node: "Playwright Worker Pool", desc: "Injects prompt into authenticated headless web session" },
        { node: "SSE Stream Parser", desc: "Intercepts DOM tokens in real-time and streams chunks back" }
      ]
    },
    {
      id: "apex-hybrid-ai-lab",
      title: "APEX Hybrid AI Lab",
      category: "Multi-Agent Systems",
      tagline: "Local-first autonomous multi-agent platform with self-healing execution loops",
      desc: "A local-first multi-agent orchestration architecture featuring a central routing engine, conversational memory retention, and specialized task agents powered by local LLMs (Gemma/Ollama) with Telegram bot integrations.",
      tags: ["Python", "Multi-Agent", "Ollama", "Local LLMs", "Telegram API", "LangGraph"],
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/APEX-Hybrid-AI-Lab",
      featured: true,
      stars: 1,
      metrics: "Sub-Second Local Agent Routing & Recovery",
      highlights: [
        "Master routing orchestrator dynamically delegating user intents to specialized worker nodes",
        "Self-healing execution loops with automated fallback retries on failed tool executions",
        "Stateful conversational memory layer preserving context across complex multi-turn sessions"
      ],
      mermaid: `flowchart TD
    classDef input fill:#e1f5fe,stroke:#0288d1,stroke-width:2px;
    classDef router fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px;
    classDef agents fill:#e8f5e9,stroke:#388e3c,stroke-width:2px;
    classDef loop fill:#fff3e0,stroke:#f57c00,stroke-width:2px;

    subgraph InputChannel ["1. Inbound Intent"]
        T["Telegram Bot"] --> R["Master Intent Router"]
        CLI["Local CLI"] --> R
    end

    subgraph MemoryContext ["2. Context & Memory"]
        R <--> Mem["Stateful SQLite Memory"]
    end

    subgraph SwarmNodes ["3. Specialized Worker Agents"]
        R --> A1["Coding Agent (DeepSeek-Coder)"]
        R --> A2["Research Agent (Llama 3.3)"]
        R --> A3["Automation Agent (Ollama Local)"]
    end

    subgraph SelfHealing ["4. Validation & Self-Healing Loop"]
        A1 & A2 & A3 --> Critic["Self-Healing Critic Node"]
        Critic -- "Error Detected" --> Retry["Auto-Correct Parameter Injection"]
        Retry --> R
        Critic -- "Verified Output" --> Out["Response Dispatch"]
    end

    class T,CLI input;
    class R,Mem router;
    class A1,A2,A3 agents;
    class Critic,Retry,Out loop;`,
      architectureSteps: [
        { node: "User Input (Telegram/CLI)", desc: "Captures natural language commands & operational goals" },
        { node: "Master Intent Router", desc: "Evaluates task complexity and decomposes into sub-goals" },
        { node: "LangGraph Swarm Nodes", desc: "Specialized worker agents execute parallel tool calls" },
        { node: "Self-Healing Critic", desc: "Verifies outputs, auto-corrects errors before user dispatch" }
      ]
    },
    {
      id: "banglasupport-llm",
      title: "BanglaSupport-LLM",
      category: "Domain LLM / Fine-Tuning",
      tagline: "Fine-tuned Qwen3-8B model with QLoRA & RAG for Bengali e-commerce customer care",
      desc: "An end-to-end specialized customer support model fine-tuned on Bengali e-commerce interaction corpora using QLoRA. Integrates policy retrieval (RAG), agentic function calling, and a streaming FastAPI backend.",
      tags: ["PyTorch", "QLoRA", "Qwen3", "HuggingFace", "FastAPI", "Bengali NLP"],
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/BanglaSupport-LLM",
      featured: true,
      stars: 1,
      metrics: "Published on Hugging Face Hub",
      highlights: [
        "Custom parameter-efficient fine-tuning (PEFT / QLoRA) on multi-turn Bengali support datasets",
        "Hybrid RAG policy verification preventing hallucination in return and warranty answers",
        "Streaming response generation with sub-150ms time-to-first-token inference"
      ],
      mermaid: `flowchart TD
    classDef query fill:#e1f5fe,stroke:#0288d1,stroke-width:2px;
    classDef rag fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px;
    classDef model fill:#e8f5e9,stroke:#388e3c,stroke-width:2px;
    classDef output fill:#fff3e0,stroke:#f57c00,stroke-width:2px;

    subgraph QueryIn ["1. Query Ingestion"]
        Q["Customer Query (Bangla/Banglish)"] --> V["Vector Embedding (bge-m3)"]
    end

    subgraph RAGLayer ["2. Policy Retrieval & Grounding"]
        V --> FAISS["FAISS Index (E-Commerce Policies)"]
        FAISS --> Context["Context Augmentation Engine"]
    end

    subgraph Inference ["3. QLoRA Adapter Inference"]
        Context --> LLM["Qwen3-8B Base Model"]
        LLM <--> LoRA["Fine-Tuned QLoRA Weights"]
    end

    subgraph Streaming ["4. Sub-150ms Delivery"]
        LoRA --> API["FastAPI SSE Response"]
        API --> Client["Customer Chat Widget"]
    end

    class Q,V query;
    class FAISS,Context rag;
    class LLM,LoRA model;
    class API,Client output;`,
      architectureSteps: [
        { node: "Customer Query", desc: "Receives raw Bengali/Banglish e-commerce support inquiry" },
        { node: "Dense Vector Retrieval", desc: "FAISS searches merchant return policies and order database" },
        { node: "QLoRA Adapter Weights", desc: "Qwen3-8B fine-tuned base applies localized tone and empathy" },
        { node: "FastAPI Stream", desc: "Streams tokenized customer response with sub-150ms latency" }
      ]
    },
    {
      id: "eraao-platform",
      title: "ERAAO SaaS Platform",
      category: "Full Stack & SaaS",
      tagline: "Production-grade platform for AI development, cybersecurity, and LMS",
      desc: "A production SaaS-ready platform engineered with FastAPI backend microservices and modern Next.js frontend, providing cybersecurity assessments, AI engineering services, and structured learning management.",
      tags: ["FastAPI", "Next.js", "Python", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/ERAAO",
      featured: true,
      stars: 0,
      metrics: "Live at eraao.com",
      highlights: [
        "Modular FastAPI architecture featuring JWT auth, role-based access control, and PostgreSQL ORM",
        "Interactive course delivery interface with automated progress tracking and quiz verification",
        "High-performance REST API endpoints designed for sub-50ms query response times"
      ],
      architectureSteps: [
        { node: "Next.js 14 Frontend", desc: "Server-side rendered dashboard with Tailwind CSS & Lucide" },
        { node: "FastAPI REST API", desc: "JWT authenticated endpoints with Pydantic validation" },
        { node: "PostgreSQL & Redis", desc: "Indexed relational tables with Redis query caching" },
        { node: "LMS Progress Engine", desc: "Automated module grading, certification generation & analytics" }
      ]
    },
    {
      id: "autonomous-research-agent",
      title: "Autonomous Research Agent",
      category: "Multi-Agent Systems",
      tagline: "Autonomous literature review and academic synthesis swarm",
      desc: "A hierarchical multi-agent research assistant built with LangChain and LangGraph. It queries academic sources (arXiv, PubMed), analyzes multi-page PDF papers, extracts verified citations, and compiles structured markdown monographs in under 3 minutes.",
      tags: ["LangChain", "LangGraph", "FAISS", "BM25", "Python", "RAG"],
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/autonomous-research-agent",
      featured: true,
      stars: 1,
      metrics: "Reduces 10+ Hours of Literature Review into 3 Minutes",
      highlights: [
        "Hierarchical agent layout with dedicated Researcher, Critic, and Synthesizer sub-agents",
        "Automated citation validation against DOI and academic repository indexes",
        "Hybrid dense-sparse retrieval combining SentenceTransformers and BM25 search"
      ],
      architectureSteps: [
        { node: "Research Query", desc: "User inputs complex technical or scientific research prompt" },
        { node: "Paper Ingestion Agent", desc: "Queries arXiv/PubMed APIs and extracts PDF structural text" },
        { node: "Hybrid Search (FAISS+BM25)", desc: "Dense semantic + keyword lookup identifies relevant findings" },
        { node: "Critic & Synthesizer", desc: "Audits DOI citations and compiles structured markdown paper" }
      ]
    },
    {
      id: "llamaocr-pipeline",
      title: "LlamaOCR Pipeline",
      category: "Computer Vision & OCR",
      tagline: "Vision-LLM document intelligence engine with OpenCV preprocessing",
      desc: "A high-precision document extraction engine utilizing Llama 3.3 Vision and OpenCV. Digitizes complex handwritten forms, invoices, and multi-column academic papers into validated JSON schemas with 99.2% extraction accuracy.",
      tags: ["Llama 3.3", "OpenCV", "FastAPI", "Python", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1618042164219-62c820f10723?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/LlamaOCR-Pipeline",
      featured: false,
      stars: 0,
      metrics: "99.2% Extraction Accuracy on Unstructured Forms",
      highlights: [
        "Adaptive thresholding and deskew preprocessing pipeline using OpenCV",
        "Deterministic JSON schema enforcement for zero-format degradation",
        "Asynchronous batch PDF ingestion queue for enterprise throughput"
      ],
      architectureSteps: [
        { node: "Document Upload", desc: "Receives scanned PDF / handwritten form image" },
        { node: "OpenCV Preprocessor", desc: "Applies adaptive thresholding, deskew, and contrast enhancement" },
        { node: "Llama 3.3 Vision", desc: "Extracts tabular structures, key-values, and signatures" },
        { node: "JSON Schema Validator", desc: "Enforces strict Pydantic model types for ERP ingestion" }
      ]
    },
    {
      id: "lexdraft",
      title: "LexDraft Legal RAG",
      category: "NLP / RAG",
      tagline: "High-precision Legal RAG with page-aware grounding & OCR loop",
      desc: "A specialized legal intelligence engine with page-aware citation grounding, automated OCR pipelines, and an active feedback loop that adapts to operator edits and jurisdiction guidelines.",
      tags: ["ChromaDB", "Python", "RAG", "FastAPI", "Docker", "Tesseract"],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/LexDraft",
      featured: false,
      stars: 0,
      metrics: "Exact Page-Grounded Legal Citation Search",
      highlights: [
        "Page-level chunking and metadata preservation for audit-ready citations",
        "OCR fallback layer for legacy scanned court rulings and contractual deeds",
        "Operator preference feedback loop adapting ranking weights over time"
      ]
    },
    {
      id: "real-time-analytics-pipeline",
      title: "Real-Time Analytics Pipeline",
      category: "Distributed Systems",
      tagline: "High-throughput event ingestion engine processing 50M+ events/day",
      desc: "A scalable real-time analytics and personalization pipeline designed to handle over 50M events/day. Features Redis Streams event queues, SQLite/ClickHouse storage, identity resolution, and GDPR-compliant automated purges.",
      tags: ["FastAPI", "Redis Streams", "ClickHouse", "System Design", "Python"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/Real-Time-Analytics-Pipeline",
      featured: false,
      stars: 0,
      metrics: "Engineered for 50M+ Events/Day Throughput",
      highlights: [
        "Asynchronous Redis Stream worker consumers preventing bottlenecks during traffic spikes",
        "Cross-device user identity resolution and stitching logic",
        "Automated GDPR data lifecycle policies and partition purges"
      ]
    },
    {
      id: "minigpt-from-scratch",
      title: "MiniGPT from Scratch",
      category: "Deep Learning Research",
      tagline: "PyTorch decoder-only Transformer language model built from scratch",
      desc: "A complete from-scratch implementation of a GPT-style decoder-only Transformer in PyTorch. Includes custom Byte-Pair Encoding (BPE) tokenization, multi-head self-attention, mixed-precision training, and text generation routines.",
      tags: ["PyTorch", "Transformers", "NLP", "Deep Learning", "Python"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/MiniGPT-from-Scratch",
      featured: false,
      stars: 0,
      metrics: "Custom Tokenizer & Multi-Head Self-Attention",
      highlights: [
        "Handcrafted multi-head causal self-attention mechanism and positional embeddings",
        "Mixed-precision (FP16/AMP) training pipeline with gradient accumulation and checkpointing",
        "Top-k, top-p (nucleus), and temperature sampling generation routines"
      ]
    },
    {
      id: "dealershipms",
      title: "DealershipMS",
      category: "Full Stack & ERP",
      tagline: "Full-stack management system for distribution businesses",
      desc: "A robust Dealership Management System designed for regional distribution companies in Bangladesh. Features inventory tracking, billing, ledger reporting, and role-based operational dashboards.",
      tags: ["FastAPI", "PostgreSQL", "React", "Tailwind CSS", "Python"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/DealershipMS",
      featured: false,
      stars: 0,
      metrics: "Production Inventory & Financial Ledger",
      highlights: [
        "Relational schema optimized with PostgreSQL indexes for fast ledger calculations",
        "Comprehensive inventory aging, consignment tracking, and purchase order flows",
        "Clean responsive management interface built with React and Tailwind CSS"
      ]
    },
    {
      id: "bioacoustic-pneumonia-xai",
      title: "Bioacoustic Pneumonia XAI",
      category: "Healthcare AI / Research",
      tagline: "Explainable AI foundation model for respiratory sound classification",
      desc: "Non-invasive respiratory anomaly classification and explainable acoustic AI model evaluated on the ICBHI 2017 benchmark dataset for clinical diagnostic assistance.",
      tags: ["PyTorch", "Bioacoustics", "XAI", "Signal Processing", "Python"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/bioacoustic-pneumonia-hear-xai",
      featured: false,
      stars: 1,
      metrics: "Benchmarked on ICBHI 2017 Dataset",
      highlights: [
        "Spectrogram feature extraction and audio augmentation pipeline",
        "Integrated Grad-CAM heatmaps explaining model decision boundaries to clinicians",
        "Robust classification performance across noisy clinical recordings"
      ]
    },
    {
      id: "humanizer",
      title: "Humanizer Framework",
      category: "Prompt Engineering / Skills",
      tagline: "Advanced AI text humanization & prompt engineering framework",
      desc: "A comprehensive framework incorporating 45+ stylistic patterns, perplexity/burstiness engineering, and multi-pass self-auditing routines for LLM and agent writing systems.",
      tags: ["Prompt Engineering", "LLMs", "Agent Skills", "Claude Code"],
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/Humanizer",
      featured: false,
      stars: 1,
      metrics: "45+ Curated Stylistic Patterns & Rules",
      highlights: [
        "Perplexity and burstiness optimization for natural linguistic cadence",
        "Cross-agent skills integration for Claude Code, OpenCode, and Antigravity environments",
        "Multi-stage self-audit protocol filtering out robotic boilerplate"
      ]
    },
    {
      id: "stayease-agent",
      title: "StayEase Conversational AI",
      category: "Conversational AI",
      tagline: "Conversational booking assistant for short-term rentals",
      desc: "An intelligent rental assistant developed with FastAPI and LangChain, supporting live unit queries, automated reservation booking, and local recommendation lookups in Bangladesh.",
      tags: ["FastAPI", "LangChain", "PostgreSQL", "Python"],
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/StayEase",
      featured: false,
      stars: 0,
      metrics: "Natural Language Property Search & Booking",
      highlights: [
        "Contextual tool-calling interface checking database availability in real time",
        "Multi-lingual prompt handling for English and localized terminology",
        "FastAPI backend with structured JSON schema responses"
      ]
    }
  ],
  competencies: [
    {
      title: "Autonomous Multi-Agent Systems",
      desc: "Architecting resilient reasoning swarms using LangChain, LangGraph, CrewAI, and AutoGen. Expert in self-healing execution loops, dynamic task routing, and stateful memory.",
      icon: "Network",
      accent: "#2563EB",
      badge: "Core Specialty"
    },
    {
      title: "Production RAG & Vector Intelligence",
      desc: "Engineering high-precision semantic search and retrieval pipelines with FAISS, ChromaDB, hybrid dense-sparse indexing, and hallucination-prevention verification.",
      icon: "Database",
      accent: "#0284C7",
      badge: "High Precision"
    },
    {
      title: "High-Throughput Backend Infrastructure",
      desc: "Designing low-latency, asynchronous microservices and API gateways with Python, FastAPI, WebSockets, Redis Streams, and Docker.",
      icon: "Server",
      accent: "#4F46E5",
      badge: "Sub-50ms Latency"
    },
    {
      title: "Enterprise Workflow Automation",
      desc: "Building end-to-end automated business operations, lead generation swarms, and webhook processors using n8n (Expert), Playwright, and custom microservices.",
      icon: "Cpu",
      accent: "#059669",
      badge: "n8n Expert"
    },
    {
      title: "Document AI & Computer Vision",
      desc: "Transforming unstructured forms, invoices, and handwriting into validated JSON schemas using Llama 3.3 Vision, OpenCV, and layout analysis.",
      icon: "Brain",
      accent: "#D97706",
      badge: "Multimodal AI"
    },
    {
      title: "Cyber Security & Red Teaming",
      desc: "Two-time Google Hacking Contest Champion with strong background in penetration testing, CTF problem development, and API security hardening.",
      icon: "Shield",
      accent: "#DC2626",
      badge: "2x Champion"
    }
  ],
  techCategories: [
    {
      name: "AI, Agents & LLMs",
      skills: [
        { name: "LangChain", icon: "Bot", category: "Agentic" },
        { name: "LangGraph", icon: "GitFork", category: "Orchestration" },
        { name: "CrewAI", icon: "Users", category: "Agentic" },
        { name: "Llama 3.3 / Qwen", icon: "Sparkles", category: "LLM" },
        { name: "Groq / vLLM", icon: "Zap", category: "Inference" },
        { name: "PyTorch", icon: "Flame", category: "Deep Learning" },
        { name: "HuggingFace", icon: "Smile", category: "Ecosystem" },
        { name: "Prompt Engineering", icon: "Code", category: "Reasoning" }
      ]
    },
    {
      name: "Backend & Systems",
      skills: [
        { name: "Python", icon: "Code", category: "Language (Expert)" },
        { name: "FastAPI", icon: "Zap", category: "Framework (Expert)" },
        { name: "WebSockets & SSE", icon: "Activity", category: "Real-Time" },
        { name: "Playwright", icon: "Eye", category: "Automation" },
        { name: "Docker", icon: "Box", category: "Containerization" },
        { name: "Linux / Kali / Ubuntu", icon: "Terminal", category: "Environment" },
        { name: "C / C++ / Java", icon: "Code", category: "Languages" }
      ]
    },
    {
      name: "Data & Vectors",
      skills: [
        { name: "FAISS", icon: "Search", category: "Vector DB" },
        { name: "ChromaDB", icon: "Database", category: "Vector DB" },
        { name: "PostgreSQL", icon: "HardDrive", category: "Relational SQL" },
        { name: "MongoDB", icon: "Layers", category: "NoSQL" },
        { name: "Redis / Redis Streams", icon: "Zap", category: "Cache & Queue" },
        { name: "OpenCV", icon: "Camera", category: "Vision" }
      ]
    },
    {
      name: "Automation & Web",
      skills: [
        { name: "n8n (Expert)", icon: "Workflow", category: "Workflow" },
        { name: "Make / Zapier", icon: "Shuffle", category: "Integration" },
        { name: "React", icon: "Component", category: "Frontend" },
        { name: "Tailwind CSS", icon: "Palette", category: "Styling" },
        { name: "Git & GitHub Actions", icon: "GitBranch", category: "CI/CD" }
      ]
    }
  ],
  experience: [
    {
      title: "AI Developer",
      company: "Betopia Group (associated with Softvence Agency)",
      location: "Dhaka, Bangladesh",
      duration: "Feb 2026 — Present",
      type: "Full-Time",
      desc: "Leading the development and production deployment of AI-native platforms, multi-agent reasoning swarms, and high-concurrency FastAPI microservices.",
      highlights: [
        "Architected multi-agent reasoning workflows reducing manual verification cycles by 75%",
        "Engineered production FastAPI microservices handling asynchronous document analysis and vision models",
        "Optimized inference throughput for open-source foundation models (Llama 3.3, Mistral) using Groq hardware and vLLM"
      ],
      icon: "Brain"
    },
    {
      title: "IT Specialist & International Coordinator",
      company: "GM Organization",
      location: "Dhaka, Bangladesh",
      duration: "Jan 2019 — Jan 2026 (7 Years 1 Month)",
      type: "Full-Time / Contract",
      desc: "Orchestrated global communications, technical infrastructure, and digital asset governance for over 7 years across multiple multinational programs.",
      highlights: [
        "Managed cross-border technical communication and liaised with international partners and delegates",
        "Maintained high-availability communications infrastructure and secure digital channels",
        "Spearheaded digital tool migration and security audit protocols across internal team platforms"
      ],
      icon: "Globe"
    },
    {
      title: "Founder & Lead Architect",
      company: "SETU Student Freelance Marketplace",
      location: "Dhaka, Bangladesh",
      duration: "2023 — 2024",
      type: "Startup",
      desc: "Founded an innovative marketplace platform connecting student software engineers and designers with verified local businesses for commercial micro-projects.",
      highlights: [
        "Selected as Grand Finalist in the DIU Accelerator Cup 2023",
        "Engineered full-stack portal with automated escrow payout gates and credential verification"
      ],
      icon: "Rocket"
    }
  ],
  leadership: [
    {
      title: "Lead Executive & CTF Developer",
      org: "Cyber Security Club & Center — DIU",
      duration: "Sept 2024 — Jan 2026 (1 year 5 months)",
      desc: "Directed cybersecurity workshops and threat-hunting bootcamps; authored real-world Capture-The-Flag (CTF) challenges for hundreds of collegiate participants.",
      icon: "ShieldAlert"
    },
    {
      title: "Campus Ambassador",
      org: "Creative IT Institute (CIT)",
      duration: "June 2023 — Jan 2026 (2 years 8 months)",
      desc: "Represented CIT across campus, organizing technical seminars, hackathon registrations, and institutional skill-building programs.",
      icon: "Megaphone"
    },
    {
      title: "Executive Member",
      org: "BASIS Student's Forum — DIU Chapter",
      duration: "Nov 2024 — Jan 2026 (1 year 3 months)",
      desc: "Represented national software industry association at university level, organizing industry roundtables and tech symposiums.",
      icon: "Award"
    },
    {
      title: "Volunteer & Rescue Specialist",
      org: "Red Crescent Youth (Government Laboratory Unit)",
      duration: "Active Volunteer Service",
      desc: "Completed Lite Search & Rescue Training; organized community emergency response readiness, blood drives, and disaster drills.",
      icon: "HeartHandshake"
    }
  ],
  certifications: [
    {
      title: "NASA Space Apps Challenge — Winner & Global Nominee",
      issuer: "NASA (National Aeronautics and Space Administration)",
      date: "2024",
      category: "Global Competition",
      desc: "Awarded Regional Winner (Rajshahi Zone) and Global Nominee status for architecting an innovative aerospace data system.",
      link: "https://www.spaceappschallenge.org/",
      icon: "Trophy",
      accent: "#2563EB"
    },
    {
      title: "NASA Space Apps Challenge — Regional 2nd Runner-Up",
      issuer: "NASA Space Apps (Sylhet Zone)",
      date: "2023",
      category: "Global Competition",
      desc: "Recognized as 2nd Runner-Up for designing an AI-driven planetary science data visualization pipeline.",
      link: "https://www.spaceappschallenge.org/",
      icon: "Medal",
      accent: "#0284C7"
    },
    {
      title: "Google Hacking Contest — 2x Champion",
      issuer: "Google Security Community / Tech Festivals",
      date: "2022 & 2023",
      category: "Cyber Security",
      desc: "Two-time consecutive champion in ethical hacking, web vulnerability analysis, and real-time defense challenges.",
      link: "https://github.com/mrshibly",
      icon: "ShieldCheck",
      accent: "#DC2626"
    },
    {
      title: "Introduction to Cyber Security",
      issuer: "Cisco Networking Academy",
      date: "Certified",
      category: "Security Credential",
      desc: "Foundational credential covering network perimeter defense, cryptography, and threat mitigation.",
      link: "",
      icon: "Lock",
      accent: "#059669"
    },
    {
      title: "Microsoft AI Skills Fest",
      issuer: "Microsoft",
      date: "Certified",
      category: "AI & ML",
      desc: "Training in modern enterprise AI solutions, Azure OpenAI services, and responsible AI deployment.",
      link: "",
      icon: "Sparkles",
      accent: "#7C3AED"
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Daffodil International University (DIU)",
      duration: "Jan 2022 — Dec 2025",
      result: "CGPA: 3.63 / 4.00",
      desc: "Rigorous coursework in Artificial Intelligence, Multi-Agent Systems, Algorithms, Advanced Data Structures, and Database Systems.",
      icon: "GraduationCap"
    },
    {
      degree: "Higher Secondary Certificate (HSC) — Science",
      institution: "BirShreshtha Noor Mohammad Public College (BNMPC)",
      duration: "2018 — 2020",
      result: "GPA: 5.00 / 5.00 (Dhaka Board)",
      desc: "Specialized in Higher Mathematics, Physics, and Chemistry.",
      icon: "BookOpen"
    },
    {
      degree: "Secondary School Certificate (SSC) — Science",
      institution: "Government Laboratory High School",
      duration: "2013 — 2018",
      result: "GPA: 5.00 / 5.00 (Dhaka Board)",
      desc: "Academic excellence with active participation in Red Crescent Youth and Science Club.",
      icon: "School"
    }
  ],
  contact: {
    email: "mahmudurrahman858@gmail.com",
    academicEmail: "rahman15-5347@diu.edu.bd",
    phone: "+8801517835859",
    location: "Dhanmondi, Dhaka – 1209, Bangladesh",
    headline: "Let's build something extraordinary together.",
    subtext: "I am actively open to high-impact AI Engineering roles, architectural consultations, and specialized autonomous multi-agent contract projects worldwide.",
    linkedin: "https://linkedin.com/in/mrshibly",
    github: "https://github.com/mrshibly",
    huggingface: "https://huggingface.co/mrshibly",
    twitter: "https://x.com/mrshibly"
  }
};
