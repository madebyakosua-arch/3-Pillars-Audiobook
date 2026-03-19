export interface Audiobook {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  pillar: 'relationships' | 'wealth' | 'health';
  price: string;
}

export const AUDIOBOOKS: Audiobook[] = [
  {
    id: '1',
    title: 'The Connection Code',
    author: 'Dr. Sarah Chen',
    description: 'Master the art of emotional intelligence and build unbreakable bonds. Learn how to navigate complex social dynamics and foster deep, lasting intimacy in all your relationships.',
    coverImage: 'https://picsum.photos/seed/connection/400/600',
    pillar: 'relationships',
    price: '$19.99'
  },
  {
    id: '2',
    title: 'Wealth Architecture',
    author: 'Marcus Sterling',
    description: 'A comprehensive blueprint for financial independence. Discover the secrets of money management, strategic saving, and building a secure future that lasts for generations.',
    coverImage: 'https://picsum.photos/seed/wealth/400/600',
    pillar: 'wealth',
    price: '$24.99'
  },
  {
    id: '3',
    title: 'Vitality Protocol',
    author: 'Elena Vance',
    description: 'Reclaim your energy and feel your absolute best. This protocol offers simple, effective habits for optimizing your sleep, nutrition, and daily vitality without the fluff.',
    coverImage: 'https://picsum.photos/seed/vitality/400/600',
    pillar: 'health',
    price: '$19.99'
  },
  {
    id: '4',
    title: 'Radical Honesty',
    author: 'James Miller',
    description: 'Transform your relationships through the power of authentic communication. Learn how to speak your truth with compassion and build trust that stands the test of time.',
    coverImage: 'https://picsum.photos/seed/honesty/400/600',
    pillar: 'relationships',
    price: '$14.99'
  },
  {
    id: '5',
    title: 'Compound Impact',
    author: 'David Wright',
    description: 'Small, consistent habits that lead to massive financial breakthroughs. Understand the power of compounding in your finances and how to leverage it for long-term wealth.',
    coverImage: 'https://picsum.photos/seed/compound/400/600',
    pillar: 'wealth',
    price: '$19.99'
  },
  {
    id: '6',
    title: 'The Sleep Engine',
    author: 'Dr. Julian Ross',
    description: 'The definitive guide to the science of recovery. Discover how to optimize your sleep cycles to double your energy levels and improve your mental clarity overnight.',
    coverImage: 'https://picsum.photos/seed/sleep/400/600',
    pillar: 'health',
    price: '$17.99'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Alex Rivera',
    role: 'Small Business Owner',
    content: 'The Wealth Pillar audiobooks helped me finally get my savings on track. I feel so much more secure now and have a clear roadmap for my business growth.',
    avatar: 'https://i.pravatar.cc/150?u=alex'
  },
  {
    name: 'Sophia Thorne',
    role: 'Busy Parent',
    content: 'I used to feel exhausted all the time. The Health Pillar gave me simple habits to reclaim my energy for my family. The Vitality Protocol was a game-changer.',
    avatar: 'https://i.pravatar.cc/150?u=sophia'
  },
  {
    name: 'Daniel Kim',
    role: 'Recent Graduate',
    content: 'Radical Honesty saved my marriage. I finally learned how to communicate my needs without conflict and build a foundation of trust that I never thought was possible.',
    avatar: 'https://i.pravatar.cc/150?u=daniel'
  }
];
