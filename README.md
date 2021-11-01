Sandbox application built with React and Three.js (specifically React Three Fiber and Drei).

This application creates a 3-dimensional Canvas sandbox that users can create, modify, and destroy various shapes in. The shapes currently available are spheres, squares, and cylinders, but any available Three-js shape can be easily added.

Clicking inside the canvas creates a shape at that location, and clicking on an existing shape allows click and drag modifications:
- length, width, and height
- overall scale (shrink or enlarge)
- x/y/z coordinates
- rotation
- users can delete the last created shape, or the currently selected shape.


Further goals are color modification, direct parameter modification of shapes (in addition to the current click and drag), and enabling shapes to be combined into groups, to allow modification as a unit.
