import axios from 'axios';
import { useQuery } from 'react-query';
export const baseUrl="https://dmiraki-backend-production.up.railway.app/api"
export const baseUrlImage = "https://dmiraki-backend.onrender.com/api";
// export const baseUrl = "http://localhost:5000/api";


export const login = async (data: { email: string; password: string }) => {
  const res = await axios.post(`${baseUrl}/auth/login`, data);
  return res.data;
};

export const createBlog = async (
  data: {
    title: string;
    slug: string;
    metaTitle?: string;
    metaDescription?: string;
    content: string;
    excerpt: string;
    category: string;
    tags: string;
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
  const res = await axios.post(`${baseUrlImage}/upload/uploadFile`, formData, {
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
export const getBlogsById = async (id: string) => {
  const res = await axios.get(`${baseUrl}/blogs/getBlogs/${id}`);
  return res.data;
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

export const submitContact = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message?: string;
  phone?: string;
}) => {
  const response = await axios.post(`${baseUrl}/contacts/create`, formData);
  return response.data;
};

export const getContactList = async (token: string) => {
  const res = await axios.get(`${baseUrl}/contacts/contact-list`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const useContactList = (token: string | null) => {
  return useQuery({
    queryKey: ['contact'],
    queryFn: () => getContactList(token as string),
    enabled: !!token, // Only runs query if token is not null or empty
  });
};

export const createProject = async (projectData:{
   title: string;
  description: string;
  shortDescription: string;
  category: string;
  coverImage: any;

},
token:string
)=> {
  const res:any = await axios.post(`${baseUrl}/projects/createProjects`, projectData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  

  return res.data;
};


export const getProjectsList = async (token: string) => {
  const res = await axios.get(`${baseUrl}/projects/getProjectsList`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const useProjectList = (token: string | null) => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: () => getProjectsList(token as string),
    enabled: !!token, // Only runs query if token is not null or empty
  });
};