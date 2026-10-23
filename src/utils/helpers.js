/**
 * Utility function to combine CSS classes safely
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Smooth scroll to element by ID
 */
export function scrollToSection(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
