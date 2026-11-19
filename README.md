# CodeYad JavaScript Exercises

Standalone browser exercises covering JavaScript fundamentals, asynchronous requests, and client-side storage.

| Directory | What it covers |
| --- | --- |
| [AjaxCourse](AjaxCourse/) and [FetchApi](FetchApi/) | Requesting and posting data, plus JSON and XML examples |
| [Promise](Promise/) | Promise behavior and asynchronous control flow |
| [Storage](Storage/) and [IndexedDB](IndexedDB/) | Local storage, session storage, and an IndexedDB contact list |
| [TodoProApp](TodoProApp/), [WeatherApp](WeatherApp/), and [Typing Speed Test](typing_speed_test/) | A task list, weather lookup, and a timed typing exercise |

## Run locally

Serve the repository with a local HTTP server, for example `python -m http.server 8000`, then open the desired exercise. The IndexedDB example and typing test start at `main.html`. Some demos use third-party services and depend on their availability and configuration.

## Run the weather demo

Set `OPENWEATHER_API_KEY` in the server environment. With Node.js 18 or newer, run `node WeatherApp/server.js` from the repository root and open `http://127.0.0.1:8000`. The browser calls the local weather endpoint and the server makes the OpenWeather request. The server binds to localhost for this demo.

## License

The [ISC License](typing_speed_test/LICENSE) covers MrEshrati's original code and documentation in `typing_speed_test/`, consistent with that package's metadata. Third-party starter code and media are outside this grant.
