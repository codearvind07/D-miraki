"use client";
import { ChangeEvent, useState } from "react";
import { useMutation } from "react-query";
import { createProject, uploadImageFile } from "@/api/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface ProjectData {
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  coverImage: any;
}



const ProjectForm = () => {
   const [coverImagePreview, setCoverImagePreview] = useState<string>()
  const [formData, setFormData] = useState({
     title: '',
  description: "",
  shortDescription: "",
  category: "",
  coverImage:'',
  });
  const router = useRouter();
  const token: string =
    typeof window !== "undefined"
      ? localStorage.getItem("adminToken") || ""
      : "";

  const { mutate, isLoading, isSuccess, error } = useMutation({
    mutationFn: (data: ProjectData) => createProject(data, token),
    onSuccess: () => {
      toast.success("Project created successfully!");
      router.push("/dashboard/projects");
      
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong.");
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.coverImage) {
      const formImageData = new FormData();
      formImageData.append("file", formData.coverImage);
      const uploadedImageUrl = await uploadImageFile(formImageData, token);
      mutate({ ...formData, coverImage: uploadedImageUrl });
    }
  };
   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file:any = e.target.files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onloadend = () => setCoverImagePreview(reader.result as string)
        reader.readAsDataURL(file)
        setFormData({...formData,coverImage: file})
      }
    }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-md rounded-md space-y-5"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Create Project
      </h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
        required
      />

      <textarea
        name="description"
        placeholder="Full Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
        required
      />

      <textarea
        name="shortDescription"
        placeholder="Short Description"
        value={formData.shortDescription}
        onChange={handleChange}
        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
        required
      />

     
       <div>
          <label className="block font-medium">Cover Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {coverImagePreview && (
            <img
              src={coverImagePreview}
              alt="Cover"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3 text-white rounded-md transition ${
         isLoading
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ProjectForm;
