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

declare interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
  as?: "input" | "textarea" | "select";
  options?: Array<{ value: string; label: string }>;
}

declare interface FileInputProps {
  id: string;
  label: string;
  accept: string;
  file: File | null;
  previewUrl: string | null;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  type: "video" | "image";
}
