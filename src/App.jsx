import { Routes, Route, Outlet, Link } from "react-router-dom";
import { getJoke } from "./requests/getJoke";
import { getBoredActivity } from "./requests/getBoredActivity";
import { useState } from "react";

//going to separate the routes to different files and call a different api from each one to practice
//used this example for react router code: https://github.com/remix-run/react-router/tree/dev/examples/basic
export default function App() {
  return (
    <div>
      <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested and using a route (aka splat route) to render a not
        found page when someone visits an unrecognized URL.
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="joke" element={<Joke />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bored" element={<Bored />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/joke">Joke</Link>
          </li>
          <li>
            <Link to="/bored">Bored</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Joke() {
  const [joke, setJoke] = useState("Joke pending");
  joke == "Joke pending"
    ? getJoke().then((response) => setJoke(response))
    : console.log(joke);

  return (
    <div>
      <h2>{joke}</h2>
    </div>
  );
}

function Bored() {
  const [bored, setBored] = useState("Boredom cure pending...");
  bored == "Boredom cure pending..."
    ? getBoredActivity().then((response) => setBored(response))
    : console.log(bored);
  return (
    <div>
      <h2>{bored}</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
