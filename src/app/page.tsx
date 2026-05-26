import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to blog page
  redirect('/blog');
}
