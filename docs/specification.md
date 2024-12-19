# API-my-colors: Specification

## Table of Contents
- [Palette Structure](#palette-structure)
- [Validation Rules](#validation-rules)
- [Usage](#usage)
  - [HTTP Methods](#http-methods)
  - [Get Palettes](#get-palettes)
  - [Post Palettes](#post-palettes)
- [Limiters](#limiters)

## Palette Structure

The API allows users to manage color palettes. Palettes are stored as JavaScript objects with the following structure:

```json
{
  "id": 1,
  "size": 5,
  "name": "pastel-rainbow",
  "color1": "#ffbfbf",
  "color2": "#fbe0ae",
  "color3": "#bcfbae",
  "color4": "#bbc0ff",
  "color5": "#fbbee9"
}
```

### Validation Rules:
- `name`: A required, unique string in dash-case format, between 3 and 25 characters long, spaces and special characters are not allowed.
- `size`: A required integer between 1 to 20 that must match the number of color fields provided.
- `color[i]`: Required hexadecimal color strings, where `i` starts at 1 and goes up to the `size` value.


# Usage

## HTTP Methods
- **GET `/api/palettes/id/:id`**  
  Fetches a palette by its unique ID.  
  Headers: None required.

- **GET `/api/palettes/name/:name`**  
  Fetches a palette by its unique name.  
  Headers: None required.

- **POST `/api/palettes/`**  
  Creates a new palette.  
  Headers: `Content-Type: application/json`  


## Get palettes

To get all the color palettes stored use HTTP GET to the route ```/api/palettes```

To retrieve a specific palette use the route ```/api/palettes/id/:id```, alternatively you can retrieve them by name using the route ```/api/palettes/name/:name```

Example on success:
```json
{
  "id": 1,
  "size": 5,
  "name": "pastel-rainbow",
  "color1": "#ffbfbf",
  "color2": "#fbe0ae",
  "color3": "#bcfbae",
  "color4": "#bbc0ff",
  "color5": "#fbbee9"
}
```

Example on error:
```json
{
  "error": "Palette not found"
}
```

## Post palettes

Use http POST to the route ```/api/palettes/``` with a body following the structure of a palette, omitting the id. 

Example body:

```json
{   
  size: 5,
  name: "pastel-rainbow",
  color1: "#ffbfbf",
  color2: "#fbe0ae",
  color3: "#bcfbae",
  color4: "#bbc0ff",
  color5: "#fbbee9",
}
```

### Response:
- <b>201 Created:</b> Returns the ID of the inserted palette
- <b>400 Bad Request:</b> Invalid or incomplete payload

Example success response:
```json
{
  id: 219
}
```

Example error response:
```json
{
  error: "Name already in use"
}
```


## Limiters

The API allows a maximum of 50 requests per minute. Exceeding this limit will result in a 429 Too Many Requests response.

Example error response:
```json
{
  "error": "Too many requests. Please wait before trying again."
}
```