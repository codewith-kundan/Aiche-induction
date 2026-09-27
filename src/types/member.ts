export interface Member {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  email?: string;
  github?: string;
  linkedin?: string;
  projects?: string[];
}
