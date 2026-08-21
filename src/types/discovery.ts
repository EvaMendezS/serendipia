export type DiscoveryCategory =
  | 'science'
  | 'history'
  | 'geography'
  | 'psychology'
  | 'art'
  | 'technology'
  | 'nature'
  | 'curiosity';

export type DiscoveryDuration =
  | 2
  | 5
  | 10;

export type DiscoveryDifficulty =
  | 'easy'
  | 'medium'
  | 'deep';

export type DiscoverySource = {
  label: string;

  url: string;
};

export type DiscoverySection = {
  title: string;

  body: string;
};

export type DeepDiveSection = {
  title: string;

  body: string;
};

export type Discovery = {
  id: string;

  mapLabel: string;

  title: string;

  eyebrow: string;

  hook: string;

  category: DiscoveryCategory;

  duration: DiscoveryDuration;

  difficulty: DiscoveryDifficulty;

  quick: {
    summary: string;

    takeaway: string;
  };

  standard: {
    sections: DiscoverySection[];

    takeaway: string;
  };

  deepDive?: {
    duration: number;

    intro: string;

    sections: DeepDiveSection[];

    closing: string;
  };

  relatedTopics: string[];

  relatedDiscoveryIds: string[];

  sources: DiscoverySource[];
};