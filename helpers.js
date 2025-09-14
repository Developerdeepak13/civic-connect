/**
 * Utility functions for the Civic Connect app
 */

/**
 * Format a date string to a more readable format
 * @param {string} dateString - The date string to format (e.g., '2023-06-15')
 * @returns {string} Formatted date string (e.g., 'June 15, 2023')
 */
export const formatDate = (dateString) => {
  if (!dateString) return '';
  
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Get color based on issue status
 * @param {string} status - The issue status (e.g., 'Pending', 'In Progress', 'Resolved')
 * @param {object} theme - The app theme object
 * @returns {string} Color code for the status
 */
export const getStatusColor = (status, theme) => {
  switch (status) {
    case 'Pending':
      return theme.colors.warning;
    case 'In Progress':
      return theme.colors.info;
    case 'Resolved':
      return theme.colors.success;
    default:
      return theme.colors.primary;
  }
};

/**
 * Get color based on priority level
 * @param {string} priority - The priority level (e.g., 'High', 'Medium', 'Low')
 * @param {object} theme - The app theme object
 * @returns {string} Color code for the priority
 */
export const getPriorityColor = (priority, theme) => {
  switch (priority) {
    case 'High':
      return theme.colors.error;
    case 'Medium':
      return theme.colors.warning;
    case 'Low':
      return theme.colors.success;
    default:
      return theme.colors.primary;
  }
};

/**
 * Truncate text to a specified length and add ellipsis
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} Truncated text with ellipsis if needed
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Generate a random ID (for demo purposes)
 * @returns {string} Random ID
 */
export const generateId = () => {
  return Math.random().toString(36).substring(2, 15);
};

/**
 * Get time elapsed since a given date
 * @param {string} dateString - The date string to calculate from
 * @returns {string} Time elapsed in a human-readable format
 */
export const getTimeElapsed = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);
  
  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  }
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
  }
  
  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
};