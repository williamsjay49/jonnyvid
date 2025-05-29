declare interface SharedHeaderProps {
  subHeader: string;
  title: string;
  userImg?: string;
}

declare interface ParamsWithSearch {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string | undefined>>;
}

declare interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  userImg?: string;
  username?: string;
  createdAt: Date;
  views: number;
  visibility: Visibility;
  duration?: number | null;
}

type Visibility = string;
