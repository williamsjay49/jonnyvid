declare interface SharedHeaderProps {
  subHeader: string;
  title: string;
  userImg?: string;
}

declare interface ParamsWithSearch {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string | undefined>>;
}
