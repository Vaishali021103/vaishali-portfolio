import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'ai-paper-evaluation',
    title: 'AI-Based Paper Evaluation System',
    shortDescription:
      'Automated subjective answer assessment engine comparing student responses against model answers using semantic and textual similarity techniques.',
    problemSolved:
      'Manual evaluation of subjective academic answers is inherently labor-intensive and prone to grader fatigue and scoring inconsistency across large batches of examination papers.',
    contribution:
      'Engineered the evaluation pipeline utilizing Django and Python NLP modules. Implemented a dual-scoring mechanism combining contextual semantic embeddings (BERT) with cosine similarity alongside lexical token overlap (Jaccard similarity). Designed the scoring workflow without storing redundant student answer data.',
    technologies: [
      'Django',
      'Python',
      'BERT',
      'NLP',
      'Cosine Similarity',
      'Jaccard Similarity',
      'OCR',
    ],
    keyFeatures: [
      'Dual semantic and lexical similarity evaluation architecture',
      'Contextual sentence embeddings powered by pre-trained BERT models',
      'OCR document text extraction pipeline for handwritten and typed scripts',
      'Privacy-conscious evaluation pipeline preventing unnecessary retention of student responses',
    ],
    githubUrl: 'https://github.com/Vaishali021103', // Repository link (configurable)
    liveUrl: undefined, // Research / backend system without public deployment
    isFeatured: true,
    badge: 'NLP & Machine Learning',
    architectureDetails: [
      'Text extraction layer parses scanned or uploaded answer sheets via OCR.',
      'NLP preprocessing pipeline handles tokenization, stop-word reduction, and lemmatization.',
      'BERT embedding layer transforms student answers and reference answers into dense vector spaces.',
      'Scoring module computes semantic similarity matrix and returns calibrated numerical grades.',
    ],
  },
  {
    id: 'blockchain-toll-plaza',
    title: 'Blockchain-Based Toll Plaza Management',
    shortDescription:
      'Decentralized vehicular toll collection infrastructure integrating smart contracts, MetaMask web3 authorization, and Arduino RFID hardware.',
    problemSolved:
      'Conventional highway toll plazas frequently suffer from congestion, manual cash processing delays, lack of auditability, and single-point transaction vulnerabilities.',
    contribution:
      'Developed the smart contract logic in Solidity to handle automated toll deductions and balance checks. Integrated web3 frontend workflows in React with MetaMask and connected serial inputs from Arduino RFID hardware scanners for vehicle verification.',
    technologies: [
      'React',
      'Solidity',
      'Truffle',
      'Ganache',
      'MetaMask',
      'Web3.js',
      'Arduino RFID',
    ],
    keyFeatures: [
      'Solidity smart contract orchestrating transparent and tamper-resistant toll payments',
      'Hardware integration with Arduino RFID sensors for automated vehicle tag identification',
      'React web dashboard for toll operators and motorists to inspect ledger transactions',
      'Local blockchain deployment and automated contract testing with Truffle and Ganache',
    ],
    githubUrl: 'https://github.com/Vaishali021103', // Repository link (configurable)
    liveUrl: undefined, // Requires physical hardware and Ganache testnet
    isFeatured: true,
    badge: 'Web3 & IoT Hardware',
    architectureDetails: [
      'RFID reader registers vehicle tag ID upon arrival at the gate.',
      'Client application queries vehicle registry mapped on the blockchain.',
      'Smart contract executes deduction transaction on Ethereum-compatible testnet.',
      'Real-time confirmation triggers gate signal and records immutable audit receipt.',
    ],
  },
  {
    id: 'employee-batch-processing',
    title: 'Employee Batch Processing System',
    shortDescription:
      'High-throughput asynchronous background job processor engineered to handle batch ingestion and operations on ~6,000 employee records.',
    problemSolved:
      'Executing bulk data mutations and reporting over thousands of records synchronously in standard web requests blocks Node.js event loops, leading to gateway timeouts and potential database lock contention.',
    contribution:
      'Architected a distributed background worker pipeline using Node.js, Express, and Bull queue with Redis. Segmented ~6,000 employee payloads into manageable job slices, configured worker concurrency, and implemented Bull Board for real-time monitoring and failure recovery.',
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'Bull Queue',
      'Redis',
      'Bull Board',
    ],
    keyFeatures: [
      'Asynchronous job queue processing ~6,000 employee records with zero event-loop blocking',
      'Configurable concurrency limits, retry intervals, and backoff policies for transient errors',
      'Interactive Bull Board dashboard providing granular visibility into waiting, active, and failed jobs',
      'Optimized MongoDB batch write queries minimizing roundtrip latency and write operations',
    ],
    githubUrl: 'https://github.com/Vaishali021103', // Repository link (configurable)
    liveUrl: undefined, // Internal backend service
    isFeatured: true,
    badge: 'Distributed Systems & Queues',
    architectureDetails: [
      'Express endpoint receives batch payload and enqueues jobs to Bull Redis queue.',
      'Worker pool pulls jobs with controlled concurrency to prevent database saturation.',
      'MongoDB Atlas bulk write operations commit validated employee updates in chunks.',
      'Bull Board surfaces real-time queue throughput, failure rates, and job retries.',
    ],
  },
  {
    id: 'challengers-academy',
    title: 'ChallengersAcademy',
    shortDescription:
      'Modern educational web application focused on interactive learning resources and structured academic course presentation.',
    problemSolved:
      'Students often need a streamlined, clutter-free web portal to browse course curricula, view instructional materials, and track academic progression.',
    contribution:
      'Developed responsive frontend interfaces in React, implementing modular component architecture, navigation routers, and accessible layout patterns.',
    technologies: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    keyFeatures: [
      'Clean course discovery and categorized curriculum views',
      'Responsive design across mobile, tablet, and widescreen monitors',
      'Modular React component hierarchy for rapid UI expansion',
    ],
    githubUrl: 'https://github.com/Vaishali021103', // Repository link (configurable)
    isFeatured: false,
    badge: 'Educational Frontend',
  },
  {
    id: 'passop',
    title: 'PassOP — Secure Password Manager',
    shortDescription:
      'Client-side password management utility designed for intuitive credential storage, instant searching, and safe clipboard copying.',
    problemSolved:
      'Remembering diverse credentials often results in poor password hygiene; users benefit from a lightweight, fast local interface for managing credentials.',
    contribution:
      'Built a fast React web interface providing real-time search filtering, secure masked credential fields, one-click clipboard copying with visual confirmation, and persistent storage.',
    technologies: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
    keyFeatures: [
      'Masked password reveals with toggle visibility controls',
      'One-click clipboard copy with timed toast feedback',
      'Instant client-side credential filtering and responsive table/card layout',
    ],
    githubUrl: 'https://github.com/Vaishali021103', // Repository link (configurable)
    isFeatured: false,
    badge: 'Web Utility',
  },
];
