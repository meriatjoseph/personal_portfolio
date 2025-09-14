// EmailJS Configuration
// This file centralizes all EmailJS-related configuration and constants

export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  USER_ID: process.env.REACT_APP_EMAILJS_USER_ID,
};

/**
 * Validates that all required EmailJS configuration values are present
 * @returns {boolean} True if all configuration values are present, false otherwise
 */
export const isEmailJSConfigured = () => {
  const { SERVICE_ID, TEMPLATE_ID, USER_ID } = EMAILJS_CONFIG;
  return !!(SERVICE_ID && TEMPLATE_ID && USER_ID);
};

/**
 * Gets the EmailJS configuration with validation
 * @throws {Error} If EmailJS is not properly configured
 * @returns {Object} The EmailJS configuration object
 */
export const getEmailJSConfig = () => {
  if (!isEmailJSConfigured()) {
    throw new Error(
      'EmailJS is not properly configured. Please check your environment variables.'
    );
  }
  
  return EMAILJS_CONFIG;
};

export default {
  EMAILJS_CONFIG,
  isEmailJSConfigured,
  getEmailJSConfig
};
