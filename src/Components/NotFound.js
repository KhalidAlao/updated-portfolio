import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => (
  <main className={styles.notFound}>
    <h1>404 - Page Not Found</h1>
    <p>Sorry, we couldn’t find the page you were looking for.</p>
    <Link to="/">Go back home</Link>
  </main>
);

export default NotFound;