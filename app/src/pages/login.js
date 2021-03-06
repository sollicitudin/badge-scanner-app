import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LoginForm from '../components/loginForm';

console.log('Login', new Date().toISOString());
const LoginPage = () => (
  <Layout>
    <SEO title="Login" />
    <h1>Login</h1>
    <LoginForm />
  </Layout>
);

export default LoginPage;
