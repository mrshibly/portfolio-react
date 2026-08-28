export const portfolioData = {
  hero: {
    name: "Md. Mahmudur Rahman",
    badge: "Backend, AI & Automation Engineer · NASA Space Apps Winner",
    title: "Backend, AI & Automation Engineer",
    tagline: "Architecting high-concurrency backend services, autonomous multi-agent workflows, and enterprise automation infrastructure.",
    bio: "I specialize in building scalable Python/FastAPI backends, autonomous multi-agent systems (LangGraph, CrewAI), and enterprise workflow automations (n8n, Playwright). Bridging robust software engineering with production AI.",
    location: "Dhaka, Bangladesh (GMT+6)",
    status: "Available for High-Impact AI & Engineering Roles",
    cvLink: "/mahmudur_rahman_cv.pdf",
    avatar: "/profile.png"
  },
  stats: [
    { label: "Systems Engineered", value: "25+", desc: "Production AI & Backends" },
    { label: "Agentic Automations", value: "150+", desc: "n8n & Swarm Pipelines" },
    { label: "Public Repositories", value: "14+", desc: "Verified Open-Source" },
    { label: "NASA & Global Awards", value: "03x", desc: "NASA Space Apps & Google" }
  ],
  affiliations: [
    "Studio Butterfly",
    "Softvence Agency",
    "Betopia Group",
    "NASA Space Apps Global Nominee",
    "Google Hacking Contest Champion",
    "BASIS Student Forum",
    "Daffodil International University",
    "Creative IT Institute",
    "Cyber Security Club DIU"
  ],
  projects: [
    {
      id: "bioacoustic-pneumonia-hear-xai",
      title: "Bioacoustic Pneumonia & Respiratory Disease Detection via AST & XAI",
      category: "Bioacoustic AI / Healthcare ML",
      tagline: "Clinician-interpretable respiratory diagnosis using Audio Spectrogram Transformers and Explainable AI on ICBHI benchmark",
      desc: "A clinician-interpretable bioacoustic diagnostic framework processing auscultation audio and cough sounds to classify respiratory pathologies (Normal, Crackle, Wheeze, Both) under strict patient-aware 5-fold cross-validation (0% data leakage). Reaches 58.65% ICBHI Score (61.99% peak) with Grad-CAM spectrogram heatmaps.",
      tags: ["Audio Spectrogram Transformer", "PyTorch", "Explainable AI (Grad-CAM)", "SMOTE", "Librosa", "ICBHI Benchmark"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/bioacoustic-pneumonia-hear-xai",
      featured: true,
      stars: 2,
      metrics: "58.65% ICBHI Score (61.99% Peak) · 0% Data Leakage",
      highlights: [
        "Audio Spectrogram Transformer (AST) 768-dim embeddings fused with 256-dim Mel/MFCC features",
        "Patient-aware 5-fold stratified group cross-validation protocol eliminating all inter-patient data leakage",
        "Nelder-Mead decision threshold optimization with Grad-CAM spectrogram saliency heatmaps for clinician validation"
      ],
      mermaid: `flowchart TD
    A["Raw ICBHI Respiratory Audio Files"] --> B["Audio Preprocessing & Denoising"]
    B --> B1["50Hz - 4000Hz Bandpass Filter"]
    B --> B2["Spectral Gating Noise Reduction"]
    B --> B3["VAD & Segmentation"]
    
    B3 --> C1["Audio Spectrogram Transformer AST"]
    B3 --> C2["Multi-Resolution Mel-Spectrogram & MFCC Stats"]
    
    C1 --> D1["768-dim Bioacoustic Embeddings"]
    C2 --> D2["256-dim Multi-View Feature Vectors"]
    
    D1 & D2 --> E["Fused Bioacoustic Representation Matrix 1024-dim"]
    
    E --> F["Patient-Aware 5-Fold Stratified Group Split"]
    F --> G["SMOTE Synthetic Feature Resampling"]
    G --> H["Deep Residual Adapter Classifier Net"]
    
    H --> I["Nelder-Mead Decision Threshold Optimization"]
    I --> J["Final Clinical Prediction: Normal / Crackle / Wheeze / Both"]
    
    J --> K1["Grad-CAM Spectrogram Heatmaps"]
    J --> K2["t-SNE Embedding Space Visualization"]`,
      architectureSteps: [
        { node: "Audio Denoising", desc: "Applies 50Hz-4000Hz bandpass and spectral gating noise reduction" },
        { node: "Feature Fusion", desc: "Fuses AST 768-dim global embeddings with 256-dim Mel/MFCC statistics" },
        { node: "Patient-Aware Split", desc: "Strict 5-fold grouping preventing cross-fold patient leakage" },
        { node: "XAI Saliency", desc: "Generates Grad-CAM frequency-time heatmaps for doctor validation" }
      ]
    },
    {
      id: "song-automation-n8n",
      title: "Song-Automation-N8N",
      category: "Workflow Automation",
      tagline: "Enterprise asynchronous AI music, lyrics & video generation pipeline",
      desc: "An asynchronous pipeline orchestrating Salla store webhooks, Claude 3.5 Sonnet lyric generation, Suno V4 audio synthesis, Flux image generation, and a custom FastAPI/Whisper video rendering microservice with Telegram review gates.",
      tags: ["n8n", "FastAPI", "Whisper", "Claude 3.5", "Suno AI", "Telegram Bot"],
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
    end`,
      architectureSteps: [
        { node: "Salla Webhook", desc: "Captures new customer song dedication and thematic order" },
        { node: "n8n Orchestrator", desc: "Dispatches Claude 3.5 for lyrics and Suno V4 for audio stems" },
        { node: "Telegram Approval Gate", desc: "Interactive bot sends audio preview to operator for 1-click QA" },
        { node: "Whisper + Video Service", desc: "FastAPI generates synchronized lyric typography video" }
      ]
    },
    {
      id: "autonomous-research-agent",
      title: "Autonomous AI Research Agent",
      category: "Multi-Agent Systems",
      tagline: "Multi-agent swarm that autonomously investigates topics, parses academic papers, and synthesizes cited reports",
      desc: "A production-grade multi-agent research system that coordinates Planner, Search, Paper (PDF parsing), Summarizer, Critic, and Writer agents. Implements Hybrid RAG (SentenceTransformers + FAISS + BM25 with Reciprocal Rank Fusion) and WebSockets live streaming.",
      tags: ["Multi-Agent", "LangChain", "FAISS", "FastAPI", "WebSockets", "BM25 Hybrid RAG"],
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/autonomous-research-agent",
      liveDemo: "https://huggingface.co/spaces/mrshibly/autonomous-research-agent",
      featured: true,
      stars: 3,
      metrics: "Live on HuggingFace Spaces · Multi-Agent Critic Loop",
      highlights: [
        "6-agent collaborative swarm executing automated literature reviews and structured extraction",
        "Hybrid RAG engine combining dense vector embeddings (FAISS) and BM25 sparse retrieval via RRF",
        "Real-time WebSockets streaming timeline providing interactive visibility into agent reasoning states"
      ],
      mermaid: `flowchart TD
    subgraph Swarm ["1. Multi-Agent Planning & Discovery"]
        A["Planner Agent"] -->|Research Queries| B["Search Agent (Academic Sources)"]
        B -->|Paper URLs & DOIs| C["Paper Agent (PDF Ingestion & OCR)"]
    end

    subgraph Hybrid_RAG ["2. Hybrid Dense + Sparse Retrieval"]
        C -->|Extracted Text| D1["FAISS Vector Store (SentenceTransformers)"]
        C -->|Raw Tokens| D2["BM25 Sparse Keyword Index"]
        D1 & D2 --> D3["Reciprocal Rank Fusion (RRF)"]
    end

    subgraph Synthesis ["3. LLM Reasoning & Critic Loop"]
        D3 --> E["Summarizer Agent (Technical Insights)"]
        E --> F["Critic Agent (Factual & Citation Verification)"]
        F -- "Revision Needed" --> G["Writer Agent (Report Drafting)"]
        G --> F
        F -- "Passed Validation" --> H["Final Research Report with Citations"]
    end`,
      architectureSteps: [
        { node: "Planner & Search", desc: "Formulates search queries and queries academic repositories" },
        { node: "PDF Ingestion", desc: "Extracts full text and tabular data from academic papers" },
        { node: "Hybrid RAG (FAISS + BM25)", desc: "Ranks findings using reciprocal rank fusion" },
        { node: "Critic Loop", desc: "Audits citation accuracy before generating structured report" }
      ]
    },
    {
      id: "data-analyst-agent",
      title: "Lumina Analyst — Autonomous AI Data Analyst",
      category: "Autonomous AI Agents",
      tagline: "Autonomous data analyst agent for predictive ML modeling, interactive Plotly studio, and executive reporting",
      desc: "A high-performance autonomous AI data analyst featuring an AST-sandboxed Python execution environment, Scikit-Learn linear regression & Isolation Forest anomaly detection, automatic Groq multi-model rate-limit failover, and one-click executive PDF report generation.",
      tags: ["FastAPI", "Python", "React 19", "TypeScript", "Scikit-Learn", "Plotly", "Groq"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/data-analyst-agent",
      featured: true,
      stars: 2,
      metrics: "17 Automated Test Suites · Zero-Downtime Multi-Model Failover",
      highlights: [
        "AST-sandboxed Python code execution sandbox preventing unsafe system operations during pandas analysis",
        "Multi-model failover engine automatically rotating between Llama 3.3 70B, Mixtral 8x7B, and Llama 3.1 8B",
        "Interactive Plotly chart studio with 1-click executive PDF export containing KPI summaries"
      ],
      mermaid: `flowchart TD
    User["User Browser UI (React 19 / TS)"] -->|HTTP / SSE Stream| API["FastAPI Backend Gateway"]
    API --> Orchestrator["Agent Orchestrator"]
    Orchestrator --> LLM["Multi-Model Groq / OpenAI Engine (Auto-Failover)"]
    
    LLM --> Router["Tool Router & Function Calling"]
    
    subgraph Sandboxes ["Specialized Tool Sandboxes"]
        Router --> T1["File Loader (CSV / Excel / Parquet)"]
        Router --> T2["AST-Sandboxed Python Executor"]
        Router --> T3["Dynamic Plotly Chart Studio"]
        Router --> T4["AI Data Imputation & Cleaning"]
        Router --> T5["Predictive ML (Regression & Isolation Forest)"]
    end
    
    T1 & T2 & T3 & T4 & T5 --> Synth["Results & Interactive Payload Synthesis"]
    Synth --> Frontend["Frontend Rendering (Plotly + KPI Cards + PDF Export)"]`,
      architectureSteps: [
        { node: "FastAPI Gateway", desc: "Handles multipart dataset uploads and SSE streaming responses" },
        { node: "Failover Engine", desc: "Rotates models across Groq endpoints on rate limit triggers" },
        { node: "Python AST Sandbox", desc: "Executes mathematical and dataframe operations securely" },
        { node: "PDF Exporter", desc: "Compiles styled executive summary reports with embedded charts" }
      ]
    },
    {
      id: "rag-assistant-fastapi",
      title: "Mini AI Assistant (Production RAG & Tool Calling)",
      category: "Production RAG / Microservices",
      tagline: "Production FastAPI RAG assistant with ChromaDB, FastEmbed, Groq LLM, and dynamic tool calling",
      desc: "High-throughput FastAPI microservice with document ingestion (PDF, Markdown), fastembed BGE-small embeddings, persistent ChromaDB collections, conversational session memory, and automatic order/product tool calling.",
      tags: ["FastAPI", "ChromaDB", "FastEmbed", "Groq Llama-3.3", "LangChain", "Docker"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/rag-assistant-fastapi",
      liveDemo: "https://rag-assistant-fastapi.onrender.com/docs",
      featured: true,
      stars: 2,
      metrics: "Live on Render · Sub-200ms Embedding Retrieval",
      highlights: [
        "ONNX-quantized FastEmbed (BGE-small-en-v1.5) executing high-speed vector embeddings without PyTorch overhead",
        "Dual pipeline architecture supporting both knowledge-grounded RAG and deterministic tool invocation",
        "Full OpenAPI interactive documentation and health monitoring endpoints"
      ],
      mermaid: `flowchart TD
    subgraph Ingestion ["1. Document Ingestion Pipeline"]
        I1["Upload Document (PDF / TXT / MD)"] --> I2["PyPDF2 / Text Extract"]
        I2 --> I3["RecursiveCharacterTextSplitter"]
        I3 --> I4["FastEmbed BGE-small Embeddings"]
        I4 --> I5["ChromaDB Vector Collection"]
    end

    subgraph Retrieval ["2. Chat & Retrieval Pipeline"]
        C1["User Message (ChatRequest)"] --> C2["Load Session Memory (MemoryService)"]
        C2 --> C3["Retrieve Semantic Context (ChromaDB)"]
        C3 --> C4["Groq Llama-3.3-70B Orchestrator"]
        
        C4 --> B1["Tool Calling (Orders / Products DB)"]
        C4 --> B2["RAG Contextual Synthesis"]
        C4 --> B3["Direct Knowledge Response"]
        
        B1 & B2 & B3 --> M1["Update Conversation Memory"]
        M1 --> R1["Return Response Payload (ChatResponse)"]
    end`,
      architectureSteps: [
        { node: "FastEmbed ONNX", desc: "Generates vector embeddings locally with zero PyTorch dependency" },
        { node: "ChromaDB Storage", desc: "Persists document chunks into collections for sub-second retrieval" },
        { node: "Memory Service", desc: "Maintains conversational session state across turns" },
        { node: "Tool Router", desc: "Executes real-time order/product database lookups via LLM function calling" }
      ]
    },
    {
      id: "phantomapi",
      title: "PhantomAPI — Reverse AI Gateway",
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
    end`,
      architectureSteps: [
        { node: "Client / Agent", desc: "Sends standard OpenAI POST /v1/chat/completions payload" },
        { node: "FastAPI Gateway", desc: "Validates schema, checks token cache, manages rate limits" },
        { node: "Playwright Worker Pool", desc: "Injects prompt into authenticated headless web session" },
        { node: "SSE Stream Parser", desc: "Intercepts DOM tokens in real-time and streams chunks back" }
      ]
    },
    {
      id: "banglasupport-llm",
      title: "BanglaSupport-LLM (QLoRA Domain Fine-Tuning)",
      category: "LLM Fine-Tuning & NLP",
      tagline: "QLoRA fine-tuned Qwen2.5/3-8B model with RAG and agentic SQLite tool calling for Bangla e-commerce",
      desc: "Comprehensive domain-specific instruction fine-tuning on 289K curated Bangla datasets using Unsloth (4-bit NF4). Evaluated across BLEU-4, ROUGE-L, and BERTScore with Document RAG vs Fine-Tuning benchmark analysis and SSE streamed React UI.",
      tags: ["Unsloth (QLoRA)", "Qwen", "FastAPI", "ChromaDB", "React", "BERTScore"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/BanglaSupport-LLM",
      featured: true,
      stars: 2,
      metrics: "289K Fine-Tuning Pairs · 4-Bit NF4 Quantization",
      highlights: [
        "End-to-end dataset curation pipeline with NFC Unicode normalization and MinHash LSH deduplication",
        "Comparative benchmark across BLEU-4, ROUGE-L, and BERTScore for Base vs Fine-Tuned vs Fine-Tuned+RAG",
        "Agentic tool-calling workflow with SQLite order status lookup and real-time SSE streaming"
      ],
      mermaid: `flowchart TD
    subgraph DataPrep ["Phase 1: Dataset Pipeline"]
        A1["Bangla-Instruct 342K"] --> A3["Support Intent Filter"]
        A2["Aya Dataset Bengali"] --> A3
        A3 --> A4["NFC Normalization & Dedup"]
        A4 --> A5["Train / Val / Test Split 289K"]
    end

    subgraph Training ["Phase 2: QLoRA Fine-Tuning"]
        A5 --> B1["Qwen3-8B Base Model"]
        B1 --> B2["Unsloth + SFTTrainer 4-bit NF4"]
        B2 --> B3["Merged Model Safetensors / GGUF"]
    end

    subgraph Eval ["Phase 3: Multi-Metric Evaluation"]
        B3 --> C1["BLEU / ROUGE-L"]
        B3 --> C2["BERTScore bangla-bert-base"]
        B3 --> C3["LLM-as-a-Judge 1-5 Scale"]
    end

    subgraph Serving ["Phase 4: RAG, Agent & UI Serving"]
        B3 --> D1["FastAPI SSE Server"]
        D2["ChromaDB Policy Vector Store"] --> D1
        D3["SQLite Order DB Tools"] --> D1
        D1 --> D4["Glassmorphic React UI (Hind Siliguri)"]
    end`,
      architectureSteps: [
        { node: "Dataset Pipeline", desc: "Cleans 342K records with NFC normalization and MinHash deduplication" },
        { node: "Unsloth QLoRA", desc: "Fine-tunes Qwen3-8B in 4-bit NF4 with optimized memory allocation" },
        { node: "Benchmark Eval", desc: "Compares BLEU-4, ROUGE-L, and BERTScore against base model" },
        { node: "SSE Serving", desc: "Serves streamed Bengali responses from FastAPI backend" }
      ]
    },
    {
      id: "eraao",
      title: "ERAAO — Applied AI & Cybersecurity Platform",
      category: "Full-Stack SaaS",
      tagline: "Applied Artificial Intelligence and Offensive Cybersecurity Academy & B2B Consulting Platform",
      desc: "Enterprise-grade Applied AI and Offensive Cybersecurity Learning Academy & B2B Consulting Platform. Built with Next.js 16 (App Router & Turbopack), FastAPI (Python 3.12), PostgreSQL 16, Redis 7 for rate-limiting, and AI assistant security guardrails.",
      tags: ["Next.js 16", "FastAPI", "PostgreSQL 16", "Redis 7", "Python 3.12", "Argon2"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/ERAAO",
      liveDemo: "https://eraao.com",
      featured: true,
      stars: 2,
      metrics: "Live Production on eraao.com · Next.js 16 + FastAPI",
      highlights: [
        "Interactive student portal with cryptographic credential ledger verification (/verify/[id])",
        "AI chatbot assistant with strict prompt injection defense, length sanitization, and grounding guardrails",
        "Full administrative operations center with role elevation and enterprise cybersecurity booking schedules"
      ],
      mermaid: `flowchart TD
    subgraph Frontend ["Client Layer (Vercel)"]
        UI["Next.js 16 (App Router + Turbopack)"]
        UI --> SP["Student Portal & Course Vault"]
        UI --> Admin["Admin Operations Center"]
        UI --> AI["AI Chatbot with Security Guardrails"]
    end

    subgraph Backend ["Backend API Layer (Render)"]
        UI -->|HTTPS / JWT| API["FastAPI Application Server (Python 3.12)"]
        API --> Auth["Argon2 Security & Password Hashing"]
        API --> Redis["Redis 7 (Rate Limiting & Lockout Guard)"]
        API --> ORM["Async SQLAlchemy 2.0 + Alembic"]
    end

    subgraph Data ["Data Persistence Layer"]
        ORM --> DB[("PostgreSQL 16 Relational Database")]
    end`,
      architectureSteps: [
        { node: "Next.js 16 UI", desc: "High-performance student catalog, dashboard, and whitepaper portals" },
        { node: "FastAPI Backend", desc: "Async Python microservices with role-based JWT authentication" },
        { node: "Redis 7 Gate", desc: "Provides IP-based sliding window rate-limiting and session cache" },
        { node: "PostgreSQL 16", desc: "Relational database with automated Alembic schema migrations" }
      ]
    },
    {
      id: "ilmai",
      title: "IlmAI: Scholarly AI Research Engine",
      category: "Semantic Search & NLP",
      tagline: "Scholarly research platform with PostgreSQL pgvector neural semantic search and comparative analysis",
      desc: "Scholarly intelligence platform featuring Next.js 15, FastAPI, Groq Llama 3.3 70B, SentenceTransformers, and PostgreSQL pgvector neural embeddings for cross-madhhab analysis and academic report export.",
      tags: ["Next.js 15", "FastAPI", "PostgreSQL pgvector", "Groq Llama 3.3", "SentenceTransformers"],
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/IlmAI",
      featured: false,
      stars: 1,
      metrics: "PostgreSQL pgvector · Comparative Reasoning Engine",
      highlights: [
        "Neural semantic search understanding conceptual meanings of complex historical texts",
        "Comparative analysis mode generating side-by-side legal scholarship breakdowns",
        "One-click scholarly digital whitepaper exporter with academic citation standards"
      ],
      mermaid: `flowchart TD
    subgraph Client ["Client Layer (Next.js 15)"]
        UI["Next.js Web App"] --> Chat["Chat Interface"]
        UI --> Search["Semantic Search Engine"]
        UI --> Export["Whitepaper Exporter"]
    end

    subgraph Server ["API Layer (FastAPI)"]
        Chat & Search --> API["FastAPI Server"]
        API --> Auth["JWT Session Management"]
    end

    subgraph Intelligence ["Intelligence & Vector DB Layer"]
        API --> Groq["Groq API (Llama 3.3 70B)"]
        API --> Embed["SentenceTransformers / Gemini Embeddings"]
        Embed --> DB[("PostgreSQL Database (pgvector Enabled)")]
    end`,
      architectureSteps: [
        { node: "Semantic Search", desc: "Indexes classical manuscripts with pgvector high-dimensional embeddings" },
        { node: "Comparative Analysis", desc: "Extracts rulings across schools of jurisprudence side-by-side" },
        { node: "Llama 3.3 Inference", desc: "Generates grounded scholarly summaries via Groq acceleration" }
      ]
    },
    {
      id: "minigpt-from-scratch",
      title: "MiniGPT-from-Scratch (124M-Parameter Transformer)",
      category: "Deep Learning & LLM Core",
      tagline: "From-scratch decoder-only Transformer with FlashAttention-2, RoPE, RMSNorm, and SwiGLU",
      desc: "High-performance PyTorch implementation of a 124M parameter language model trained on 10 GB FineWeb-Edu. Features SDPA FlashAttention-2 (>110,000 tokens/sec), RoPE positional embeddings, custom BPE tokenizer, and interactive Gradio UI.",
      tags: ["PyTorch", "FlashAttention-2", "RoPE", "SwiGLU", "Gradio", "CUDA"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/MiniGPT-from-Scratch",
      featured: false,
      stars: 2,
      metrics: "110,000+ tokens/sec · FineWeb-Edu 10GB Trained",
      highlights: [
        "Vectorized Multi-Head FlashAttention-2 with PyTorch SDPA achieving 110,000+ tokens/sec throughput",
        "Modern Llama-style architectural components: Rotary Position Embeddings (RoPE), RMSNorm, and SwiGLU",
        "Zero-overhead streaming I/O with memory-mapped uint16 binary dataset streams and custom BPE tokenizer"
      ],
      mermaid: `flowchart TD
    subgraph Data ["Data & Tokenization"]
        D1["10 GB FineWeb-Edu Corpus"] --> D2["Custom Byte-Pair Encoding (BPE)"]
        D2 --> D3["Memory-Mapped Binary Streams (train.bin / val.bin)"]
    end

    subgraph Architecture ["Transformer Core (124M Params)"]
        D3 --> E["Input Embeddings + RoPE (Rotary Embeddings)"]
        E --> L1["RMSNorm (Pre-Layer Normalization)"]
        L1 --> L2["Vectorized Multi-Head FlashAttention-2 (SDPA)"]
        L2 --> L3["Residual Connection + RMSNorm"]
        L3 --> L4["SwiGLU Feed-Forward Blocks"]
        L4 --> Out["Output Linear Projection & Softmax"]
    end

    subgraph Runtime ["Inference & Web Studio"]
        Out --> G["Gradio Interactive Web UI (Temperature & Top-K)"]
    end`,
      architectureSteps: [
        { node: "Custom BPE", desc: "Trains subword vocabulary and compiles binary uint16 token streams" },
        { node: "RoPE & RMSNorm", desc: "Integrates modern Llama positional embedding and normalization blocks" },
        { node: "FlashAttention-2", desc: "Leverages PyTorch SDPA for 110k+ tokens/sec throughput on GPUs" }
      ]
    },
    {
      id: "real-time-analytics-pipeline",
      title: "Real-Time Personalization Analytics Pipeline",
      category: "Distributed Systems",
      tagline: "Distributed tracking pipeline handling 50M+ events/day with AWS Kinesis, Redis identity stitching, and ClickHouse",
      desc: "Distributed architecture designed for 50M+ daily events with <5s latency. Features AWS Kinesis On-Demand buffer, Redis session identity stitching, ClickHouse columnar OLAP micro-batching, and S3 Parquet archiving.",
      tags: ["AWS Kinesis", "Redis", "ClickHouse", "Fastify", "Docker", "Event-Driven"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/Real-Time-Analytics-Pipeline",
      featured: false,
      stars: 2,
      metrics: "50M+ Events/Day · <5-Second End-to-End Latency",
      highlights: [
        "Ingress gateway built with Fastify handling 10k req/sec on AWS ECS Fargate behind ALB",
        "Real-time anonymous-to-user identity stitching in Redis with state merge and sub-millisecond lookups",
        "Columnar OLAP storage in ClickHouse with micro-batch inserts achieving 5x-10x compression"
      ],
      mermaid: `flowchart TD
    SDK["JS SDK on Client Website"] -->|HTTP POST / sendBeacon| ALB["AWS Application Load Balancer"]
    ALB --> Ingress["Ingress Gateway: Fastify on ECS Fargate"]
    Ingress --> Queue[("AWS Kinesis Data Streams")]
    
    Queue --> StreamProcessor["Stream Processor: Python on ECS Fargate"]
    
    StreamProcessor -->|Identity Stitching & Session Profile| Redis[("AWS ElastiCache Redis Cluster")]
    StreamProcessor -->|Trigger Webhook| PersEngine["Personalization Engine"]
    StreamProcessor -->|Micro-Batch Inserts| ClickHouse[("ClickHouse Cloud OLAP")]
    
    Queue -->|Auto-Archive Raw Events| Firehose["Kinesis Data Firehose"]
    Firehose -->|Parquet Files| S3[("Amazon S3 Raw Data Lake")]
    
    ClickHouse --> Dashboard["Analytics Dashboard & Frontend UI"]
    S3 --> DWH[("Snowflake / BigQuery External Tables")]`,
      architectureSteps: [
        { node: "Ingress Gateway", desc: "Fastify on ECS Fargate buffers incoming tracking payloads into Kinesis" },
        { node: "Identity Stitching", desc: "Merges anonymous browsing sessions with registered accounts in Redis" },
        { node: "ClickHouse OLAP", desc: "Micro-batches events into columnar partitions for sub-second analytical queries" }
      ]
    },
    {
      id: "lexdraft",
      title: "LexDraft: AI Legal Document Processing & Grounded Drafting",
      category: "Document AI",
      tagline: "Adaptive legal document ingestion, citation-grounded drafting, and human-in-the-loop preference learning",
      desc: "Intelligent legal processing system with OpenCV conditioning, OCR extraction, source page-level citations, and semantic preference learning loop that auto-applies operator edit patterns to future drafts.",
      tags: ["FastAPI", "OpenCV", "Tesseract", "Streamlit", "OpenRouter", "RAG"],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/LexDraft",
      featured: false,
      stars: 1,
      metrics: "Self-Improving Human-in-the-Loop Preference Engine",
      highlights: [
        "Adaptive ingestion pipeline processing native PDFs, scanned legal documents, and handwritten annotations",
        "Strictly grounded drafting where every statement is verified with source page-level citations ([1], [2])",
        "Semantic preference engine capturing human operator edits to continuously improve future generation quality"
      ],
      mermaid: `flowchart TD
    subgraph Ingestion ["1. Document Conditioning & OCR"]
        Doc["Legal PDF / Scanned Document"] --> CV["OpenCV Image Preprocessing"]
        CV --> OCR["Tesseract / Poppler Extraction"]
        OCR --> Chunker["Citation Anchor Parser"]
    end

    subgraph Drafting ["2. Grounded Drafting Engine"]
        Chunker --> RAG["Semantic Context Retriever"]
        RAG --> LLM["Drafting LLM (OpenRouter API)"]
        LLM --> Draft["Grounded Legal Draft with Page Citations [1] [2]"]
    end

    subgraph Learning ["3. Human-in-the-Loop Feedback Loop"]
        Draft --> Operator["Legal Operator Review & Edits"]
        Operator --> Diff["Semantic Diff Analyzer"]
        Diff --> Rules["Preference Rule Extractor"]
        Rules --> Memory[("Learned Style & Drafting Memory")]
        Memory --> LLM
    end`,
      architectureSteps: [
        { node: "OpenCV Preprocessor", desc: "Deskews and enhances contrast on legacy court filings" },
        { node: "Citation Anchoring", desc: "Maps extracted legal statements to exact page coordinates" },
        { node: "Learning Loop", desc: "Analyzes human operator diffs to update future generation rules" }
      ]
    },
    {
      id: "setuops-website",
      title: "SETU Ops — Official Agency Platform",
      category: "Workflow Automation",
      tagline: "Official platform for SETU Ops, Bangladesh's AI automation agency",
      desc: "Official web platform for SETU Ops, Bangladesh's AI automation agency. High-conversion web experience showcasing AI chatbots, inventory/ERP sync, and enterprise workflow integrations.",
      tags: ["React", "TailwindCSS", "Automation", "CRM Sync"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      link: "https://github.com/mrshibly/setuops-website",
      liveDemo: "https://setuops.xyz",
      featured: false,
      stars: 1,
      metrics: "Live Production on setuops.xyz",
      highlights: [
        "High-conversion enterprise AI agency portfolio with interactive service architecture showcases",
        "Integrated WhatsApp & multi-channel CRM lead automation triggers",
        "Modern responsive dark/light UI built with React and TailwindCSS"
      ],
      mermaid: `flowchart TD
    Visitor["Enterprise Client"] --> Web["SETU Ops Platform (setuops.xyz)"]
    Web --> Bot["Interactive AI Assistant & Lead Qualifier"]
    Bot --> Webhook["n8n Webhook Gateway"]
    
    subgraph Automations ["SETU Automated Bridges"]
        Webhook --> CRM["HubSpot / CRM Lead Enrichment"]
        Webhook --> Notify["Telegram / WhatsApp Instant Alert"]
        Webhook --> Calendar["Cal.com / Google Calendar Booking"]
    end`,
      architectureSteps: [
        { node: "Lead Qualification", desc: "Interactive AI assistant captures visitor intent and requirements" },
        { node: "n8n Webhook", desc: "Triggers multi-channel notification and CRM record creation" },
        { node: "Calendar Sync", desc: "Automates client discovery call scheduling without manual coordination" }
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
      company: "Studio Butterfly",
      location: "Dhaka, Bangladesh (Remote)",
      duration: "Jul 2026 — Aug 2026",
      type: "Full-Time",
      logo: "/logos/studio_butterfly.png",
      desc: "Architected agentic AI products, autonomous multi-agent reasoning workflows, and enterprise RAG pipelines with Model Context Protocol (MCP) integrations.",
      highlights: [
        "Designed hierarchical multi-agent workflows (research, planning, execution) using LangGraph and LangChain",
        "Engineered production RAG pipelines integrating dense vector databases for precise semantic search",
        "Engineered structured LLM outputs, managed context windows, and minimized hallucinations",
        "Built Agent-to-Agent (A2A) communication protocols and deployed tool-calling (MCP) for autonomous task execution",
        "Optimized API latency and token budgets for high-throughput SaaS backend infrastructure"
      ],
      skills: ["Multi-Agent Systems", "LangGraph", "LangChain", "RAG", "MCP", "FastAPI"],
      icon: "Brain"
    },
    {
      title: "AI Developer",
      company: "Betopia Group / Softvence Agency",
      location: "Dhaka, Bangladesh",
      duration: "Feb 2026 — Jul 2026",
      type: "Full-Time",
      logo: "/logos/softvence.png",
      desc: "Led the development and production deployment of AI-native platforms, multi-agent reasoning swarms, and high-concurrency FastAPI microservices.",
      highlights: [
        "Architected multi-agent reasoning workflows reducing manual verification cycles by 75%",
        "Engineered production FastAPI microservices handling asynchronous document analysis and vision models",
        "Optimized inference throughput for open-source foundation models (Llama 3.3, Mistral) using Groq hardware and vLLM"
      ],
      skills: ["FastAPI", "Python", "Llama 3.3", "Groq", "vLLM", "Docker"],
      icon: "Brain"
    }
  ],
  leadership: [
    {
      title: "Lead Executive & CTF Developer",
      org: "Cyber Security Club & Center — DIU",
      duration: "Sept 2024 — Jan 2026 (1 year 5 months)",
      logo: "/logos/cyber_security_club.png",
      desc: "Directed cybersecurity workshops and threat-hunting bootcamps; authored real-world Capture-The-Flag (CTF) challenges for hundreds of collegiate participants.",
      icon: "ShieldAlert"
    },
    {
      title: "Campus Ambassador",
      org: "Creative IT Institute (CIT)",
      duration: "June 2023 — Jan 2026 (2 years 8 months)",
      logo: "/logos/creative_it.png",
      desc: "Represented CIT across campus, organizing technical seminars, hackathon registrations, and institutional skill-building programs.",
      icon: "Megaphone"
    },
    {
      title: "Executive Member",
      org: "BASIS Student's Forum — DIU Chapter",
      duration: "Nov 2024 — Jan 2026 (1 year 3 months)",
      logo: "/logos/basis_diu.png",
      desc: "Represented national software industry association at university level, organizing industry roundtables and tech symposiums.",
      icon: "Award"
    },
    {
      title: "Volunteer & Rescue Specialist",
      org: "Red Crescent Youth (Government Laboratory Unit)",
      duration: "Active Volunteer Service",
      logo: "/logos/red_crescent.png",
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
      result: "CGPA: 3.64 / 4.00",
      logo: "/logos/diu.png",
      desc: "Rigorous coursework in Artificial Intelligence, Multi-Agent Systems, Algorithms, Advanced Data Structures, and Database Systems.",
      icon: "GraduationCap"
    },
    {
      degree: "Higher Secondary Certificate (HSC) — Science",
      institution: "BirShreshtha Noor Mohammad Public College (BNMPC)",
      duration: "2018 — 2020",
      result: "GPA: 5.00 / 5.00 (Dhaka Board)",
      logo: "/logos/bnmpc.png",
      desc: "Specialized in Higher Mathematics, Physics, and Chemistry.",
      icon: "BookOpen"
    },
    {
      degree: "Secondary School Certificate (SSC) — Science",
      institution: "Government Laboratory High School",
      duration: "2013 — 2018",
      result: "GPA: 5.00 / 5.00 (Dhaka Board)",
      logo: "/logos/govt_lab.png",
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
