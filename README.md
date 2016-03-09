# Triangle checker

This is a simplistic triangle type and sanity checker, as an example for a job
interview.

## API

```javascript
var type = determineTriangleType(a, b, c);
```

The above expression will either return one of the strings `'Equilateral'`,
`'Isosceles'` or `'Scalene'`, or it will throw an exception if the triangle is
degenerate in some way.
