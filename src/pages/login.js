// Gatsby supports TypeScript natively!
import React, { useState } from "react"
// import { PageProps, Link } from "gatsby"
import { useAuth } from "../components/Firebase"
import Layout from "../components/layout"

const LoginPage = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" })
  const { firebase } = useAuth()

  function handleSubmit(e) {
    e.preventDefault()
    firebase.login({ email: formValues.email, password: formValues.password })
  }

  function handleInputChange(e) {
    e.persist()
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          name="email"
          placeholder="email"
          type="email"
          value={formValues.email}
        />
        <input
          onChange={handleInputChange}
          name="password"
          placeholder="password"
          type="password"
          value={formValues.password}
        />
        <button type="submit">Login</button>
      </form>
    </Layout>
  )
}

export default LoginPage
