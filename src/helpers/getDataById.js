import tools from '../data/data-tools.json'

export const getDataById = (data) => {
  return tools[data]
}
