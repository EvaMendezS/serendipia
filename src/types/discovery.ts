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

export type Discovery = {
  id: string;
  title: string;
  eyebrow: string;
  hook: string;
  category: DiscoveryCategory;
  duration: DiscoveryDuration;
  difficulty: 'easy' | 'medium' | 'deep';
  sections: Array<{
    title: string;
    body: string;
  }>;
  takeaway: string;
  relatedTopics: string[];
};
