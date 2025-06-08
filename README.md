# image-gallery
Requirements met:
- Implemented a responsive design to ensure website works well across a range of devices.
- Implemented media queries to show a noticeable change from desktop to mobile views.
- Ensured all images provide an appropriate alt text.
- Correctly used event handlers to switch images based on user interactions. (arrow clicks, selection through thumbnail & use of arrow keys on keyboard).

Stretch goals:
- Implemented key bindings to allow users to switch between images (Left & right arrow keys)
- Added ARIA elements such as aria-live to show when an element changes, aria-controls to show which element the toggle button affects (thumbnail) & aria-expanded to show the current state of the thumbnail element.
- Used media queries across multiple device sizes.
- Attempted to use srcset to optimise viewing experience & performance.

Reflection:
- I'm not sure I have used the srcset properly as on implementation the browser would still select the larger images for the thumbnail; to fix this issue I manually set the thumbnail images to the smallest sizes in order to increase performance.