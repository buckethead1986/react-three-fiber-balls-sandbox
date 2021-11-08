Sandbox application built with React and Three.js (specifically React Three Fiber and Drei).

This application creates a 3-dimensional Canvas sandbox that users can create, modify, and destroy various shapes in. The shapes currently available are spheres, squares, and cylinders, but any available Three-js shape can be easily added.

Clicking inside the canvas creates a shape at that location, and clicking an existing shape allows modification of that shape (or deletion):
- length, width, and height,
- overall scale (shrink or enlarge),
- x/y/z coordinates,
- rotation


Further goals include:
- direct parameter modification (alterable display of current values),
- enabling shapes to be combined into groups to allow modification as a unit
