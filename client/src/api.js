import axios from 'axios';

export const getProjects = async () => {
  const res = await axios.get('http://localhost:5000/api/projects');
  return res.data;
};
