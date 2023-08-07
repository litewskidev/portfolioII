export const getAllProjects = ({ projects }) => projects;
export const getFilteredProjects = ({ projects }, filter) => projects.filter(project => project.tech.includes(filter));
export const getProject = ({ projects }, id) => projects.filter(project => project.id === id);

const projectsReducer = (state = []) => {
  return state
};

export default projectsReducer;
