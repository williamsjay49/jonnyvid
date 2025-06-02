"use client";

import FileInput from "@/components/FileInput";
import FormField from "@/components/FormField";
import { useFileInput } from "@/lib/hooks/useFileInput";
import { ChangeEvent, useState, FormEvent } from "react";
import { MAX_VIDEO_SIZE, MAX_THUMBNAIL_SIZE } from "@/constants";

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    visibility: "public",
  });

  const video = useFileInput(MAX_VIDEO_SIZE);
  const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!video.file || !thumbnail.file) {
        setError("Please upload video and thumbnail");
        return;
      }

      if (!formData.title || !formData.description) {
        setError("Please fill in all the details");
      }

      //uplaod the video to Bunny
      //Upload the thumbnail to DB
      //Attach thumbnail
      //Create a new DB entry for the new video details(urls, data)
    } catch (error) {
      console.log("Error submitting form: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="wrapper-md upload-page">
      <h1>Upload a Video</h1>
      {error && <div className="error-field">{error}</div>}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl shadow-10 gap-6 w-full flex flex-col px-5 py-7.5"
      >
        <FormField
          id="title"
          label="Title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter a clear and concise video title"
        />
        <FormField
          id="description"
          label="Description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Describe what this video is about"
          as="textarea"
        />
        <FileInput
          id="video"
          label="Video"
          accept="video"
          file={video.previewUrl}
          inputRef={video.inputRef}
          onChange={video.handleFileChange}
          onReset={video.resetFile}
          type="video"
        />
        <FileInput
          id="thumbnail"
          label="Thumbnail"
          accept="image/*"
          file={thumbnail.previewUrl}
          inputRef={thumbnail.inputRef}
          onChange={thumbnail.handleFileChange}
          onReset={thumbnail.resetFile}
          type="image"
        />

        <FormField
          id="visibility"
          label="Visibility"
          value={formData.visibility}
          onChange={handleInputChange}
          as="select"
          options={[
            { value: "public", label: "Public" },
            { value: "private", label: "Private" },
          ]}
        />
        <button className="submit-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Uploading..." : "Upload video"}
        </button>
      </form>
    </div>
  );
};

export default Page;
