export const getAllProjects = ({ projects }) => projects;
export const getFilteredProjects = ({ projects }, filter) => projects.filter(project => project.tech.includes(filter));
export const getProject = ({ projects }, title) => projects.filter(project => project.title === title);

const projectsReducer = (state = []) => {
  return state
};

export default projectsReducer;
