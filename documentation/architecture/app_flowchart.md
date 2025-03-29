flowchart TD
    A[LifeOS: Intelligent Compass for Life's Computable & Uncomputable Dimensions]
    
    A --> B[Capture: Multi-Modal Data Integration]
    B --> B1[Structured Data: Emails, docs, photos, wearables]
    B --> B2[Unstructured Data: Journal entries, emotions, experiences]
    B --> B3[Storage: S3-compatible systems]
    
    A --> C[Process & Analyze]
    C --> C1[AI Processing Pipeline]
    C1 --> C1a[OpenAI: Summaries & Analysis]
    C1 --> C1b[Pinecone: Vector Search & RAG]
    C --> C2[Knowledge Graph]
    C2 --> C2a[Neo4j: Semantic Relationships]
    C2 --> C2b[Typed Links: cause, reflection, etc.]
    
    A --> D[Data Storage]
    D --> D1[PostgreSQL: Structured Objects]
    D --> D2[MongoDB: Event Streams]
    D --> D3[Neo4j: Graph Relations]
    D --> D4[Redis: Caching Layer]
    
    A --> E[Interface & Experience]
    E --> E1[Next.js Frontend]
    E --> E2[Visualizations: D3.js & Chart.js]
    E --> E3[Shadcn UI Components]
    
    A --> F[Privacy & Security]
    F --> F1[Granular Access Control]
    F --> F2[Persona Management]
    F --> F3[E2E Encryption]
    F --> F4[Self-hosting Options]
    
    A --> G[Infrastructure]
    G --> G1[AWS Serverless]
    G --> G2[Turborepo Monorepo]
    G --> G3[CI/CD via GitHub Actions]
    
    A --> H[Uncomputable Space]
    H --> H1[Analog Life Experiences]
    H --> H2[Rational Paradoxes]
    H --> H3[Practical Limits]
    H --> H4[Indeterminacy]