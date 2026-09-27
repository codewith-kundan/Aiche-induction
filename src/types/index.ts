export type MemberCategory = 'Executive' | 'Technical' | 'Events' | 'Design' | 'Outreach';

export interface Member {
  id: string;
  name: string;
  role: string;
  category: MemberCategory;
  tier: 'Executive Board' | 'Core Committee';
  image: string;
  bio?: string;
  github?: string;
  linkedin?: string;
}
