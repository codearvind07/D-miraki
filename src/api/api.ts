import axios from 'axios';
import { useQuery } from 'react-query';

const baseUrl = "https://dmiraki-backend.onrender.com/api";

export const login = async (data: { email: string; password: string }) => {
  const res = await axios.post(`${baseUrl}/auth/login`, data);
  return res.data;
};

export const createBlog = async (
  data: {
    title: string;
    content: string;
    excerpt: string;
    category: string;
    tags: string; // comma-separated string
    coverImage: string;
    status?: 'draft' | 'published';
    isPublished?: boolean;
  },
  token: string
) => {
  const res = await axios.post(`${baseUrl}/blogs/create`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const uploadImageFile = async (formData: FormData, token: string) => {
  const res = await axios.post(`${baseUrl}/upload/uploadFile`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data.url;
};

export const getBlogs = async () => {
  const res = await axios.get(`${baseUrl}/blogs/getBlogs`,);
  return res.data;
};
export const getBlogsById = async (id:string) => {
  const res = await axios.get(`${baseUrl}/blogs/getBlogs?${id}`,);
  return res.data.blogs[0];
};
export const useBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: () => getBlogs(),
    
  });
};
export const useBlogsById = (id:string) => {
  return useQuery({
    queryKey: ['blogsById'],
    queryFn: () => getBlogsById(id),
    
  });
};

