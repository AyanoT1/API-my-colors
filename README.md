# API-my-colors

A simple REST API for managing color palettes.

## Overview

This project is my first RESTful API. In order to better understand the concept of REST APIs, I decided to build one myself using Express and TypeScript.

## Usage

### Getting Palettes

To retrieve a specific palette by its `id`, use an HTTP GET request to the route `/api/palettes/id/:id`. To retrieve a palette by its `name`, use the route `/api/palettes/name/:name`.

#### Example on success:
```json
{
    "id": 1,
    "name": "pastel-rainbow",
    "colors": [
      "#ffbfbf", 
      "#fbe0ae", 
      "#bcfbae",
      "#bbc0ff", 
      "#fbbee9"
    ]
}
```

#### Example on error:
```json
{
  "error": "Palette of id: 219 not found"
}
```

### Adding Palettes

To add a new palette to the API, use an HTTP POST request with `"Content-Type: application/json"`. The request body should include the fields `name` and `colors` to the route `/api/palettes/`.

#### Example POST request:
```bash
curl -X POST http://localhost:4000/api/palettes/ -H "Content-Type: application/json" -d '{"name": "new-palette","colors": ["#FFFFFF"]}'
```

#### Example on success:
```json
{
  "id": 2,
  "name": "new-palette",
  "colors": ["#FFFFFF"]
}
```

#### Example on error:
```json
{
  "error": "The name 'new-palette' is already in use"
}
```

## Validation on POST Requests

- **name**: A unique, required field. It must be a string between 3 and 50 characters long, in dash-case (e.g., my-palette-name), with no special characters.
- **colors**: A required, non-empty array containing hexadecimal color codes (6 characters each). The array can contain a maximum of 20 colors.

If any of these validations fail, the response status will be `400` and the body will contain a single error field describing which requirement was not satisfied.

A successful POST request will return a status of `201 Created`.
