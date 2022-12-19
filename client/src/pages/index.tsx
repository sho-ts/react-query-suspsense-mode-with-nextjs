import Head from 'next/head';
import axios from 'axios';
import { Suspense } from 'react';
import useSuspenseQuery from '../hooks/useSuspenseQuery';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const Todos = () => {
    const { data } = useSuspenseQuery<Todo[]>(['todos'], async () => {
      return axios
        .get('http://localhost:3002')
        .then((res) => res.data);
    });

    return (
      <ul>
        {data?.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>;
        })}
      </ul>
    );
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Suspense fallback={<p>loading...</p>}>
          <Todos />
        </Suspense>
      </main>
    </>
  );
}
