import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-light ">
  <div class="container-fluid bg-secondary-subtle border border-secondary p-3">
    <Link class="navbar-brand text text-primary-emphasis fw-5" to="/">Edupoly</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active text text-primary-emphasis fw-4" aria-current="page" to="/counter">Counter</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text text-primary-emphasis fw-4" to="/todolist">Todolist</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text text-primary-emphasis fw-4" to="/products">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text text-primary-emphasis fw-4" to="/recipes">Recipes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text text-primary-emphasis fw-4" to="/leads">Leads</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
