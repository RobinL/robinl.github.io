`letterpaths` is is a flexible library built to power cursive handwriting apps.  It:
- contains the underlying geometry for letter shapes
- provides an algorithm for joining letters together in a way that looks natural

This allows it to expose functions for animating writing words, and to drag a path around the word.

The library provides the underlying data for this functionality, it's up to the consumer of the library how to render the letters and paths.