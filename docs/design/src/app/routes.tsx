import { createBrowserRouter } from 'react-router';
import HomePage from './pages/HomePage';
import EventDetailPage from './pages/EventDetailPage';
import PremiumHubPage from './pages/PremiumHubPage';
import BlogListingPage from './pages/BlogListingPage';

export const router = createBrowserRouter([
  { path: '/', Component: HomePage },
  { path: '/events', Component: EventDetailPage },
  { path: '/premium', Component: PremiumHubPage },
  { path: '/editorial', Component: BlogListingPage },
]);
